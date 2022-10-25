<template lang="html">
    <section class="ps-store-list">
        <div class="container">
            <div class="ps-section__header">
                <h3>Case Study</h3>
            </div>
            <nav class="case-study-nav">
                <nuxt-link :to="`/solution-details/`">
                    All
                </nuxt-link>
                <nuxt-link :to="`/solution-details/`">
                    Smart Entrance Control
                </nuxt-link>
                <nuxt-link :to="`/solution-details/`">
                    Smart Home
                </nuxt-link>
                <nuxt-link :to="`/solution-details/`">
                    Access Control
                </nuxt-link>
                <nuxt-link :to="`/solution-details/`">
                    Attendance
                </nuxt-link>
                <nuxt-link :to="`/solution-details/`">
                    Integration
                </nuxt-link>
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
                <div class="row" v-else>
                    <div
                        class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 "
                        v-for="item in solutions"
                        :key="item.id"
                    >
                        <article class="ps-block--store-2">
                            <div
                                class="ps-block__content bg--cover"
                                :style="{
                                    backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${item.image[0].url})`
                                }"
                            ></div>
                            <!--div class="ps-case-study-img">
                                <img :src="`${item.image[0].url} `" />
                            </div-->
                            <div class="ps-block__author">
                                <a class="ps-block__user" href="#"> </a>

                                <nuxt-link
                                    class="ps-btn-case-study"
                                    :to="`case-study/${item.slug}`"
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

export default {
    name: 'CaseStudy',
    computed: {
        ...mapState({
            solutions: state => state.website.solutions,
            loading: state => state.website.loading
        })
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
}
.case-study-nav {
    height: 5rem;
    margin-bottom: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        background: #8cc63f;
        font-size: 1.8rem;
        padding: 15px;
        color: #fff;
        font-weight: 600;
    }
}
</style>
