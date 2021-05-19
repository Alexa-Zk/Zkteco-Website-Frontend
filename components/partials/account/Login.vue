<template lang="html">
    <form>
        <div class="ps-form__content">
            <h5>Partners Login</h5>
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
        </div>
    </form>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
    name: 'Login',
    computed: {
        emailErrors() {
            const errors = [];
            if (!this.$v.email.$dirty) return errors;
            !this.$v.email.required && errors.push('This email field is required');
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.password.$dirty) return errors;
            !this.$v.password.required && errors.push('This password field is required');
            return errors;
        }
    },
    data() {
        return {
            email: null,
            password: null
        };
    },
    validations: {
        email: { required },
        password: { required }
    },
    methods: {
        async handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                try {
                    const payload = {
                        username: this.email,
                        password: this.password
                    };
                    const response = await this.$store.dispatch(
                        'auth/login',
                        payload
                    );
                    if (response.status) {
                        this.$notify({
                            group: 'addCartSuccess',
                            title: 'Success!',
                            text: `${response.message}!`
                        });

                        this.$store.dispatch('auth/setAuthStatus', true);
                        this.$router.push('/store');
                    } else {
                        this.$notify({
                            group: 'addCartSuccess',
                            title: 'Error!',
                            text: `User not Found`
                        });
                        return;
                    }
                } catch (error) {
                    this.$notify({
                        group: 'addCartSuccess',
                        title: 'Error!',
                        text: `Something went wrong!`
                    });
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
