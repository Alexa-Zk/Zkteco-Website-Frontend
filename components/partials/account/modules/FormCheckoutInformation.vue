<template lang="html">
    <div class="ps-form__billing-info">
        <h3 class="ps-form__heading">
            Contact information
        </h3>
        <div class="form-group">
            <label>Email <sup>*</sup></label>
            <v-text-field
                placeholder="Email or phone number"
                outlined
                height="50"
                v-model="email"
                :error-messages="emailErrors"
                @input="$v.email.$touch()"
            />
        </div>
        <div class="form-group">
            <v-checkbox
                color="success"
                label="Keep me up to date on news and exclusive offers?"
            />
        </div>
        <h3 class="ps-form__heading mx-20">
            Shipping address
        </h3>
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label>Fullname </label>
                    <v-text-field
                        placeholder="First Name"
                        outlined
                        height="50"
                        v-model="firstName"
                        :error-messages="firstNameErrors"
                        @input="$v.firstName.$touch()"
                    />
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <label>Company Name </label>
                    <v-text-field
                        placeholder="Last Name"
                        outlined
                        height="50"
                        v-model="lastName"
                        :error-messages="lastNameErrors"
                        @input="$v.lastName.$touch()"
                    />
                </div>
            </div>
        </div>
        <div class="form-group">
            <label>Address</label>
            <v-text-field
                placeholder="Address"
                v-model="address"
                outlined
                height="50"
                :error-messages="addressErrors"
                @input="$v.address.$touch()"
            />
        </div>

        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label>Apartment</label>
                    <v-text-field
                        placeholder="Apartment, suite, etc. (optional)"
                        outlined
                        height="50"
                        v-model="apartment"
                        :error-messages="apartmentErrors"
                        @input="$v.apartment.$touch()"
                    />
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <label>Phone Number</label>
                    <v-text-field
                        placeholder="(+234) XXX XXXX XXX"
                        outlined
                        height="50"
                        v-model="phoneNumber"
                        :error-messages="phoneNumberErrors"
                        @input="$v.phoneNumber.$touch()"
                    />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label>Country</label>
                    <v-text-field
                        placeholder="Country"
                        v-model="country"
                        outlined
                        height="50"
                        :error-messages="countryErrors"
                        @input="$v.country.$touch()"
                    />
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <label>State</label>
                    <v-text-field
                        placeholder="State"
                        outlined
                        height="50"
                        v-model="state"
                        :error-messages="stateErrors"
                        @input="$v.state.$touch()"
                    />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label>City</label>
                    <v-text-field
                        placeholder="City"
                        v-model="city"
                        outlined
                        height="50"
                        :error-messages="cityErrors"
                        @input="$v.city.$touch()"
                    />
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <label>Postcode</label>
                    <v-text-field
                        placeholder="Postal Code"
                        outlined
                        height="50"
                        v-model="postalCode"
                        :error-messages="postalCodeErrors"
                        @input="$v.postalCode.$touch()"
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
                    Continue to Summary
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { email, required } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
    name: 'FormCheckoutInformation',
    data() {
        return {
            email: '',
            firstName: '',
            lastName: '',
            address: '',
            apartment: '',
            city: '',
            state: '',
            country: '',
            postalCode: '',
            phoneNumber: ''
        };
    },
    methods: {
        async handleToShipping() {
            let payload = {
                email: this.email,
                firstName: this.firstName,
                lastName: this.lastName,
                address: this.address,
                apartment: this.apartment,
                city: this.city,
                state: this.state,
                country: this.country,
                postalCode: this.postalCode,
                phoneNumber: this.phoneNumber
            };
            this.$v.$touch();
            if (!this.$v.$invalid) {
                const response = await this.$store.dispatch(
                    'shipping/getpersonalDetails',
                    payload
                );
                this.$router.push('/store/account/order-invoice');
            }
        }
    },
    mounted() {
        if (this.personalDetails) {
            this.email = this.personalDetails.email,
            this.firstName =  this.personalDetails.firstName,
            this.lastName = this.personalDetails.lastName,
            this.address = this.personalDetails.address,
            this.apartment = this.personalDetails.apartment,
            this.city = this.personalDetails.city,
            this.state = this.personalDetails.state,
            this.country = this.personalDetails.country,
            this.postalCode = this.personalDetails.postalCode,
            this.phoneNumber = this.personalDetails.phoneNumber
        }
    },
    validations: {
        email: { required },
        firstName: { required },
        lastName: { required },
        address: { required },
        apartment: { required },
        city: { required },
        state: { required },
        country: { required },
        postalCode: { required },
        phoneNumber: { required }
    },
    computed: {
        ...mapState({
            personalDetails: state => state.shipping.personalDetails
        }),
        emailErrors() {
            const errors = [];
            if (!this.$v.email.$dirty) return errors;
            !this.$v.email.required && errors.push('This field is required');
            return errors;
        },
        firstNameErrors() {
            const errors = [];
            if (!this.$v.firstName.$dirty) return errors;
            !this.$v.firstName.required &&
                errors.push('This field is required');
            return errors;
        },
        lastNameErrors() {
            const errors = [];
            if (!this.$v.lastName.$dirty) return errors;
            !this.$v.lastName.required && errors.push('This field is required');
            return errors;
        },
        addressErrors() {
            const errors = [];
            if (!this.$v.address.$dirty) return errors;
            !this.$v.address.required && errors.push('This field is required');
            return errors;
        },
        apartmentErrors() {
            const errors = [];
            if (!this.$v.apartment.$dirty) return errors;
            !this.$v.apartment.required &&
                errors.push('This field is required');
            return errors;
        },
        cityErrors() {
            const errors = [];
            if (!this.$v.city.$dirty) return errors;
            !this.$v.city.required && errors.push('This field is required');
            return errors;
        },
        stateErrors() {
            const errors = [];
            if (!this.$v.state.$dirty) return errors;
            !this.$v.state.required && errors.push('This field is required');
            return errors;
        },
        countryErrors() {
            const errors = [];
            if (!this.$v.country.$dirty) return errors;
            !this.$v.country.required && errors.push('This field is required');
            return errors;
        },
        postalCodeErrors() {
            const errors = [];
            if (!this.$v.postalCode.$dirty) return errors;
            !this.$v.postalCode.required &&
                errors.push('This field is required');
            return errors;
        },
        phoneNumberErrors() {
            const errors = [];
            if (!this.$v.phoneNumber.$dirty) return errors;
            !this.$v.phoneNumber.required &&
                errors.push('This field is required');
            return errors;
        }
    }
};
</script>

<style lang="scss" scoped>
.mx-20 {
    margin: 20px 0px;
}
</style>
