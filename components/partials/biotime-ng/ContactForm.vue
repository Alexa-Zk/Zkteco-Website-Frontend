<template>
    <div
        id="btc-contact"
        class="contact-form"
        style="background: rgb(250, 250, 250);"
    >
        <div class="ps-container contact-form-link">
            <div class="contact-form-card">
                <div class="circle">
                    <i class="icon-telephone"></i>
                </div>
                <div class="card-text">
                    <h6>Call Us</h6>
                    <p><a href="tel:+2348175555512">(+234) 817 5555 512</a></p>
                    <p><a href="tel:+2348175555513">(+234) 817 5555 513</a></p>
                </div>
            </div>
            <div class="contact-form-card">
                <div class="circle">
                    <i class="icon-mailbox-full"></i>
                </div>
                <div class="card-text">
                    <h6>Email</h6>
                    <p>
                        <a
                            href="mailto:enquiry@zkteco-wa.com?subject=Biotime Cloud&body=Enquiry"
                            >enquiry@zkteco-wa.com</a
                        >
                    </p>
                    <!--p>
                        <a
                            href="mailto:support@zkteco-wa.com?subject=Biotime Cloud&body=Support"
                            >support@zkteco-wa.com</a
                        >
                    </p-->
                </div>
            </div>
            <div class="contact-form-card">
                <div class="circle">
                    <i class="icon-earth"></i>
                </div>
                <div class="card-text">
                    <h6>Visit Us</h6>
                    <p>64 Adetokunbo Ademola Street, Victoria Island, Lagos</p>
                </div>
            </div>
            <div class="contact-form-card">
                <div class="circle">
                    <i class="icon-telephone"></i>
                </div>
                <div class="card-text">
                    <h6>Whatapp</h6>
                    <p><a href="tel:+2348175555514">(+234) 817 5555 514</a></p>
                </div>
            </div>
        </div>

        <div class="contact-widget">
            <div class="form-image">
                <img src="~/static/img/biotimecloud-zkteco.jpeg" alt="" />
            </div>
            <form class="ps-form--contact-us btc-form--contact-us">
                <h3>Request a quote</h3>
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <div class="form-group">
                            <label>Company Name </label>
                            <input
                                class="form-control"
                                type="text"
                                placeholder="Company Name"
                                v-model.trim="$v.company_name.$model"
                            />

                            <p class="el-error" v-if="$v.company_name.$error">
                                The company name is required!
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <div class="form-group">
                            <label>Contact Name</label>
                            <input
                                class="form-control"
                                type="text"
                                placeholder="Contact Name"
                                v-model.trim="contact_name"
                                required
                            />
                            <p class="el-error" v-if="$v.contact_name.$error">
                                Contact name is required!
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <div class="form-group">
                            <label>Company Address </label>
                            <input
                                class="form-control"
                                type="text"
                                placeholder="Company Address"
                                v-model.trim="address"
                                required
                            />
                            <div class="el-error" v-if="$v.address.$error">
                                Address is required!
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <div class="form-group">
                            <label>Phone Number</label>
                            <input
                                class="form-control"
                                type="text"
                                placeholder="Phone Number"
                                v-model="phone_number"
                            />
                            <p class="el-error" v-if="$v.phone_number.$error">
                                Phone Number is required!
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <div class="form-group">
                            <label>Email</label>
                            <input
                                class="form-control"
                                type="email"
                                placeholder="Email "
                                v-model="email"
                            />
                            <p class="el-error" v-if="$v.email.$error">
                                The email is required!
                            </p>
                            <p class="el-error" v-if="!$v.email.email">
                                Must be a valid email
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <div class="form-group">
                            <label>No of Employees</label>
                            <input
                                class="form-control"
                                type="number"
                                placeholder="No of Employees"
                                v-model="no_of_employees"
                            />
                            <p
                                class="el-error"
                                v-if="$v.no_of_employees.$error"
                            >
                                Employees numbers is required!
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12  ">
                        <div class="form-group">
                            <label>No of Time and Attendance Devices</label>
                            <input
                                class="form-control"
                                type="number"
                                placeholder="No of Time and Attendance Devices?"
                                v-model="quantity_of_attendance_device"
                            />
                            <p
                                class="el-error"
                                v-if="$v.quantity_of_attendance_device.$error"
                            >
                                Device quantity is required!
                            </p>
                            <p
                                class="el-error"
                                v-if="$v.quantity_of_attendance_device.$error"
                            >
                                Must be a number
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12  ">
                        <div class="form-group">
                            <label>No of Location</label>
                            <input
                                class="form-control"
                                type="number"
                                placeholder="No of locations?"
                                v-model="no_of_locations"
                            />
                            <p
                                class="el-error"
                                v-if="$v.no_of_locations.$error"
                            >
                                The number of location is required!
                            </p>
                        </div>
                    </div>

                    <div
                        class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                    >
                        <div class="form-group">
                            <label>Mode of authentication?</label>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckbox1"
                                    value="Fingerprint"
                                    v-model="preferred_mode_of_authentication"
                                />
                                <label
                                    class="form-check-label"
                                    for="inlineCheckbox1"
                                    >Fingerprint</label
                                >
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckbox2"
                                    value="Face"
                                    v-model="preferred_mode_of_authentication"
                                />
                                <label
                                    class="form-check-label"
                                    for="inlineCheckbox2"
                                    >Face</label
                                >
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckbox3"
                                    value="Palm"
                                    v-model="preferred_mode_of_authentication"
                                />
                                <label
                                    class="form-check-label"
                                    for="inlineCheckbox3"
                                    >Palm</label
                                >
                            </div>
                            <p
                                class="el-error"
                                v-if="
                                    $v.preferred_mode_of_authentication.$error
                                "
                            >
                                The prefered mode is required!
                            </p>
                        </div>
                    </div>

                    <div
                        class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                    >
                        <div class="form-group">
                            <label
                                >Do you want to monitor attendance online?
                            </label>

                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="monitor_attendance_online"
                                    id="inlineRadio1"
                                    value="Yes"
                                    v-model="monitor_attendance_online"
                                />
                                <label
                                    class="form-check-label"
                                    for="inlineRadio1"
                                    >Yes</label
                                >
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="monitor_attendance_online"
                                    id="inlineRadio2"
                                    value="No"
                                    v-model="monitor_attendance_online"
                                />
                                <label
                                    class="form-check-label"
                                    for="inlineRadio2"
                                    >No</label
                                >
                            </div>

                            <p
                                class="el-error"
                                v-if="$v.monitor_attendance_online.$error"
                            >
                                This field is required!
                            </p>
                        </div>
                    </div>

                    <div
                        class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                    >
                        <label
                            >Would you require periodic support & maintenance?
                        </label>

                        <div class="form-check form-check-inline">
                            <input
                                class="form-check-input"
                                type="radio"
                                name="is_support_needed"
                                id="inlineRadio1"
                                value="Yes"
                                v-model="is_support_needed"
                            />
                            <label class="form-check-label" for="inlineRadio1"
                                >Yes</label
                            >
                        </div>
                        <div class="form-check form-check-inline">
                            <input
                                class="form-check-input"
                                type="radio"
                                name="is_support_needed"
                                id="inlineRadio2"
                                value="No"
                                v-model="is_support_needed"
                            />
                            <label class="form-check-label" for="inlineRadio2"
                                >No</label
                            >
                        </div>
                        <p class="el-error" v-if="$v.is_support_needed.$error">
                            This field is required!
                        </p>
                    </div>

                    <br /><br />
                    <div
                        class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                    >
                        <div class="form-group">
                            <label>Additional Request </label>

                            <textarea
                                class="form-control"
                                v-model="additional_request"
                                placeholder="Additional Request "
                                id="floatingTextarea"
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div class="form-group submit" style="margin-top: 10px;">
                    <button
                        @click.prevent="willContactUs"
                        class="ps-btn ps-btn--fullwidth"
                    >
                        {{ loading ? 'Sending...' : 'Send Quote' }}
                    </button>
                </div>
                <p
                    style="font-size: 11px; color: red; font-weight: normal;"
                    v-if="showError"
                >
                    An error occurred
                </p>
                <p
                    style="font-size: 14px; color: green; font-weight: 600;"
                    v-if="showSuccess"
                >
                    You will be contacted shortly!!
                </p>
            </form>
        </div>
    </div>
