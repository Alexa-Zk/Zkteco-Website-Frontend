<template lang="html">
    <section class="ps-store-list">
        <div class="container">
            <div class="ps-section__header">
                <h3>Case Study</h3>
            </div>

            <nav class="case-study-nav">
                <a @click.prevent="fetchCaseStudyByCategory('all')">
                    All
                </a>
                <a
                    v-for="category in caseStudyCategories"
                    :key="category.id"
                    @click.prevent="fetchCaseStudyByCategory(category.slug)"
                >
                    {{ category.title }}
                </a>
                <a href="https://www.zkteco.com/en/case" target="_blank">
                    More Cases
                </a>
            </nav>
            <div class="ps-section__content">
                <div class="placeholder-image-grid" v-if="loading">
                    <content-placeholders
                        :rounded="true"
                        v-for="x in 9"
                        :key="x"
                    >
                        <content-placeholders-img />
                        <content-placeholders-heading />
                    </content-placeholders>
                </div>
                <div
                    class="row"
                    v-else-if="caseStudies == null || caseStudies.length <= 0"
                >
                    No case study available
                </div>
                <div class="row" v-else>
                    <div
                        class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 "
                        v-for="item in caseStudies"
                        :key="item.id"
                    >
                        <article class="ps-block--store-2">
                            <div
                                class="ps-block__content bg--cover"
                                :style="{
                                    backgroundImage: `url(${item.side_image.url})`
                                }"
                            ></div>
                            <!--div class="ps-case-study-img">
                                <img :src="`${item.image[0].url} `" />
                            </div-->
                            <div class="ps-block__author">
                                <a class="ps-block__user" href="#"> </a>

                                <nuxt-link
                                    class="ps-btn-case-study"
                                    :to="`/case-study/${item.slug}`"
                                >
                                    {{ item.title }}
                                </nuxt-link>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import Repository, { serializeQuery } from '~/repositories/Repository.js';
import { subBaseUrl } from '~/repositories/Repository';

export default {
    name: 'CaseStudy',
    computed: {
        ...mapState({
            caseStudies: state => state.website.caseStudies
        })
    },
    data: () => {
        return {
            loading: false,
            caseStudyCategories: ''
        };
    },
    mounted() {
        this.getCaseStudyCategories();
        const case_category = this.$route.query.slug;
        if (case_category) {
            this.fetchCaseStudyByCategory(case_category);
        }
    },

    methods: {
        async fetchCaseStudyByCategory(case_slug) {
            let slug = case_slug == 'all' ? null : case_slug;
            let params = {
                _sort: 'sort_id:desc',
                ...(slug && { 'case_study_categories.slug': slug })
            };
            console.log(params);
            this.loading = true;
            const reponse = await Repository.get(
                `${subBaseUrl}/case-studies?${serializeQuery(params)}`
            )
                .then(response => {
                    console.log(response.data);
                    this.$store.commit('website/setCaseStudies', []);
                    this.$store.commit('website/setCaseStudies', response.data);

                    this.loading = false;
                })
                .catch(error => ({ error: JSON.stringify(error) }));
            this.loading = false;
            return reponse;
        },

        async getCaseStudyCategories() {
            this.loading = true;
            const reponse = await Repository.get(
                `${subBaseUrl}/case-study-categories`
            )
                .then(response => {
                    this.caseStudyCategories = response.data;
                    this.loading = false;
                })
                .catch(error => ({ error: JSON.stringify(error) }));
            return reponse;
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-store-list {
    padding-top: 10px;
    .ps-section__header {
        padding: 10px 0 20px;
    }
    .ps-section__content {
        margin-bottom: 60px;
    }
}
.ps-block--store-2 {
    height: 340px;
    .ps-block__content {
        height: 80%;
        h4 {
            color: white;
            font-size: 22px;
        }
    }
    .ps-block__user {
        opacity: 0;
    }
}

.placeholder-image-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
}

.ps-btn-case-study {
    text-align: center;
    text-decoration: none;
    color: black;
}
.case-study-nav {
    height: 5rem;
    margin-bottom: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        background: #8cc63f;
        font-size: 1.5rem;
        padding: 14px 50px;
        color: #fff;
        font-weight: 600;
    }
}
</style>
