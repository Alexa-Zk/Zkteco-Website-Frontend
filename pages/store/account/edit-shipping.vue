<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <edit-shipping />
    </section>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import Newsletters from '~/components/partials/commons/Newsletters';
import EditShipping from '~/components/partials/account/EditShipping';

export default {
    transition: 'zoom',
    middleware: 'authentication',
    components: {
        EditShipping,
        Newsletters,
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
                    text: 'Edit Address'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
