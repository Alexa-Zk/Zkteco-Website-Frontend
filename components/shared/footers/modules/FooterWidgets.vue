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
                {{ $t('footer.widgetHeading.quickLink') }}
            </h4>
            <ul class="ps-list--link">
                <li>
                    <a href="#">Policy</a>
                </li>
                <li>
                    <a href="#">Term & Condition</a>
                </li>
                <li>
                    <a href="#">Shipping</a>
                </li>
                <li>
                    <a href="#">Return</a>
                </li>
                <li>
                    <a href="faqs.html">FAQs</a>
                </li>
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                {{ $t('footer.widgetHeading.company') }}
            </h4>
            <ul class="ps-list--link">
                <li>
                    <a href="about-us.html">About Us</a>
                </li>
                <li>
                    <a href="#">Affilate</a>
                </li>
                <li>
                    <a href="#">Career</a>
                </li>
                <li>
                    <a href="contact-us.html">Contact</a>
                </li>
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                {{ $t('footer.widgetHeading.bussiness') }}
            </h4>
            <ul class="ps-list--link">
                <li>
                    <a href="#">Our Press</a>
                </li>
                <li>
                    <a href="checkout.html">Checkout</a>
                </li>
                <li>
                    <a href="my-account.html">My account</a>
                </li>
                <li>
                    <a href="shop-default.html">Shop</a>
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
