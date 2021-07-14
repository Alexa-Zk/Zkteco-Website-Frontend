<template lang="html">
    <section class="ps-my-account ps-page--account">
        <div class="container">
            <div class="row" v-if="single_user_information">
                <div class="col-lg-4">
                    <div class="ps-section__left">
                        <aside class="ps-widget--account-dashboard">
                            <div class="ps-widget__header">
                                <figure>
                                    <figcaption>Hello</figcaption>
                                    <p>
                                        {{ single_user_information.email }}
                                    </p>
                                </figure>
                            </div>
                            <div class="ps-widget__content">
                                <account-links :links="accountLinks" />
                            </div>
                        </aside>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="ps-section--account-setting">
                        <div class="ps-section__content">
                            <div class="row">
                                <div class="col-md-6 col-12">
                                    <figure class="ps-block--address">
                                        <figcaption>
                                            Billing address
                                        </figcaption>
                                        <div class="ps-block__content">
                                            <p>
                                                Set up your billing address.
                                            </p>
                                            <div class="ps-block__addresses" v-if="billing">
                                                <span class="company">
                                                    {{billing.company}}
                                                </span>
                                                <span>
                                                    {{billing.address_1}}
                                                </span>
                                                <span>
                                                    {{billing.phone}}
                                                </span>
                                                <span>
                                                    {{billing.country}}
                                                </span>
                                                <span>
                                                    {{billing.state}}
                                                </span>
                                                <span>
                                                    {{billing.city}}
                                                </span>
                                            </div>
                                            <nuxt-link
                                                to="/store/account/edit-address"
                                            >
                                                <a>Edit</a>
                                            </nuxt-link>
                                        </div>
                                    </figure>
                                </div>
                                <div class="col-md-6 col-12">
                                    <figure class="ps-block--address">
                                        <figcaption>
                                            Shipping address
                                        </figcaption>
                                        <div class="ps-block__content">
                                            <p>
                                                Set up your shipping address
                                            </p>
                                            <div class="ps-block__addresses" v-if="shipping">
                                                <span class="company">
                                                    {{shipping.company}}
                                                </span>
                                                <span>
                                                    {{shipping.first_name}} {{shipping.last_name}}
                                                </span>
                                                <span>
                                                    {{shipping.address_1}}
                                                </span>
                                                <span>
                                                    {{shipping.phone}}
                                                </span>
                                                <span>
                                                    {{shipping.country}}
                                                </span>
                                                <span>
                                                    {{shipping.state}}
                                                </span>
                                                <span>
                                                    {{shipping.city}}
                                                </span>
                                            </div>
                                            <nuxt-link
                                                to="/store/account/edit-shipping"
                                            >
                                                <a>Edit</a>
                                            </nuxt-link>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import AccountLinks from './modules/AccountLinks';
export default {
    name: 'Addresses',
    components: { AccountLinks },
    data() {
        return {
            accountLinks: [
                {
                    text: 'Account Information',
                    url: '/store/account/user-information',
                    icon: 'icon-user'
                },
                {
                    text: 'Address',
                    url: '/store/account/addresses',
                    icon: 'icon-map-marker',
                    active: true
                },
                {
                    text: 'My Orders',
                    url: '/store/account/recent-viewed-product',
                    icon: 'icon-store'
                },
            ]
        };
    },
    computed: {
        ...mapState({
            single_user_information: state => state.auth.singleUserInformation,
            shipping: state => state.auth.shipping,
            billing: state => state.auth.billing
        })
    }
};
</script>

<style lang="scss" scoped>
.ps-block__addresses {
    margin-bottom: 16px;
    .company {
        font-weight: 600;
        font-size: medium;
    }
    span {
        display: block;
    }
}
</style>
