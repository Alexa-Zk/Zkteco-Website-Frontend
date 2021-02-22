<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <order-invoice />
    </section>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import Newsletters from '~/components/partials/commons/Newsletters';
import OrderInvoice from '~/components/partials/account/OrderInvoice';

export default {
    transition: 'zoom',
    middleware: 'authentication',
    components: {
        OrderInvoice,
        Newsletters,
        BreadCrumb
    },
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Invoice Detail'
                }
            ]
        };
    },
    created() {
        const response = this.$store.dispatch('product/getAllUserOrders', true);
    },
};
</script>

<style lang="scss" scoped></style>
