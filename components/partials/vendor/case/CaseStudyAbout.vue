<template lang="html">
    <div class="ps-section--vendor ps-vendor-about" v-if="formatted">
        <div class="container">
            <div class="ps-section__header">
                <h2>Case Details</h2>
                <h4>{{ formatted.title }}</h4>
            </div>
            <div class="ps-section__content">
                <article class="content_wrapper">
                    <div class="image_content">
                        <img
                            :src="formatted.side_image.url"
                            alt="biotime cloud logo"
                        />
                    </div>

                    <div class="ps-content" v-html="formatted.content"></div>
                </article>
                <!--div class=" ps-content " v-html="formatted.content"></div-->
            </div>
        </div>

        <div class="on_site_pictures">
            <div>
                <h3>On-Site Pictures</h3>
            </div>
            <div class="img_container">
                <div
                    class="image_wrapper"
                    v-for="site_images in formatted.on_site_images"
                >
                    <img
                        :src="site_images.url"
                        :alt="site_images.alternativeText"
                    />
                </div>
            </div>
        </div>
        <!-- <div id="related_product" class="related_product">
            <h3>Related Products</h3>
            <related-product
                layout="fullwidth"
                collection-slug="shop-recommend-items"
            />
        </div> -->
        <div id="related_product" class="related_product">
            <h3>Related Products</h3>
            <div class="ps-section__content">
                <div
                    class="ps-carousel"
                    v-swiper:mySwiper="
                        layout === 'fullwidth'
                            ? settingFullwidth
                            : settingDefault
                    "
                >
                    <div class="swiper-wrapper">
                        <div
                            class="swiper-slide"
                            v-for="product in formatted.products"
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
                    <div
                        class="swiper-pagination swiper-pagination-bullets"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import RelatedProduct from '~/components/partials/product/RelatedProduct';
import ProductDefault from '~/components/elements/product/website/RelatedProductDefault';

export default {
    name: 'CaseStudyAbout',
    props: ['formatted'],
    components: {
        RelatedProduct,
        ProductDefault
    },
    data() {
        return {
            layout: '',
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

<style lang="scss">
.ps-vendor-about {
    .container {
        transform: translateY(-80px);
        max-width: 1200px !important;
        .ps-section__header {
            text-align: left;
            h2 {
                color: #8fc74a;
            }
            h4 {
                font-size: 2rem;
                font-weight: 900;
            }
        }

        .ps-section__content {
            transform: translateY(-80px);
            .content_wrapper {
                .image_content {
                    float: left;
                    width: 450px;
                    height: 285px;
                    padding: 0 20px 10px 0;
                    img {
                        width: 100%;
                        overflow: hidden;
                    }
                }

                .text-container {
                    text-align: justify;
                    font-size: 1.4rem;
                }
            }
        }
    }

    .on_site_pictures {
        transform: translateY(-100px);
        max-width: 1200px !important;
        margin: 0 auto;
        display: flex;
        flex-direction: column;

        h3 {
            color: #8fc74a;
        }
        img {
            display: grid;
        }

        .img_container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }
    }

    .related_product {
        max-width: 1200px !important;
        margin: 0 auto;

        h3 {
            color: #8fc74a;
        }
    }
}
</style>
