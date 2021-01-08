<template lang="html">
    <div class="ps-shop-banner" id="ps-shop-banner">
        <div class="ps-carousel" v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
                <div
                    class="swiper-slide"
                    v-for="slide in homeSlider"
                    :key="slide.id"
                    @click="openSlider(slide.url)"
                >
                    <img :src="slide.image.url" alt="martfury" />
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
    name: 'HomeBanner',
    props: ['homeSlider'],
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
.ps-home-banner {
    padding-top: 0px !important;
    .ps-container {
        padding: 0px;
    }
    .swiper-container {
        display: none;
        .swiper-slide {
            width: 100%;
            height: 518px;
        }
    }
}

#ps-shop-banner {
    .swiper-slide {
        width: 100%;
        height: 518px;
        cursor: pointer;
    }
    img {
        height: 100%;
        object-fit: cover;
    }
}
</style>
