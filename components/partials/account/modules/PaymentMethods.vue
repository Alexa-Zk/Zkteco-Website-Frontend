<template lang="html">
    <div class="ps-block--methods">
        <v-tabs
            background-color="white"
            color="warning"
            class="ps-tab-list"
            grow
        >
            <v-tab tag="li" class="tab-label">
                Pay Now
            </v-tab>
            <v-tab tag="li" class="tab-label">
                Contact Us
            </v-tab>
            <v-tab-item>
                <form>
                    <div class="ps-block__content">
                        <flutterwave-method />
                    </div>
                </form>
            </v-tab-item>
            <v-tab-item>
                <div class="ps-block__content">
                    <paypal-method />
                </div>
            </v-tab-item>
        </v-tabs>
    </div>
</template>

<script>
import PaypalMethod from '~/components/partials/account/modules/PaypalMethod';
import FlutterwaveMethod from '~/components/partials/account/modules/FlutterwaveMethod';
import VisaMethod from '~/components/partials/account/modules/VisaMethod';
export default {
    name: 'PaymentMethods',
    components: { VisaMethod, PaypalMethod, FlutterwaveMethod }
};
</script>

<style lang="scss" scoped>
.tab-label {
    font-size: 16px;
    text-transform: none;
    color: $color-1st;
}
</style>
