<template lang="html">
    <div class="ps-page--single">
        <img
            data-src="/img/experience-center/header.png"
            class="lazyload"
            alt=""
        />
        <!--bread-crumb :breadcrumb="breadCrumb" / -->
        <!-- <our-team /> -->
        <!--about-value />
        <about-mission />
        <about-vision / -->

        <div class="main_business">
            <div class="main_business_wrapper">
                <div class="business_content">
                    <div class="business_emp">
                        <div>
                            <img
                                data-src="/img/experience-center/exp-centre.png"
                                class="lazyload"
                                alt=""
                            />
                        </div>
                        <div>
                            <h3>
                                EXPERIENCE CENTER
                            </h3>
                            <div>
                                <p>
                                    Our ZKTeco Experience Centre is an
                                    integrated showroom for demonstrations of
                                    our security products and total security
                                    solutions. We offer you and your company the
                                    ultimate experience in security solutions
                                    and services all under one roof. Our
                                    integrated show room offers you
                                    demonstrations of how seamlessly our
                                    products work. Let your employees gain
                                    product knowledge and training to
                                    communicate effectively and enthusiastically
                                    thus, building trust and con dence in
                                    customer relationships.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="business_entrance">
                        <div>
                            <h3>
                                Hands on Training
                            </h3>
                            <div>
                                <p>
                                    ZKTeco provides product- and solution-based
                                    knowledge to its partners, system
                                    integrators, and resellers. With full- edged
                                    monthly online seminars on new technologies
                                    and onsite and hands-on technical training,
                                    we help users completely understand the
                                    products that they install while actively
                                    using their expertise in everyday scenarios.
                                </p>
                            </div>
                        </div>
                        <div>
                            <img
                                data-src="/img/experience-center/Hands-on-Training.png"
                                class="lazyload"
                                alt=""
                            />
                        </div>
                    </div>

                    <div class="business_entrance_mobile">
                        <div>
                            <img
                                data-src="/img/experience-center/Hands-on-Training.png"
                                class="lazyload"
                                alt=""
                            />
                        </div>
                        <div>
                            <h3>
                                Hands on Training
                            </h3>
                            <div>
                                <p>
                                    ZKTeco provides product- and solution-based
                                    knowledge to its partners, system
                                    integrators, and resellers. With full- edged
                                    monthly online seminars on new technologies
                                    and onsite and hands-on technical training,
                                    we help users completely understand the
                                    products that they install while actively
                                    using their expertise in everyday scenarios.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="business_emp">
                        <div>
                            <img
                                data-src="/img/experience-center/Business-Office-Solution.png"
                                class="lazyload"
                                alt=""
                            />
                        </div>
                        <div>
                            <h3>
                                Expert Advice
                            </h3>
                            <div>
                                <p>
                                    Do you need expert advice and assistance?
                                    ZKTeco is here for you! Our account
                                    executives and technical specialists are
                                    positioned to offer you top-notch advice on
                                    the services you require. We help our
                                    clients understand everything there is to
                                    know about our whole security solution and
                                    the endless possibilities that come with
                                    employing ZKTeco products. Our experts will
                                    ensure that you and your team understand how
                                    to put our solutions into action in order to
                                    get the most out of our technology.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="icon_container">
                        <div class="icon_header">
                            <h2>SOLUTIONS</h2>
                        </div>
                        <div class="solution-content">
                            <div class="image-wrapper">
                                <div class="imgae">
                                    <img
                                        data-src="/img/experience-center/Airport-Security-Solution.png"
                                        class="lazyload"
                                        alt=""
                                    />
                                </div>
                                <div class="read">
                                    <p>Airport Security Management Solution</p>
                                </div>
                            </div>

                            <div class="image-wrapper">
                                <div class="imgae">
                                    <img
                                        data-src="/img/experience-center/Business-Office-Solution.png"
                                        class="lazyload"
                                        alt=""
                                    />
                                </div>
                                <div class="read">
                                    <p>Business Office Solution</p>
                                </div>
                            </div>

                            <div class="image-wrapper">
                                <div class="imgae">
                                    <img
                                        data-src="/img/experience-center/armatura-p.png"
                                        class="lazyload"
                                        alt=""
                                    />
                                </div>
                                <div class="read">
                                    <p>Armatura</p>
                                </div>
                            </div>

                            <div class="image-wrapper">
                                <div class="imgae">
                                    <img
                                        data-src="/img/experience-center/Zsmart-Solution.png"
                                        class="lazyload"
                                        alt=""
                                    />
                                </div>
                                <div class="read">
                                    <p>Zsmart Solution</p>
                                </div>
                            </div>

                            <div class="image-wrapper">
                                <div class="imgae">
                                    <img
                                        data-src="/img/experience-center/Multi-Level-Solution.png"
                                        class="lazyload"
                                        alt=""
                                    />
                                </div>
                                <div class="read">
                                    <p>Multi-Level & Smart Parking Solution</p>
                                </div>
                            </div>

                            <div class="image-wrapper">
                                <div class="imgae">
                                    <img
                                        data-src="/img/experience-center/BioTime-Africa.png"
                                        class="lazyload"
                                        alt=""
                                    />
                                </div>
                                <div class="read">
                                    <p>BioTime Africa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-container">
                        <div class="form">
                            <div class="first">
                                <p class="el-error" v-if="$v.firstname.$error">
                                    first name is required!
                                </p>
                                <input
                                    type="text"
                                    class="form-text"
                                    placeholder="First Name"
                                    v-model.trim="$v.firstname.$model"
                                />
                            </div>
                            <div class="last">
                                <p class="el-error" v-if="$v.lastname.$error">
                                    last name is required!
                                </p>
                                <input
                                    type="text"
                                    class="form-text"
                                    placeholder="Last Name"
                                    v-model.trim="$v.lastname.$model"
                                />
                            </div>
                            <div class="company">
                                <p class="el-error" v-if="$v.company.$error">
                                    company is required!
                                </p>
                                <input
                                    type="text"
                                    class="form-text"
                                    placeholder="Your Company"
                                    v-model.trim="$v.company.$model"
                                />
                            </div>
                            <div class="phone">
                                <p class="el-error" v-if="$v.phone.$error">
                                    phone is required!
                                </p>
                                <input
                                    type="text"
                                    class="form-text"
                                    placeholder="Enter your Cellphone Number "
                                    v-model.trim="$v.phone.$model"
                                />
                            </div>
                            <div class="email">
                                <p class="el-error" v-if="$v.email.$error">
                                    email is required!
                                </p>
                                <input
                                    type="email"
                                    class="form-text"
                                    placeholder="Enter Your Email Address"
                                    v-model.trim="$v.email.$model"
                                />
                            </div>
                            <div class="date">
                                <p class="el-error" v-if="$v.date.$error">
                                    date is required!
                                </p>
                                <label>Schedule Date</label>
                                <input
                                    type="date"
                                    class="form-text"
                                    v-model.trim="$v.date.$model"
                                />
                            </div>
                            <div class="description">
                                <p
                                    class="el-error"
                                    v-if="$v.description.$error"
                                >
                                    description is required!
                                </p>
                                <textarea
                                    placeholder="Describe your request here..."
                                    v-model.trim="$v.description.$model"
                                >
                                </textarea>
                            </div>
                            <div class="agreed">
                                <div>
                                    <div>
                                        <p
                                            class="el-error"
                                            v-if="$v.agreement.$error"
                                        >
                                            agreement is required!
                                        </p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        id="agreement"
                                        name="agreement"
                                        v-model.trim="$v.agreement.$model"
                                    />
                                    <label for="scales"
                                        >I accept the Terms and
                                        Conditions.</label
                                    >
                                </div>
                            </div>
                            <div class="book">
                                <button @click.prevent="bookAppointment">
                                    {{ loading ? 'Sending...' : 'Sign Up' }}

                                    <p
                                        style="font-size: 1.5rem; color: green; font-weight: 600;"
                                        v-if="showSuccess"
                                    >
                                        You will be contacted shortly!!
                                    </p>

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
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { required, email, numeric } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';
import BreadCrumb from '~/components/elements/BreadCrumb';
import AboutMission from '~/components/partials/page/website/AboutMission';
import AboutVision from '~/components/partials/page/website/AboutVision';
import AboutValue from '~/components/partials/page/website/AboutValue';

