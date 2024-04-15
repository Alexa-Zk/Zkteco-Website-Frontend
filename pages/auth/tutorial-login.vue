<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-my-account">
            <div class="container">
                <div class="ps-form--account">
                    <ul class="ps-tab-list">
                        <!-- <li>
                            <nuxt-link to="/auth/login">
                                Login
                            </nuxt-link>
                        </li> -->
                        <li class="active">
                            <nuxt-link to="/auth/register">
                                Enter your details to access the e-learning portal
                            </nuxt-link>
                        </li>
                    </ul>
                    <div class="ps-tab active">
                        <form>
                            <div class="ps-form__content">
                                <!-- <h5>Enter you details to access the e-learning portal</h5> -->
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
                                
                                <div class="form-group submit">
                                    <button
                                        type="submit"
                                        class="ps-btn ps-btn--fullwidth"
                                        @click.prevent="handleSubmit"
                                    >
                                        {{
                                            loading
                                                ? 'Authenticating...'
                                                : 'Proceed to E-learning Platform'
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
import { serializeQuery } from '~/repositories/Repository';

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
            error_alert: '',
            showAlert: false
        };
    },
    validations: {
        username: { required },
        email: { required, email },
    },
    methods: {
        setUserInCookie(user){
            this.$cookies.set('ELEARNING_USER', user, {
                path: '/',
                maxAge: 60 * 60 * 24 * 7
            });
            return true
        },
        async handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.loading = true;
                let payload =  {
                    username: this.username,
                    email: this.email,
                }
                // fetch from the subscribers collection to see if a user with the email exists,
                // if it does fetch it and save it in the cookie
                // if not then create one
                const user = await this.$axios.$get(`https://admin.zkteco-wa.com/elearning-subscribers?${serializeQuery(payload)}`);
                
                if(user.length){
                    this.setUserInCookie({...payload, id: user[0].id})

                    this.$router.push('/tutorial');
                    this.loading = false;
                    return true
                }
                const response = await this.$axios.$post(
                        'https://admin.zkteco-wa.com/elearning-subscribers',
                        payload
                );
                if (response) {
                    let payload =  {
                        id: response.id,
                        username: this.username,
                        email: this.email,
                    }
                    this.setUserInCookie(payload)

                    this.$router.push('/tutorial');
                    this.loading = false;
                } else {
                    this.loading = false;
                    this.error_alert = 'Email or Username already exist';
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

.agreement_link {
    font-size: 14px;
    a {
        color: #78bc27;
        &:hover {
            color: darkgreen;
            text-decoration: underline;
        }
    }
}
</style>
