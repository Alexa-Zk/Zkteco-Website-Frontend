<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth" />
        <div class="ps-section--custom">
            <div class="ps-container">
                <!-- <div class="ps-section__header">
                    <h1>Page Heading</h1>
                </div> -->
                <section class="ps-newsletter">
                    <div class="container">
                        <form
                            class="ps-form--newsletter"
                            action="do_action"
                            method="post"
                        >
                            <div class="row">
                                <div class="col-lg-5">
                                    <div class="ps-form__left">
                                        <h3>
                                            Product Verification
                                        </h3>
                                        <p>
                                            Check if product is authentic and is covered by warranty
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-7 ">
                                    <div class="ps-form__right">
                                        <div class="form-group--nest">
                                            <input
                                                class="form-control"
                                                type="text"
                                                placeholder="Input Serial Number"
                                                v-model="serial_number"
                                            />
                                            <button
                                                class="ps-btn"
                                                @click.prevent="
                                                    ProductAuthentication
                                                "
                                            >
                                                Search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div class="conterfeit-table">
                            <authentication-card :productData="productData" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import AuthenticationCard from '@/components/partials/product/ProductAuthenticationCard';

export default {
    head() {
        return {
            titleTemplate: 'Anti Counterfeiting - ZKTeco West Africa',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Anti Counterfeiting'
                }
            ]
        };
    },
    components: {
        BreadCrumb,
        AuthenticationCard
    },
    transition: 'zoom',
    layout: 'layout-default-website',
    data: () => {
        return {
            serial_number: '',
            productData: '',
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
                    text: 'Anti Counterfeit Enquiry'
                }
            ]
        };
    },
    methods: {
        async ProductAuthentication() {
            try {
                const serialNumber = (this.serial_number || '').trim();
                if (!serialNumber) {
                    return;
                }

                const response = await this.$axios.$post(
                    `https://admin.zkteco-wa.com/products/anticounterfeitingquery?barCode=${encodeURIComponent(serialNumber)}`,
                    {},
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                );

                const resultCode = response?.data?.ResultCode;
                const body = response?.data?.body || {};

                if (resultCode === 1) {
                    this.productData = {
                        status: true,
                        serial_number: body.ZSN || body.ZHN || serialNumber,
                        exclusive_area: body.BZIRK || 'Unknown',
                        date_of_manufacture: body.WADAT || 'Unknown',
                        model: body.ZZJCPH || 'Unknown'
                    };
                } else {
                    this.productData = {
                        status: false,
                        serial_number: serialNumber,
                        exclusive_area: 'Unknown',
                        date_of_manufacture: 'Unknown',
                        model: 'Unknown',
                        message: 'Serial number not found'
                    };
                }

                this.serial_number = '';
            } catch (error) {
                const serialNumber = (this.serial_number || '').trim();
                this.serial_number = '';
                this.productData = {
                    status: false,
                    serial_number: serialNumber || 'Unknown',
                    exclusive_area: 'Unknown',
                    date_of_manufacture: 'Unknown',
                    model: 'Unknown',
                    message: 'Unable to verify serial number at the moment'
                };
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
