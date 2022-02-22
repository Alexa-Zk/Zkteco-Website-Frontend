<template lang="html">
    <div class="ps-product__content">
        <v-tabs background-color="white" color="warning" class="ps-tab-list">
            <v-tab :ripple="false" tag="li">
                <span class="list-item">Description</span>
            </v-tab>
            <v-tab :ripple="false" tag="li">
                <span class="list-item">Downloads</span>
            </v-tab>
            <v-tab :ripple="false" tag="li">
                <span class="list-item">Related Products</span>
            </v-tab>

            <v-tab-item>
                <div class="tab-content">
                    <partial-description :product="product_information" />
                </div>
            </v-tab-item>

            <v-tab-item>
                <div class="tab-content">
                    <div v-show="!product_information.downloads">No Downloads</div>
                    <div class="ps-product__content"v-show="i"  v-for="i in product_information.downloads" :key="i.id">
                        
                        <div class="download_left">
                            <div class="row-left">
                                <div
                                    class="download-avatar"
                                >
                                    <img
                                        src="~/static/img/website/download-2.png"
                                        alt="Download"
                                    />
                                </div>
                                <div class="title">
                                    {{ i.name }}
                                </div>
                            </div>
                            <div class="size">
                                Size:
                                {{
                                    i.file[0].size
                                }}KB
                            </div>
                        </div>
                        <div class="download_right">
                            <a :href="i.file[0].url" download
                                >Download</a
                            >
                        </div>
                        
                    </div>
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
    },
    async created() {
        let payload = {
            id: this.product_information.product_category.slug
        };
        const response = await this.$store.dispatch(
            'website/getRelatedProducts',
            payload
        );
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
span.list-item {
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
