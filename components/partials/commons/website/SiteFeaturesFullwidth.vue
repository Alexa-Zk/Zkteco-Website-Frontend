<template lang="html">
    <div class="ps-site-features">
        <div class="ps-container">
            <h3>ZKTeco Insight into the Market</h3>
            <div>
                <div class="row">
                    <div
                        class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 "
                        v-for="item in caseStudies"
                        :key="item.id"
                    >
                        <article class="ps-block--store-2">
                            <div class="ps-img">
                                <img :src="`${item.side_image.url} `" />
                            </div>
                            <div class="ps-block__author">
                                <nuxt-link
                                    class="ps-btn-case-study"
                                    :to="`/case-study/${item.slug}`"
                                >
                                    {{ item.title.substring(0, 72) }}
                                </nuxt-link>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Repository, { serializeQuery } from '~/repositories/Repository.js';
import { subBaseUrl } from '~/repositories/Repository';
export default {
    name: 'SiteFeauturesFullwidth',

    data: () => {
        return {
            loading: false,
            caseStudies: null
        };
    },
    async mounted() {
        let params = {
            _sort: 'sort_id:desc',
            _limit: 4
        };
        this.loading = true;

        await Repository.get(
            `${subBaseUrl}/case-studies?${serializeQuery(params)}`
        )
            .then(response => {
                this.loading = false;
                this.caseStudies = response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        this.loading = false;
    },
    methods: {
        subString(string) {
            string.substring(0, length);
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-site-features {
    padding-top: 60px !important;
    padding-bottom: 10px !important;
    h1 {
        opacity: 0;
        font-size: 1px;
    }
    h3 {
        margin-bottom: 60px;
        text-align: center;
        font-size: 24px;
        color: #000;
    }
    .ps-block--site-features {
        border: 1px solid #78bc27;
        .ps-block__left {
            display: flex;
            justify-content: center;
            img {
                width: 60px;
                height: 60px;
                object-fit: cover;
            }
        }
    }
}

.ps-img {
    img {
        width: 100%;
        height: 170px;
        object-fit: cover;
    }
}

.ps-btn-case-study {
    text-decoration: none;
    padding: 20px 0;
    font-size: 1.5rem;
    color: #000;

    &:hover {
        color: #78bc27;
    }
}
</style>
