<template>
    <div id="btc-contact" class="contact-form" style="background: rgb(250, 250, 250);">
        <div class="ps-container contact-form-link">
            <div class="contact-form-card">
                <div class="circle">
                    <i class="icon-telephone"></i>
                </div>
                <div class="card-text">
                    <h6>Call Us</h6>
                    <p>(55) 5292 8418</p>
                </div>
            </div>
            <div class="contact-form-card">
                <div class="circle">
                    <i class="icon-mailbox-full"></i>
                </div>
                <div class="card-text">
                    <h6>Email</h6>
                    <p>info@zkteco.mx</p>
                </div>
            </div>
            <div class="contact-form-card">
                <div class="circle">
                    <i class="icon-earth"></i>
                </div>
                <div class="card-text">
                    <h6>Visit Us</h6>
                    <p>Insurgentes Sur 553, CDMX</p>
                </div>
            </div>
        </div>

        <div class="contact-widget">
            <div class="form-image">
                <img src="~/static/img/biotimecloud-zkteco.jpeg" alt="" />
            </div>
            <form
                class="ps-form--contact-us btc-form--contact-us"
                action="/"
                method="get"
            >
                <h3>Get In Touch</h3>
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <div class="form-group">
                            <input
                                class="form-control"
                                type="text"
                                placeholder="Full Name *"
                                v-model="payload.full_name"
                            />
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <div class="form-group">
                            <input
                                class="form-control"
                                type="text"
                                placeholder="Email *"
                                v-model="payload.email"
                            />
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <div class="form-group">
                            <input
                                class="form-control"
                                type="text"
                                placeholder="Company Name *"
                                v-model="payload.company"
                            />
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <div class="form-group">
                            <input
                                class="form-control"
                                type="text"
                                placeholder="Phone Number *"
                                v-model="payload.phone"
                            />
                        </div>
                    </div>
                    <div
                        class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                    >
                        <div class="form-group">
                            <input
                                class="form-control"
                                type="text"
                                placeholder="Subject *"
                                v-model="payload.subject"
                            />
                        </div>
                    </div>
                    <div
                        class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                    >
                        <div class="form-group">
                            <textarea
                                class="form-control"
                                rows="5"
                                placeholder="Message"
                                v-model="payload.message"
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div class="form-group submit">
                    <el-button @click.prevent="willContactUs" class="ps-btn">
                        {{ loading ? 'Sending...' : 'Send Message' }}
                    </el-button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: '',
            payload: {
                full_name: '',
                company: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            },
            disabled: false
        };
    },
    methods: {
        async willContactUs() {
            this.loading = true;
            const response = await this.$store.dispatch(
                'website/sendEnquiry',
                this.payload
            );
            if (response.data) {
                this.loading = false;
                this.$notify({
                    group: 'addCartSuccess',
                    title: 'Success!',
                    text: `your enquiry has been sent! you would be contact shortly. Thank you`
                });
                this.payload.full_name = '';
                this.payload.company = '';
                this.payload.email = '';
                this.payload.phone = '';
                this.payload.subject = '';
                this.payload.message = '';
            } else {
                this.loading = false;
                this.$notify({
                    title: 'Waring!',
                    text: `All text field should be filled`,
                    group: 'addCartSuccess'
                });
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
.contact-form {
    padding: 100px 0px;

    .contact-form-link {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
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
                    font-size: 18px;
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
            top: 10%;
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
