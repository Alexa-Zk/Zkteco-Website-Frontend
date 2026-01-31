<template lang="html">
    <div class="ps-product">
        <div class="ps-product__thumbnail">
            <div style="cursor: pointer;" @click="handleAddToCart(product)">
                <img
                    :src="product.images[0] ? product.images[0].src : ''"
                    :alt="product.name"
                />
            </div>
            <div v-if="isSale === true" class="ps-product__badge">sale</div>
            <ul class="ps-product__actions">
                <li>
                    <a
                        to="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to cart"
                        @click.prevent="handleAddToCart()"
                    >
                        <i class="icon-bag2"></i>
                    </a>
                </li>
                <li>
                    <a
                        to="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                        @click.prevent="quickviewDialog = true"
                    >
                        <i class="icon-eye"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="ps-product__container">
            <nuxt-link to="/shop" class="ps-product__vendor">
                {{ product.categories[0] ? product.categories[0].name: "" }}
            </nuxt-link>
            <div class="ps-product__content">
                <span
                    style="cursor: pointer;"
                    @click="handleAddToCart(product)"
                    class="ps-product__title"
                >
                    {{ product.name }}
                </span>
                <div class="ps-product__rating">
                    <rating />
                    <span>{{ product.average_rating }}</span>
                </div>
                <p class="ps-product__price">
                    {{ currency }}{{ product.type_price | formatMoney }}
                </p>
            </div>
            <div class="ps-product__content hover">
                <span
                    style="cursor: pointer;"
                    @click="handleAddToCart(product)"
                    class="ps-product__title"
                    >{{ product.name }}</span
                >

                <p class="ps-product__price sale">
                    {{ currency }} {{ product.type_price | formatMoney }}
                </p>
            </div>
        </div>
        <v-dialog v-model="quickviewDialog" width="1200">
            <div class="ps-dialog">
                <a
                    class="ps-dialog__close"
                    @click.prevent="quickviewDialog = false"
                >
                    <i class="icon icon-cross"></i>
                </a>
                <product-quickview :product="product" />
            </div>
        </v-dialog>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import { baseUrl } from '~/repositories/Repository';
import Rating from '../Rating';
import ProductQuickview from '~/components/elements/detail/ProductQuickview';

export default {
    components: { ProductQuickview, Rating },
    props: {
        product: {
            type: Object,
            require: true,
            default: () => {}
        }
    },

    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            currency: state => state.app.currency
        }),
        baseUrl() {
            return baseUrl;
        },
        isSale() {
            if (this.product.is_sale) {
                return true;
            }
            return false;
        }
    },

    data: () => ({
        productRating: 5,
        productModal: false,
        productPreload: true,
        isImageLoaded: false,
        quickviewDialog: false
    }),
    methods: {
        handleAddToCart(argument) {
            let item = {
                id: this.product.id,
                quantity: 1,
                price: this.product.price
            };
            this.$store.dispatch('cart/addProductToCart', item);
            this.getCartProduct(this.cartItems);

            if (argument) {
                this.$router.push(`/store/product/${argument.id}/`);
            } else {
                this.$notify({
                    group: 'addCartSuccess',
                    title: 'Success!',
                    text: `${this.product.name} has been added to your cart!`
                });
            }
        },

        handleAddItemToWishlist() {
            let item = {
                id: this.product.id
            };

            this.$store.dispatch('wishlist/addItemToWishlist', item);
            this.$notify({
                group: 'addCartSuccess',
                title: 'Add to wishlist!',
                text: `${this.product.title} has been added to your wishlist !`
            });
        },

        handleAddItemToCompare() {
            let item = {
                id: this.product.id
            };
            this.$store.dispatch('compare/addItemToCompare', item);
            this.$notify({
                group: 'addCartSuccess',
                title: 'Add to compare!',
                text: `${this.product.title} has been added to your compare !`
            });
        },

        async getCartProduct(products) {
            let listOfIds = [];
            products.forEach(item => {
                listOfIds.push(item.id);
            });
            const response = await this.$store.dispatch(
                'product/getCartProducts',
                listOfIds
            );
            if (response) {
                this.$store.commit('cart/setLoading', false);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-product {
    .ps-product__thumbnail {
        height: 100%;
        width: 100%;
        @include media('<sm') {
            height: 100%;
            width: 100%;
        }
        @include media('<xs') {
            height: 100%;
            width: 100%;
        }
    }
}
</style>
