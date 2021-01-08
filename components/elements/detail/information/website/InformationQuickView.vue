<template lang="html">
    <div class="ps-product__info">
        <h1>{{ product.name }}</h1>
        <div class="ps-product__meta">
            <p>
                Categories:
                <nuxt-link to="/shop">
                    <a class="ml-2 text-capitalize">
                        {{ product.product_category.name }}
                    </a>
                </nuxt-link>
            </p>
        
        </div>
        <module-product-detail-desc :product="product" />

    </div>
</template>

<script>
import Rating from '~/components/elements/Rating';
import ModuleProductDetailDesc from '~/components/elements/detail/information/modules/website/ModuleProductDetailDesc2';
export default {
    name: 'InformationQuickView',
    components: { ModuleProductDetailDesc, Rating },
    props: {
        product: {
            type: Object,
            default: {}
        }
    },
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
                text: `${this.product.title} has been added to your cart!`
            });
        },

        handleBuyNow() {
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
                text: `${this.product.title} has been added to your cart!`
            });
            setTimeout(
                function() {
                    this.$router.push('/account/checkout');
                }.bind(this),
                500
            );
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

<style lang="scss" scoped></style>
