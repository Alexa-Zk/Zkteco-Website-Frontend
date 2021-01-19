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
                                <account-links :links="accountLinks" />
                            </div>
                        </aside>
                    </div>
                </div>
                <div class="col-lg-8">
                    <section class="ps-section--account-setting">
                        <div class="ps-section__content">
                            <p>No product here.</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from "vuex"
import AccountLinks from './modules/AccountLinks';
export default {
    name: 'UserInformation',
    components: { AccountLinks },
    data() {
        return {
            accountLinks: [
                {
                    text: 'Account Information',
                    url: '/store/account/user-information',
                    icon: 'icon-user',
                    active: true
                },
                {
                    text: 'Invoices',
                    url: '/store/account/invoices',
                    icon: 'icon-papers'
                },
                {
                    text: 'Address',
                    url: '/store/account/addresses',
                    icon: 'icon-map-marker'
                },
                {
                    text: 'My Orders',
                    url: '/store/account/recent-viewed-product',
                    icon: 'icon-store',
                    
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
            user_information: state => state.auth.userInfo,
            
        })
    }
};
</script>

<style lang="scss" scoped></style>
