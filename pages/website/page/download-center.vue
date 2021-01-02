<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb"  layout="fullwidth"/>
        <downloads />
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import Downloads from '~/components/partials/page/website/Downloads';

export default {
    components: {
        BreadCrumb,
        Downloads
    },
    layout: 'layout-default-website',
    transition: 'zoom',
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Support',
                    url: '/'
                },
                {
                    text: 'Download Center'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
