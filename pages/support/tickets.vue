<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth"> </bread-crumb>
        <div class="ps-section--custom">
            <div class="ps-container">
                <section class="ps-newsletter">
                    <div class="container">
                        <form class="ps-form--newsletter">
                            <div class="row">
                                <div class="col-lg-6 ps-image">
                                    <div class="ps-form__left">
                                        <CustomerCare />
                                    </div>
                                </div>
                                <div class="col-lg-6 ps-form">
                                    <div class="ps-form__right">
                                        <div class="ps-form__header">
                                            <h3>Support Ticket</h3>
                                            <div class="ps-form__content">
                                                <div class="form-group"></div>
                                                <div class="form-group">
                                                    <label>
                                                        Company Name
                                                        <sup>*</sup></label
                                                    >
                                                    <v-text-field
                                                        v-model="company_name"
                                                        class="ps-text-field"
                                                        :error-messages="
                                                            companyErrors
                                                        "
                                                        @input="
                                                            $v.company_name.$touch()
                                                        "
                                                        placeholder="Please enter company name"
                                                        height="50"
                                                        outlined
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label>
                                                        Email
                                                        <sup>*</sup></label
                                                    >
                                                    <v-text-field
                                                        v-model="email_address"
                                                        class="ps-text-field"
                                                        :error-messages="
                                                            emailErrors
                                                        "
                                                        @input="
                                                            $v.email_address.$touch()
                                                        "
                                                        placeholder="Please enter email"
                                                        height="50"
                                                        outlined
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label>Phone</label>
                                                    <v-text-field
                                                        v-model="phone_number"
                                                        class="ps-text-field"
                                                        :error-messages="
                                                            phoneNumberErrors
                                                        "
                                                        @input="
                                                            $v.phone_number.$touch()
                                                        "
                                                        placeholder="(+234) 8165391233"
                                                        height="50"
                                                        outlined
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label
                                                        >Device Serial
                                                        Number<sup
                                                            >*</sup
                                                        ></label
                                                    >
                                                    <v-text-field
                                                        v-model="serial_number"
                                                        class="ps-text-field"
                                                        :error-messages="
                                                            serialNumberErrors
                                                        "
                                                        @input="
                                                            $v.serial_number.$touch()
                                                        "
                                                        placeholder="Please enter serial number"
                                                        height="50"
                                                        outlined
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label
                                                        >Device Model<sup
                                                            >*</sup
                                                        ></label
                                                    >
                                                    <v-text-field
                                                        v-model="device_model"
                                                        class="ps-text-field"
                                                        :error-messages="
                                                            deviceModelErrors
                                                        "
                                                        @input="
                                                            $v.device_model.$touch()
                                                        "
                                                        placeholder="Please enter device model"
                                                        height="50"
                                                        outlined
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label
                                                        >Issue Type
                                                        <sup>*</sup></label
                                                    >
                                                    <v-radio-group
                                                        :error-messages="
                                                            issueTypeErrors
                                                        "
                                                        @input="
                                                            $v.issue_type.$touch()
                                                        "
                                                        v-model="issue_type"
                                                        column
                                                    >
                                                        <v-radio
                                                            label="Hardware"
                                                            value="hardware"
                                                        ></v-radio>
                                                        <v-radio
                                                            label="Software"
                                                            value="software"
                                                        ></v-radio>
                                                    </v-radio-group>
                                                </div>
                                                <div class="form-group">
                                                    <label
                                                        >Description
                                                        <sup>*</sup></label
                                                    >
                                                    <v-textarea
                                                        outlined
                                                        class="ps-text-field"
                                                        placeholder="Please enter Description"
                                                        rows="6"
                                                        :error-messages="
                                                            descriptionErrors
                                                        "
                                                        @input="
                                                            $v.description.$touch()
                                                        "
                                                        v-model="description"
                                                    ></v-textarea>
                                                </div>
                                                <div class="form-group submit">
                                                    <button
                                                        class="ps-btn"
                                                        :disabled="disabled"
                                                        @click.prevent="
                                                            supportTicket
                                                        "
                                                    >
                                                        Submit Ticket
                                                    </button>
                                                    <v-progress-circular
                                                        v-if="loading"
                                                        :width="3"
                                                        color="green"
                                                        indeterminate
                                                    ></v-progress-circular>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import CustomerCare from '@/static/svg/CustomerCare';

