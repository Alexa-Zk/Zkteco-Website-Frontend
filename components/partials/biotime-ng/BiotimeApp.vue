<template>
    <section class="section-btc-main-feature">
        <div class="feature-container">
            <div class="ltf">
                <h2>ZKBioTime NG</h2>
                <p>
                    Download the BioTime NG app and enjoy all the features of
                    our attendance management software from your Android or iOS
                    device
                </p>
                <div class="app-buttons">
                    <button
                        type="submit"
                        class="ps-btn ps-btn--lg ps-btn--gray"
                    >
                        <i class="fa fa-apple"></i> IPhone
                    </button>
                    <button type="submit" class="ps-btn ps-btn--lg">
                        <i class="fa fa-android"></i> Andriod
                    </button>
                </div>
            </div>
            <div class="rtf">
                <div class="ps-section__content">
                    <div class="ps-carousel" v-swiper:mySwiper="carouseSetting">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img
                                    src="~/static/img/website/biotime-1.jpeg"
                                    alt="martfury"
                                />
                            </div>
                            <div class="swiper-slide">
                                <img
                                    src="~/static/img/website/biotime-2.jpeg"
                                    alt="martfury"
                                />
                            </div>
                            <div class="swiper-slide">
                                <img
                                    src="~/static/img/website/biotime-3.jpeg"
                                    alt="martfury"
                                />
                            </div>
                            <div class="swiper-slide">
                                <img
                                    src="~/static/img/website/biotime-4.jpeg"
                                    alt="martfury"
                                />
                            </div>
                            <div class="swiper-slide">
                                <img
                                    src="~/static/img/website/biotime-5.jpeg"
                                    alt="martfury"
                                />
                            </div>
                            <div class="swiper-slide">
                                <img
                                    src="~/static/img/website/biotime-6.jpeg"
                                    alt="martfury"
                                />
                            </div>
                            <div class="swiper-slide">
                                <img
                                    src="~/static/img/website/biotime-7.jpeg"
                                    alt="martfury"
                                />
                            </div>
                            <div class="swiper-slide">
                                <img
                                    src="~/static/img/website/biotime-8.jpeg"
                                    alt="martfury"
                                />
                            </div>
                        </div>
                        <div class="swiper-nav">
                            <span class="swiper-arrow swiper-prev">
                                <i class="icon-chevron-left"></i>
                            </span>
                            <div class="swiper-arrow swiper-next">
                                <i class="icon-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            carouseSetting: {
                loop: true,
                slidesPerView: 2,
                spaceBetween: 16,
                autoplay: {
                    delay: 5000
                },
                autoplay: true,
                navigation: {
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev'
                },
                breakpoints: {
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 16
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 16
                    }
                }
            }
        };
    }
};
</script>

<style lang="scss" scoped>
h1,
h2,
h3,
span,
h5,
h6 {
    color: #6c757d;
}

.section-btc-main-feature {
    padding-top: 80px;
    padding-bottom: 80px;
    .feature-container {
        padding-bottom: 60px;
        display: flex;
        align-items: center;
        @include media('<sm') {
            display: block;
        }

        .rtf {
            width: 58.33333333%;
            margin-left: 30px;
            @include media('<sm') {
                margin-top: 40px;
                margin-left: 0px;
                width: 100%;
            }
        }

        .ltf {
            width: 41.66666667%;
            @include media('<sm') {
                width: 100%;
            }
            .tag {
                background: #7ac143;

                padding: 3px 6px;
                border-radius: 0.25rem;
                width: fit-content;
                span {
                    font-weight: 700;
                    letter-spacing: -0.03rem;
                    font-size: 14px;
                    color: white;
                }
            }

            h2 {
                font-size: 36px;
            }

            p {
                margin: 20px 0px;
                font-size: 20px;
            }

            .features-ctx {
                .features {
                    padding: 8px 0px;
                    font-size: 16px;
                    span {
                        font-weight: 500;
                    }
                    i {
                        color: white;
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
</style>
