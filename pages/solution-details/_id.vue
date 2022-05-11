<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" />
        <vendor-banner :formatted="formattedSingleSolution" />
        <vendor-about :formatted="formattedSingleSolution" />
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import VendorBanner from '~/components/partials/vendor/VendorBanner';
import VendorAbout from '~/components/partials/vendor/VendorAbout';
import Repository from '~/repositories/Repository.js';
import { subBaseUrl } from '~/repositories/Repository';


export default {
    components: {
        VendorAbout,
        VendorBanner,
        BreadCrumb
    },
    layout: 'layout-default-website',
    head() {
        const title = this.formattedSingleSolution
            ? this.formattedSingleSolution.title
            : 'Solutions Details';
        const description = this.formattedSingleSolution
            ? this.formattedSingleSolution.description
            : 'Solutions Details - Description';
        return {
            titleTemplate: title,
            meta: [
                {
                    hid: 'title',
                    name: 'title',
                    content: title
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: description
                }
            ]
        };
    },
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
    
    computed: {
        formattedSingleSolution() {
            return this.solutions[0];
        }
    },
    mounted() {
        this.getSolutionDetails(this.$route.params.id)
    },
    methods: {
        async getSolutionDetails (slug) {
            this.loading = true
            const reponse = await Repository.get( `${subBaseUrl}/solutions?slug=${slug}`)
                .then(response => {
                    this.solutions = response.data
                    this.loading = false
                })
                .catch(error => ({ error: JSON.stringify(error) }));
            return reponse;
        }
    },
};
</script>

<style lang="scss" scoped>
.ps-page--single {
    padding: 30px 0;
}
</style>
