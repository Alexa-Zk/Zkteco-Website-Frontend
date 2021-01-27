<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <recent-viewed-products />
    </section>
</template>
<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import RecentViewedProducts from '~/components/partials/account/RecentViewedProducts';

export default {
    transition: 'zoom',
    middleware: 'authentication',
    components: {
        RecentViewedProducts,
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
                    text: 'Recent Viewed Products'
                }
            ]
        };
    },
    created () {
        const user = this.$store.dispatch("auth/getUserInformation")
    }
};
</script>

<style lang="scss" scoped></style>
