<template lang="html">
    <form>
        <div class="ps-form__content">
            <h5>Partners Login</h5>
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
                <v-checkbox label="Remember me" color="warning" />
            </div>
            <div class="form-group submit">
                <button
                    type="submit"
                    class="ps-btn ps-btn--fullwidth"
                    @click.prevent="handleSubmit"
                >
                    Login
                </button>
            </div>
            <v-alert v-if="showAlert" class="mt-4" dense outlined type="error">
                {{error_alert}}
            </v-alert>
        </div>
    </form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
    name: 'Login',
    mixins: [validationMixin],
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
        }
    },
    data() {
        return {
            username: null,
            password: null,
            error_alert: '',
            showAlert: false
        };
    },
    validations: {
        username: { required },
        password: { required }
    },
    methods: {
        async handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                const response = await this.$store.dispatch('auth/login', {
                    username: this.username,
                    password: this.password
                });
                if (response.status) {
                    this.$store.dispatch('auth/setAuthStatus', true);
                    this.$router.push('/store');
                } else {
                    
                    this.error_alert = response.error.message
                    this.showAlert = true
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-form__content {
    padding: 30px;
}
</style>
