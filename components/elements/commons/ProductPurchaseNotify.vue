<template lang="html">
    <v-dialog v-model="demoDialog" width="800" height="500">
        <div class="ps-page--subscriber">
            <div class="popup-left">
                <img src="~/static/img/website/newsletter-image1.png" />
            </div>
            <div class="popup-right">
                <div>
                    <a
                        class="ps-page__close"
                        @click.prevent="demoDialog = false"
                    >
                        <i
                            class="icon icon-cross"
                            style="position: relative;z-index: 100"
                        ></i>
                    </a>
                    <h3>
                        Join thousands of businesses with a headstart
                    </h3>

                    <p>
                        Subscribe to receive a special 10% discount on your next purchase
                    </p>

                    <div class="form-group--nest">
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Fullname"
                            v-model="name"
                        />
                        <input
                            class="form-control"
                            type="email"
                            placeholder="Email address"
                            v-model="email"
                        />
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Company Name"
                            v-model="company_name"
                        />
                        <input
                            class="form-control"
                            type="number"
                            placeholder="Phone Number"
                            v-model="phone"
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
            demoDialog: false,
            email: '',
            name: '',
            company_name: '',
            phone: '',
            message: ''
        };
    },
    mounted() {
        console.log('hiii');
        this.runPopupModalSubscriber();
    },
    methods: {
        runPopupModalSubscriber() {
            const checkSubscriber = localStorage.getItem('PRODUCT_SUBSCRIPTION');
            if (!checkSubscriber) {
                this.demoDialog = true;
            }
        },
        closeModal() {
            this.demoDialog = false;
        },
        async subscribe() {
            if (this.email !== '') {
                let payload = {
                    fullname: this.name || 'Website',
                    email: this.email,
                    company_name: this.company_name,
                    phone_number: this.phone
                };
                const ip = await this.$axios.$post(
                    'https://admin.zkteco-wa.com/product-subscribers',
                    payload
                );
                localStorage.setItem('PRODUCT_SUBSCRIPTION', true);
                this.email = '';
                this.name = '';
                this.message = 'Thanks for subscribing to the product discount';
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
