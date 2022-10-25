<template lang="html">
    <div class="ps-page--single ps-page--vendor">
        <bread-crumb :breadcrumb="breadCrumb" />
        <case-study />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import BreadCrumb from '~/components/elements/BreadCrumb';
import CaseStudy from '~/components/partials/vendor/website/CaseStudy';

export default {
    head() {
        return {
            titleTemplate: 'Case Study',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Case Study'
                }
            ]
        };
    },
    components: {
        CaseStudy,
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
                    text: 'Case Study'
                }
            ]
        };
    },
    async created() {
        const payload = {};
        const response = await this.$store.dispatch(
            'website/getSolutions',
            payload
        );
    }
};
</script>

<style lang="scss" scoped></style>
