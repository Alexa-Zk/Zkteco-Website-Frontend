<template>
    <section class="ps-container section-btc-hero">
        <div class="hero-container">
            <div class="ltf">
                <div class="tag">
                    <span>
                        BioTime Cloud
                    </span>
                </div>
                <h2>
                    BioTime Cloud, your cloud-based attendance management system
                </h2>
                <p>
                    Biotime.ng is a smart cloud-based attendance management
                    system that allows for efficient and safe data and
                    information administration. The system provides cutting-edge
                    features for running a successful business and enables you
                    to connect with your peers in the most efficient manner
                    possible.
                </p>
                <p>
                    AWS cloud technology powers the Biotime.ng platform, making
                    it the most flexible and secure cloud computing environment
                    available today. The platform gives you total visibility
                    into your business operations and makes it simple to
                    collaborate with users.
                </p>
                <p>
                    Employees and administrators can use the Biotime.ng software
                    portal from anywhere and at any time using
                    internet-connected devices like laptops or mobile apps
                </p>
                <div class="features-ctx">
                    <button
                        type="submit"
                        class="ps-btn ps-btn--lg ps-btn--gray"
                    >
                        <nuxt-link to="#btc-contact">
                            <i class="icon-telephone"></i> Contact
                        </nuxt-link>
                    </button>
                </div>
            </div>
            <div class="rtf">
                <img
                    loading="lazy"
                    src="/img/biotime-ng.png"
                    alt="biotime cloud logo"
                />
                <div class="play-circle" @click.prevent="showVideoModal = true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>

        <!-- Modal  -->

        <v-dialog v-model="showVideoModal" width="1200">
            <div class="ps-dialog">
                <a
                    class="ps-dialog__close"
                    @click.prevent="showVideoModal = false"
                >
                    <i style="font-weight: bold;" class="icon icon-cross"></i>
                </a>
                <div style="margin-top: 30px;">
                    <iframe
                        width="420"
                        height="420"
                        src="https://www.youtube.com/embed/ySViUYsTUkg"
                    >
                    </iframe>
                </div>
            </div>
        </v-dialog>
    </section>
</template>

<script>
export default {
    name: 'Hero',
    data() {
        return {
            showVideoModal: false
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

.section-btc-hero {
    padding-top: 60px;
    padding-bottom: 40px;
    background: linear-gradient(to right, #7ac143, #8ed05b);
    background-attachment: fixed;
    opacity: 0.9;
    height: 100%;
    width: 100%;
    background-repeat: repeat-y;
    .hero-container {
        padding-bottom: 60px;
        display: flex;
        align-items: center;
        @include media('<sm') {
            display: block;
        }
        .ltf,
        .rtf {
            width: 50%;
            @include media('<sm') {
                width: 100%;
            }
        }

        .rtf {
            position: relative;
            @include media('<sm') {
                margin-top: 10px;
            }

            .play-circle {
                width: 100px;
                height: 100px;
                position: absolute;
                background: white;
                margin: 0 auto;
                cursor: pointer;
                border-radius: 50%;
                left: 50%;
                margin-left: -50px;
                top: 50%;
                margin-top: -50px;
                transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.05),
                    0 1.5rem 2.2rem rgba(0, 0, 0, 0.1) !important;
                &:hover {
                    transform: scale(1.1) !important;
                }
                svg {
                    path {
                        fill: #7ac143;
                    }
                }
            }
        }

        .ltf {
            padding-right: 15px;
            padding-top: 20px;
            padding-bottom: 20px;
            .tag {
                background-color: rgba(0, 0, 0, 0.2);
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
                padding: 10px 0px 16px;
                color: white;
                letter-spacing: -0.03rem;
                font-weight: 600;
                width: 85%;
            }

            p {
                font-size: 20px;
                color: white;
                width: 95%;
            }

            .features-ctx {
                .features {
                    padding: 8px 0px;
                    font-size: 16px;
                    span {
                        font-weight: 500;
                    }
                    i {
                        color: #7ac143;
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
</style>
