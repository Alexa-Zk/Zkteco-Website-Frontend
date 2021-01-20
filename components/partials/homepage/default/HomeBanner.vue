<template lang="html">
    <div class="ps-home-banner ps-home-banner--1" id="ps-home-banner--1" >
        <div class="ps-container" v-if="images">
            <div class="ps-section__left">
                <div class="ps-carousel" v-swiper:mySwiper="swiperOption">
                    <div class="swiper-wrapper">
                        <div
                            class="swiper-slide"
                            v-for="image in images.hero_carousel"
                            :key="image.id"
                            @click="openSlider(image.url)"
                        >
                            <img
                                class="ps-banner"
                                :src="image.image[0].url"
                                alt="martfury"
                            />
                        </div>
                    </div>
                    <!--Carousel controls-->
                    <div class="swiper-nav">
                        <span class="swiper-arrow swiper-prev"
                            ><i class="icon-chevron-left"></i
                        ></span>
                        <div class="swiper-arrow swiper-next">
                            <i class="icon-chevron-right"></i>
                        </div>
                    </div>
                    <div
                        class="swiper-pagination swiper-pagination-bullets"
                    ></div>
                </div>
            </div>
            <div class="ps-section__right">
                <nuxt-link
                    v-for="image in images.sub_homepage_images"
                    :key="image.id"
                    to="/shop"
                    class="ps-collection"
                >
                    <img :src="image.image[0].url" :alt="image.name" />
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeBanner',
    props: ['images'],
    data() {
        return {
            swiperOption: {
                loop: true,
                speed: 2000,
                slidesPerView: 1,
                spaceBetween: -3,
                autoplay: true,
                infinite: true,
                navigation: {
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev'
                }
            }
        };
    },
    methods: {
        openSlider(url) {
            window.open(url, '_blank');
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-collection {
    width: 390px;
    height: 193px;

    img {
        height: 100%;
        object-fit: contain;
    }
}

#ps-home-banner--1 {
    .swiper-slide {
        width: 100%;
        height: 416px!important;
        cursor: pointer;
    }
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}
</style>
