<template lang="html">
    <div class="martfury">
        <loading
            :active.sync="loading"
            :can-cancel="true"
            :is-full-page="fullPage"
            :width="width"
            :height="height"
            color="#78bc27"
        ></loading>

        <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth" />
        <div class="ps-page--product">
            <div class="ps-container">
                <div class="ps-page__container">
                    <div class="ps-page__left">
                        <product-detail-fullwidth
                            :singleProduct="singleProduct"
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
import { mapState } from 'vuex';
import ProductDetailFullwidth from '~/components/elements/detail/website/ProductDetailFullwidth';
import BreadCrumb from '~/components/elements/BreadCrumb';
import CustomerBought from '~/components/partials/product/CustomerBought';
import RelatedProduct from '~/components/partials/product/RelatedProduct';
import ProductWidgets from '~/components/partials/product/website/ProductWidgets';
import LayoutProduct from '~/layouts/layout-product';
import Newsletters from '~/components/partials/commons/Newsletters';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    layout: 'layout-default-website',
    transition: 'zoom',
    components: {
        Newsletters,
        LayoutProduct,
        ProductWidgets,
        RelatedProduct,
        CustomerBought,
        BreadCrumb,
        ProductDetailFullwidth,
        Loading
    },
    head() {
        const name = this.singleProduct
            ? this.singleProduct.name
            : '';
        const description = this.singleProduct
            ? this.singleProduct.description
            : 'Product Details - Description';
        const image = this.singleProduct ? this.singleProduct.images[0].url: ''
        return {
            title: 'Product Details',
            titleTemplate(title) {
                return `${name} - ${title}`
            },
            meta: [
                {
                    hid: 'title',
                    name: 'title',
                    content: name
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: description
                },
                {
                    hid: 'twitter:title',
                    name: 'twitter:title',
                    content: name
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
                    content: name
                },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: name
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
                    content: name
                }
            ]
        };
    },
    computed: {
        ...mapState({
            singleProduct: state => state.website.singleProduct,
            loading: state => state.website.loading,
        }),
    },
    data() {
        return {
            fullPage: true,
            height: 60,
            width: 40
        };
    },
    methods: {
        onCancel() {}
    },
    async created() {
        this.breadCrumb = [
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
        ];
        let payload = {
            id: this.$route.params.id
        };
        const response = await this.$store.dispatch(
            'website/getSingleProduct',
            payload
        );
    }
};
</script>

<style lang="scss" scoped></style>
