<template lang="html">
    <div class="ps-product">
        <div class="ps-product__thumbnail" >
            <nuxt-link :to="`/store/product/${product.id}`">
                <img
                    :src="product.images[0] ? product.images[0].src : '' "
                    alt="martfury"
                />
            </nuxt-link>
            <div v-if="isSale === true" class="ps-product__badge">sale</div>
            <ul class="ps-product__actions">
                <li>
                    <a
                        to="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to cart"
                        @click.prevent="handleAddToCart"
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
                <li>
                    <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to wishlist"
                        @click.prevent="handleAddItemToWishlist"
                    >
                        <i class="icon-heart"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="ps-product__container">
            <nuxt-link to="/shop" class="ps-product__vendor">
                {{ product.categories[0].name }}
            </nuxt-link>
            <div class="ps-product__content">
                <nuxt-link
                    :to="`/store/product/${product.id}`"
                    class="ps-product__title"
                >
                    {{ product.name }}
                </nuxt-link>
                <div class="ps-product__rating">
                    <rating />
                    <span>{{ product.average_rating }}</span>
                </div>
                <p
                    class="ps-product__price"
                >
                    {{ currency }}{{ product.price }}
                    
                </p>
            </div>
            <div class="ps-product__content hover">
                <nuxt-link :to="`/store/product/${product.id}`">
                    <a class="ps-product__title">{{ product.name }}</a>
                </nuxt-link>
                
                <p  class="ps-product__price sale">${{ product.price }}</p>
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
        handleAddToCart() {
            let item = {
                id: this.product.id,
                quantity: 1,
                price: this.product.price
            };
            this.$store.dispatch('cart/addProductToCart', item);
            this.getCartProduct(this.cartItems);
            
            this.$notify({
                group: 'addCartSuccess',
                title: 'Success!',
                text: `${this.product.name} has been added to your cart!`
            });
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
.ps-product  {
    .ps-product__thumbnail {
        height: 165px;
        width: 165px;
    }
}
</style>