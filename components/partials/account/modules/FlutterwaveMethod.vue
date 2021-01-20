<template lang="html">
    <div class="ps-payment-method" id="flutterwave">
        <p>
            By making this purchase you agree to
            <a href="#" class="highlight">our terms and conditions</a>.
        </p>
        <a href="#" class="ps-btn ps-btn--fullwidth" v-if="deliveryMethod ==='2' " @click="placeOrders"
            >Make Orders</a
        >
        <a href="#" class="ps-btn ps-btn--fullwidth" v-else @click="payViaService"
            >Flutterwave</a
        >
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    name: 'FlutterwaveMethod',
    data() {
        return {
            paymentData: {
                tx_ref: this.generateReference(),
                amount: 10,
                currency: 'NGN',
                payment_options: 'card,ussd',
                redirect_url: '',
                meta: {
                    counsumer_id: '7898',
                    consumer_mac: 'kjs9s8ss7dd'
                },
                customer: {
                    name: 'Demo Customer  Name',
                    email: 'customer@mail.com',
                    phone_number: '081845***044'
                },
                customizations: {
                    title: 'ZKTeco Ecommerce',
                    description: 'Payment for items and Shipping',
                    logo:
                        'https://storage.googleapis.com/zkteco_website_bucket/zkteco_logo_905455f176/zkteco-logo.png_zkteco_logo_905455f176.png'
                },
                callback: this.makePaymentCallback,
                onclose: this.closedPaymentModal
            }
        };
    },
    methods: {
        payViaService() {
            this.payWithFlutterwave(this.paymentData);
        },
        makePaymentCallback(response) {
            console.log('Pay', response);
        },
        closedPaymentModal() {
            console.log('payment is closed');
        },
        generateReference() {
            let date = new Date();
            return date.getTime().toString();
        },
        placeOrders() {
            console.log("Makes API Calls");
        }
    },
    computed: {
        ...mapState({
            personalDetails: state => state.shipping.personalDetails,
            shippingCost: state => state.shipping.shippingCost,
            deliveryMethod:  state => state.shipping.deliveryMethod
        })
    },
    mounted () {
        this.paymentData.customer = {
            name: this.personalDetails ? this.personalDetails.firstName : '',
            email: this.personalDetails ? this.personalDetails.email: '',
            phone_number: this.personalDetails ? this.personalDetails.phoneNumber: ''
        }
    }
};
</script>

<style lang="scss">
.highlight {
    color: $color-1st;
}
#flutterwave {
    max-width: 500px;
}

.checkout {
    .checkout__container {
        .merchantlogo__mobile,
        .merchantlogo__web {
            background: black !important;
            img {
                object-fit: contain !important;
            }
        }
    }
}
</style>
