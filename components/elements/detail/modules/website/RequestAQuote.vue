<template>
    <div>
        <form class="ps-form--contact-us btc-form--contact-us">
            <h3>Request a quote</h3>
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12 ">
                    <div class="form-group">
                        <label>Name </label>
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Name"
                            v-model.trim="$v.name.$model"
                        />

                        <p class="el-error" v-if="$v.name.$error">
                            The name is required!
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12 ">
                    <div class="form-group">
                        <label>Company</label>
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Company"
                            required
                            v-model.trim="$v.company.$model"
                        />
                        <p class="el-error" v-if="$v.name.$error">
                            Company is required!
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12 ">
                    <div class="form-group">
                        <label>Country </label>
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Country"
                            required
                            v-model.trim="$v.country.$model"
                        />
                        <p class="el-error" v-if="$v.name.$error">
                            Country is required!
                        </p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12 ">
                    <div class="form-group">
                        <label>Email</label>
                        <input
                            class="form-control"
                            type="email"
                            placeholder="Email "
                            v-model="email"
                        />
                        <p class="el-error" v-if="$v.email.$error">
                            The email is required!
                        </p>
                        <p class="el-error" v-if="!$v.email.email">
                            Must be a valid email
                        </p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12 ">
                    <div class="form-group">
                        <label>Phone Number</label>
                        <input
                            class="form-control"
                            type="number"
                            placeholder="Phone Number"
                            v-model="phone"
                        />
                        <p class="el-error" v-if="$v.phone.$error">
                            Phone Number is required!
                        </p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12 ">
                    <div class="form-group">
                        <label>
                            Where did you hear/see about us
                        </label>
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Where did you hear/see about us"
                            v-model="about_us"
                        />
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                    <div class="form-group">
                        <label>Message </label>

                        <textarea
                            class="form-control"
                            v-model="additional_request"
                            placeholder="Message "
                            id="floatingTextarea"
                        ></textarea>
                    </div>
                </div>

                <br /><br />
            </div>
            <div class="row">
                <div class="form-group submit" style="margin-top: 10px;">
                    <button
                        @click.prevent="willContactUs"
                        class="ps-btn ps-btn--fullwidth"
                    >
                        {{ loading ? 'Sending...' : 'Send' }}
                    </button>
                </div>
                <p class="el-error" v-if="showError">
                    An error occurred
                </p>
                <p
                    style="font-size: 14px; color: green; font-weight: 600;"
                    v-if="showSuccess"
                >
                    You will be contacted shortly!!
                </p>
            </div>
        </form>
        <v-snackbar v-model="snackbar" :timeout="3000" color="green" tile>
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
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email, numeric } from 'vuelidate/lib/validators';

export default {
    name: 'RequestAQuote',
    mixins: [validationMixin],
    data() {
        return {
            snackBarMessage:
                'Form Submitted Successfully. You will be contacted by one of our customer representatives.',
            snackbar: false,
            showError: false,
            showSuccess: false,
            loading: '',
            name: '',
            company: '',
            country: '',
            email: '',
            phone: '',
            about_us: '',
            additional_request: ''
        };
    },
    validations: {
        name: { required },
        company: { required },
        country: { required },
        email: { required, email },
        phone: { required },
        additional_request: { required }
    },
    methods: {
        resetForm() {
            this.name = '';
            this.company = '';
            this.country = '';
            this.email = '';
            this.phone = '';
            this.about_us = '';
            this.additional_request = '';
        },
        async willContactUs() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                return false;
            } else if (this.$v.$error) {
                return false;
            } else {
                this.loading = true;
                const payload = {
                    company_name: this.company,
                    contact_name: this.name,
                    country: this.country,
                    email: this.email,
                    phone: this.phone,
                    route: this.$route.params.id,
                    about_us: this.about_us,
                    additional_request: this.additional_request
                };
                const response = await this.$store.dispatch(
                    'website/requestAProductQuote',
                    payload
                );

                if (response) {
                    this.loading = false;
                    this.snackbar = true;
                    this.showError = false;

                    setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        window.location.reload();
                    }, 3001);
                } else {
                    this.loading = false;
                    this.showSuccess = false;
                    this.showError = true;
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
input,
textarea {
    width: 16vw;
}

@media screen and (max-width: 568px) {
    .quote {
        display: flex;
    }

    input,
    textarea {
        width: 80vw;
    }
}
</style>
