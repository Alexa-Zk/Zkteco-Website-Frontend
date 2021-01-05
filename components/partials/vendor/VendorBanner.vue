<template lang="html">
    <div class="ps-vendor-banner bg--cover">
        <div class="container" v-if="formatted">
            <h2>
                {{formatted.title}}
            </h2>
            <!-- <nuxt-link to="/vendor/store-list" class="ps-btn ps-btn--lg">
                Start Selling
            </nuxt-link> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'VendorBanner',
    props: ["formatted"]
};
</script>

<style lang="scss" scoped>
.ps-vendor-banner {
    background: url('/img/bg/vendor.jpg');
}
</style>
