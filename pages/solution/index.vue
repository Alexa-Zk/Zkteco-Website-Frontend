<template lang="html">
    <div>
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-page--single ps-page--vendor">
            <div class="container">
                <div class="ps-layout--shop">
                    <div class="ps-layout__left">
                        <solution-widget />
                    </div>
                    <div class="ps-layout__right">
                        <store-list-2 />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import StoreList2 from '~/components/partials/vendor/website/StoreList2';
import SolutionWidget from '~/components/partials/shop/modules/website/SolutionWidget';

export default {
    head() {
        return {
            titleTemplate: 'Solutions',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Solutions'
                }
            ]
        };
    },
    components: {
        StoreList2,
        BreadCrumb,
        SolutionWidget
    },
    layout: 'layout-default-website',
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Solutions'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
