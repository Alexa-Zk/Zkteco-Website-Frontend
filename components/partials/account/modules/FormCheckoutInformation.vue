<template lang="html">
    <div class="ps-form__billing-info">
        <h3 class="ps-form__heading">
            Contact information
        </h3>
        <div class="form-group">
            <label>Email or phone number <sup>*</sup></label>
            <v-text-field
                placeholder="Email or phone number"
                outlined
                height="50"
                v-model="payload.email"
            />
        </div>
        <div class="form-group">
            <v-checkbox
                color="success"
                label="Keep me up to date on news and exclusive offers?"
            />
        </div>
        <h3 class="ps-form__heading">
            Shipping address
        </h3>
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label>First Name </label>
                    <v-text-field
                        placeholder="First Name"
                        outlined
                        height="50"
                        v-model="payload.firstName"
                    />
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <label>Last Name </label>
                    <v-text-field
                        placeholder="Last Name"
                        outlined
                        height="50"
                        v-model="payload.lastName"
                    />
                </div>
            </div>
        </div>
        <div class="form-group">
            <label>Address</label>
            <v-text-field placeholder="Address" v-model="payload.address" outlined height="50" />
        </div>
        <div class="form-group">
            <label>Apartment</label>
            <v-text-field
                placeholder="Apartment, suite, etc. (optional)"
                outlined
                height="50"
                v-model="payload.apartment"
            />
        </div>
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label>City</label>
                    <v-text-field placeholder="City" v-model="payload.city" outlined height="50" />
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <label>Postcode</label>
                    <v-text-field
                        placeholder="Postal Code"
                        outlined
                        height="50"
                        v-model="payload.postalCode"
                    />
                </div>
            </div>
        </div>
        <div class="form-group">
            <v-checkbox
                color="success"
                label="Save this information for next time"
            />
        </div>
        <div class="ps-form__submit">
            <nuxt-link to="/store/account/shopping-cart">
                <i class="icon-arrow-left mr-1"></i>
                Return to shopping cart
            </nuxt-link>
            <div class="ps-block__footer">
                <button class="ps-btn" @click="handleToShipping">
                    Continue to shipping
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'FormCheckoutInformation',
    data () {
        return {
            payload: {
                email: '',
                firstName: '',
                lastName: '',
                address: '',
                apartment: '',
                city: '',
                postalCode: '',
            }
        }
    },
    methods: {
        async handleToShipping() {
            const response = await this.$store.dispatch(
                'shipping/getpersonalDetails',
                this.payload
            );
            this.$router.push('/store/account/shipping');
        }
    },
    mounted() {
        this.personalDetails ? this.payload = this.personalDetails : this.payload = this.payload
        // this.payload = this.personalDetails;
    },
    computed: {
        ...mapState({
            personalDetails: state => state.shipping.personalDetails
        })
    }
};
</script>

<style lang="scss" scoped></style>
