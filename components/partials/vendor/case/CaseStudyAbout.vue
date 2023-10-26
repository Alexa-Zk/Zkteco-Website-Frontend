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

        <div id="downloads" class="related_product">
            <br /><br /><br />
            <h3>Downloads</h3>

            <div
                class="ps-block__content"
                v-if="formatted.product_files.length > 0"
            >
                <div
                    class="downloads_container"
                    v-for="i in formatted.product_files"
                    :key="i.id"
                >
                    <div class="download_left">
                        <div class="row-left">
                            <div class="download-avatar">
                                <img
                                    src="~/static/img/website/download-2.png"
                                    alt="Download"
                                />
                            </div>
                            <div class="title">
                                {{ i.name }}
                            </div>
                        </div>
                        <!--div class="size">
                                Size:
                                {{ Math.floor(i.file.size) }}
                            </div -->
                    </div>
                    <div class="download_right">
                        <button
                            class="ps-btn"
                            @click.prevent="download(i.file.url)"
                        >
                            Download
                        </button>

                        <div class="date">
                            <!-- Uploaded on:
                                {{ formatDate(i.file.updated_at) }} -->
                            Size: {{ formatBytes(i.file.size) }}
                        </div>
                    </div>
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
    },
    methods: {
        formatBytes(bytes) {
            var marker = 1024; // Change to 1000 if required
            var decimal = 0; // Change as required
            var kiloBytes = marker; // One Kilobyte is 1024 bytes
            var megaBytes = marker * marker; // One MB is 1024 KB
            var gigaBytes = marker * marker * marker; // One GB is 1024 MB
            var teraBytes = marker * marker * marker * marker; // One TB is 1024 GB

            // return bytes if less than a KB
            if (bytes < kiloBytes) return bytes.toFixed(decimal) + 'B';
            // return KB if less than a MB
            else if (bytes < megaBytes)
                return (bytes / kiloBytes).toFixed(decimal) + 'KB';
            // return MB if less than a GB
            else if (bytes < gigaBytes)
                return (bytes / megaBytes).toFixed(decimal) + 'MB';
            // return GB if less than a TB
            else return (bytes / gigaBytes).toFixed(decimal) + 'GB';
        },
        download(data) {
            const link = document.createElement('a');
            link.href = data;
            link.setAttribute('download', 'image.jpg');
            link.setAttribute('target', '_blank');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
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
                    background: coral;
                    margin: 0 20px 10px 0;
                    // .dev_image {
                    img {
                        width: 100%;
                        width: 450px;
                        height: 285px;
                        object-fit: cover;
                    }
                    // }
                }

                .ps-content {
                    p {
                        span {
                            font-size: 1.5rem;
                        }
                        strong {
                            font-size: 2.5rem;
                        }
                    }
                }

                .text-container {
                    text-align: justify;
                    font-size: 1.5rem;
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

@media (max-width: 1200px) {
    .on_site_pictures {
        padding: 0 1.3rem;
    }

    .related_product {
        padding: 0 1.3rem;
    }
}

@media (max-width: 989px) {
    .ps-section__header {
        margin-bottom: 3rem;
    }
}

@media (max-width: 760px) {
    .ps-section__header {
        margin-top: 2rem;
    }
}
</style>
