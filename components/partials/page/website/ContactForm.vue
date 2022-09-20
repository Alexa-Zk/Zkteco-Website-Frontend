<template lang="html">
    <div class="ps-contact-form">
        <div class="container">
            <form class="ps-form--contact-us" action="/" method="get">
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
                <div class="form-group">
                    <v-checkbox color="success" v-model="checkbox">
                        <template v-slot:label>
                            <div class="agreement_link">
                                I have read and agree to
                                <a target="_blank" href="/website/page/privacy-policy" @click.stop>
                                    Membership Registration Agreement
                                </a>,
                                <a target="_blank" href="/website/page/privacy-policy" @click.stop>
                                    Privacy Policy
                                </a>
                            
                            </div>
                        </template>
                    </v-checkbox>
                </div>
                <div class="form-group submit">
                    <button
                        @click.prevent="willContactUs"
                        class="ps-btn"
                    >
                        {{loading ? "Sending..." : "Send Message"}}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactForm',
    data() {
        return {
            loading: '',
            payload: {
                full_name: '',
                company: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            },
            checkbox: false,
            disabled: false
        };
    },
    methods: {
        async willContactUs() {
            if(!this.checkbox){
                this.$notify({
                    title: 'Warning!',
                    text: `Kindly Accept the Terms and Condition`,
                    group: 'addCartSuccess'
                });
                return false
            }
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
                    title: 'Warning!',
                    text: `All text field should be filled`,
                    group: 'addCartSuccess'
                });
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-contact-form {
    padding: 30px 0px;
    .container {
        max-width: 1000px !important;

        h3 {
            margin-bottom: 30px;
        }
    }
}
</style>
