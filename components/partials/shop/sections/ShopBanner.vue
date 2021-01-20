<template lang="html">
    <div class="ps-shop-banner" v-if="images">
        <div class="ps-carousel" v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
                <div
                    class="swiper-slide"
                    v-for="image in images.shop_page_images"
                    :key="image.id"
                    @click="openSlider(image.url)"
                >
                    <img :src="image.image[0].url" alt="martfury" />
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
            <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShopBanner',
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
.ps-shop-banner {
    .swiper-slide {
        width: 100%;
        height: 295px !important;
        cursor: pointer;
    }
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }   
}

</style>
