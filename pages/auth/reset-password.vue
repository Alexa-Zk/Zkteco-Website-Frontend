<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-my-account">
            <div class="container">
                <div class="ps-form--account">
                    <ul class="ps-tab-list">
                        <li class="active">
                            <nuxt-link to="/auth/login">
                                Reset password
                            </nuxt-link>
                        </li>
                    </ul>
                    <div class="ps-tab active">
                        <form>
                            <div class="ps-form__content">
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
                                    <v-text-field
                                        v-model="confirmPassword"
                                        type="password"
                                        class="ps-text-field"
                                        :error-messages="confirmPasswordErrors"
                                        @input="$v.confirmPassword.$touch()"
                                        placeholder="Please confirm password"
                                        height="50"
                                        outlined
                                    />
                                </div>

                                <div class="form-group submit">
                                    <button
                                        type="submit"
                                        class="ps-btn ps-btn--fullwidth"
                                        @click.prevent="handleSubmit"
                                    >
                                        {{ loading ? 'Resetting...' : 'Reset' }}
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
import { required, minLength, sameAs } from 'vuelidate/lib/validators';
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
            password: null,
            confirmPassword: null,
            error_alert: '',
            resetCode: null,
            showAlert: false
        };
    },
    validations: {
        confirmPassword: { required, sameAsPassword: sameAs('password') },
        password: { required, minLength: minLength(6) }
    },
    mounted() {
        this.resetCode =
            this.$route.query.code == undefined || this.$route.query.code == ''
                ? this.$router.push('/product')
                : this.$route.query.code;
    },

    methods: {
        async handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.loading = true;
                const response = await this.$store.dispatch(
                    'auth/resetPassword',
                    {
                        code: this.resetCode,
                        password: this.password,
                        passwordConfirmation: this.confirmPassword
                    }
                );
                if (response) {
                    this.loading = false;
                    this.$router.push('/auth/login');
                } else {
                    this.loading = false;
                    this.error_alert = response.error.message;
                    this.showAlert = true;
                }
            }
        }
    },
    computed: {
        confirmPasswordErrors() {
            const errors = [];
            if (!this.$v.confirmPassword.$dirty) return errors;
            !this.$v.confirmPassword.required &&
                errors.push('confirm password is required');
            !this.$v.confirmPassword.sameAsPassword &&
                errors.push('password and confirm password should match');
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.password.$dirty) return errors;
            !this.$v.password.required &&
                errors.push('This password field is required');
            !this.$v.password.minLength &&
                errors.push('password must be mored than 6');
            return errors;
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-tab-list {
    padding-left: 0;
}
.ps-form__content {
    padding: 30px;
}
</style>
