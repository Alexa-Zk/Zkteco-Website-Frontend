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
                                        <CustomerCare/>
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
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label>
                                                        Issue Type
                                                        <sup>*</sup>
                                                    </label>
                                                    <select class="form-control">
                                                        <option>
                                                            Hardware
                                                        </option>
                                                        <option>
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
                                                    ></textarea>
                                                </div>

                                                <div class="form-group submit">
                                                    <button class="ps-btn">
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
import CustomerCare from "@/static/svg/CustomerCare";

export default {
    components: {
        BreadCrumb,
        CustomerCare
    },
    transition: 'zoom',
    layout: 'layout-default-website',
    data: () => {
        return {
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
