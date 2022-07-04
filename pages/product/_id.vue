<template lang="html">
    <div class="martfury">
        <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth" />
        <div class="ps-page--product">
            <div class="ps-container">
                <div class="ps-page__container">
                    <div class="ps-page__left" v-if="pdt">
                        <product-detail-fullwidth :singleProduct="pdt" />
                    </div>
                    <div class="ps-page__right">
                        <div>
                            <form
                                class="ps-form--contact-us btc-form--contact-us"
                            >
                                <h3>Request a quote</h3>
                                <div class="row">
                                    <div
                                        class="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12 "
                                    >
                                        <div class="form-group">
                                            <label>Name </label>
                                            <input
                                                class="form-control"
                                                type="text"
                                                placeholder="Name"
                                                v-model.trim="$v.name.$model"
                                            />

                                            <p
                                                class="el-error"
                                                v-if="$v.name.$error"
                                            >
                                                The name is required!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div
                                        class="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12 "
                                    >
                                        <div class="form-group">
                                            <label>Company</label>
                                            <input
                                                class="form-control"
                                                type="text"
                                                placeholder="Company"
                                                required
                                                v-model.trim="$v.company.$model"
                                            />
                                            <p
                                                class="el-error"
                                                v-if="$v.name.$error"
                                            >
                                                Company is required!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div
                                        class="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12 "
                                    >
                                        <div class="form-group">
                                            <label>Country </label>
                                            <input
                                                class="form-control"
                                                type="text"
                                                placeholder="Country"
                                                required
                                                v-model.trim="$v.country.$model"
                                            />
                                            <p
                                                class="el-error"
                                                v-if="$v.name.$error"
                                            >
                                                Country is required!
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div
                                        class="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12 "
                                    >
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input
                                                class="form-control"
                                                type="email"
                                                placeholder="Email "
                                                v-model="email"
                                            />
                                            <p
                                                class="el-error"
                                                v-if="$v.email.$error"
                                            >
                                                The email is required!
                                            </p>
                                            <p
                                                class="el-error"
                                                v-if="!$v.email.email"
                                            >
                                                Must be a valid email
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div
                                        class="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12 "
                                    >
                                        <div class="form-group">
                                            <label>Phone Number</label>
                                            <input
                                                class="form-control"
                                                type="number"
                                                placeholder="Phone Number"
                                                v-model="phone"
                                            />
                                            <p
                                                class="el-error"
                                                v-if="$v.phone.$error"
                                            >
                                                Phone Number is required!
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div
                                        class="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12 "
                                    >
                                        <div class="form-group">
                                            <label>
                                                Where did you hear/see about us
                                            </label>
                                            <input
                                                class="form-control"
                                                type="text"
                                                placeholder="Where did you hear/see about us"
                                                v-model="about_us"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div
                                        class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                                    >
                                        <div class="form-group">
                                            <label>Message </label>

                                            <textarea
                                                class="form-control"
                                                v-model="additional_request"
                                                placeholder="Message "
                                                id="floatingTextarea"
                                            ></textarea>
                                        </div>
                                    </div>

                                    <br /><br />
                                </div>
                                <div class="row">
                                    <div
                                        class="form-group submit"
                                        style="margin-top: 10px;"
                                    >
                                        <button
                                            @click.prevent="willContactUs"
                                            class="ps-btn ps-btn--fullwidth"
                                        >
                                            {{
                                                loading ? 'Sending...' : 'Send'
                                            }}
                                        </button>
                                    </div>
                                    <p class="el-error" v-if="showError">
                                        An error occurred
                                    </p>
                                    <p
                                        style="font-size: 14px; color: green; font-weight: 600;"
                                        v-if="showSuccess"
                                    >
                                        You will be contacted shortly!!
                                    </p>
                                </div>
                            </form>
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
                        </div>
                    </div>
                </div>
                <!-- <related-product layout="fullwidth" collection-slug="shop-recommend-items"/> -->
            </div>
        </div>
        <newsletters layout="fullwidth" />
    </div>
</template>

<script>
import ProductDetailFullwidth from '~/components/elements/detail/website/ProductDetailFullwidth';
import BreadCrumb from '~/components/elements/BreadCrumb';
import RelatedProduct from '~/components/partials/product/RelatedProduct';
import ProductWidgets from '~/components/partials/product/website/ProductWidgets';
import LayoutProduct from '~/layouts/layout-product';
import Newsletters from '~/components/partials/commons/Newsletters';

import { required, email, numeric } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

// export default {
//     name: 'RequestQuoteForm',
//     mixins: [validationMixin],

