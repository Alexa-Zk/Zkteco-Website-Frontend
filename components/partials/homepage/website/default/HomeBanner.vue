<template lang="html">
    <div class="ps-shop-banner" id="ps-shop-banner">
        <div class="ps-carousel" v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img
                        src="~/static/img/slider/shop-default/1.jpg"
                        alt="martfury"
                    />
                </div>
                <div class="swiper-slide">
                    <img
                        src="~/static/img/slider/shop-default/2.jpg"
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
            <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeBanner',
    data() {
        return {
            swiperOption: {
                loop: true,
                speed: 700,
                slidesPerView: 1,
                spaceBetween: 1,
                navigation: {
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev'
                }
            }
        };
    }
};
</script>

<style lang="scss" scoped>
ps-home-banner {
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
    }
    img {
        height: 100%;
        object-fit: cover;
    }
}
</style>
