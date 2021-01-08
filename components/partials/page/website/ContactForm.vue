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
                                placeholder="Name *"
                                v-model="name"
                            />
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <div class="form-group">
                            <input
                                class="form-control"
                                type="text"
                                placeholder="Email *"
                                v-model="email"
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
                                v-model="message"
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div class="form-group submit">
                    <button @click.prevent="willContactUs" class="ps-btn">
                        Send message
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
            email: '',
            name: '',
            message: ''
        };
    },
    methods: {
        async willContactUs() {
            let payload = {
                email: this.email,
                full_name: this.name,
                message: this.message
            };
            const ip = await this.$axios.$post(
                'https://admin.zkteco-wa.com/contact-pages',
                payload
            );
            if (ip) {
                this.$notify({
                    group: 'addCartSuccess',
                    title: 'Success!',
                    text: `Message sent! We will get in touch Shortly`
                });
                this.email = '';
                this.name = '';
                this.message = '';
            } else {
                this.$notify({
                    group: 'addCartSuccess',
                    title: 'Error!',
                    text: `Something went wrong!`
                });
                this.email = '';
                this.name = '';
                this.message = ''
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-contact-form {
    padding: 30px 0px;
    .container {
        max-width: 1000px!important;

        h3 {
            margin-bottom: 30px;
        }
    }

}
</style>