export default {
    head() {
        return {
            titleTemplate: 'About Us',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'About ZKTeco West Africa'
                }
            ]
        };
    },
    components: {
        AboutMission,
        AboutVision,
        AboutValue,
        BreadCrumb
    },
    layout: 'layout-default-website',
    transition: 'zoom',

    data: () => {
        return {
            showError: false,
            showSuccess: false,
            loading: '',
            errors: '',
            firstname: '',
            lastname: '',
            company: '',
            phone: '',
            email: '',
            date: '',
            description: '',
            agreement: '',
            snackBarMessage:
                'Form Submitted Successfully. You will be contacted by one of our customer representatives.',
            snackbar: false,
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'About Us'
                }
            ]
        };
    },
    mixins: [validationMixin],
    validations: {
        firstname: { required },
        lastname: { required },
        company: { required },
        phone: { required, numeric },
        email: { required, email },
        date: { required },
        description: { required },
        agreement: { required }
    },
    methods: {
        resetForm() {
            this.firstname = '';
            this.lastname = '';
            this.company = '';
            this.phone = '';
            this.email = '';
            this.date = '';
            this.description = '';
            this.agreement = '';
        },
        async bookAppointment() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                return false;
            } else if (this.$v.$error) {
                return false;
            } else {
                this.loading = true;
                const payload = {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    company: this.company,
                    phone: this.phone,
                    email: this.email,
                    date: this.date,
                    description: this.description,
                    agreement: this.agreement
                };
                console.log('::payload::-', payload);

                const response = await this.$store.dispatch(
                    'website/bookAppointmentExperienceCenter',
                    payload
                );

                if (response) {
                    this.loading = false;
                    this.snackbar = true;
                    this.showError = false;
                    setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });

                        this.resetForm();
                        //window.location.reload();
                        //this.$router.push('/biotime-ng');
                    }, 3001);
                } else {
                    this.loading = false;
                    this.showSuccess = false;
                    this.showError = true;
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.el-error {
    font-size: 1.5rem !important;
    color: red !important;
    font-weight: lighter !important;
}
.group_profile_container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8%;
    margin-right: 8%;
    padding-top: 50px;
    padding-bottom: 50px;
    flex-direction: column;
    .group_profile {
        display: grid;
        grid-template-columns: 3.4fr 1.8fr;
        justify-content: space-between;
        align-items: center;
        grid-gap: 2em;

        h3 {
            color: #8bc76f;
        }
        p {
            font-size: 1.2em;
        }
        div {
        }

        img {
            height: 100% !important;
            width: 100% !important;
            // object-fit: cover;
        }
    }
    @media (max-width: 740px) {
        .group_profile {
            display: flex;
            flex-direction: column;
        }
    }
}

