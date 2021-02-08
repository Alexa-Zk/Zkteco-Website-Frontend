<template lang="html">
    <div class="ps-page--single ps-page--vendor">
        <bread-crumb :breadcrumb="breadCrumb" />
        <store-list-2 :formattedSolution="formattedSolution" />
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import StoreList2 from '~/components/partials/vendor/website/SolutionCategories';

// Queries
import SolutionCategories from '~/apollo/queries/solutions/allSolutionCategories';

export default {
    components: {
        StoreList2,
        BreadCrumb
    },
    layout: 'layout-default-website',
    data: () => {
        return {
            solutionCategories: '',
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
    apollo: {
        solutionCategories: {
            prefetch: true,
            query: SolutionCategories,
            variables() {
                return { id: this.$route.params.id };
            }
        }
    },
    computed: {
        formattedSolution () {
            return this.solutionCategories[0]
        }
    },
};
</script>

<style lang="scss" scoped></style>
