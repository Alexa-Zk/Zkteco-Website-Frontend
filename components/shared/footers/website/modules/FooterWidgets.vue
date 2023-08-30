<template lang="html">
    <div class="ps-footer__widgets">
        <aside class="widget widget_footer widget_contact-us">
            <h4 class="widget-title">
                {{ $t('footer.widgetHeading.contactUs') }}
            </h4>
            <div class="widget_content">
                <p>Call us 24/7</p>
                <h3>
                    <a style="font-weight: inherit;" href="tel:2348175555512">
                        +234 817 5555 512
                    </a>
                    <br />
                    <a style="font-weight: inherit;" href="tel:2348175555513">
                        +234 817 5555 513
                    </a>
                </h3>
                <p>
                    64 Adetokunbo Ademola Street, Victoria Island, Lagos<br />
                    <a href="mailto:enquiry@zkteco-wa.com"
                        >enquiry@zkteco-wa.com</a
                    >
                </p>
                <ul class="ps-list--social">
                    <li>
                        <a
                            class="facebook"
                            href="https://www.facebook.com/zktecowa"
                        >
                            <i class="fa fa-facebook icon_size"></i>
                        </a>
                    </li>
                    <li>
                        <a class="twitter" href="https://twitter.com/ZKTeco_WA">
                            <i class="fa fa-twitter icon_size"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            class="instagram"
                            href="https://www.instagram.com/zktecowa/"
                        >
                            <i class="fa fa-instagram icon_size"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            class="linkedin"
                            href="https://www.linkedin.com/company/zkteco-wa/?originalSubdomain=ng"
                        >
                            <i class="fa fa-linkedin icon_size"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                Company
            </h4>
            <ul class="ps-list--link">
                <li>
                    <nuxt-link to="/about-us">About Us</nuxt-link>
                </li>

                <li>
                    <nuxt-link :to="`/experience-center`">
                        Experience Center
                    </nuxt-link>
                </li>
                <!--li>
                    <nuxt-link to="/careers">Careers</nuxt-link>
                </li -->
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                News Center
            </h4>
            <ul class="ps-list--link">
                <li v-for="item in categories" :key="item.slug">
                    <nuxt-link :to="`/news-center/categories/${item.slug}`">{{
                        item.name
                    }}</nuxt-link>
                </li>
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                Solutions
            </h4>
            <ul class="ps-list--link">
                <li v-for="item in solutionCategoriesAndSub" :key="item.slug">
                    <nuxt-link :to="`/solution-categories/${item.slug}`">{{
                        item.name
                    }}</nuxt-link>
                </li>
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                Support
            </h4>
            <ul class="ps-list--link">
                <li>
                    <nuxt-link to="/support/anti-counterfeiting"
                        >Anti-counterfeit Enquiry</nuxt-link
                    >
                </li>
                <li>
                    <nuxt-link to="/support/download-center"
                        >Download Center</nuxt-link
                    >
                </li>
                <li>
                    <nuxt-link to="/tutorial">E Learning Platforms</nuxt-link>
                </li>
                <!--li>
                    <nuxt-link to="/support/tickets">Support Tickets</nuxt-link>
                </li-->
                <li>
                    <nuxt-link to="/support/after-sale">After Sales</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/support">FAQs</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/software">Software</nuxt-link>
                </li>
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                Related Website
            </h4>
            <ul class="ps-list--link">
                <li>
                    <a href="https://zktecopos.com" target="_blank"
                        >ZKTeco POS Website</a
                    >
                </li>
                <li>
                    <a href="/biotime.africa" target="_blank">Biotime</a>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Repository from '~/repositories/Repository.js';
import { subBaseUrl } from '~/repositories/Repository';

export default {
    name: 'FooterWidgets',
    data() {
        return {
            categories: ''
        };
    },
    computed: {
        ...mapState({
            solutionCategoriesAndSub: state =>
                state.website.solutionCategoriesAndSub
        })
    },
    async mounted() {
        this.getArticlesCategories();
    },
    methods: {
        async getArticlesCategories() {
            this.loading = true;
            const reponse = await Repository.get(
                `${subBaseUrl}/categories/home_page_categories`
            )
                .then(response => {
                    this.categories = response.data;
                    this.loading = false;
                })
                .catch(error => ({ error: JSON.stringify(error) }));
            return reponse;
        }
    }
};
</script>

<style lang="scss" scoped>
.widget_footer {
    .widget-title {
        color: #e5e5e5;
    }
    .ps-list--link {
        li {
            a {
                color: #e5e5e5;

                &::before {
                    background-color: #78bc27;
                }
            }
        }
    }
    .widget_content {
        p {
            color: #e5e5e5;
            a {
                color: #e5e5e5 !important;
            }
        }
    }
    .ps-list--social {
        .facebook {
            i {
                color: #ffffff;
                &:hover {
                    color: #3b5998;
                }
            }
        }
        .twitter {
            i {
                color: #ffffff;
                &:hover {
                    color: #0084b4;
                }
            }
        }
        .instagram {
            i {
                color: #ffffff;
                &:hover {
                    color: #c32aa3;
                }
            }
        }
        .linkedin {
            i {
                color: #ffffff;
                &:hover {
                    color: #0e76a8;
                }
            }
        }
    }
    .icon_size {
        font-size: 4rem;
    }
}
</style>