.emp_stat_container {
    background: #8bc63e;
    .emp_stat {
        margin-left: 8%;
        margin-right: 8%;
        padding-top: 50px;
        padding-bottom: 50px;

        text-align: center;

        display: grid;
        grid-template-columns: repeat(4, 1fr);

        div {
            color: #fff;
            span {
                font-size: 4.8rem;
                font-weight: bold;
            }
            p {
                color: #fff;
                font-size: 1.5rem;
            }
        }
    }
    @media (max-width: 740px) {
        .emp_stat {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            text-align: center;
        }
    }
}

.goals {
    .vission_mission {
        margin-left: 8%;
        margin-right: 8%;
        padding-top: 45px;
        padding-bottom: 40px;

        display: grid;
        grid-template-columns: 1.5fr 1.5fr;

        .vission {
            display: grid;
            grid-template-columns: 1fr 3fr;
            grid-gap: 0.8em;
            align-items: center;
            font-size: 1.5rem;
            margin-bottom: 2em;
        }

        h2 {
            color: #8bc76f;
        }

        img {
            width: 10em;
            height: 10em;
        }

        .mission {
            background: #8bc63e;
            border-radius: 10px;
        }

        @media (max-width: 740px) {
            grid-template-columns: 1fr;
        }
    }
}

.icon_container {
    // solution-content -> image-wrapper ->( imgae ? read )
    .icon_header {
        text-align: center;
        h2 {
            color: #8bc63e;
        }
    }
    .solution-content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 2rem;

        .image-wrapper {
            text-align: center;
            .read {
                p {
                    font-size: 2rem;
                    font-weight: bold;
                    color: #000;
                }
            }
        }
    }

    @media (max-width: 740px) {
        .icon_wrapper {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            text-align: center;
        }

        .solution-content {
            display: grid;
            grid-template-columns: 1fr;
        }
    }
}