export default {
    layout: 'layout-default-website',
    name: 'Products',
    transition: 'zoom',
    mixins: [validationMixin],
    components: {
        Newsletters,
        LayoutProduct,
        ProductWidgets,
        RelatedProduct,
        BreadCrumb,
        ProductDetailFullwidth
    },
    async asyncData({ params, $axios }) {
        try {
            const response = await $axios.get(
                `https://admin.zkteco-wa.com/products?slug_in=${params.id}`
            );
            const pdt = response.data[0];
            return { pdt };
        } catch (error) {}
    },
    head() {
        // const name = this.formattedProducts ? this.formattedProducts.name : '';
        // const description = this.formattedProducts
        //     ? this.formattedProducts.description
        //     : 'Product Details - Description';
        // const image = this.formattedProducts
        //     ? this.formattedProducts.images[0].url
        //     : 'https://www.zkteco-wa.com/img/zkteco-logo1.png';
        // const title = description.replace(/<\/?[^>]+(>|$)/g, '');
        let description = 'ZKTeco | Product ';
        let title = 'ZKTeco | Product ';
        let image = 'ZKTeco | Product ';
        let keywords = 'ZKTeco | Product ';

        if (
            this.$data.pdt !== null ||
            this.$data.pdt !== undefined ||
            this.$data.pdt !== ''
        ) {
            description = this.$data.pdt.description.replace(
                /<\/?[^>]+(>|$)/g,
                ''
            );
            image = this.$data.pdt.images[0].url;
            title = this.$data.pdt.name;
            keywords = this.$data.pdt.name;
        }

        return {
            title: title,
            titleTemplate(title) {
                return `${title}`;
            },
            meta: [
                {
                    hid: 'title',
                    name: 'title',
                    content: title
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: description.replace(/<\/?[^>]+(>|$)/g, '')
                },
                {
                    hid: 'twitter:title',
                    name: 'twitter:title',
                    content: title
                },
                {
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content: description.replace(/<\/?[^>]+(>|$)/g, '')
                },
                {
                    hid: 'twitter:image',
                    name: 'twitter:image',
                    content: image
                },
                {
                    hid: 'twitter:image:alt',
                    name: 'twitter:image:alt',
                    content: description.replace(/<\/?[^>]+(>|$)/g, '')
                },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: title
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: description.replace(/<\/?[^>]+(>|$)/g, '')
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: image
                },
                {
                    hid: 'og:image:secure_url',
                    property: 'og:image:secure_url',
                    content: image
                },
                {
                    hid: 'og:image:alt',
                    property: 'og:image:alt',
                    content: description.replace(/<\/?[^>]+(>|$)/g, '')
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: keywords
                }
            ]
        };
    },
    // jsonld() {
    //     if (this.pdt) {
    //         return {
    //             '@context': 'https://schema.org',
    //             '@id': '#product',
    //             '@type': 'IndividualProduct',
    //             additionalType: `https://www.zkteco-wa.com/product/${this.pdt.slug}`,
    //             description: `https://www.zkteco-wa.com/product/${this.pdt.description}`,
    //             name: `https://www.zkteco-wa.com/product/${this.pdt.name}`
    //         };
    //     } else {
    //         return {};
    //     }
    // },
    data() {
        return {
            fullPage: true,
            products: [],
            height: 60,
            width: 40,
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Products',
                    url: '/product'
                },
                {
                    text: ''
                }
            ],
            // sanwo
            snackBarMessage:
                'Form Submitted Successfully. You will be contacted by one of our customer representatives.',
            snackbar: false,
            showError: false,
            showSuccess: false,
            loading: '',
            name: '',
            company: '',
            country: '',
            email: '',
            phone: '',
            about_us: '',
            additional_request: ''
        };
    },
    validations: {
        name: { required },
        company: { required },
        country: { required },
        email: { required, email },
        phone: { required },
        additional_request: { required }
    },
    methods: {
        resetForm() {
            this.name = '';
            this.company = '';
            this.country = '';
            this.email = '';
            this.phone = '';
            this.about_us = '';
            this.additional_request = '';
        },
        async willContactUs() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                return false;
            } else if (this.$v.$error) {
                return false;
            } else {
                this.loading = true;
                const payload = {
                    company_name: this.company,
                    contact_name: this.name,
                    country: this.country,
                    email: this.email,
                    phone: this.phone,
                    route: this.$route.params.id,
                    about_us: this.about_us,
                    additional_request: this.additional_request
                };
                const response = await this.$store.dispatch(
                    'website/requestAProductQuote',
                    payload
                );

                if (response) {
                    this.loading = false;
                    this.snackbar = true;
                    this.showError = false;
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
    font-size: 14px !important;
    color: red !important;
    font-weight: lighter !important;
}
</style>
