<template lang="html">
    <div
        class="ps-vendor-banner bg--cover"
        :style="{
            backgroundImage: `url(${formatted.banner.url})`
        }"
        v-if="formatted"
    >
        <div class="container" v-if="formatted">
            <h2>
                {{ formatted.title }}
            </h2>
            <!-- <nuxt-link to="/vendor/store-list" class="ps-btn ps-btn--lg">
                Start Selling
            </nuxt-link> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'CaseStudyBanner',
    props: ['formatted']
};
</script>

<style lang="scss" scoped>
.ps-vendor-banner {
    padding: 60px 0;
    h2 {
        color: black;
        visibility: hidden;
    }

    // background: url('/img/bg/vendor.jpg');
}
</style>
