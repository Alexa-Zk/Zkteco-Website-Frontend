<template lang="html">
    <div class="ps-product__info">
        <module-product-info :product="product_information" />

        <module-product-detail-desc :product="product_information" />

        <!-- <module-product-shopping :product="product" /> -->

        <module-product-detail-specification :product="product_information"/>

        <module-product-detail-sharing :product="product_information" />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ModuleProductDetailSharing from '~/components/elements/detail/information/modules/website/ModuleProductDetailSharing';
import ModuleProductDetailSpecification from '~/components/elements/detail/information/modules/website/ModuleProductDetailSpecification';
import ModuleProductDetailDesc from '~/components/elements/detail/information/modules/website/ModuleProductDetailDesc';
import Rating from '~/components/elements/Rating';
import ModuleProductShopping from '~/components/elements/detail/information/modules/ModuleProductShopping';

import ModuleProductInfo from '~/components/elements/detail/information/modules/website/ModuleProductInfo';

export default {
    name: 'InformationDefault',
    props: ["product_information"],
    components: {
        ModuleProductInfo,
        ModuleProductShopping,
        Rating,
        ModuleProductDetailDesc,
        ModuleProductDetailSpecification,
        ModuleProductDetailSharing
    },
    computed: {
        // ...mapState({
        //     product: state => state.product.product
        // })
    }
};
</script>

<style lang="scss" scoped></style>