.main_business {
    display: flex;
    justify-content: center;
    align-items: center;

    .main_business_wrapper {
        max-width: 1000px;
        margin-left: 8%;
        margin-right: 8%;
        padding-top: 30px;
        padding-bottom: 50px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h3 {
            padding-bottom: 10px;
        }

        .business_content {
            h3 {
                color: #8bc76f;
            }
            .business_emp {
                padding-top: 20px;
                padding-bottom: 60px;
                display: grid;
                grid-template-columns: 1.8fr 3.4fr;
                grid-gap: 2em;
                align-items: center;

                img {
                    height: 100% !important;
                    width: 100% !important;
                    // object-fit: cover;
                }
                p {
                    font-size: 1.8rem;
                    text-align: justify;
                }
            }

            .business_entrance {
                padding-top: 40px;
                padding-bottom: 60px;
                display: grid;
                grid-template-columns: 3.4fr 2.1fr;
                grid-gap: 2em;
                align-items: stretch;

                p {
                    font-size: 1.8rem;
                    text-align: justify;
                }

                img {
                    height: 100% !important;
                    width: 100% !important;
                    font-size: 1.5rem;
                }
            }

            .business_entrance_mobile {
                display: none;
            }
        }

        @media (max-width: 740px) {
            .business_content {
                .business_emp {
                    display: flex;
                    flex-direction: column;
                }
                .business_entrance {
                    display: none;
                }
                .business_entrance_mobile {
                    display: flex;
                    flex-direction: column;
                    padding-top: 40px;
                    padding-bottom: 60px;
                    grid-gap: 2em;

                    p {
                        font-size: 1.5rem;
                        text-align: justify;
                    }
                }
            }
        }
    }

    .form-container {
        // background: #8bc63e;
        margin-top: 120px;

        .form {
            margin: 0 20%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr;
            grid-gap: 1rem;

            grid-template-areas:
                'first last'
                'company company'
                'phone phone'
                'email email'
                'date date'
                'description description'
                'agreed agreed'
                'book book';

            .form-text,
            textarea {
                width: 100%;
                // background: #8bc76f;

                margin: 1rem 0;
                font-size: 1.5rem;
                padding: 1.2rem 2rem;
                border: 1px solid #686767;
            }

            .first {
                grid-area: first;
            }
            .last {
                grid-area: last;
            }
            .company {
                grid-area: company;
            }
            .phone {
                grid-area: phone;
            }

            .email {
                grid-area: email;
            }
            .date {
                grid-area: date;
                label {
                    font-size: 1.4rem;
                }
            }
            .description {
                grid-area: description;
            }
            .agreed {
                grid-area: agreed;
                display: flex;
                align-items: flex-start;

                label {
                    padding-left: 0.8rem;
                    font-size: 1.8rem;
                }
            }
            .book {
                grid-area: book;
                display: flex;
                align-items: center;
                justify-content: center;
                button {
                    padding: 1.1rem 5rem;
                    background: #8bc76f;
                    font-size: 1.6rem;
                    cursor: pointer;
                    border-radius: 3px;
                }
                button:hover {
                    background: #5ba538;
                }
            }
        }
    }
}

.ps-page--single {
    img {
        height: 100%;
        width: 100% !important;
        object-fit: cover;
    }

    @media (max-width: 740px) {
        .form-container {
            margin-top: 20px;
            .form {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
                grid-template-areas:
                    'first'
                    'last'
                    'company'
                    'phone'
                    'email'
                    'date'
                    'description'
                    'agreed'
                    'book';
            }
        }
    }
}
</style>
