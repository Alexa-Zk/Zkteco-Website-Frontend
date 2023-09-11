<template lang="html">
    <div class="ps-product">
        <div class="ps-product__thumbnail">
            <nuxt-link :to="`/product/${product.slug}`">
                <img
                    class="lazyload"
                    :data-src="product.images[0].url"
                    :alt="product.images[0].name"
                />
            </nuxt-link>
            <ul class="ps-product__actions">
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
            <nuxt-link
                :to="
                    `/product-categories/${
                        product.product_categories
                            ? product.product_categories[0]
                                ? product.product_categories[0].slug !==
                                  undefined
                                    ? product.product_categories[0].slug
                                    : 0
                                : 0
                            : 0
                    }`
                "
                class="ps-product__vendor"
            >
                <div v-for="category in product.product_categories">
                    {{ category.name ? category.name : 'NILL' }}
                </div>
            </nuxt-link>
            <div class="ps-product__content">
                <nuxt-link
                    :to="`/product/${product.slug}`"
                    class="ps-product__title"
                >
                    {{ product.name }}
                </nuxt-link>
            </div>
            <div class="ps-product__content hover">
                <p class="ps-product__price sale">
                    <nuxt-link :to="`/product/${product.slug}`">
                        <span class="ps-product__title">Learn More</span>
                    </nuxt-link>
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
import Rating from '../../Rating';
import ProductQuickview from '~/components/elements/detail/website/ProductQuickview';

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
            this.$router.push('/store/shop');
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-product {
    .ps-product__thumbnail {
        width: 208px;
        height: 208px;
        @media (max-width: 480px) {
            width: 100%;
        }
        img {
            object-fit: contain;
        }
    }
    .hover {
        padding: 0 20px 0px;
        .ps-product__title {
            color: #78bc27;
            font-weight: 700;
        }
    }
}
</style>
