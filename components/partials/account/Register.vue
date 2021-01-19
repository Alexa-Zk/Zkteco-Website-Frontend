<template lang="html">
    <form>
        <div class="ps-form__content">
            <h5>Register An Account</h5>
            <div class="form-group">
                <v-text-field
                    v-model="firstname"
                    :error-messages="firstnameErrors"
                    @input="$v.firstname.$touch()"
                    placeholder="First Name"
                    class="ps-text-field"
                    outlined
                    height="50"
                />
            </div>
            <div class="form-group">
                <v-text-field
                    v-model="lastname"
                    :error-messages="lastnameErrors"
                    @input="$v.lastname.$touch()"
                    placeholder="Last Name"
                    class="ps-text-field"
                    outlined
                    height="50"
                />
            </div>
            <div class="form-group">
                <v-text-field
                    v-model="email"
                    :error-messages="emailErrors"
                    @input="$v.email.$touch()"
                    placeholder="Email Address"
                    class="ps-text-field"
                    outlined
                    height="50"
                />
            </div>
            <div class="form-group">
                <v-text-field
                    v-model="password"
                    type="password"
                    :error-messages="passwordErrors"
                    @input="$v.password.$touch()"
                    placeholder="Password"
                    class="ps-text-field"
                    outlined
                    height="50"
                />
            </div>

            <div class="form-group submit">
                <button
                    type="submit"
                    class="ps-btn ps-btn--fullwidth"
                    @click.prevent="handleSubmit"
                >
                    Register
                </button>
            </div>
        </div>
        <!-- <div class="ps-form__footer">
            <p>Connect with:</p>

            <ul class="ps-list--social">
                <li>
                    <a href="#" class="facebook">
                        <i class="fa fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="google">
                        <i class="fa fa-google-plus"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="twitter">
                        <i class="fa fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="instagram">
                        <i class="fa fa-instagram"></i>
                    </a>
                </li>
            </ul>
        </div> -->
    </form>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
    name: 'Register',
    computed: {
        firstnameErrors() {
            const errors = [];
            if (!this.$v.firstname.$dirty) return errors;
            !this.$v.firstname.required &&
                errors.push('This field is required');
            return errors;
        },
        lastnameErrors() {
            const errors = [];
            if (!this.$v.lastname.$dirty) return errors;
            !this.$v.lastname.required && errors.push('This field is required');
            return errors;
        },
        emailErrors() {
            const errors = [];
            if (!this.$v.email.$dirty) return errors;
            !this.$v.email.required && errors.push('This field is required');
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.password.$dirty) return errors;
            !this.$v.password.required && errors.push('This field is required');
            return errors;
        }
    },
    data() {
        return {
            firstname: null,
            lastname: null,
            email: null,
            password: null
        };
    },
    validations: {
        firstname: { required },
        lastname: { required },
        email: { required },
        password: { required }
    },
    methods: {
        async handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                try {
                    const payload = {
                        first_name: this.firstname,
                        last_name: this.lastname,
                        email: this.email,
                        password: this.password
                    };
                    const response = await this.$store.dispatch(
                        'auth/register',
                        payload
                    );
                    if (response.data.status) {
                        this.$notify({
                            group: 'addCartSuccess',
                            title: 'Success!',
                            text: `${response.data.message}!`
                        });
                        this.$router.push('/store/account/checkout');
                    } else {
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

<style lang="scss" scoped></style>
