<template lang="html">
    <v-dialog v-model="demoDialog" width="800" height="500">
        <div class="ps-page--subscriber">
            <div class="popup-left">
                <img src="~/static/img/website/newsletter-image.png" />
            </div>
            <div class="popup-right">
                <div>
                    <a
                        class="ps-page__close"
                        @click.prevent="demoDialog = false"
                    >
                        <i class="icon icon-cross"></i>
                    </a>
                    <h3>
                        Join thousands of businesses with a headstart
                    </h3>

                    <p>
                        Stay up to date with the latest articles and business
                        updates. You'll even get special recommendations weekly.
                    </p>

                    <div class="form-group--nest">
                        <input
                            class="form-control"
                            type="email"
                            placeholder="Email address"
                            v-model="email"
                        />
                        <button class="ps-btn" @click.prevent="subscribe">
                            {{ $t('common.subscribe') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </v-dialog>
</template>

<script>
import PageLinks from '~/components/shared/demo-panel/PageLinks';
export default {
    name: 'DemoPanel',
    components: { PageLinks },
    data() {
        return {
            demoDialog: true,
            email: ''
        };
    },
    mounted() {
        this.runPopupModalSubscriber();
    },
    methods: {
        runPopupModalSubscriber() {
            const checkSubscriber = localStorage.getItem('SUBSCRIBER_POPUP');
            if (checkSubscriber) {
                this.demoDialog = false;
            }
            localStorage.setItem('SUBSCRIBER_POPUP', true);
        },
        async subscribe() {
            if (this.email !== '') {
                let payload = {
                    name: 'From the Website',
                    email: this.email
                };
                const ip = await this.$axios.$post(
                    'https://admin.zkteco-wa.com/maillists',
                    payload
                );
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-page--subscriber {
    background: white;
    display: flex;
    justify-content: space-between;

    p {
        margin: 0px;
    }

    .popup-left {
        width: 40%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .popup-right {
        width: 60%;
        padding: 60px 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        h3 {
            color: black;
        }

        .form-group--nest {
            margin-top: 40px;
        }

        .ps-btn {
            color: white;
        }
        .ps-page__close {
            position: absolute;
            top: 23px;
            right: 42px;
        }
    }
}
</style>
