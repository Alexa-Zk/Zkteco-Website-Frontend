<template lang="html">
    <div class="ps-footer__links ps-container">
        <div class="ps-footer__images">
            <div class="text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary-main" data-aos="fade-up">
                        Learn how ZKTeco helps you
                    </span>
                    <span class="heading-primary-sub">
                        ZKTeco is a globally-renowned provider of security,
                        access control and time management solutions
                    </span>
                    <div class="footer-image-icon justify-center mt-10 d-flex">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <span
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                    class="mx-3"
                                >
                                    <a href="tel:2348175555512">
                                        <i
                                            class="icon-telephone"
                                            style="font-size: 40px; color:white;"
                                        ></i>
                                    </a>
                                </span>
                            </template>
                            <span>Call Us</span>
                        </v-tooltip>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <span
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                    class="mx-3"
                                >
                                    <a
                                        href="https://wa.me/2348175555514?text=I%20am%20interested%20in%20your%20product%20for%20sale"
                                    >
                                        <i
                                            class="icon-bubble"
                                            style="font-size: 40px; color:white;"
                                        ></i>
                                    </a>
                                </span>
                            </template>
                            <span>Whatsapp</span>
                        </v-tooltip>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <span
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                    class="mx-3"
                                >
                                    <a href="mailto:enquiry@zkteco-wa.com">
                                        <i
                                            class="icon-envelope"
                                            style="font-size: 40px; color:white;"
                                        ></i>
                                    </a>
                                </span>
                            </template>
                            <span>Email</span>
                        </v-tooltip>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <span
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                    class="mx-3"
                                >
                                    <div
                                        @click="goToProjectConsultation"
                                        style="cursor: pointer;"
                                    >
                                        <i
                                            class="icon-document"
                                            style="font-size: 40px; color:white;"
                                        ></i>
                                    </div>
                                </span>
                            </template>
                            <span>Project Consultation</span>
                        </v-tooltip>
                    </div>
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
import Call from '~/static/svg/Call';
import Consultation from '~/static/svg/Consultation';
import User from '~/static/svg/User';

export default {
    name: 'FooterLinks',
    data() {
        return {};
    },
    methods: {
        goToProjectConsultation() {
            const tokenForDownloads = this.$cookies.get('download_token', {
                parseJSON: true
            });
            if (tokenForDownloads) {
                this.$router.push('/support/project-consultation');
            } else {
                this.$router.push('/auth/login');
            }
        }
    },
    components: { Consultation, Call, User }
};
</script>

<style lang="scss" scoped>
.ps-footer__links {
    padding: 60px 0px 0px;
    padding-top: 0px !important;
}
.ps-footer__images {
    background-image: linear-gradient(
            to right bottom,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
        ),
        url('/img/website/zkteco.staff.jpeg');
    height: 361px;
    background-position: top;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}

.heading-primary {
    color: white;
    text-align: center;
    backface-visibility: hidden;
}

.footer-image-icon {
    i {
        &:hover {
            color: greenyellow;
        }
    }
}

.heading-primary-main {
    display: block;
    font-size: 23px;
    letter-spacing: 5px;
    font-weight: 900;
    margin-bottom: 30px;
    text-transform: uppercase;
    animation-name: moveInLeft;
    animation-duration: 2s;
    animation-timing-function: ease-out;
}

.heading-primary-sub {
    display: block;
    font-size: 16px;
    font-weight: normal;
    animation-name: moveInRight;
    animation-duration: 2s;
    animation-timing-function: ease-out;
}

@keyframes moveInLeft {
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }

    80% {
        transform: translateX(10px);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}

@keyframes moveInRight {
    0% {
        opacity: 0;
        transform: translateX(100px);
    }

    80% {
        transform: translateX(-10px);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}
</style>
