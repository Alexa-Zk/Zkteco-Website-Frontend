<template lang="html">
    <div class="martfury">
        <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth" />
        <div class="ps-page--product">
            <div class="ps-container">
                <div class="ps-page__container">
                    <div class="ps-page__left" v-if="products">
                        <product-detail-fullwidth
                            :singleProduct="formattedProducts"
                        />
                    </div>
                    <div class="ps-page__right">
                        <product-widgets collection-slug="widget_same_brand" />
                    </div>
                </div>
                <!-- <related-product layout="fullwidth" collection-slug="shop-recommend-items"/> -->
            </div>
        </div>
        <newsletters layout="fullwidth" />
    </div>
</template>

<script>
import ProductDetailFullwidth from '~/components/elements/detail/website/ProductDetailFullwidth';
import BreadCrumb from '~/components/elements/BreadCrumb';
import RelatedProduct from '~/components/partials/product/RelatedProduct';
import ProductWidgets from '~/components/partials/product/website/ProductWidgets';
import LayoutProduct from '~/layouts/layout-product';
import Newsletters from '~/components/partials/commons/Newsletters';
import singleProduct from '~/apollo/queries/products/singleProduct';

export default {
    layout: 'layout-default-website',
    name: 'Products',
    transition: 'zoom',
    components: {
        Newsletters,
        LayoutProduct,
        ProductWidgets,
        RelatedProduct,
        BreadCrumb,
        ProductDetailFullwidth
    },
    head() {
        return {
            titleTemplate: this.formattedProducts
                ? this.formattedProducts.name
                : '',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.formattedProducts
                        ? this.formattedProducts.description.replace(
                              /<\/?[^>]+(>|$)/g,
                              ''
                          )
                        : 'Product Details - Description'
                }
            ]
        };
    },

    jsonld() {
        if (this.formattedProducts) {
            return {
                '@context': 'https://schema.org',
                '@id': '#product',
                '@type': 'IndividualProduct',
                additionalType: `https://www.zkteco-wa.com/product/${this.formattedProducts.slug}`,
                description: `https://www.zkteco-wa.com/product/${this.formattedProducts.description}`,
                name: `https://www.zkteco-wa.com/product/${this.formattedProducts.name}`
            };
        } else {
            return {};
        }
    },
    apollo: {
        products: {
            prefetch: true,
            query: singleProduct,
            variables() {
                return { id: this.$route.params.id };
            }
        }
    },

    computed: {
        formattedProducts() {
            return this.products[0];
        }
    },
    data() {
        return {
            fullPage: true,
            products: [],
            height: 60,
            width: 40,
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Products',
                    url: '/product'
                },
                {
                    text: ''
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
