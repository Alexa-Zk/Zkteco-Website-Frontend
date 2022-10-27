<template lang="html">
    <div class="ps-section--vendor ps-vendor-about">
        <div class="container" v-if="formatted">
            <div class="ps-section__header">
                <h2>Case Details</h2>
                <h4>{{ formatted.title }}</h4>
            </div>
            <div class="ps-section__content">
                <article class="content_wrapper">
                    <img :src="formatted.side_image.url" alt="biotime cloud logo" />
                    <div class="ps-content" v-html="formatted.content">
                    </div>
                </article>
                <!--div class=" ps-content " v-html="formatted.content"></div-->
            </div>
        </div>
        <div id="related_product" class="related_product">
            <div class="img_container">
                <div class="image_wrapper">
                    <img src="/img/biotime-ng.png" alt="biotime cloud logo" />
                </div>
                <div class="image_wrapper">
                    <img src="/img/biotime-ng.png" alt="biotime cloud logo" />
                </div>
                <div class="image_wrapper">
                    <img src="/img/biotime-ng.png" alt="biotime cloud logo" />
                </div>
                <div class="image_wrapper">
                    <img src="/img/biotime-ng.png" alt="biotime cloud logo" />
                </div>
                <div class="image_wrapper">
                    <img src="/img/biotime-ng.png" alt="biotime cloud logo" />
                </div>
                <div class="image_wrapper">
                    <img src="/img/biotime-ng.png" alt="biotime cloud logo" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CaseStudyAbout',
    props: ['formatted']
};
</script>

<style lang="scss">
.ps-vendor-about {
    .container {
        transform: translateY(-80px);
        max-width: 900px !important;
        .ps-section__header {
            text-align: left;
            h2 {
                color: #8bc76f;
            }
            h4 {
                font-size: 2rem;
                font-weight: 900;
            }
        }

        .ps-section__content {
            transform: translateY(-80px);
            .content_wrapper {
                img {
                    float: left;
                    width: 450px;
                    height: 450px;
                    padding: 0 20px 10px 0;
                }
                .text-container {
                    text-align: justify;
                    font-size: 1.4rem;
                }
            }
        }
    }

    .related_product {
        transform: translateY(-100px);
        max-width: 900px !important;
        margin: 0 auto;
        //margin-right: auto;
        img {
            display: grid;
        }
        //img_container image_wrapper
        .img_container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }
    }
}
</style>
