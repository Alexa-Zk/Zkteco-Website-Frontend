<template lang="html">
    <div class="ps-page--single">
        <case-study-banner :formatted="formattedSingleSolution" />
        <nav class="case-study-nav">
            <nuxt-link :to="`/case-study`"> Case Studies</nuxt-link>
            <nuxt-link :to="`#related_product`"> Related Products</nuxt-link>
            <nuxt-link :to="`/solution-details/`"> Related Solution</nuxt-link>
            <nuxt-link :to="`/solution-details/`"> More Cases</nuxt-link>
        </nav>
        <hr class="line" />
        <case-study-about :formatted="formattedSingleSolution" />
    </div>
</template>

<script>
import CaseStudyBanner from '~/components/partials/vendor/case/CaseStudyBanner';
import CaseStudyAbout from '~/components/partials/vendor/case/CaseStudyAbout';
import Repository from '~/repositories/Repository.js';
import { subBaseUrl } from '~/repositories/Repository';

export default {
    components: {
        CaseStudyAbout,
        CaseStudyBanner
    },
    layout: 'layout-default-website',
    head() {
        const title = this.formattedSingleSolution
            ? this.formattedSingleSolution.title
            : 'Case Study';
        const description = this.formattedSingleSolution
            ? this.formattedSingleSolution.description
            : 'Case Study - Description';
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
            solutions: ''
        };
    },

    computed: {
        formattedSingleSolution() {
            return this.solutions[0];
        }
    },
    mounted() {
        this.getSolutionDetails(this.$route.params.id);
    },
    methods: {
        async getSolutionDetails(slug) {
            this.loading = true;
            const reponse = await Repository.get(
                `${subBaseUrl}/solutions?slug=${slug}`
            )
                .then(response => {
                    this.solutions = response.data;
                    this.loading = false;
                })
                .catch(error => ({ error: JSON.stringify(error) }));
            return reponse;
        }
    }
};
</script>

<style lang="scss" scoped>
.case-study-nav {
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
        // color: #fff;
        font-weight: 600;
    }
}
.line {
    border-bottom: 4px solid #8cc63f;
}
</style>
