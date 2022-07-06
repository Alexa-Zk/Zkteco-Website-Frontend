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
                                                disabled
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
                const payload = {
                    serial_number: this.serial_number
                };
                const response = await this.$axios.$post(
                    'https://wslbackend.zkteco-wa.com/api/v1/integrations/devices',
                    payload
                );
                if (response) {
                    this.serial_number = '';

                    this.productData = response.data;
                }
            } catch (error) {
                this.serial_number = '';
                this.productData = error.response.data;
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
