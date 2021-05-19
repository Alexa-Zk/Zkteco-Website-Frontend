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
                                        {{
                                            single_user_information.email
                                        }}
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
                    <section class="ps-section--account-setting">
                        <div class="ps-section__content" >
                            <figure>
                                <figcaption>First Name</figcaption>
                                <p>
                                    {{
                                        single_user_information.first_name
                                    }}
                                </p>
                            </figure>
                            <figure>
                                <figcaption>Last Name</figcaption>
                                <p>
                                    {{
                                        single_user_information.last_name
                                    }}
                                </p>
                            </figure>
                            <figure>
                                <figcaption>Username</figcaption>
                                <p>
                                    {{
                                        single_user_information.username
                                    }}
                                </p>
                            </figure>
                            <figure>
                                <figcaption>Phone</figcaption>
                                <p>
                                    {{
                                        single_user_information.phone
                                    }}
                                </p>
                            </figure>
                            <figure>
                                <figcaption>Company Name</figcaption>
                                <p>
                                    {{
                                        single_user_information.company_name
                                    }}
                                </p>
                            </figure>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import { state } from '~/store/app';
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
                    text: 'Address',
                    url: '/store/account/addresses',
                    icon: 'icon-map-marker'
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
            single_user_information: state => state.auth.singleUserInformation
        })
    }
};
</script>

<style lang="scss" scoped></style>
