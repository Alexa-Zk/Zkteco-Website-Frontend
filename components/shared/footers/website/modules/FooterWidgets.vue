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
                    <a href="#">Our Mission</a>
                </li>
                <li>
                    <a href="#">Our Vision</a>
                </li>
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                {{ $t('News Center') }}
            </h4>
            <ul class="ps-list--link">
                <li>
                    <a href="#">Blogs</a>
                </li>
                <li>
                    <a href="#">Newsletter</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">Notice</a>
                </li>
                <li>
                    <a href="#">Security Bulletins</a>
                </li>
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                {{ $t('Contact Us') }}
            </h4>
            <ul class="ps-list--link">
                <li>
                    <a href="#">Project Consultation</a>
                </li>
                <li>
                    <a href="#">Online Purchase</a>
                </li>
                <li>
                    <a href="#">Sales Consultation</a>
                </li>
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                {{ $t('Support') }}
            </h4>
            <ul class="ps-list--link">
                <li>
                    <a href="#">Download Center</a>
                </li>
                <li>
                    <a href="#">After Sales</a>
                </li>
                
            </ul>
        </aside>
    </div>
</template>

<script>
export default {
    name: 'FooterWidgets'
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
} 
</style>
