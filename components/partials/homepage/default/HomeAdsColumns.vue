<template lang="html">
    <div class="ps-home-ads">
        <div class="ps-container" v-if="images">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12" v-for="image in images.mid_page_images"
                    :key="image.id">
                    <nuxt-link to="/shop">
                        <a class="ps-collection">
                            <img
                                :src="image.image[0].url" :alt="image.name"
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
    name: 'HomeAdsColumns',
    props: ['images'],
};
</script>

<style lang="scss" scoped>
.ps-home-ads {
    padding-bottom: 50px;

    .ps-collection {
        width: 390.66px;
        height: 210.06px;
        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
    }
}
</style>
