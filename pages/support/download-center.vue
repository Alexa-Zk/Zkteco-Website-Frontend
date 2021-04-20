<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb"  layout="fullwidth"/>
        <downloads :downloadCenters="downloadCenters"/>
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import Downloads from '~/components/partials/page/website/Downloads';

// Queries
import downloadCenters from '~/apollo/queries/downloadCenters';


export default {
    head() {
        return {
            titleTemplate: 'Download Resources - ZKTeco West Africa',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Download Center'
                }
            ]
        };
    },
    components: {
        BreadCrumb,
        Downloads
    },
    layout: 'layout-default-website',
    transition: 'zoom',
    data: () => {
        return {
            downloadCenters: '',
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Download Center'
                }
            ]
        };
    },
    apollo: {
        downloadCenters: {
            prefetch: true,
            query: downloadCenters
        }
    },
};
</script>

<style lang="scss" scoped></style>
