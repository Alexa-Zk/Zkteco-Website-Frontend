<template lang="html">
    <div
        :class="
            `ps-section--default ps-related-products ${
                boxed === true ? 'boxed' : ''
            }`
        "
    >
        <div class="ps-section__content">
            <div
                class="ps-carousel"
                v-swiper:mySwiper="
                    layout === 'fullwidth' ? settingFullwidth : settingDefault
                "
            >
                <div class="swiper-wrapper">
                    <div
                        class="swiper-slide"
                        v-if="products.length > 0"
                        v-for="product in products"
                    >
                        <product-default :product="product" />
                    </div>
                </div>
                <!--Carousel controls-->
                <div class="swiper-nav">
                    <span class="swiper-arrow swiper-prev">
                        <i class="icon-chevron-left"></i>
                    </span>
                    <div class="swiper-arrow swiper-next">
                        <i class="icon-chevron-right"></i>
                    </div>
                </div>
                <div class="swiper-pagination swiper-pagination-bullets"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductDefault from '~/components/elements/product/website/RelatedProductDefault';

export default {
    name: 'RelatedProduct',
    components: { ProductDefault },
    props: {
        layout: {
            type: String,
            default: ''
        },
        boxed: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        ...mapState({
            products: state => state.website.productsRelated
        })
    },
    data() {
        return {
            settingFullwidth: {
                speed: 400,
                autoplay: true,
                infinite: true,
                loop: true,
                slidesPerView: 4,
                spaceBetween: 1,
                navigation: {
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev'
                },
                breakpoints: {
                    1680: {
                        slidesPerView: 4
                    },
                    1366: {
                        slidesPerView: 4,
                        pagination: {
                            el: '.swiper-pagination',
                            dynamicBullets: true
                        }
                    },
                    1024: {
                        slidesPerView: 4
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    }
                }
            },
            settingDefault: {
                speed: 400,
                autoplay: true,
                infinite: true,
                loop: true,
                slidesPerView: 4,
                spaceBetween: 1,
                navigation: {
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev'
                },
                breakpoints: {
                    1680: {
                        slidesPerView: 4
                    },
                    1366: {
                        slidesPerView: 4,
                        pagination: {
                            el: '.swiper-pagination',
                            dynamicBullets: true
                        }
                    },
                    1024: {
                        slidesPerView: 4
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    }
                }
            }
        };
    }
};
</script>

<style lang="scss" scoped></style>
