<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth" />
        <downloads :downloadCategories="downloadCategories" />
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import Downloads from '~/components/partials/page/website/Downloads';

// Queries
import downloadCategories from '~/apollo/queries/downloadCategories';

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
            downloadCategories: '',
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
        downloadCategories: {
            prefetch: true,
            query: downloadCategories
        }
    },
    created() {
        const response = this.$store.dispatch( 'website/getDownloadCategories');
    }
};
</script>

<style lang="scss" scoped></style>
