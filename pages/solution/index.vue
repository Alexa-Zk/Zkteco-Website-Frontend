<template lang="html">
    <div class="ps-page--single ps-page--vendor">
        <bread-crumb :breadcrumb="breadCrumb" />
        <store-list-2 />
    </div>
</template>

<script>
import {mapState} from 'vuex';
import BreadCrumb from '~/components/elements/BreadCrumb';
import StoreList2 from '~/components/partials/vendor/website/StoreList2';

export default {
    components: {
        StoreList2,
        BreadCrumb
    },
    layout: 'layout-default-website',
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Solutions'
                }
            ]
        };
    },
    async created () {
        const payload = {}
        const response = await this.$store.dispatch('website/getSolutions', payload)
    }
};
</script>

<style lang="scss" scoped></style>
