<template lang="html">
    <section class="ps-my-account ps-page--account">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ps-section--account-setting">
                        <div class="ps-section__header">
                            <h3>
                                Order Summary
                            </h3>
                        </div>
                        <div class="ps-section__content ps-form--checkout">
                            <div class="row">
                                <div class="col-md-4 col-12">
                                    <figure class="ps-block--invoice">
                                        <figcaption>
                                            Address
                                        </figcaption>
                                        <div class="ps-block__content">
                                            <strong>
                                                {{user.firstName}} {{user.lastName}}
                                            </strong>
                                            <p>
                                                Address: {{user.address}}, {{user.apartment}}
                                            </p>
                                            <p>
                                                Phone: {{user.phoneNumber}}
                                            </p>
                                        </div>
                                    </figure>
                                </div>
                                <div class="col-md-4 col-12">
                                    <figure class="ps-block--invoice">
                                        <figcaption>
                                            User Information
                                        </figcaption>
                                        <div class="ps-block__content">
                                            <p>
                                                Email: {{user.email}}
                                            </p>
                                        </div>
                                        
                                    </figure>
                                </div>
                                
                            </div>
                            <div class="table-responsive">
                                <TableInvoice :products="cartProducts" />
                            </div>
                            <div class="ps-form__submit">
                                <nuxt-link to="/store/account/checkout">
                                    <i class="icon-arrow-left mr-1"></i>
                                    Back to checkout
                                </nuxt-link>
                                <div class="ps-block__footer">
                                    <button class="ps-btn" @click="handleCreateOrders">
                                        Create orders
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import AccountLinks from './modules/AccountLinks';
import TableInvoice from './modules/TableInvoice';
export default {
    name: 'InvoiceDetail',
    components: { TableInvoice, AccountLinks },
    computed: {
        ...mapState({
            user: state => state.shipping.personalDetails,
            cartProducts: state => state.product.cartProducts,
            shippingCost: state => state.shipping.shippingCost,
            deliveryMethod: state => state.shipping.deliveryMethod,
            cartItem: state => state.cart.cartItems
        })
    },
    data() {
        return {
            
        };
    },
    methods: {
        async handleCreateOrders() {
            try {
                const productItem = this.cartItem.map(
                    ({ id, quantity, price }) => ({
                        product_id: id,
                        quantity: quantity,
                        product_cost: price ? price : 0
                    })
                );
                const shipping = {
                    email: this.user.email,
                    full_name: this.user.firstName,
                    company: this.user.lastName,
                    address_1: this.user.address,
                    city: this.user.city,
                    postcode: this.user.postCode,
                    phone: this.user.phoneNumber
                };
                const payload = {
                    payment_method: 'Pay On Delivery',
                    payment_method_title: 'Pay On Delivery',
                    use_exist_shipping: true,
                    shipping_cost: this.shippingCost,
                    products: productItem,
                    shipping: shipping
                };
                const response = await this.$store.dispatch(
                    'product/getOrders',
                    payload
                );
                if (response.status === 200) {
                    this.$notify({
                        group: 'addCartSuccess',
                        title: 'Success!',
                        text: `Order Created. You will be contacted shortly`
                    });
                    const reponse = await this.$store.dispatch(
                        'app/removeCookie',
                        payload
                    );
                    const ClearCartCookies = await this.$store.dispatch(
                        'app/removeCookie',
                        payload
                    );
                    const clearCart = await this.$store.dispatch(
                        'cart/clearAllCartState',
                        payload
                    );
                    const clearCartProduct = await this.$store.dispatch(
                        'product/clearAllCartState',
                        payload
                    );
                    this.$router.push('/store/page/thank-you');
                } else {
                    this.$notify({
                        title: 'Error!',
                        text: `Order not created`
                    });
                }
            } catch (error) {
                this.$notify({
                    group: 'addCartSuccess',
                    title: 'Error!',
                    text: `Orders not created. Something went wrong!`
                });
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
