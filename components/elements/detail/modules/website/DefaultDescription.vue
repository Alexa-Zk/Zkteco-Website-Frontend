<template lang="html">
    <div class="ps-product__content">
        <v-tabs background-color="white" color="warning" class="ps-tab-list">
            <v-tab :ripple="false" tag="li">
                <a class="list-item">Description</a>
            </v-tab>
            <v-tab :ripple="false" tag="li">
                <a class="list-item">Downloads</a>
            </v-tab>
            <v-tab :ripple="false" tag="li">
                <a class="list-item">Related Products</a>
            </v-tab>

            <v-tab-item>
                <div class="tab-content">
                    <partial-description :product="product_information" />
                </div>
            </v-tab-item>

            <v-tab-item>
                <div class="tab-content">
                    No Downloads
                    <!-- <partial-specification :product="product_information"/> -->
                </div>
            </v-tab-item>
            <v-tab-item>
                <div class="tab-content">
                    <related-product layout="fullwidth" collection-slug="shop-recommend-items"/>
                </div>
            </v-tab-item>
        </v-tabs>
    </div>
</template>

<script>
import PartialDescription from '~/components/elements/detail/modules/website/PartialDescription';
import PartialSpecification from '~/components/elements/detail/modules/website/PartialSpecification';

import RelatedProduct from '~/components/partials/product/RelatedProduct';
export default {
    name: 'DefaultDescription',
    components: {
        PartialSpecification,
        PartialDescription,
        RelatedProduct
    },
    props: {
        product_information: {
            type: Object,
            default: {}
        }
    }
};
</script>

<style lang="scss" scoped>
.tab-content {
    padding-top: 30px;
}
li[aria-selected='true'] {
    a {
        color: $color-heading !important;
    }
}
a.list-item {
    position: relative;
    display: block;
    color: #999999;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    text-transform: none;
    @media screen and (min-width: 992px) {
        font-size: 20px;
    }
}
</style>
