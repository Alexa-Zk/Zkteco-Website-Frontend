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
                        <i class="icon icon-cross" style="position: relative;z-index: 100"></i>
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
                            type="text"
                            placeholder="Name"
                            v-model="name"
                        />
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
                    <div>
                        <p class="message">{{ message }}</p>
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
            email: '',
            name: '',
            message: ''
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
        closeModal(){
            this.demoDialog = false
        },
        async subscribe() {
            if (this.email !== '') {
                let payload = {
                    name: this.name || "Website",
                    email: this.email
                };
                const ip = await this.$axios.$post(
                    'https://admin.zkteco-wa.com/maillists',
                    payload
                );
                this.email = '';
                this.name = '';
                this.message = 'Thanks for subscribing to our newsletter';
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
        @media (max-width: 540px) {
            display: none;
        }
        width: 40%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .popup-right {
        @media (max-width: 540px) {
            width: 100%;
            padding: 20px;
        }
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
            display: block;

            @media (max-width: 540px) {
                display: grid;
                gap: 22px;
            }

            input {
                margin: 10px 0px;
                border: 1px solid #dddddd;
                border-radius: 4px;
                transition: all 0.5s;

                &:focus {
                    border: 1px solid #000000;
                }
                @media (max-width: 540px) {
                    border: 1px solid #dddddd;
                }
            }

            .ps-btn {
                margin-top: 20px;
                width: 100%;
            }
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
.message {
    color: green;
}
</style>
