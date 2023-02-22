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
                        <div class="request-quote">
                            <request-a-quote />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductDetailFullwidth from '~/components/elements/detail/website/ProductDetailFullwidth';
import BreadCrumb from '~/components/elements/BreadCrumb';
import RelatedProduct from '~/components/partials/product/RelatedProduct';

import RequestAQuote from '~/components/elements/detail/modules/website/RequestAQuote';

export default {
    layout: 'layout-default-website',
    name: 'Products',
    //transition: 'zoom',
    components: {
        RelatedProduct,
        BreadCrumb,
        ProductDetailFullwidth,
        RequestAQuote
    },
    async asyncData({ params, $axios }) {
        try {
            const id = params.id;
            if (id != '' || id != null || id != undefined) {
                const response = await $axios.get(
                    `https://admin.zkteco-wa.com/products?slug_in=${id}`
                );
                const pdt = response.data[0];
                return { pdt };
            }
        } catch (error) {
            console.Console.log(error);
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

<style lang="scss" scoped>
.request-quote {
    background: #e1f3dc; //rgb(129, 129, 129);
    padding: 1.5rem 1.5rem;

    button {
        padding: 2rem;
    }

    .form-control {
        width: 98% !important;
    }
}

.el-error {
    font-size: 14px !important;
    color: red !important;
    font-weight: lighter !important;
}
</style>
