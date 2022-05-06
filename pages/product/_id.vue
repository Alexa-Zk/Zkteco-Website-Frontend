<template lang="html">
    <div class="martfury">
        <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth" />
        <div class="ps-page--product">
            <div class="ps-container">
                <div class="ps-page__container">
                    <div class="ps-page__left" v-if="pdt">
                        <product-detail-fullwidth :singleProduct="pdt" />
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
//import RelatedProduct from '~/components/partials/product/RelatedProduct';
import ProductWidgets from '~/components/partials/product/website/ProductWidgets';
import LayoutProduct from '~/layouts/layout-product';
import Newsletters from '~/components/partials/commons/Newsletters';
//import singleProduct from '~/apollo/queries/products/singleProduct';

export default {
    layout: 'layout-default-website',
    name: 'Products',
    transition: 'zoom',
    components: {
        Newsletters,
        LayoutProduct,
        ProductWidgets,
        //RelatedProduct,
        BreadCrumb,
        ProductDetailFullwidth
    },
    async asyncData({ params, $axios }) {
        try {
            const response = await $axios.get(
                `https://admin.zkteco-wa.com/products?slug_in=${params.id}`
            );
            const pdt = response.data[0];
            return { pdt };
        } catch (error) {}
    },
    head() {
        let description = 'ZKTeco | Product Categories';
        let title = 'ZKTeco | Product Categories';
        let keywords = 'ZKTeco | Product Categories';
        let image = 'ZKTeco | Product Categories';
        /*
        const description = this.$data.pdt.description.replace(
            /<\/?[^>]+(>|$)/g,
            ''
        );
        const image = this.$data.pdt.images[0].url;
        const title = this.$data.pdt.name;
        */
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
                    content: description
                },
                {
                    hid: 'twitter:title',
                    name: 'twitter:title',
                    content: title
                },
                {
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content: description
                },
                {
                    hid: 'twitter:image',
                    name: 'twitter:image',
                    content: image
                },
                {
                    hid: 'twitter:image:alt',
                    name: 'twitter:image:alt',
                    content: description
                },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: title
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: description
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
                    content: description
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: description
                }
            ]
        };
    },
    jsonld() {
        if (this.pdt) {
            return {
                '@context': 'https://schema.org',
                '@id': '#product',
                '@type': 'IndividualProduct',
                additionalType: `https://www.zkteco-wa.com/product/${this.pdt.slug}`,
                description: `https://www.zkteco-wa.com/product/${this.pdt.description}`,
                name: `https://www.zkteco-wa.com/product/${this.pdt.name}`
            };
        } else {
            return {};
        }
    },
    data() {
        return {
            appProduct: {},
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
