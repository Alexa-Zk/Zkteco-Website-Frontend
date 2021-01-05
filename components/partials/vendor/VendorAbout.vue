<template lang="html">
    <div class="ps-section--vendor ps-vendor-about">
        <div class="container" v-if="formatted">
            <div class="ps-section__header">
                <!-- <p>WHY SELL ON MARTFURY</p> -->
                <h4 v-html="formatted.description"></h4>
            </div>
            <div class="ps-section__content">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <div class="ps-block--icon-box-2">
                            <div class="ps-block__thumbnail">
                                <img
                                    :src="formatted.image[0].url"
                                    alt="martfury"
                                />
                            </div>
                        </div>
                    </div>
                    <div v-html="formatted.content"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VendorAbout',
    props: ['formatted']
};
</script>

<style lang="scss" scoped></style>