import { email, required } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
    head() {
        return {
            titleTemplate: 'Support Tickets - ZKTeco West Africa',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Create Support Tickets'
                }
            ]
        };
    },
    mixins: [validationMixin],
    name: 'Support',
    components: {
        BreadCrumb,
        CustomerCare
    },
    transition: 'zoom',
    layout: 'layout-default-website',
    data: () => {
        return {
            company_name: '',
            disabled: false,
            phone_number: '',
            email_address: '',
            serial_number: '',
            device_model: '',
            issue_type: 'hardware',
            description: '',
            loading: false,
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'After Sales',
                    url: '/support/after-sale'
                },
                {
                    text: 'Support Ticket'
                }
            ],
            issues: ['hardware', 'software']
        };
    },
    computed: {
        companyErrors() {
            const errors = [];
            if (!this.$v.company_name.$dirty) return errors;
            !this.$v.company_name.required &&
                errors.push('This field is required');
            return errors;
        },
        phoneNumberErrors() {
            const errors = [];
            if (!this.$v.phone_number.$dirty) return errors;
            !this.$v.phone_number.required &&
                errors.push('This field is required');
            return errors;
        },
        emailErrors() {
            const errors = [];
            if (!this.$v.email_address.$dirty) return errors;
            !this.$v.email_address.required &&
                errors.push('E-mail is required');
            !this.$v.email_address.email && errors.push('Must be valid e-mail');
            return errors;
        },
        serialNumberErrors() {
            const errors = [];
            if (!this.$v.serial_number.$dirty) return errors;
            !this.$v.serial_number.required &&
                errors.push('This field is required');
            return errors;
        },
        deviceModelErrors() {
            const errors = [];
            if (!this.$v.device_model.$dirty) return errors;
            !this.$v.device_model.required &&
                errors.push('This field is required');
            return errors;
        },
        issueTypeErrors() {
            const errors = [];
            if (!this.$v.issue_type.$dirty) return errors;
            !this.$v.issue_type.required &&
                errors.push('This field is required');
            return errors;
        },
        descriptionErrors() {
            const errors = [];
            if (!this.$v.description.$dirty) return errors;
            !this.$v.description.required &&
                errors.push('This field is required');
            return errors;
        }
    },
    validations: {
        company_name: { required },
        phone_number: { required },
        email_address: { required, email },
        serial_number: { required },
        device_model: { required },
        issue_type: { required },
        description: { required }
    },
    methods: {
        clearForm() {
            this.company_name = '';
            this.phone_number = '';
            this.email = '';
            this.serial_number = '';
            this.device_model = ';';
            this.description = '';
            this.loading = false;
            this.disabled = false;
        },
        async supportTicket() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.loading = true;
                this.disabled = true;
                let payload = {
                    company_name: this.company_name,
                    phone_number: this.phone_number,
                    email: this.email_address,
                    serial_number: this.serial_number,
                    device_model: this.device_model,
                    issue_type: this.issue_type,
                    description: this.description
                };
                const ip = await this.$axios.$post(
                    'https://wslbackend.zkteco-wa.com/api/v1/integrations/supports',
                    payload
                );
                if (ip) {
                    this.$notify({
                        group: 'addCartSuccess',
                        title: 'Success!',
                        text: `your support ticket has been sent!`
                    });
                    this.clearForm();
                } else {
                    this.$notify({
                        group: 'addCartSuccess',
                        title: 'Error!',
                        text: `Some went wrong!`
                    });
                    this.clearForm();
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-newsletter {
    .row {
        .ps-form__left {
            width: 100%;
        }
        .ps-image {
            background-color: lighten($color: #78bc27, $amount: 3%);
            display: flex;
            border-radius: 5px;
        }

        .ps-form {
            padding-left: 50px;
            @include media('<sm') {
                padding-left: 0px;
            }
            @include media('<xs') {
                padding-left: 0px;
            }
        }
    }
}
</style>
