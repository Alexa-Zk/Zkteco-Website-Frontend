<template lang="html">
    <div class="ps-product">
        <div class="ps-product__thumbnail">
            <a
                :href="
                    `https://wa.me/2348175555514?text=Product%20for%20sale%20from%20promotion%20title=${product.name}`
                "
                class="whatsapp"
                target="”_blank”"
            >
                <img :src="product.images[0].url" alt="martfury" />
            </a>
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
                    `/website/shop/catgories-product/${
                        product.product_category
                            ? product.product_category.id
                            : 0
                    }`
                "
                class="ps-product__vendor"
            >
                {{
                    product.product_category
                        ? product.product_category.name
                        : 'NILL'
                }}
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
                    <a
                        :href="
                            `https://wa.me/2348175555514?text=Product%20for%20sale%20from%20promotion%20title=${product.name}`
                        "
                        class="whatsapp"
                        target="”_blank”"
                    >
                        <span class="ps-product__title">Claim Discount</span>
                    </a>
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
        img {
            height: 100%;
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
