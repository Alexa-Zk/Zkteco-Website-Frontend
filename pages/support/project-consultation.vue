<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-section--custom">
            <div class="container">
                <div class="ps-section__content">
                    <div class="consultation-box">
                        <div class="contact">
                            <h3>Contact Method</h3>
                            <div class="row">
                                <div
                                    class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                                >
                                    <div class="form-group">
                                        <label>Name </label>
                                        <input
                                            class="form-control"
                                            type="text"
                                            disabled
                                            placeholder="Name"
                                            v-model="userInfo.username"
                                        />
                                    </div>
                                </div>
                                <div
                                    class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                                >
                                    <div class="form-group">
                                        <label>Position </label>
                                        <input
                                            class="form-control"
                                            type="text"
                                            placeholder="Position"
                                            v-model="position"
                                        />

                                        <p
                                            style="font-size: 11px; color: red; font-weight: lighter;"
                                            v-if="$v.position.$error"
                                        >
                                            Position is required!
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                                >
                                    <div class="form-group">
                                        <label>Company Name </label>
                                        <input
                                            class="form-control"
                                            type="text"
                                            placeholder="Company Name"
                                            v-model="company_name"
                                        />
                                        <p
                                            style="font-size: 11px; color: red; font-weight: lighter;"
                                            v-if="$v.company_name.$error"
                                        >
                                            The Company Name is required!
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                                >
                                    <div class="form-group">
                                        <label>Phone Number </label>
                                        <input
                                            class="form-control"
                                            type="number"
                                            placeholder="Phone Number"
                                            v-model="phone_number"
                                        />
                                        <p
                                            style="font-size: 11px; color: red; font-weight: lighter;"
                                            v-if="$v.phone_number.$error"
                                        >
                                            Phone is required!
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                                >
                                    <div class="form-group">
                                        <label>Email </label>
                                        <input
                                            class="form-control"
                                            type="text"
                                            disabled
                                            placeholder="Email"
                                            v-model="userInfo.email"
                                        />
                                    </div>
                                </div>
                                <div
                                    class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                                >
                                    <div class="form-group">
                                        <select
                                            class="form-control"
                                            v-model="country"
                                        >
                                            <option disabled value=""
                                                >Country *</option
                                            >
                                            <option
                                                v-for="country in countries"
                                                :key="country"
                                                >{{ country }}</option
                                            >
                                        </select>
                                        <p
                                            style="font-size: 11px; color: red; font-weight: lighter;"
                                            v-if="$v.country.$error"
                                        >
                                            Country is required!
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                                >
                                    <div class="form-group">
                                        <label>City </label>
                                        <input
                                            class="form-control"
                                            type="text"
                                            placeholder="City"
                                            v-model="city"
                                        />
                                        <p
                                            style="font-size: 11px; color: red; font-weight: lighter;"
                                            v-if="$v.city.$error"
                                        >
                                            City is required!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="requirement">
                            <h3>Requirement Information</h3>

                            <div class="row">
                                <div
                                    class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                                >
                                    <div class="form-group">
                                        <label>Related Industry </label>
                                        <input
                                            class="form-control"
                                            type="text"
                                            placeholder="Related Industry"
                                            v-model="related_industry"
                                        />
                                        <p
                                            style="font-size: 11px; color: red; font-weight: lighter;"
                                            v-if="$v.related_industry.$error"
                                        >
                                            Enter Related Industry!
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                                >
                                    <div class="form-group">
                                        <label
                                            >Products Needed for Project
                                        </label>
                                        <input
                                            class="form-control"
                                            type="text"
                                            placeholder="Products Needed for Project"
                                            v-model="product_needed"
                                        />
                                        <p
                                            style="font-size: 11px; color: red; font-weight: lighter;"
                                            v-if="$v.product_needed.$error"
                                        >
                                            Enter needed product!
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                                >
                                    <div class="form-group">
                                        <label>Project Description </label>
                                        <input
                                            class="form-control"
                                            type="text"
                                            placeholder="Project Description"
                                            v-model="project_description"
                                        />
                                        <p
                                            style="font-size: 11px; color: red; font-weight: lighter;"
                                            v-if="$v.project_description.$error"
                                        >
                                            Enter Project Description!
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                                >
                                    <div class="form-group">
                                        <select
                                            class="form-control"
                                            v-model="project_scale"
                                        >
                                            <option disabled value=""
                                                >Project Scale *</option
                                            >
                                            <option key="large"
                                                >Large Projects</option
                                            >
                                            <option key="medium"
                                                >Medium Projects</option
                                            >
                                            <option key="small"
                                                >Small Projects</option
                                            >
                                        </select>
                                        <p
                                            style="font-size: 11px; color: red; font-weight: lighter;"
                                            v-if="$v.project_scale.$error"
                                        >
                                            Select Project Scale!
                                        </p>
                                    </div>
                                </div>

                                <div
                                    class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                                >
                                    <!-- ################################################################### -->
                                    <div class="form-group">
                                        <div
                                            class="form-check form-check-inline"
                                        >
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                id="inlineCheckbox3"
                                                v-model="checkbox"
                                            />
                                            <label
                                                class="form-check-label"
                                                for="inlineCheckbox3"
                                                >I have read and agree to

                                                <a
                                                    target="_blank"
                                                    href="/website/page/privacy-policy"
                                                    @click.stop
                                                >
                                                    Privacy Policy
                                                </a></label
                                            >
                                        </div>

                                        <p class="el-error">
                                            {{ errors }}
                                        </p>
                                    </div>
                                    <!-- ###################################################################-->
                                </div>

                                <div
                                    class="container form-group submit"
                                    style="margin-top: 10px;"
                                >
                                    <button
                                        @click.prevent="submit"
                                        class="ps-btn ps-btn--fullwidth"
                                    >
                                        {{ loading ? 'Sending...' : 'Submit' }}
                                    </button>
                                </div>
                                <!-- v-model="snackbar"
                                    :timeout="3000"
                                    color="green"
                                    tile
                                    -->
                                <v-snackbar
                                    v-model="snackbar"
                                    :timeout="3000"
                                    color="green"
                                    tile
                                >
                                    {{ snackBarMessage }}

                                    <template v-slot:action="{ attrs }">
                                        <v-btn
                                            color="white"
                                            text
                                            v-bind="attrs"
                                            @click="snackbar = false"
                                        >
                                            Close
                                        </v-btn>
                                    </template>
                                </v-snackbar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import { mapState } from 'vuex';
