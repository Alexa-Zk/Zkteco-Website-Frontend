<template lang="html">
    <div class="ps-payment-method" id="flutterwave">
        <p>
            By making this purchase you agree to
            <a href="#" class="highlight">our terms and conditions</a>.
        </p>
        <a
            href=""
            class="ps-btn ps-btn--fullwidth"
            v-if="deliveryMethod === '2'"
            @click.prevent="placeOrders"
            >Make Orders</a
        >
        <a
            href="#"
            class="ps-btn ps-btn--fullwidth"
            v-else
            @click.prevent="payViaService"
            >Flutterwave</a
        >
    </div>
</template>

<script>
import { mapState } from 'vuex';
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
        async makePaymentCallback(response) {
            if (response) {
                try {
                    const productItem = this.cartItem.map(
                        ({ id, quantity, price }) => ({
                            product_id: id,
                            quantity: quantity,
                            product_cost: price ? price : 0
                        })
                    );
                    const shipping = {
                        first_name: this.personalDetails.firstName,
                        last_name: this.personalDetails.lastName,
                        address_1: this.personalDetails.address,
                        address_2: this.personalDetails.apartment,
                        city: this.personalDetails.city,
                        postcode: this.personalDetails.postCode,
                        phone: this.personalDetails.phoneNumber
                    };
                    const payload = {
                        payment_method:
                            this.deliveryMethod === '3' ? 'Pick up' : '',
                        payment_method_title:
                            this.deliveryMethod === '3' ? 'Pick up' : '',
                        shipping_cost: this.shippingCost,
                        products: productItem,
                        shipping: shipping
                    };
                    const response = await this.$store.dispatch(
                        'product/getOrders',
                        payload
                    );
                    if (response) {
                        this.$notify({
                            group: 'addCartSuccess',
                            title: 'Success!',
                            text: `Order Created`
                        });
                        const response = await this.$store.dispatch(
                            'app/removeCookie',
                            payload
                        );
                        this.$router.push('/store/shop');
                    } else {
                        return;
                    }
                } catch (error) {
                    this.$notify({
                        group: 'addCartSuccess',
                        title: 'Error!',
                        text: `Something went wrong!`
                    });
                }
            }
        },
        closedPaymentModal() {
            console.log('payment is closed');
            this.$router.push('/store/shop');
        },
        generateReference() {
            let date = new Date();
            return date.getTime().toString();
        },
        async placeOrders() {
            try {
                const productItem = this.cartItem.map(
                    ({ id, quantity, price }) => ({
                        product_id: id,
                        quantity: quantity,
                        product_cost: price ? price : 0
                    })
                );
                const shipping = {
                    first_name: this.personalDetails.firstName,
                    last_name: this.personalDetails.lastName,
                    address_1: this.personalDetails.address,
                    address_2: this.personalDetails.apartment,
                    city: this.personalDetails.city,
                    postcode: this.personalDetails.postCode,
                    phone: this.personalDetails.phoneNumber
                };
                const payload = {
                    payment_method:
                        this.deliveryMethod === '2' ? 'Pay On Delivery' : '',
                    payment_method_title:
                        this.deliveryMethod === '2' ? 'Pay On Delivery' : '',
                    shipping_cost: this.shippingCost,
                    products: productItem,
                    shipping: shipping
                };
                const response = await this.$store.dispatch(
                    'product/getOrders',
                    payload
                );
                if (response) {
                    this.$notify({
                        group: 'addCartSuccess',
                        title: 'Success!',
                        text: `Order Created. You will be contacted shortly`
                    });
                    const response = await this.$store.dispatch(
                        'app/removeCookie',
                        payload
                    );
                    this.$router.push('/store/shop');
                } else {
                    return;
                }
            } catch (error) {
                this.$notify({
                    group: 'addCartSuccess',
                    title: 'Error!',
                    text: `Orders not created. Something went wrong!`
                });
            }
        }
    },
    computed: {
        ...mapState({
            personalDetails: state => state.shipping.personalDetails,
            shippingCost: state => state.shipping.shippingCost,
            deliveryMethod: state => state.shipping.deliveryMethod,
            cartItem: state => state.cart.cartItems
        })
    },
    mounted() {
        this.paymentData.customer = {
            name: this.personalDetails ? this.personalDetails.firstName : '',
            email: this.personalDetails ? this.personalDetails.email : '',
            phone_number: this.personalDetails
                ? this.personalDetails.phoneNumber
                : ''
        };
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
