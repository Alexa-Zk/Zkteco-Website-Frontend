<template lang="html">
    <section class="ps-store-list">
        <div class="container">
            <div class="ps-section__header">
                <h3>ZKTeco Solutions</h3>
                <p>ZKTeco has developed professional industry solutions for different industries' properties and scale</p>
            </div>
            <div class="ps-section__content">
                <div class="row">
                    <div
                        class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 "
                        v-for="item in solutions"
                        :key="item.id"
                    >
                        <article class="ps-block--store-2">
                            <div
                                class="ps-block__content bg--cover"
                                :style="{
                                    backgroundImage: `url(${item.image[0].url})`
                                }"
                            >
                                <figure>
                                    <h4>{{ item.title }}</h4>
                                </figure>
                            </div>
                            <div class="ps-block__author">
                                <a class="ps-block__user" href="#">
                                    <img
                                        src="/static/img/vendor/store/vendor-150x150.jpg"
                                        alt="martfury"
                                    />
                                </a>
                                
                                <nuxt-link class="ps-btn" :to="`/website/vendor/solution-details/${item.id}`">
                                     Learn More
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
// Queries
import solutions from '~/apollo/queries/solutions/allSolutions';

export default {
    name: 'Solutions',
    data() {
        return {
            solutions: ''
        };
    },
    apollo: {
        solutions: {
            prefetch: true,
            query: solutions
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-block--store-2 {
    height: 340px;
    .ps-block__content {
        height: 80%;
        h4 {
            color: #78bc27;
        }
    }
}
</style>
