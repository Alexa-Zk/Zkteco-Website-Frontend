<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth" />
        <downloads :downloadCategories="downloadCategories" />
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import Downloads from '~/components/partials/page/website/Downloads';


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
    
    async created() {
        const response = await this.$store.dispatch( 'website/getDownloadCategories');
        this.downloadCategories = response
    }
};
</script>

<style lang="scss" scoped></style>
