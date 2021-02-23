<template lang="html">
    <div class="martfury">
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

// Queries
import Products from '~/apollo/queries/products/singleProduct';

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
        ProductDetailFullwidth
    },
    head() {
        const title = this.singleProduct
            ? this.singleProduct.name
            : 'Product Details';
        const description = this.singleProduct
            ? this.singleProduct.description
            : 'Product Details - Description';
        return {
            title: title,
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
                }
            ]
        };
    },
    computed: {
        singleProduct() {
            return this.products[0];
        }
    },
    apollo: {
        products: {
            prefetch: true,
            query: Products,
            variables() {
                return { id: this.$route.params.id };
            }
        }
    },
    data() {
        return {
            products: ''
        };
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
