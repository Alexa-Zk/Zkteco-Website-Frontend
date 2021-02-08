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
                {{ $t('Let us help you') }}
            </h4>
            <ul class="ps-list--link">
                <li>
                    <a href="/store/page/contact-us">Help Center</a>
                </li>
                <li>
                    <a href="/website/page/warranty-policy">Warranty</a>
                </li>
                 <li>
                    <a href="/store/page/faqs">FAQs</a>
                </li>
                <li>
                    <a href="/store/page/how-to-shop">How to Shop</a>
                </li>
                <li>
                    <a href="/website/page/warranty-policy">Return Policy</a>
                </li>
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                {{ $t('Get to know us') }}
            </h4>
            <ul class="ps-list--link">
                <li>
                    <a href="/website/page/about-us">About Us</a>
                </li>
                <li>
                    <a href="/website/page/warranty-policy">Privacy Policy</a>
                </li>
                <li>
                    <a href="/store/page/terms-conditions">Terms and Conditions</a>
                </li>
                <li>
                    <a href="/store/page/contact-us">Contact</a>
                </li>
                <li>
                    <a href="#">Careers</a>
                </li>
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                {{ $t('Business') }}
            </h4>
            <ul class="ps-list--link">
                <li>
                    <a href="/store/account/wishlist">Wishlist</a>
                </li>
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
