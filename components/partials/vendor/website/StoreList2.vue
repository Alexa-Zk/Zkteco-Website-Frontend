<template lang="html">
    <section class="ps-store-list">
        <div class="container">
            <div class="ps-section__header">
                <!--p>
                    ZKTeco has developed professional industry solutions for
                    different industries' propertiesand scale
                </p !-->
            </div>
            <div class="ps-container">
                <div class="row mb-10">
                    <div class="col-lg-7 form-group--nest">
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Please input keyword"
                            v-model="searchQuery"
                        />
                        <button class="ps-btn">
                            {{ loading ? 'Searching...' : 'Search' }}
                        </button>
                    </div>
                </div>
            </div>
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
                <div class="row" v-else>
                    <!--- col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12  -->

                    <div
                        class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 "
                        v-for="item in solutions"
                        :key="item.id"
                    >
                        <article class="ps-block--store-2">
                            <div
                                class="ps-block__content bg--cover"
                                :style="{
                                    backgroundImage: `url(${item.image[0].url})`
                                }"
                            ></div>
                            <div class="ps-block__author">
                                <a class="ps-block__user" href="#"> </a>

                                <nuxt-link
                                    :to="`/solution-details/${item.slug}`"
                                >
                                    {{ item.title }}
                                </nuxt-link>
                            </div>
                        </article>
                    </div>

                    <footer class="mt-60">
                        <v-pagination
                            v-model="page"
                            :total-visible="7"
                            color="green"
                            :length="paginationLenght"
                            @input="handleChangePagination"
                        />
                    </footer>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import Repository from '~/repositories/Repository.js';
import { subBaseUrl } from '~/repositories/Repository';

export default {
    name: 'Solutions',
    data() {
        return {
            searchQuery: null,
            isSearching: false,
            searchData: null,
            currentCategory: null,

            page: 1,
            pageSize: 4,
            solutionTotal: 0
        };
    },
    computed: {
        ...mapState({
            solutions: state => state.website.solutions,
            loading: state => state.website.loading
        }),
        paginationLenght() {
            console.log('Pagination ', this.solutionTotal);
            if (this.solutionTotal % 8 === 0) {
                return parseInt(this.solutionTotal / this.solutionTotal);
            } else {
                return parseInt(this.solutionTotal / 8 + 1);
            }
        }
    },
    async mounted() {
        const response = await Repository.get(`${subBaseUrl}/solutions/count`);
        this.solutionTotal = response.data;
    },
    methods: {
        async handleChangePagination(value) {
            const page = value == 1 ? 0 : value;
            const params = {
                page: page * this.pageSize,
                sort_by: 'created_at:desc',
                perPage: 8
            };
            await this.$store.dispatch('website/getSolutions', params);
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
</style>
