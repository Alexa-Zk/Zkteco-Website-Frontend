<template lang="html">
    <section class="ps-my-account ps-page--account">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="ps-section__left">
                        <aside class="ps-widget--account-dashboard">
                            <div class="ps-widget__header">
                                <img :src="user_information.avatar_url" />
                                <figure>
                                    <figcaption>Hello</figcaption>
                                    <p>{{user_information.email}}</p>
                                </figure>
                            </div>
                            <div class="ps-widget__content">
                                <AccountLinks :links="accountLinks" />
                            </div>
                        </aside>
                    </div>
                </div>
                <div class="col-lg-8">
                    <FormEditAddress :billing="user_information.billing"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import AccountLinks from './modules/AccountLinks';
import FormEditAddress from '~/components/partials/account/modules/FormEditAddress';

export default {
    name: 'EditAddress',
    components: { AccountLinks, FormEditAddress },
    data() {
        return {
            accountLinks: [
                {
                    text: 'Account Information',
                    url: '/store/account/user-information',
                    icon: 'icon-user'
                },
                {
                    text: 'Invoices',
                    url: '/store/account/invoices',
                    icon: 'icon-papers'
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
                {
                    text: 'Wishlist',
                    url: '/store/account/wishlist',
                    icon: 'icon-heart'
                }
            ]
        };
    },
    computed: {
        ...mapState({
            user_information: state => state.auth.userInfo
        })
    }
};
</script>

<style lang="scss" scoped></style>
