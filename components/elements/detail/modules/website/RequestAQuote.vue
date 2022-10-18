<template>
    <div>
        <div class="form_wrapper">
            <div class="form_container">
                <div class="title_container">
                    <h2>Request a Quote</h2>
                </div>
                <div class="row clearfix">
                    <div class="">
                        <div class="input_field">
                            <span
                                ><i aria-hidden="true" class="fa fa-user"></i
                            ></span>
                            <input
                                type="text"
                                v-model.trim="$v.name.$model"
                                placeholder="Name"
                                required
                            />
                            <p class="el-error" v-if="$v.name.$error">
                                The name is required!
                            </p>
                        </div>
                        <div class="input_field select_option">
                            <select v-model.trim="$v.category.$model">
                                <option disabled value=""
                                    >Select a Category</option
                                >
                                <option
                                    class="form-group"
                                    v-for="(category, i) in categoryArray"
                                    :key="i"
                                    >{{ category }}</option
                                >
                            </select>
                            <p class="el-error" v-if="$v.category.$error">
                                Category is required!
                            </p>
                            <div class="select_arrow"></div>
                        </div>
                        <div class="input_field">
                            <span
                                ><i
                                    aria-hidden="true"
                                    class="fa fa-suitcase"
                                ></i
                            ></span>
                            <input
                                type="text"
                                v-model.trim="$v.company.$model"
                                placeholder="Company"
                                required
                            />
                            <p class="el-error" v-if="$v.name.$error">
                                Company is required!
                            </p>
                        </div>
                        <div class="input_field">
                            <span
                                ><i
                                    aria-hidden="true"
                                    class="fa fa-envelope"
                                ></i
                            ></span>
                            <input
                                type="email"
                                v-model="email"
                                placeholder="Email"
                                required
                            />
                            <p class="el-error" v-if="$v.email.$error">
                                The email is required!
                            </p>
                            <p class="el-error" v-if="!$v.email.email">
                                Must be a valid email
                            </p>
                        </div>
                        <div class="input_field">
                            <span
                                ><i aria-hidden="true" class="fa fa-phone"></i
                            ></span>
                            <input
                                type="text"
                                v-model="phone"
                                placeholder="Phone"
                                required
                            />
                            <p class="el-error" v-if="$v.phone.$error">
                                Phone Number is required!
                            </p>
                        </div>

                        <div class="input_field select_option">
                            <select v-model.trim="$v.country.$model">
                                <option disabled value=""
                                    >Select a Country</option
                                >
                                <option
                                    class="form-group"
                                    v-for="(country, i) in countryArray"
                                    :key="i"
                                    >{{ country }}</option
                                >
                            </select>
                            <p class="el-error" v-if="$v.country.$error">
                                Country is required!
                            </p>
                            <div class="select_arrow"></div>
                        </div>

                        <div class="input_field">
                            <span
                                ><i aria-hidden="true" class="fa fa-map"></i
                            ></span>
                            <input
                                type="text"
                                v-model.trim="$v.city.$model"
                                placeholder="City"
                                required
                            />
                            <p class="el-error" v-if="$v.city.$error">
                                City is required!
                            </p>
                        </div>

                        <div class="input_field">
                            <span
                                ><i aria-hidden="true" class="fa fa-hashtag"></i
                            ></span>
                            <input
                                type="text"
                                v-model.trim="$v.devices.$model"
                                placeholder="How many devices"
                                required
                            />
                            <p class="el-error" v-if="$v.devices.$error">
                                Device is required!
                            </p>
                        </div>

                        <div class="input_field">
                            <span
                                ><i
                                    aria-hidden="true"
                                    class="fa fa-envelope"
                                ></i
                            ></span>
                            <input
                                type="text"
                                placeholder="message"
                                v-model="additional_request"
                                required
                            />
                        </div>
                        <input
                            class="button"
                            type="submit"
                            value="Submit"
                            @click.prevent="willContactUs"
                        />
                    </div>
                </div>
                <v-snackbar
                    v-model="snackbar"
                    :timeout="3000"
                    color="green"
                    tile
                >
                    {{ snackBarMessage }}
                </v-snackbar>
            </div>
        </div>
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
            additional_request: '',
            city: '',
            device: '',
            category: '',
            countryArray: [
                'Nigeria',
                'Benin',
                'Burkina Faso',
                'Cape Verde',
                'Cameroon',
                "Côte D'Ivoire",
                'Gambia',
                'Ghana',
                'Guinea',
                'Guinea-Bissau',
                'Liberia',
                'Mali',
                'Mauritania',
                'Niger',
                'Senegal',
                'Sierra Leone',
                'Togo'
            ],
            categoryArray: [
                'INSTALLER',
                'END-USER',
                'RESELLER',
                'PROJECT MANAGER'
            ]
        };
    },
    validations: {
        name: { required },
        company: { required },
        country: { required },
        email: { required, email },
        phone: { required },
        additional_request: { required },
        city: { required },
        devices: { required },
        category: { required }
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
            this.city = '';
            this.devices = '';
            this.category = '';
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
                    additional_request: this.additional_request,
                    city: this.city,
                    devices: this.devices,
                    category: this.category
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
$yellow: #e1f3dc;
$black: #000000;
$grey: #cccccc;

body {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 14px;
    background: #f2f2f2;
}

.clearfix {
    justify-content: center;
    &:after {
        content: '';
        display: block;
        clear: both;
        visibility: hidden;
        height: 0;
    }
}
.form_wrapper {
    background: #fff;
    width: 400px;
    max-width: 100%;
    box-sizing: border-box;
    padding: 25px;
    margin: 8% auto 0;
    position: relative;
    z-index: 1;
    border-top: 5px solid #78bc27;
    -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    -webkit-transition: none;
    transition: none;
    -webkit-animation: expand 0.8s 0.6s ease-out forwards;
    animation: expand 0.8s 0.6s ease-out forwards;
    opacity: 0;
    h2 {
        font-size: 1.5em;
        line-height: 1.5em;
        margin: 0;
        color: #999;
    }
    .title_container {
        text-align: center;
        padding-bottom: 15px;
    }
    h3 {
        font-size: 1.1em;
        font-weight: normal;
        line-height: 1.5em;
        margin: 0;
    }
    label {
        font-size: 12px;
    }
    .row {
        margin: 10px -15px;
        > div {
            padding: 0 15px;
            box-sizing: border-box;
        }
    }
    .col_half {
        width: 50%;
        float: left;
    }
    .input_field {
        position: relative;
        margin-bottom: 20px;
        -webkit-animation: bounce 0.6s ease-out;
        animation: bounce 0.6s ease-out;
        > span {
            position: absolute;
            left: 0;
            top: 0;
            color: #333;
            height: 100%;
            border-right: 1px solid $grey;
            text-align: center;
            width: 30px;
            > i {
                padding-top: 10px;
            }
        }
    }
    .textarea_field {
        > span {
            > i {
                padding-top: 10px;
            }
        }
    }
    input {
        &[type='text'],
        &[type='email'],
        &[type='password'] {
            width: 100%;
            padding: 8px 10px 9px 35px;
            height: 35px;
            border: 1px solid $grey;
            box-sizing: border-box;
            outline: none;
            -webkit-transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            -ms-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
        }
        &[type='text']:hover,
        &[type='email']:hover,
        &[type='password']:hover {
            background: #fafafa;
        }
        &[type='text']:focus,
        &[type='email']:focus,
        &[type='password']:focus {
            -webkit-box-shadow: 0 0 2px 1px rgba(0, 255, 51, 0.5);
            -moz-box-shadow: 0 0 2px 1px rgba(0, 255, 51, 0.5);
            box-shadow: 0 0 2px 1px rgba(0, 255, 51, 0.3);
            border: 1px solid $yellow;
            background: #fafafa;
        }
        &[type='submit'] {
            background: #78bc27; // $yellow;
            height: 35px;
            line-height: 35px;
            width: 100%;
            border: none;
            outline: none;
            cursor: pointer;
            color: #fff;
            font-size: 1.1em;
            margin-bottom: 10px;
            -webkit-transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            -ms-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
            &:hover {
                background: darken($yellow, 7%);
                color: #000000;
            }
            &:focus {
                background: darken($yellow, 7%);
            }
        }
        &[type='checkbox'],
        &[type='radio'] {
            border: 0;
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
        }
    }
}
.form_container {
    .row {
        .col_half.last {
            border-left: 1px solid $grey;
        }
    }
}
.checkbox_option {
    label {
        margin-right: 1em;
        position: relative;
        &:before {
            content: '';
            display: inline-block;
            width: 0.5em;
            height: 0.5em;
            margin-right: 0.5em;
            vertical-align: -2px;
            border: 2px solid $grey;
            padding: 0.12em;
            background-color: transparent;
            background-clip: content-box;
            transition: all 0.2s ease;
        }
        &:after {
            border-right: 2px solid $black;
            border-top: 2px solid $black;
            content: '';
            height: 20px;
            left: 2px;
            position: absolute;
            top: 7px;
            transform: scaleX(-1) rotate(135deg);
            transform-origin: left top;
            width: 7px;
            display: none;
        }
    }
    input {
        &:hover + label:before {
            border-color: $black;
        }
        &:checked + label {
            &:before {
                border-color: $black;
            }
            &:after {
                -moz-animation: check 0.8s ease 0s running;
                -webkit-animation: check 0.8s ease 0s running;
                animation: check 0.8s ease 0s running;
                display: block;
                width: 7px;
                height: 20px;
                border-color: $black;
            }
        }
    }
}
.radio_option {
    label {
        margin-right: 1em;
        &:before {
            content: '';
            display: inline-block;
            width: 0.5em;
            height: 0.5em;
            margin-right: 0.5em;
            border-radius: 100%;
            vertical-align: -3px;
            border: 2px solid $grey;
            padding: 0.15em;
            background-color: transparent;
            background-clip: content-box;
            transition: all 0.2s ease;
        }
    }
    input {
        &:hover + label:before {
            border-color: $black;
        }
        &:checked + label:before {
            background-color: $black;
            border-color: $black;
        }
    }
}
.select_option {
    position: relative;
    width: 100%;
    select {
        display: inline-block;
        width: 100%;
        height: 35px;
        padding: 0px 15px;
        cursor: pointer;
        color: #7b7b7b;
        border: 1px solid $grey;
        border-radius: 0;
        background: #fff;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        transition: all 0.2s ease;
        &::-ms-expand {
            display: none;
        }
        &:hover,
        &:focus {
            color: $black;
            background: #fafafa;
            border-color: $black;
            outline: none;
        }
    }
}
.select_arrow {
    position: absolute;
    top: calc(50% - 4px);
    right: 15px;
    width: 0;
    height: 0;
    pointer-events: none;
    border-width: 8px 5px 0 5px;
    border-style: solid;
    border-color: #7b7b7b transparent transparent transparent;
}

.select_option select {
    &:hover + .select_arrow,
    &:focus + .select_arrow {
        border-top-color: $black;
    }
}
.credit {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 15px;
    color: $yellow;
    a {
        color: darken($yellow, 7%);
    }
}
@-webkit-keyframes check {
    0% {
        height: 0;
        width: 0;
    }
    25% {
        height: 0;
        width: 7px;
    }
    50% {
        height: 20px;
        width: 7px;
    }
}

@keyframes check {
    0% {
        height: 0;
        width: 0;
    }
    25% {
        height: 0;
        width: 7px;
    }
    50% {
        height: 20px;
        width: 7px;
    }
}

@-webkit-keyframes expand {
    0% {
        -webkit-transform: scale3d(1, 0, 1);
        opacity: 0;
    }
    25% {
        -webkit-transform: scale3d(1, 1.2, 1);
    }
    50% {
        -webkit-transform: scale3d(1, 0.85, 1);
    }
    75% {
        -webkit-transform: scale3d(1, 1.05, 1);
    }
    100% {
        -webkit-transform: scale3d(1, 1, 1);
        opacity: 1;
    }
}

@keyframes expand {
    0% {
        -webkit-transform: scale3d(1, 0, 1);
        transform: scale3d(1, 0, 1);
        opacity: 0;
    }
    25% {
        -webkit-transform: scale3d(1, 1.2, 1);
        transform: scale3d(1, 1.2, 1);
    }
    50% {
        -webkit-transform: scale3d(1, 0.85, 1);
        transform: scale3d(1, 0.85, 1);
    }
    75% {
        -webkit-transform: scale3d(1, 1.05, 1);
        transform: scale3d(1, 1.05, 1);
    }
    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
}

@-webkit-keyframes bounce {
    0% {
        -webkit-transform: translate3d(0, -25px, 0);
        opacity: 0;
    }
    25% {
        -webkit-transform: translate3d(0, 10px, 0);
    }
    50% {
        -webkit-transform: translate3d(0, -6px, 0);
    }
    75% {
        -webkit-transform: translate3d(0, 2px, 0);
    }
    100% {
        -webkit-transform: translate3d(0, 0, 0);
        opacity: 1;
    }
}

@keyframes bounce {
    0% {
        -webkit-transform: translate3d(0, -25px, 0);
        transform: translate3d(0, -25px, 0);
        opacity: 0;
    }
    25% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0);
    }
    50% {
        -webkit-transform: translate3d(0, -6px, 0);
        transform: translate3d(0, -6px, 0);
    }
    75% {
        -webkit-transform: translate3d(0, 2px, 0);
        transform: translate3d(0, 2px, 0);
    }
    100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
}
@media (max-width: 600px) {
    .form_wrapper {
        .col_half {
            width: 100%;
            float: none;
        }
    }
    .bottom_row {
        .col_half {
            width: 50%;
            float: left;
        }
    }
    .form_container {
        .row {
            .col_half.last {
                border-left: none;
            }
        }
    }
    .remember_me {
        padding-bottom: 20px;
    }
}

.el-error {
    font-size: 14px !important;
    color: red !important;
    font-weight: lighter !important;
}

// input,
// select,
// textarea {
//     width: 25rem;
// }

// h3 {
//     margin-bottom: 20px;
// }

@media screen and (max-width: 568px) {
    .quote {
        display: flex;
    }

    input,
    select,
    textarea {
        width: 80vw;
    }
}
</style>
