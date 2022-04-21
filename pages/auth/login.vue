<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-my-account">
            <div class="container">
                <div class="ps-form--account">
                    <ul class="ps-tab-list">
                        <li class="active">
                            <nuxt-link to="/auth/login">
                                Login
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/auth/register">
                                Register
                            </nuxt-link>
                        </li>
                    </ul>
                    <div class="ps-tab active">
                        <form>
                            <div class="ps-form__content">
                                <h5>Login</h5>
                                <div class="form-group">
                                    <v-text-field
                                        v-model="username"
                                        class="ps-text-field"
                                        :error-messages="emailErrors"
                                        @input="$v.username.$touch()"
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
                                                Agree to comply with ZKTeco
                                                <a target="_blank" href="/website/page/privacy-policy" @click.stop>
                                                    Term of Use
                                                </a>,
                                                <a target="_blank" href="/website/page/privacy-policy" @click.stop>
                                                   Privacy Policy
                                                </a>,
                                                <a target="_blank" href="/website/page/privacy-policy" @click.stop>
                                                    Cookie Policy
                                                </a>
                                            </div>
                                        </template>
                                    </v-checkbox>
                                </div>
                                <div class="form-group forget-link">
                                    <nuxt-link to="/auth/forget-password"
                                        >forget password?</nuxt-link
                                    >
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
import { required } from 'vuelidate/lib/validators';
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
            checkbox: '',
            loading: false,
            username: null,
            password: null,
            error_alert: '',
            showAlert: false
        };
    },
    validations: {
        username: { required },
        password: { required },
        checkbox: { required }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.storeLocally(from, next);
        });
    },
    methods: {
        storeLocally(from, next) {
            if (from.path !== '/auth/register') {
                localStorage.setItem('NAVIGATION_HISTORY', from.path);
            }
            next();
        },
        async handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.loading = true;
                const response = await this.$store.dispatch(
                    'auth/loginDownloads',
                    {
                        identifier:
                            this.username || 'rahman.badru@zkteco-wa.com',
                        password: this.password || 'alexa123'
                    }
                );
                if (response.status === 200) {
                    const getLocationHistory = localStorage.getItem(
                        'NAVIGATION_HISTORY'
                    );
                    this.$router.push(getLocationHistory);
                    this.loading = false;
                } else {
                    this.loading = false;
                    console.log(response.error.message);
                    this.error_alert = response.error.message;
                    this.showAlert = true;
                }
            }
        }
    },
    computed: {
        emailErrors() {
            const errors = [];
            if (!this.$v.username.$dirty) return errors;
            !this.$v.username.required && errors.push('E-mail is required');
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
    }
};
</script>

<style lang="scss" scoped>
.forget-link {
    margin: 10px 0px;
    &:hover {
        a {
            color: #78bc27;
        }
    }
}
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
