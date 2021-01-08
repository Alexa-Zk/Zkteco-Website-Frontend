<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" />
        <vendor-banner :formatted="formattedSingleSolution" />
        <vendor-about :formatted="formattedSingleSolution"  />
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import VendorBanner from '~/components/partials/vendor/VendorBanner';
import VendorAbout from '~/components/partials/vendor/VendorAbout';

// Queries
import singleSolution from '~/apollo/queries/solutions/singleSolution';

export default {
    components: {
        VendorAbout,
        VendorBanner,
        BreadCrumb
    },
    layout: 'layout-default-website',
    data: () => {
        return {
            solutions: '',
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Solution Details'
                }
            ]
        };
    },
    apollo: {
        solutions: {
            query: singleSolution,
            variables() {
                return { id: this.$route.params.id };
            }
        }
    },
    computed: {
        formattedSingleSolution () {
            return this.solutions[0]
        }
    },
};
</script>

<style lang="scss" scoped>
.ps-page--single {
    padding: 30px 0;
}
</style>
