<template lang="html">
    <div class="ps-product--detail ps-product--fullwidth" v-if="singleProduct">
        <div class="ps-product__header">
            <thumbnail-default :thumbnailImage="singleProduct.images" />
            <information-default :product_information="singleProduct" />
        </div>
        <div id="top">
            <default-description :product_information="singleProduct" />
        </div>
    </div>
</template>

<script>
import DefaultDescription from '~/components/elements/detail/modules/website/DefaultDescription';
import InformationDefault from '~/components/elements/detail/information/website/InformationDefault';
import ThumbnailDefault from '~/components/elements/detail/thumbnail/website/ThumbnailDefault';
export default {
    name: 'ProductDetailFullwidth',
    components: { ThumbnailDefault, InformationDefault, DefaultDescription },
    props: ['singleProduct']
};
</script>

<style lang="scss" scoped></style>