</template>

<script>
import { required, email, numeric } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
    name: 'RequestQuoteForm',
    mixins: [validationMixin],
    data() {
        return {
            showError: false,
            showSuccess: false,
            loading: '',
            company_name: '',
            contact_name: '',
            email: '',
            phone_number: '',
            address: '',
            no_of_locations: '',
            no_of_employees: '',
            quantity_of_attendance_device: '',
            preferred_mode_of_authentication: [],
            monitor_attendance_online: '',
            is_support_needed: '',
            additional_request: '',
            disabled: false
        };
    },
    validations: {
        company_name: { required },
        contact_name: { required },
        email: { required, email },
        phone_number: { required },
        address: { required },
        no_of_locations: { required, numeric },
        no_of_employees: { required, numeric },
        quantity_of_attendance_device: { required, numeric },
        preferred_mode_of_authentication: { required },
        monitor_attendance_online: { required },
        is_support_needed: { required }
    },
    methods: {
        resetForm() {
            this.company_name = '';
            this.contact_name = '';
            this.email = '';
            this.phone_number = '';
            this.address = '';
            this.no_of_locations = '';
            this.no_of_employees = '';
            this.quantity_of_attendance_device = '';
            this.preferred_mode_of_authentication = [];
            this.monitor_attendance_online = '';
            this.is_support_needed = '';
            this.additional_request = '';
        },
        async willContactUs() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                return false;
            } else {
                this.loading = true;
                const payload = {
                    company_name: this.company_name,
                    contact_name: this.contact_name,
                    email: this.email,
                    phone_number: this.phone_number,
                    address: this.address,
                    no_of_locations: Number(this.no_of_locations),
                    no_of_employees: Number(this.no_of_employees),
                    quantity_of_attendance_device: Number(
                        this.quantity_of_attendance_device
                    ),
                    preferred_mode_of_authentication: this.preferred_mode_of_authentication.toString(),
                    monitor_attendance_online:
                        this.monitor_attendance_online === 'Yes' ? true : false,
                    is_support_needed:
                        this.is_support_needed === 'Yes' ? true : false,
                    additional_request: this.additional_request
                };

                const response = await this.$store.dispatch(
                    'website/requestAQuote',
                    payload
                );
                if (response) {
                    this.loading = false;
                    this.showSuccess = true;
                    this.showError = false;
                    this.resetForm();
                } else {
                    this.showError = true;
                    this.showSuccess = false;
                    this.loading = false;
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
h1,
h2,
h3,
span,
h5,
h6 {
    color: #6c757d;
}
.el-error {
    font-size: 11px !important;
    color: red !important;
    font-weight: lighter !important;
}

.contact-form {
    padding: 50px 0px;
    margin-bottom: 200px;

    .contact-form-link {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 30px;
        margin-bottom: 60px;

        @include media('<sm') {
            gap: 10px;
            grid-template-columns: 1fr;
        }

        .contact-form-card {
            background: white;
            box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
            display: flex;
            align-items: center;
            border-radius: 10px;
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
            cursor: pointer;
            padding: 20px;

            &:hover {
                box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.05),
                    0 0.625rem 1.5rem rgba(0, 0, 0, 0.15);
                transform: translate(0, -3px);
            }

            .circle {
                width: 64.8px;
                height: 64.8px;
                background-color: rgba(176, 218, 144, 0.15);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 16px;
                i {
                    font-size: 30px;
                    color: #7ac143;
                }
            }

            .card-text {
                h6 {
                    font-size: 18px;
                    font-weight: 700;
                    padding: 0;
                    margin: 0;
                }
                p {
                    padding: 0;
                    margin: 0;
                    font-size: 16px;
                }
            }
        }
    }

    .contact-widget {
        position: relative;
        .form-image {
            margin-left: 25%;
            width: 75%;
            height: auto;
            border-radius: 0.3rem;
            @include media('<sm') {
                margin: 0;
                width: 100%;
            }
        }
        .btc-form--contact-us {
            background: white;
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
            position: absolute;
            width: 45%;
            right: 0;
            top: 3%;
            left: 0;
            box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.05),
                0 1.5rem 2.2rem rgba(0, 0, 0, 0.1) !important;
            padding: 30px;
            border-radius: 10px;

            @include media('<sm') {
                position: relative;
                width: 100%;
            }

            .row {
                margin-top: 40px;
            }
        }
    }
}
</style>
