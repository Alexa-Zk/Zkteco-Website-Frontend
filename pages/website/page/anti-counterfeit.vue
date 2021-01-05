<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth" />
        <div class="ps-section--custom">
            <div class="ps-container">
                <!-- <div class="ps-section__header">
                    <h1>Page Heading</h1>
                </div> -->
                <section class="ps-newsletter">
                    <div
                        class="container"
                    >
                        <form
                            class="ps-form--newsletter"
                            action="do_action"
                            method="post"
                        >
                            <div class="row">
                                <div class="col-lg-5">
                                    <div class="ps-form__left">
                                        <h3>
                                            {{
                                                $t('Product Verification')
                                            }}
                                        </h3>
                                        <p>
                                            {{
                                                $t('Check if product is authentic and is covered by warranty')
                                            }}
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-7 ">
                                    <div class="ps-form__right">
                                        <div class="form-group--nest">
                                            <input
                                                class="form-control"
                                                type="text"
                                                placeholder="Input Serial Number"
                                            />
                                            <button class="ps-btn">
                                                {{ $t('Search') }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';

export default {
    components: {
        BreadCrumb
    },
    transition: 'zoom',
    layout: 'layout-default-website',
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'After Sales',
                    url: '/website/page/after-sales'
                },
                {
                    text: 'Anti Counterfeit Enquiry'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
