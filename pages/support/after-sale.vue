<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth"/>
        <after-sales />
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import AfterSales from '~/components/partials/page/website/AfterSales';

export default {
    head() {
        return {
            titleTemplate: 'After Sales Services',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'After Sales Service - ZKTeco West Africa'
                }
            ]
        };
    },
    components: {
        AfterSales,
        BreadCrumb
    },
    layout: 'layout-default-website',
    transition: 'zoom',
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'After Sales'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
