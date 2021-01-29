<template lang="html">
    <div class="ps-footer__links ps-container">
        <div class="ps-footer__images">
            <div class="text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary-main">
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
                                    class="mx-2"
                                >
                                    <a href="2348175555512"><Call /></a>
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
                                    class="mx-2"
                                >
                                    <a
                                        href=" https://api.whatsapp.com/send?phone=2348175555514&text=&source=&data=&app_absent="
                                    >
                                        <User
                                    /></a>
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
                                    class="mx-2"
                                >
                                    <a href="mailto:sales@zkteco-wa.com">
                                        <Consultation
                                    /></a>
                                </span>
                            </template>
                            <span>Email</span>
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
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}

.text-box {
}

.heading-primary {
    color: white;
    text-align: center;
    backface-visibility: hidden;
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
