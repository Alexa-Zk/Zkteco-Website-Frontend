<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <view-order-details />
    </section>
</template>
<script>
import {mapState} from 'vuex'
import BreadCrumb from '~/components/elements/BreadCrumb';
import ViewOrderDetails from '~/components/partials/account/ViewOrderDetails';

export default {
    transition: 'zoom',
    middleware: 'authentication',
    components: {
        ViewOrderDetails,
        BreadCrumb
    },
    data() {
        return {
            orderId: this.$route.params.id,
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Order Details'
                }
            ]
        };
    },
    async created () {
        const orderDetails = await this.$store.dispatch(
            'product/getOrderDetails',
            this.orderId
        );
    }
};
</script>

<style lang="scss" scoped></style>
