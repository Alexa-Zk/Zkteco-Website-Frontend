<template lang="html">
    <div class="ps-page--single">
        <case-study-banner :formatted="formattedSingleCaseStudies" />
        <nav class="case-study-nav">
            <nuxt-link :to="`/case-study`"> Case Studies</nuxt-link>
            <nuxt-link :to="`#related_product`"> Related Products</nuxt-link>
            <nuxt-link
                v-if="caseStudies"
                :to="
                    `/case-study?slug=${caseStudies[0].case_study_categories[0].slug}`
                "
            >
                Related Solution</nuxt-link
            >
            <!--nuxt-link :to="`case-study`"> More Cases</nuxt-link -->
            <a href="https://www.zkteco.com/en/case" target="_blank">
                More Cases
            </a>
        </nav>
        <hr class="line" />
        <case-study-about :formatted="formattedSingleCaseStudies" />
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
        const title = this.formattedSingleCaseStudies
            ? this.formattedSingleCaseStudies.title
            : 'Case Study';
        const description = this.formattedSingleCaseStudies
            ? this.formattedSingleCaseStudies.description
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
            caseStudies: ''
        };
    },

    computed: {
        formattedSingleCaseStudies() {
            return this.caseStudies[0];
        }
    },
    mounted() {
        this.getCaseStudiesDetails(this.$route.params.id);
    },
    methods: {
        async getCaseStudiesDetails(slug) {
            this.loading = true;
            const reponse = await Repository.get(
                `${subBaseUrl}/case-studies?slug=${slug}`
            )
                .then(response => {
                    this.caseStudies = response.data;
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
