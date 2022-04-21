<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-my-account">
            <div class="container">
                <div class="ps-form--account">
                    <ul class="ps-tab-list">
                        <li >
                            <nuxt-link to="/auth/login">
                                Login
                            </nuxt-link>
                        </li>
                        <li class="active">
                            <nuxt-link to="/auth/register">
                                Register
                            </nuxt-link>
                        </li>
                    </ul>
                    <div class="ps-tab active">
                        <form>
                            <div class="ps-form__content">
                                <h5>Register</h5>
                                <div class="form-group">
                                    <v-text-field
                                        v-model="username"
                                        class="ps-text-field"
                                        :error-messages="usernameErrors"
                                        @input="$v.username.$touch()"
                                        placeholder="Please enter fullname"
                                        height="50"
                                        outlined
                                    />
                                </div>
                                <div class="form-group">
                                    <v-text-field
                                        v-model="email"
                                        class="ps-text-field"
                                        :error-messages="emailErrors"
                                        @input="$v.email.$touch()"
                                        placeholder="Please enter email"
                                        height="50"
                                        outlined
                                    />
                                </div>
                                <div class="form-group">
                                    <v-text-field
                                        v-model="password"
                                        type="password"
                                        class="ps-text-field"
                                        :error-messages="passwordErrors"
                                        @input="$v.password.$touch()"
                                        placeholder="Please enter password"
                                        height="50"
                                        outlined
                                    />
                                </div>
                                <div class="form-group">
                                    <v-checkbox :error-messages="checkboxErrors" @change="$v.checkbox.$touch()" color="success" v-model="checkbox">
                                        <template v-slot:label>
                                            <div class="agreement_link">
                                                I have read and agree to
                                                <a target="_blank" href="/website/page/privacy-policy" @click.stop>
                                                    Membership Registration Agreement
                                                </a>,
                                                <a target="_blank" href="/website/page/privacy-policy" @click.stop>
                                                   Privacy Policy
                                                </a>
                                            
                                            </div>
                                        </template>
                                    </v-checkbox>
                                </div>
                                <div class="form-group submit">
                                    <button
                                        type="submit"
                                        class="ps-btn ps-btn--fullwidth"
                                        @click.prevent="handleSubmit"
                                    >
                                        {{
                                            loading
                                                ? 'Authenticating...'
                                                : 'Login'
                                        }}
                                    </button>
                                </div>
                                <v-alert
                                    v-if="showAlert"
                                    class="mt-4"
                                    dense
                                    outlined
                                    type="error"
                                >
                                    {{ error_alert }}
                                </v-alert>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import Login from '~/components/partials/account/Login';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';
import { required, email } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
    name: 'Login',
    mixins: [validationMixin],
    components: {
        HeaderMobile,
        Login,
        BreadCrumb
    },
    transition: 'zoom',
    layout: 'empty',
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Login'
                }
            ],
            loading: false,
            username: null,
            email: null,
            checkbox: '',
            password: null,
            error_alert: '',
            showAlert: false
        };
    },
    validations: {
        username: { required },
        password: { required },
        email: { required, email },
        checkbox: { required }
    },
    methods: {
        async handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.loading = true;
                const response = await this.$store.dispatch('auth/registerDownload', {
                    username: this.username,
                    email: this.email,
                    password: this.password
                });
                if (response.status === 200) {
                    let payload = {
                        name: this.username,
                        email: this.email
                    };
                    await this.$axios.$post(
                        'https://admin.zkteco-wa.com/maillists',
                        payload
                    );
                    this.$router.push('/auth/login')
                    this.loading = false;
                } else {
                    this.loading = false;
                    this.error_alert = "Email or Username already exist";
                    this.showAlert = true;
                }
            }
        }
    },
    computed: {
        usernameErrors() {
            const errors = [];
            if (!this.$v.username.$dirty) return errors;
            !this.$v.username.required && errors.push('Username is required');
            return errors;
        },
        emailErrors() {
            const errors = [];
            if (!this.$v.email.$dirty) return errors;
            !this.$v.email.required && errors.push('E-mail is required');
            !this.$v.email.email && errors.push('E-mail should be valid');
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.password.$dirty) return errors;
            !this.$v.password.required &&
                errors.push('This password field is required');
            return errors;
        },
        checkboxErrors() {
            const errors = [];
            if (!this.$v.checkbox.$dirty) return errors;
            !this.$v.checkbox.required && errors.push('Please agree to the terms');
            return errors;
        },
    },
};
</script>

<style lang="scss" scoped>
.ps-tab-list {
    padding-left: 0;
}
.ps-form__content {
    padding: 30px;
}

.agreement_link {
    font-size: 14px;
    a {
        color: red;
        &:hover {
            color: darkred;
            text-decoration: underline;
        }
    }

} 
</style>
