<template lang="html">
    <div class="ps-checkout ps-section--shopping">
        <div class="container">
            <div class="ps-section__header">
                <h1>Shipping Information</h1>
            </div>
            <div class="ps-section__content">
                <div class="row">
                    <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                        <div class="ps-block--shipping">
                            <div class="ps-block__panel">
                                <figure>
                                    <small>Contact</small>
                                    <p>{{personalDetails.email}}</p>
                                    <nuxt-link to="/store/account/checkout">
                                        <a>Change</a>
                                    </nuxt-link>
                                </figure>
                                <figure>
                                    <small>Ship to</small>
                                    <p>
                                        {{personalDetails.address}} {{personalDetails.apartment}}
                                    </p>
                                    <nuxt-link to="/store/account/checkout">
                                        <a>Change</a>
                                    </nuxt-link>
                                </figure>
                            </div>
                            <h4>Shipping Method</h4>
                            <div class="ps-block__panel">
                                <figure>
                                    <small>
                                        Local Shipping
                                    </small>
                                    <strong>$20.00</strong>
                                </figure>
                            </div>
                            <div class="ps-block__footer">
                                <nuxt-link to="/store/account/checkout">
                                    <a>
                                        <i class="icon-arrow-left mr-2"></i>
                                        Return to information
                                    </a>
                                </nuxt-link>
                                <nuxt-link
                                    to="/store/account/payment"
                                    class="ps-btn"
                                >
                                    Continue to payment
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div
                        class="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order"
                    >
                        <module-order-summary :shipping="true" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

import ModuleOrderSummary from '~/components/partials/account/modules/ModuleOrderSummary';
export default {
    name: 'Shipping',
    components: { ModuleOrderSummary },
    computed: {
        ...mapState({
            personalDetails: state => state.shipping.personalDetails
        })
    }
};
</script>

<style lang="scss" scoped></style>