import { required, email, numeric } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
    components: {
        BreadCrumb
    },
    name: 'project-consultation',
    //transition: 'zoom',
    layout: 'layout-default-website',
    mixins: [validationMixin],
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Project Consultation'
                }
            ],
            countries: [
                'Nigeria',
                'Benin',
                'Burkina Faso',
                'Cabo Verde',
                'Cote Divoire',
                'The Gambia',
                'Ghana',
                'Guinea',
                'Guinea Bissau',
                'Liberia',
                'Mali',
                'Niger',
                'Senegal',
                'Sierra Leone',
                'Togo'
            ],
            showError: false,
            showSuccess: false,
            loading: '',
            company_name: '',
            country: '',
            phone_number: '',
            position: '',
            related_industry: '',
            product_needed: '',
            project_description: '',
            project_scale: '',
            city: '',
            disabled: false,
            snackbar: false,
            snackBarMessage:
                'Form Submitted Successfully. You will be contacted by one of our customer representatives.',
            checkbox: false,
            errors: ''
        };
    },
    validations: {
        company_name: { required },
        phone_number: { required },
        country: { required },
        position: { required },
        related_industry: { required },
        product_needed: { required },
        project_description: { required },
        project_scale: { required },
        city: { required },
        checkbox: { required }
    },
    methods: {
        resetForm() {
            this.company_name = '';
            this.country = '';
            this.phone_number = '';
            this.position = '';
            this.related_industry = '';
            this.product_needed = '';
            this.project_description = '';
            this.project_scale = '';
            this.city = '';
        },
        async submit() {
            if (this.$v.$invalid) {
            } else if (this.$v.$error) {
                return false;
            } else if (this.checkbox == false) {
                this.errors = 'Please agree to the terms';

                return false;
            } else {
                this.loading = true;
                const payload = {
                    company_name: this.company_name,
                    name: this.userInfo.username,
                    country: this.country,
                    phone_number: this.phone_number,
                    email: this.userInfo.email,
                    position: this.position,
                    related_industry: this.related_industry,
                    product_needed: this.product_needed,
                    project_description: this.project_description,
                    project_scale:
                        this.project_scale === 'Large Projects'
                            ? 'large_projects'
                            : this.project_scale === 'Medium Projects'
                            ? 'medium_projects'
                            : 'small_projects',
                    city: this.city
                };

                const response = await this.$store.dispatch(
                    'website/projectConsultation',
                    payload
                );

                if (response) {
                    this.loading = false;
                    this.snackbar = true;

                    setTimeout(() => {
                        this.$router.push('/');
                        //this.resetForm();
                    }, 3002);
                } else {
                    this.loading = false;
                }
            }
        }
    },
    computed: {
        ...mapState({
            userInfoDownload: state => state.auth.userInfoDownload
        }),
        userInfo() {
            return this.userInfoDownload.user;
        },
        checkboxErrors() {
            const errors = [];
            if (!this.$v.checkbox.$dirty) return errors;
            !this.$v.checkbox.required &&
                errors.push('Please agree to the terms');
            return errors;
        }
    },
    mounted() {
        const tokenForDownloads = this.$cookies.get('download_token', {
            parseJSON: true
        });
        if (tokenForDownloads) {
            return true;
        } else {
            this.$router.push('/auth/login');
        }
    }
};
</script>

<style lang="scss" scoped>
.el-error {
    font-size: 13px !important;
    color: red !important;
    font-weight: lighter !important;
}

label a {
    color: red !important;
}

.consultation-box {
    display: flex;
    // align-items: center;
    width: 100%;
    @include media('<sm') {
        display: block;
    }
    .contact {
        @include media('<sm') {
            width: 100%;
        }
        width: 45%;

        .row {
            margin-top: 30px;
        }
    }

    .requirement {
        @include media('<sm') {
            width: 100%;
            margin-left: 0%;
            margin-top: 50px;
        }
        margin-left: 10%;
        width: 45%;
        .row {
            margin-top: 30px;
        }
    }
}
</style>
