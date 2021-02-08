<template lang="html">
    <div class="ps-page--single">
        <img src="~/static/img/website/about-us-banner.jpg" alt="" />
        <bread-crumb :breadcrumb="breadCrumb" />
        <!-- <our-team /> -->
        <about-value />
        <about-mission />
        <about-vision />
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import AboutMission from '~/components/partials/page/website/AboutMission';
import AboutVision from '~/components/partials/page/website/AboutVision';
import AboutValue from '~/components/partials/page/website/AboutValue';

export default {
    components: {
        AboutMission,
        AboutVision,
        AboutValue,
        BreadCrumb
    },
    layout: "layout-default-website",
    transition: 'zoom',
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'About Us'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.ps-page--single {
    img {
        height: 200px;
        width: 100%;
        object-fit: cover;
    }
}
</style>
