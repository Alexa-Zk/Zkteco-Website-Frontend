<template lang="html">
    <div class="ps-footer__widgets">
        <aside class="widget widget_footer widget_contact-us">
            <h4 class="widget-title">
                {{ $t('footer.widgetHeading.contactUs') }}
            </h4>
            <div class="widget_content">
                <p>Call us 24/7</p>
                <h3>+234 817 5555 512</h3>
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
                    <!-- <li>
                        <a class="whatsapp" href="#">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </li> -->
                    <li>
                        <a class="instagram" href="https://www.instagram.com/zkteco_wa/">
                            <i class="fa fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a class="linkedin" href="https://www.instagram.com/zkteco_wa/">
                            <i class="fa fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                {{ $t('About Us') }}
            </h4>
            <ul class="ps-list--link">
                <li>
                    <nuxt-link :to="`/website/page/about-us`">Our Mission</nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="`/website/page/about-us`">Our Vision</nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="`/website/page/about-us`">Our Values</nuxt-link>
                </li>
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                {{ $t('News Center') }}
            </h4>
            <ul class="ps-list--link">
                <li v-for="item in categories" :key="item.id">
                    <nuxt-link :to="`/website/blog/${item.id}`">{{item.name}}</nuxt-link>
                </li>
                
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                {{ $t('Solutions') }}
            </h4>
            <ul class="ps-list--link">
                <li>
                    <nuxt-link :to="`/website/vendor/1`">Classified by Industry</nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="`/website/vendor/2`">Classified by Application</nuxt-link>
                </li>
                
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                {{ $t('Support') }}
            </h4>
            <ul class="ps-list--link">
                <li>
                    <nuxt-link :to="`/website/page/download-center`">Download Center</nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="`/website/page/after-sales`">After Sales</nuxt-link>
                    
                </li>
                
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                {{ $t('Related Website') }}
            </h4>
            <ul class="ps-list--link">
                <li>
                    <nuxt-link :to="`https://zktecopos.com`">ZKTeco POS Website</nuxt-link>
                </li>    
            </ul>
        </aside>
    </div>
</template>

<script>

// Queries
import Categories from '~/apollo/queries/articles/allArticlesCategories';
export default {
    name: 'FooterWidgets',
    data() {
        return {
            categories: '',
        };
    },
    apollo: {
        categories: {
            prefetch: true,
            query: Categories,
        },
    },
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
