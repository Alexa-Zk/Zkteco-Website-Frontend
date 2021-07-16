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
                    <a style="font-weight: bold;" href="mailto:enquiry@zkteco-wa.com">enquiry@zkteco-wa.com</a>
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
                        <a class="linkedin" href="https://www.instagram.com/zkteco_wa/">
                            <i class="fa fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                Let us help you
            </h4>
            <ul class="ps-list--link">
                <li>
                    <a href="/store/page/contact-us">Help Center</a>
                </li>
                <li>
                    <a href="/support/product-warranty">Warranty</a>
                </li>
                 <li>
                    <a href="/store/page/faqs">FAQs</a>
                </li>
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                Get to know us
            </h4>
            <ul class="ps-list--link">
                <li>
                    <a href="/about">About Us</a>
                </li>
                <li>
                    <a href="/support/product-warranty">Privacy Policy</a>
                </li>
                <li>
                    <a href="/support/product-warranty">Terms and Conditions</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/careers">Careers</a>
                </li>
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                Business
            </h4>
            <ul class="ps-list--link">
                <li>
                    <a href="/store/account/checkout">Checkout</a>
                </li>
                <li>
                    <a href="/store/account/user-information">My account</a>
                </li>
                <li>
                    <a href="/store/account/recent-viewed-product">My orders</a>
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

<style lang="scss" scoped></style>
