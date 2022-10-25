<template lang="html">
    <div class="ps-section--vendor ps-vendor-about">
        <div class="container" v-if="formatted">
            <div class="ps-section__header">
                <h2>Case Details</h2>
                <h4>DEVELOPMENT OF THE GLOBAL ECONOMY</h4>
            </div>
            <div class="ps-section__content">
                <article class="content_wrapper">
                    <img src="/img/biotime-ng.png" alt="biotime cloud logo" />
                    <div class="text-container">
                        Formatting versus Styling While it is not always
                        apparent within the software you are using, you should
                        always lean towards formatting options over styling
                        options to create semantically correct text content.
                        Formatting Considerations for Bold and Italics An entire
                        paragraph that is bolded does not indicate to a screen
                        reader that it is a heading. As a heading, it obtains
                        special functionality that aids screen reader users in
                        scanning a page much like a visual user skipping around
                        on a page. But as a bolded paragraph, it does not obtain
                        that scanning functionality. Instead, it behaves like
                        the average paragraph, but it is read as though there is
                        strong emphasis across all the content in the paragraph.
                        That takes away from the functionality defined for the
                        bold styling, since if everything is important, then
                        nothing is important. Similar issues occur for
                        italicizing a paragraph as this indicates emphasis, a
                        slightly lower form of importance. Styling
                        Considerations for Bold, Italics and Underline Styling
                        on the Tarleton website is determined mostly by the AP
                        Stylebook. Web standards are added on to assist with
                        reading web content. For example, you do not use
                        underline for titles or headings on webpages because
                        underlined text typically is understood to be a link.
                        Instead, quotes may or may not be used, depending on the
                        publication, to denote titles. See Brandeis University’s
                        Web Style Guide cheat sheet regarding Associate Press
                        Style for titles, along with numbers, abbreviations
                        (e.g. academic degrees, dates, time. Formatting versus
                        Styling While it is not always apparent within the
                        software you are using, you should always lean towards
                        formatting options over styling options to create
                        semantically correct text content. Formatting
                        Considerations for Bold and Italics An entire paragraph
                        that is bolded does not indicate to a screen reader that
                        it is a heading. As a heading, it obtains special
                        functionality that aids screen reader users in scanning
                        a page much like a visual user skipping around on a
                        page. But as a bolded paragraph, it does not obtain that
                        scanning functionality. Instead, it behaves like the
                        average paragraph, but it is read as though there is
                        strong emphasis across all the content in the paragraph.
                        That takes away from the functionality defined for the
                        bold styling, since if everything is important, then
                        nothing is important. Similar issues occur for
                        italicizing a paragraph as this indicates emphasis, a
                        slightly lower form of importance. Styling
                        Considerations for Bold, Italics and Underline Styling
                        on the Tarleton website is determined mostly by the AP
                        Stylebook. Web standards are added on to assist with
                        reading web content. For example, you do not use
                        underline for titles or headings on webpages because
                        underlined text typically is understood to be a link.
                        Instead, quotes may or may not be used, depending on the
                        publication, to denote titles. See Brandeis University’s
                        Web Style Guide cheat sheet regarding Associate Press
                        Style for titles, along with numbers, abbreviations
                        (e.g. academic degrees, dates, time.
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
