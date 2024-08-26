<template lang="html">
    <div class="ps-contact-form">
        <div class="container">
            <form class="ps-form--contact-us" action="/" method="get">
                <h3>Become A Partner</h3>
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <div class="form-group">
                            <input
                                v-model="name"
                                class="form-control"
                                type="text"
                                placeholder="Name *"
                            />
                            <p class="el-error" v-if="$v.name.$error">
                                The name is required!
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <div class="form-group">
                            <select v-model="salutation" placeholder="Salutation *" class="form-control form-select form-select-lg">
                                <option value="" selected disabled>Please select your preferred salutation</option>
                                <option>Mr</option>
                                <option>Miss</option>
                                <option>Mrs</option>
                                <option>Other</option>
                            </select>
                            <p class="el-error" v-if="$v.salutation.$error">
                                Salutation is required!
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <div class="form-group">
                            <select v-model="partner_type" placeholder="Partnership Type *" class="form-control form-select form-select-lg">
                                <option value="" selected disabled>Please select a partnership type</option>
                                <option>Authorised Distribution Partner </option>
                                <option>System Integrator</option>
                                <option>Product Line partner</option>
                                <option>Reseller</option>
                                <option>Installer</option>
                            </select>
                            <p class="el-error" v-if="$v.partner_type.$error">
                                Partnership is required!
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <div class="form-group">
                            <input
                                v-model="email"
                                class="form-control"
                                type="text"
                                placeholder="Email *"
                            />
                            <p class="el-error" v-if="$v.email.$error">
                                The email is required!
                            </p>
                            <!-- <p class="el-error" v-if="!$v.email.email">
                                Must be a valid email
                            </p> -->
                        </div>
                    </div>
                    <div
                        class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 "
                    >
                        <div class="form-group">
                            <input
                                v-model="country"
                                class="form-control"
                                type="text"
                                placeholder="Country"
                            />
                            <p class="el-error" v-if="$v.country.$error">
                                The country field is required!
                            </p>
                        </div>
                    </div>
                    <div
                        class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 "
                    >
                        <div class="form-group">
                            <input
                                v-model="phone_number"
                                class="form-control"
                                type="number"
                                placeholder="Phone Number"
                            />
                            <p class="el-error" v-if="$v.phone_number.$error">
                                The phone number field is required!
                            </p>
                        </div>
                    </div>
                    <div
                        class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 "
                    >
                        <div class="form-group">
                            <input
                                v-model="state"
                                class="form-control"
                                type="text"
                                placeholder="State/Region"
                            />
                            <p class="el-error" v-if="$v.state.$error">
                                The state is required!
                            </p>
                        </div>
                    </div>
                    <div
                        class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 "
                    >
                        <div class="form-group">
                            <input
                                v-model="company_name"
                                class="form-control"
                                type="text"
                                placeholder="Company Name"
                            />
                            <p class="el-error" v-if="$v.company_name.$error">
                                The company field is required!
                            </p>
                        </div>
                    </div>
                    <div
                        class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 "
                    >
                        <div class="form-group">
                            <input
                                v-model="years_in_business"
                                class="form-control"
                                type="number"
                                placeholder="Years In Business"
                            />
                            <p class="el-error" v-if="$v.years_in_business.$error">
                                This field is required!
                            </p>
                        </div>
                    </div>
                    

                    <div
                        class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 "
                    >
                        <div class="form-group">
                            <input
                                v-model="industry"
                                class="form-control"
                                type="text"
                                placeholder="Business Line (Industry)"
                            />
                            <p class="el-error" v-if="$v.industry.$error">
                                Industry field is required!
                            </p>
                        </div>
                    </div>
                    <div
                        class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 "
                    >
                        <div class="form-group">
                            <input
                                v-model="avg_sales"
                                class="form-control"
                                type="text"
                                placeholder="Average Sales In a Month"
                            />
                            <p class="el-error" v-if="$v.avg_sales.$error">
                                This field is required!
                            </p>
                        </div>
                    </div>
                    <div
                        class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 "
                    >
                        <div class="form-group">
                            <input
                                v-model="key_focus_area"
                                class="form-control"
                                type="text"
                                placeholder="Key focus Area"
                            />
                            <p class="el-error" v-if="$v.key_focus_area.$error">
                                This field is required!
                            </p>
                        </div>
                    </div>
                    
                </div>
                <p class="el-error" v-if="showError">
                    An error occurred
                </p>
                <div class="form-group submit">
                    <button @click.prevent="becomeAPartner" class="ps-btn" >
                        {{ loading ? 'Sending...' : 'Become a partner' }}
                    </button>
                </div>
            </form>
            <v-snackbar v-model="snackbar" :timeout="3000" :color="snackbarColor" tile>
                {{ snackBarMessage }}

                <template v-slot:action="{ attrs }">
                    <v-btn
                        color="white"
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                    >
                        Close
                    </v-btn>
                </template>
            </v-snackbar>
        </div>
    </div>
</template>

<script>
import { required, email, numeric } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
    name: 'ContactForm',
    mixins: [validationMixin],
    layout: 'layout-default-website',
    transition: 'zoom',
    data() {
        return {
            showError: false,
            showSuccess: false,
            loading: false,
            name: '',
            salutation: '',
            country: '',
            state: '',
            company_name: '',
            email: '',
            years_in_business: '',
            partner_type: '',
            industry: '',
            avg_sales: '',
            key_focus_area: '',
            phone_number: '',
            snackbar: false,
            snackbarColor: "green",
            snackBarMessage:
                'Your request has been submitted Successfully. You will be contacted by one of our customer representatives.',
        }
    },
    validations: {
        company_name: { required },
        name: { required },
        email: { required },
        phone_number: { required, numeric },
        country: { required },
        salutation: { required },
        country: { required },
        state: { required },
        years_in_business: { required },
        industry: { required },
        avg_sales: { required },
        key_focus_area: { required },
        partner_type: { required }
    },
    methods: {
        async becomeAPartner() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                console.log('11111', this.$v.$invalid);
                return false;
            } else if (this.$v.$error) {
                console.log('2222', this.$v.$error);
                return false;
            } else{
                this.loading = true
                let data = {
                    name: this.name,
                    salutation: this.salutation,
                    country: this.country,
                    state: this.state,
                    company_name: this.company_name,
                    email: this.email,
                    years_in_business: this.years_in_business,
                    industry: this.industry,
                    avg_sales: this.avg_sales,
                    key_focus_area: this.key_focus_area,
                    phone_number: this.phone_number,
                    type_of_partnership: this.partner_type
                }

                try {

                    const response = await this.$axios.$post(
                        'https://admin.zkteco-wa.com/partners',
                        data
                    );
                    console.log('yes', response);

                    this.loading = false;
                    this.snackbar = true;
                    setTimeout(() => {
                        window.location.reload();
                    }, 3001);
                }catch (error){
                    console.log('no', error);
                    this.loading = false;
                    this.showError = true;
                    this.snackbarColor = "red";
                    this.snackBarMessage = 'An error has occured, kindly contact the administrator';
                    this.snackbar = true;
                }
                


            }
        }
    }
};
</script>

<style lang="scss" scoped>
.el-error {
    font-size: 14px !important;
    color: red !important;
    font-weight: lighter !important;
}
</style>
