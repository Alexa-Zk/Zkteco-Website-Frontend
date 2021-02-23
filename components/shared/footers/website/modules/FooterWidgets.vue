<template lang="html">
    <div class="ps-footer__widgets">
        <aside class="widget widget_footer widget_contact-us">
            <h4 class="widget-title">
                {{ $t('footer.widgetHeading.contactUs') }}
            </h4>
            <div class="widget_content">
                <p>Call us 24/7</p>
                <h3> 
                    <a style="font-weight: inherit;" href="tel:2348175555512"> +234 817 5555 512 </a> <br>
                    <a style="font-weight: inherit;" href="tel:2348175555513"> +234 817 5555 513 </a>
                </h3>
                <p>
                    64 Adetokunbo Ademola Street, Victoria Island, Lagos<br />
                    <a href="mailto:sales@zkteco-wa.com">sales@zkteco-wa.com</a>
                </p>
                <ul class="ps-list--social">
                    <li>
                        <a class="facebook" href="https://www.facebook.com/zktecowa">
                            <i class="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a class="twitter" href="https://twitter.com/ZKTeco_WA">
                            <i class="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a class="instagram" href="https://www.instagram.com/zktecowa/">
                            <i class="fa fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a class="linkedin" href="https://www.linkedin.com/company/zkteco-wa/?originalSubdomain=ng">
                            <i class="fa fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                About Us
            </h4>
            <ul class="ps-list--link">
                <li>
                    <nuxt-link to="/about">Our Mission</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/about">Our Vision</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/about">Our Values</nuxt-link>
                </li>
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                News Center
            </h4>
            <ul class="ps-list--link">
                <li v-for="item in categories" :key="item.id">
                    <nuxt-link :to="`/news-center/categories/${item.slug}`">{{item.name}}</nuxt-link>
                </li>
                
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                Solutions
            </h4>
            <ul class="ps-list--link">
                <li>
                    <nuxt-link to="/solution-categories/classified-by-industry">Classified by Industry</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/solution-categories/classified-by-application">Classified by Application</nuxt-link>
                </li>
                
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                Support
            </h4>
            <ul class="ps-list--link">
                <li>
                    <nuxt-link to="/support/download-center">Download Center</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/support/after-sale">After Sales</nuxt-link>
                    
                </li>
                
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                Related Website
            </h4>
            <ul class="ps-list--link">
                <li>
                    <a href="https://zktecopos.com">ZKTeco POS Website</a>
                </li>    
            </ul>
        </aside>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: 'FooterWidgets',
    data() {
        return {
        };
    },
    computed: {
        ...mapState({
            categories: state => state.website.articlesCategories
        })
    }
};
</script>

<style lang="scss" scoped>
.widget_footer {
    .widget-title  {
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
} 
</style>
