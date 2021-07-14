<template lang="html">
    <section class="ps-my-account ps-page--account">
        <div class="container">
            <div class="row" v-if="single_user_information">
                <div class="col-lg-4">
                    <div class="ps-section__left">
                        <aside class="ps-widget--account-dashboard" >
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
                    <form-edit-shipping />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import AccountLinks from './modules/AccountLinks';
import FormEditShipping from '~/components/partials/account/modules/FormEditShipping';

export default {
    name: 'EditShipping',
    components: { AccountLinks, FormEditShipping },
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
            single_user_information: state => state.auth.singleUserInformation
        })
    },
    mounted() {
        if (this.single_user_information) {
            return;
        } else {
            this.$router.go(-1);
        }
    }
    
};
</script>

<style lang="scss" scoped></style>
