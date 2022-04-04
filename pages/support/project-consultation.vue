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
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div class="form-group">
                                        <input
                                            class="form-control"
                                            type="text"
                                            disabled
                                            placeholder="Name"
                                            v-model="userInfo.username"
                                        />
                                        
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div class="form-group">
                                        <input
                                            class="form-control"
                                            type="text"
                                            placeholder="Position"
                                            v-model="position"
                                        />
                                        <p style="font-size: 11px; color: red; font-weight: lighter;" v-if="!$v.position.required" >
                                            Position is required!
                                        </p>
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div class="form-group">
                                        <input
                                            class="form-control"
                                            type="text"
                                            placeholder="Company Name"
                                            v-model="company_name"
                                        />
                                        <p style="font-size: 11px; color: red; font-weight: lighter;" v-if="!$v.company_name.required" >
                                            The Company Name is required!
                                        </p>
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div class="form-group">
                                        <input
                                            class="form-control"
                                            type="text"
                                            placeholder="Phone Number"
                                            v-model="phone_number"
                                        />
                                        <p style="font-size: 11px; color: red; font-weight: lighter;" v-if="!$v.phone_number.required" >
                                            Phone is required!
                                        </p>
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div class="form-group">
                                        <input
                                            class="form-control"
                                            type="text"
                                            disabled
                                            placeholder="Email"
                                            v-model="userInfo.email"
                                        />
                                       
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div class="form-group">
                                        <select  class="form-control" v-model="country">
                                            <option disabled value="">Country *</option
                                            >
                                            <option key="nigeria">Nigeria</option>
                                            <option key="ghana">Ghana</option>
                                            <option key="others">Others</option>
                                        </select>
                                        <p style="font-size: 11px; color: red; font-weight: lighter;" v-if="!$v.country.required" >
                                            Country is required!
                                        </p>
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div class="form-group">
                                        <input
                                            class="form-control"
                                            type="text"
                                            placeholder="City"
                                            v-model="city"
                                        />
                                        <p style="font-size: 11px; color: red; font-weight: lighter;" v-if="!$v.city.required" >
                                            City is required!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="requirement">
                            <h3>Requirement Information</h3>

                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div class="form-group">
                                        <input
                                            class="form-control"
                                            type="text"
                                            placeholder="Related Industry"
                                            v-model="related_industry"
                                        />
                                        <p style="font-size: 11px; color: red; font-weight: lighter;" v-if="!$v.related_industry.required" >
                                            Enter Related Industry!
                                        </p>
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div class="form-group">
                                        <input
                                            class="form-control"
                                            type="text"
                                            placeholder="Products Needed for Project"
                                            v-model="product_needed"
                                        />
                                        <p style="font-size: 11px; color: red; font-weight: lighter;" v-if="!$v.product_needed.required" >
                                            Enter needed product!
                                        </p>
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div class="form-group">
                                        <input
                                            class="form-control"
                                            type="text"
                                            placeholder="Project Description"
                                            v-model="project_description"
                                        />
                                        <p style="font-size: 11px; color: red; font-weight: lighter;" v-if="!$v.project_description.required" >
                                            Enter Project Description!
                                        </p>
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div class="form-group">
                                       <select  class="form-control" v-model="project_scale">
                                            <option disabled value="">Project Scale *</option
                                            >
                                            <option key="large">Large Products</option>
                                            <option key="medium">Medium Project</option>
                                            <option key="small">Small Products</option>
                                        </select>
                                        <p style="font-size: 11px; color: red; font-weight: lighter;" v-if="!$v.project_scale.required" >
                                            Select Project Scale!
                                        </p>
                                    </div>
                                </div>

                                <div class="container form-group submit" style="margin-top: 10px;">
                                    <button @click.prevent="submit" class="ps-btn ps-btn--fullwidth">
                                        {{ loading ? 'Sending...' : 'Submit' }}
                                    </button>

                                </div>

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
    transition: 'zoom',
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
            disabled: false
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
        city: { required }
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
            this.$v.$touch()
            if (this.$v.$invalid) { 
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
                    project_scale: this.project_scale === 'Large Project' ? 'large_projects' : this.project_scale === 'Medium Project' ? 'medium_projects' : 'small_projects',
                    city: this.city
                }
                console.log(payload)
                const response = await this.$store.dispatch(
                    'website/projectConsultation',
                    payload
                );
                if (response) {
                    this.loading = false;
                    this.showSuccess = true;
                    this.showError = false;
                    this.resetForm()
                } else {
                    this.showError = true;
                    this.showSuccess = false;
                    this.loading = false;
                }
            }
        }
    },
    computed: {
        ...mapState({
            user: state => state.auth.userInfoDownload
        }),
        userInfo () {
            return this.user.user;
        }
    },
    mounted() {
        const tokenForDownloads = this.$cookies.get('download_token', {
            parseJSON: true
        });
        if (tokenForDownloads) {
            return true;
        } else {
            this.$router.push('/');
        }
    }
};
</script>

<style lang="scss" scoped>
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
