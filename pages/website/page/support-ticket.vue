<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth" />
        <div class="ps-section--custom">
            <div class="ps-container">
                <section class="ps-newsletter">
                    <div class="container">
                        <form
                            class="ps-form--newsletter"
                            action="do_action"
                            method="post"
                        >
                            <div class="row">
                                <div class="col-lg-6 ps-image">
                                    <div class="ps-form__left">
                                        <CustomerCare />
                                    </div>
                                </div>
                                <div class="col-lg-6 ps-form">
                                    <div class="ps-form__right">
                                        <form class="ps-form--edit-address">
                                            <div class="ps-form__header">
                                                <h3>Support Ticket</h3>
                                            </div>
                                            <div class="ps-form__content">
                                                <div class="form-group">
                                                    <label>
                                                        Company Name
                                                        <sup>*</sup>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        class="form-control"
                                                        v-model="payload.company_name"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label>
                                                        Email <sup>*</sup>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        class="form-control"
                                                        v-model="payload.email"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label>
                                                        Phone
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        class="form-control"
                                                        v-model="payload.phone_number"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label>
                                                        Device Serial Number
                                                        <sup>*</sup>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        class="form-control"
                                                        v-model="payload.serial_number"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label>
                                                        Issue Type
                                                        <sup>*</sup>
                                                    </label>
                                                    <select
                                                        class="form-control"
                                                        v-model="payload.issue_type"
                                                    >
                                                        <option value="">
                                                            Select Issue type
                                                        </option>
                                                        <option value="hardware">
                                                            Hardware
                                                        </option>
                                                        <option value="software">
                                                            Software
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label>
                                                        Description <sup>*</sup>
                                                    </label>

                                                    <textarea
                                                        class="form-control"
                                                        rows="5"
                                                        placeholder="Message"
                                                        v-model="payload.description"
                                                    ></textarea>
                                                </div>

                                                <div class="form-group submit">
                                                    <button class="ps-btn" @click.prevent="supportTicket">
                                                        Submit Ticket
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
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

export default {
    components: {
        BreadCrumb,
        CustomerCare
    },
    transition: 'zoom',
    layout: 'layout-default-website',
    data: () => {
        return {
            payload: {
                company_name: '',
                phone_number: '',
                email: '',
                serial_number: '',
                issue_type: '',
                description: ''
            },
            temp_payload: {
                company_name: '',
                phone_number: '',
                email: '',
                serial_number: '',
                issue_type: '',
                description: ''
            },
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'After Sales',
                    url: '/website/page/after-sales'
                },
                {
                    text: 'Support Ticket'
                }
            ]
        };
    },
    methods: {
        async supportTicket() {
            const ip = await this.$axios.$post(
                'https://wslbackend.zkteco-wa.com/api/v1/integrations/supports',
                this.payload
            );
            if (ip) {
                this.$notify({
                    group: 'addCartSuccess',
                    title: 'Success!',
                    text: `your support ticket has been sent!`
                });
                this.payload = this.temp_payload
            } else {
                this.$notify({
                    group: 'addCartSuccess',
                    title: 'Error!',
                    text: `Some went wrong!`
                });
                this.payload = this.temp_payload
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
