<template lang="html">
    <section class="ps-my-account ps-page--account">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="ps-section__left">
                        <aside class="ps-widget--account-dashboard">
                            <div class="ps-widget__header">
                                <figure>
                                    <figcaption>Hello</figcaption>
                                    <p>
                                        {{
                                            user_information.userInfo.payload
                                                .email
                                        }}
                                    </p>
                                </figure>
                            </div>
                            <div class="ps-widget__content">
                                <AccountLinks :links="accountLinks" />
                            </div>
                        </aside>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="ps-page__content">
                        <div class="ps-section--account-setting">
                            <div class="ps-section__header">
                                <h3>Invoices</h3>
                            </div>
                            <div class="ps-section__content">
                                <TableInvoices />
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
import TableInvoices from './modules/TableInvoices';
export default {
    name: 'InvoiceDetail',
    components: { TableInvoices, AccountLinks },
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
                    icon: 'icon-papers',
                    active: true
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
            user_information: state => state.auth.userInfo
        })
    }
};
</script>

<style lang="scss" scoped></style>
