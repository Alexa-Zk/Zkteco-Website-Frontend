<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <user-information :user="single_user_information" />
    </section>
</template>
<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import UserInformation from '~/components/partials/account/UserInformation';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';
import { mapState } from 'vuex';

export default {
    middleware: 'authentication',
    transition: 'zoom',
    components: {
        HeaderMobile,
        UserInformation,
        BreadCrumb
    },
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'User Information'
                }
            ]
        };
    },
    created () {
        const user = this.$store.dispatch("auth/getUserInformation")
    },
    computed: {
        ...mapState({
            single_user_information: state => state.auth.singleUserInformation
        }),
    },
};
</script>

<style lang="scss" scoped></style>
