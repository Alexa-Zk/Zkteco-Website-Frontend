<template lang="html">
    <div class="ps-page--single ps-page--vendor">
        <bread-crumb :breadcrumb="breadCrumb" />
        <store-list-2 :formattedSolution="solution_categories" />
    </div>
</template>

<script>
import {mapState} from 'vuex';
import BreadCrumb from '~/components/elements/BreadCrumb';
import StoreList2 from '~/components/partials/vendor/website/SolutionCategories';


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
    computed: {
        ...mapState({
            solution_categories: state => state.website.solutionCategories,
        }),
    },
    
    created() {
        const slug = this.$route.params.id
        const response = this.$store.dispatch('website/getSolutionCategories', slug);
    },
};
</script>

<style lang="scss" scoped></style>
