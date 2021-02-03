<template lang="html">
    <div class="ps-about-awards">
        <div class="ps-container">
            <div class="ps-section__header">
                <h4>After Sales Services</h4>
            </div>
            <div class="ps-section__content">
                <div class="ps-row">
                    <div class="ps-column">
												<nuxt-link
                            to="/website/page/warranty-policy"
                            class="ps-post__title"
                        >
                            <policy />
                            Warranty Policy
                        </nuxt-link>
                    </div>
                    <div class="ps-column">
                        <nuxt-link
                            to="/website/page/faqs"
                            class="ps-post__title"
                        >
                            <faq />
                            FAQs
                        </nuxt-link>
                    </div>
                    <div class="ps-column">
											<nuxt-link
                            to="/website/page/anti-counterfeit"
                            class="ps-post__title"
                        >
                            <counterfeit />
                            Anti-counterfeit enquiry
                        </nuxt-link>
                        
                    </div>
                    <div class="ps-column">
												<nuxt-link
                            to="/website/page/support-ticket"
                            class="ps-post__title"
                        >
                            <support />
                            Support Tickets
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Policy from '@/static/svg/Policy';
import Faq from '@/static/svg/Faq';
import Counterfeit from '@/static/svg/Counterfeit';
import Support from '@/static/svg/Support';

export default {
    name: 'AboutAwards',
    data() {
        return {};
    },
    components: {
        Policy,
        Faq,
        Counterfeit,
        Support
    }
};
</script>

<style lang="scss" scoped>
.ps-about-awards {
    padding: 50px 0px;
    background-color: white;
    .ps-section__header {
        max-width: unset;
        margin: 0 auto 16px;
        h4 {
            margin-bottom: 30px;
            font-size: 30px;
            color: #000;
            font-weight: 500;
        }
    }
    .ps-section__content {
        .ps-row {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: 30px;
            row-gap: 40px;
            @include media('<sm') {
                display: grid;
                grid-template-columns: 1fr;
                column-gap: 30px;
                row-gap: 40px;
            }
            @include media('<xs') {
                display: grid;
                grid-template-columns: 1fr;
                column-gap: 30px;
                row-gap: 40px;
            }
            .ps-column {
                display: flex;
                flex-direction: column;
                border: 1px solid #eee;
                padding: 10px;
                cursor: pointer;
                height: auto;
                a {
                    font-size: 16px;
                    width: 100%;
                    text-align: center;
                    line-height: 50px;
                    transition: all 0.8s;
                    font-weight: 600;
                    color: $color-1st;
                }
            }
        }
    }
}
</style>
