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

                        <button
                            class="ps-btn"
                            @click.prevent="searchInputedQurey"
                        >
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
                </div>
                <footer class="mt-60">
                    <v-pagination
                        v-model="page"
                        :total-visible="8"
                        color="green"
                        :length="paginationLenght"
                        @input="handleChangePagination"
                    />
                </footer>
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
            page: 0,
            pageSize: 8
        };
    },
    computed: {
        ...mapState({
            solutions: state => state.website.solutions,
            solutionTotal: state => state.website.solutionTotal,
            loading: state => state.website.loading
        }),
        paginationLenght() {
            return Math.ceil(this.solutionTotal / 8);
        }
    },
    async created() {
        this.pageLoad();
    },

    methods: {
        async handleChangePagination(value) {
            const page = parseInt(value) === 1 ? 0 : (value - 1) * 8;
            this.pageLoad(parseInt(page));
        },

        async searchInputedQurey() {
            return await this.pageLoad();
        },

        async pageLoad(value = null) {
            let search =
                this.searchQuery == undefined || this.searchQuery == ''
                    ? null
                    : { search: `${this.searchQuery.trim().toLowerCase()}` };

            let payload = {
                page: value == null ? this.page : value,
                sort_by: 'created_at:desc',
                perPage: 8,
                ...search
            };

            return this.$store.dispatch('website/getSolutions', payload);
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

a {
    color: #000 !important;
}
</style>
