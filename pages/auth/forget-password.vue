<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-my-account">
            <div class="container">
                <div class="ps-form--account">
                    <ul class="ps-tab-list">
                        <li class="active">
                            <nuxt-link to="/auth/login">
                                Forget Password
                            </nuxt-link>
                        </li>
                        
                    </ul>
                    <div class="ps-tab active">
                        <form>
                            <div class="ps-form__content">
                                
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
                                <div class="form-group submit">
                                    <button
                                        type="submit"
                                        class="ps-btn ps-btn--fullwidth"
                                        @click.prevent="handleSubmit"
                                    >
                                        {{
                                            loading
                                                ? 'Loading...'
                                                : 'Forget Password'
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
                    text: 'Login',
                    url: '/auth/login'
                },
                {
                    text: 'Forget Password'
                }
            ],
            loading: false,
            email: null,
            error_alert: '',
            showAlert: false
        };
    },
    validations: {
        email: { required }
    },
   
    methods: {
        async handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.loading = true;
                const response = await this.$store.dispatch('auth/forgetPassword', { email: this.email});
                console.log(response)
                if (response.status === 200) {
                    
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
            if (!this.$v.email.$dirty) return errors;
            !this.$v.email.required && errors.push('E-mail is required');
            return errors;
        },
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
