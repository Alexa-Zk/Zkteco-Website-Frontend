<template lang="html">
    <div class="ps-section--vendor ps-vendor-about">
        <div class="container" v-if="formatted">
            <div class="ps-section__header">
                <h4 v-html="formatted.description"></h4>
            </div>
            <div class="ps-section__content">
                <div class="row">
                    <div class=" ps-content " v-html="formatted.content"></div>
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

<style lang="scss">
.ps-vendor-about {
    .container {
        max-width: 850px !important;
        .ps-section__header {
            margin-bottom: 20px;
        }
        .ps-section__content {
            .row {
                .ps-content {
                    .image {
                        img {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
}
</style>
