<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" />
        <vendor-banner :formatted="formattedSingleSolution" />
        <nav class="solution-details">
            <nuxt-link :to="`#details`"> Solution Details</nuxt-link>
            <nuxt-link :to="`#downloads`"> Download</nuxt-link>
            <nuxt-link :to="`#related_product`"> Related Products </nuxt-link>
        </nav>
        <hr class="line" />
        <solution-detail :formatted="formattedSingleSolution" />
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import VendorBanner from '~/components/partials/vendor/VendorBanner';
import SolutionDetail from '~/components/partials/vendor/solution/SolutionDetail';
import Repository from '~/repositories/Repository.js';
import { subBaseUrl } from '~/repositories/Repository';

export default {
    components: {
        SolutionDetail,
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
        if (
            this.$route.params.id != '' ||
            this.$route.params.id != undefined ||
            this.$route.params.id != null
        ) {
            this.getSolutionDetails(this.$route.params.id);
        }
    },
    methods: {
        async getSolutionDetails(slug) {
            if (slug) {
                this.loading = true;
                const solution = Repository.get(
                    `${subBaseUrl}/solutions?slug=${slug}`
                );
                let res = await solution;
                this.solutions = res.data;
                this.loading = false;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-page--single {
    padding: 30px 0;
}

.solution-details {
    margin-bottom: 0.3rem;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin-right: auto;
    margin-left: auto;

    a {
        // background: #8cc63f;
        font-size: 1.8rem;
        // padding: 15px;
        text-decoration: none;
        color: #000;
        font-weight: 600;

        &:hover {
            color: #8cc63f;
        }
    }
}
.line {
    border-bottom: 4px solid #8cc63f;
}
</style>
