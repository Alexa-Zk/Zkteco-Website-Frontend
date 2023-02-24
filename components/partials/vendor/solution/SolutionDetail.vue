<template lang="html">
    <div class="ps-section--vendor ps-vendor-about">
        <div class="container" v-if="formatted">
            <div id="" class="headerdetail">
                <h2>Solution</h2>
                <h3 v-html="formatted.title"></h3>
            </div>
            <div id="details" class="ps-section__header">
                <h4 v-html="formatted.description"></h4>
            </div>
            <div class="ps-section__content">
                <div class="row">
                    <div class=" ps-content " v-html="formatted.content"></div>
                </div>
            </div>

            <div id="downloads" class="related_product">
                <br /><br /><br />
                <h3>Downloads</h3>

                <div class="ps-block__content" v-if="formatted.product_files">
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
                                Size: {{ formatBytes(i.file.siz) }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="related_product" class="related_product">
                <br /><br /><br />
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
    </div>
</template>

<script>
import ProductDefault from '~/components/elements/product/website/RelatedProductDefault';

export default {
    name: 'SolutionDetail',
    props: ['formatted'],
    components: {
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
        formatDate(date) {
            let formated = new Date(date);
            return formated.toDateString();
        },
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
            const tokenForDownloads = this.$cookies.get('download_token', {
                parseJSON: true
            });
            if (tokenForDownloads) {
                const link = document.createElement('a');
                link.href = data;
                link.setAttribute('download', 'image.jpg');
                link.setAttribute('target', '_blank');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                this.$router.push('/auth/login');
            }
        }
    }
};
</script>

<style lang="scss">
.ps-vendor-about {
    .container {
        max-width: 1100px !important;
        text-align: left;
        transform: translateY(-50px);
        .headerdetail {
            text-align: left;
            h2 {
                color: #8cc63f;
            }
        }
        .ps-section__header {
            //margin-bottom: 20px;
            text-align: left;
        }
        .ps-section__content {
            transform: translateY(-40px);
            .row {
                .ps-content {
                    .image {
                        img {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
}
.downloads_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 25px 0;
    border-bottom: 1px dashed #e6e6e6;
    @include media('<sm') {
        display: block;
    }
    @include media('<xs') {
        display: block;
    }
    .download_left {
        .row-left {
            align-items: center;
            display: flex;
            .title {
                // margin-left: 20px;
                // margin-left: 20px;
                font-size: 20px !important;
                font-family: 'Work Sans', sans-serif !important;
            }
        }
    }
    .download_right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        a {
            display: block;
            width: 120px;
            height: 40px;
            line-height: 38px;
            border: 1px solid #e6e6e6;
            text-align: center;
            margin-bottom: 10px;
            float: right;
            transition: all 0.5s;

            &:hover {
                color: white !important;
                background: #7cbd27;
                border: none;
            }
        }
    }
}

@media (max-width: 900px) {
    .ps-vendor-about {
        .container {
            transform: translateY(-60px);
        }
    }
}
</style>
