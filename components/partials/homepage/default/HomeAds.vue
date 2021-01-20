<template lang="html">
    <div class="ps-home-ads">
        <div class="ps-container" v-if="long_image">
            <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 ">
                    <nuxt-link to="/shop">
                        <a class="ps-collection">
                            <img
                                src="https://storage.googleapis.com/zkteco_website_bucket/ml300_lock_52f1bac8d0/ml300-lock.png_ml300_lock_52f1bac8d0.png"
                                alt="long_image.name"
                            />
                        </a>
                    </nuxt-link>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                    <nuxt-link to="/shop">
                        <a class="ps-collection">
                            <img
                                src="https://storage.googleapis.com/zkteco_website_bucket/smart_lock_fd16036b13/smart-lock.png_smart_lock_fd16036b13.png"
                                alt="short_image.name"
                            />
                        </a>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeAds',
    props: ['images'],
    computed: {
        long_image() {
            return this.images ? this.images.homepage_array : '';
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-collection {
    height: 219px;
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
}
</style>
