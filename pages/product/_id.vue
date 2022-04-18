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

const axios = require('axios');

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
        const name = this.formattedProducts ? this.formattedProducts.name : '';
        const description = this.formattedProducts
            ? this.formattedProducts.description
            : 'Product Details - Description';
        const image = this.formattedProducts
            ? this.formattedProducts.images[0].url
            : 'https://www.zkteco-wa.com/img/zkteco-logo1.png';
        const title = name.replace(/<\/?[^>]+(>|$)/g, '');
        return {
            title: title,
            titleTemplate(title) {
                return `${title}`;
            },
            meta: [
                {
                    hid: 'title',
                    name: 'title',
                    content: title
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: description.replace(/<\/?[^>]+(>|$)/g, '')
                },
                {
                    hid: 'twitter:title',
                    name: 'twitter:title',
                    content: title
                },
                {
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content: description.replace(/<\/?[^>]+(>|$)/g, '')
                },
                {
                    hid: 'twitter:image',
                    name: 'twitter:image',
                    content: image
                },
                {
                    hid: 'twitter:image:alt',
                    name: 'twitter:image:alt',
                    content: description.replace(/<\/?[^>]+(>|$)/g, '')
                },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: title
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: description.replace(/<\/?[^>]+(>|$)/g, '')
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: image
                },
                {
                    hid: 'og:image:secure_url',
                    property: 'og:image:secure_url',
                    content: image
                },
                {
                    hid: 'og:image:alt',
                    property: 'og:image:alt',
                    content: description.replace(/<\/?[^>]+(>|$)/g, '')
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: description.replace(/<\/?[^>]+(>|$)/g, '')
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
    async asyncData({ params }) {
        try {
            let products = await axios.get(
                `https://admin.zkteco-wa.com/products?slug_in=${params.id}`
            );
            return { products };
        } catch (error) {}
    },
    computed: {
        formattedProducts() {
            return this.products.data[0];
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
