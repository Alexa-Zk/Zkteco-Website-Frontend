<template lang="html">
    <footer class="ps-footer">
        <FooterLinks />
        <div class="ps-container">
            <FooterWidgets />
            <FooterCopyright />
        </div>

        <cookie-law>
            <div slot-scope="props">
                <div class="cookie-text" slot="message">
                    This website uses cookies to store information on your
                    device, Cookies can enhance your user experience and help
                    our website work normally. For more information, please read
                    our
                    <nuxt-link class="" to="/website/page/privacy-policy"
                        >cookie policy</nuxt-link
                    >
                    and
                    <nuxt-link class="" to="/website/page/privacy-policy"
                        >privacy policy</nuxt-link
                    >.
                </div>
                <div class="cookie-buttons">
                    <div class="cookie-buttons-container">
                        <button class="ps-btn ps-btn--xs" @click="props.accept">
                            Accept
                        </button>
                        <i @click="props.close" class="icon-cross mr-1"></i>
                    </div>
                </div>
            </div>
        </cookie-law>
    </footer>
</template>
<script>
import FooterWidgets from '~/components/shared/footers/website/modules/FooterWidgets';
import FooterCopyright from '~/components/shared/footers/website/modules/FooterCopyright';
import FooterLinks from '~/components/shared/footers/website/modules/FooterLinks';
export default {
    components: {
        FooterWidgets,
        FooterCopyright,
        FooterLinks
    },
    data() {
        return {
            categories: ''
        };
    }
};
</script>

<style lang="scss" scoped>
.ps-footer {
    padding-top: 0px !important;
}
.ps-container {
    background-color: #333;
    color: #e5e5e5;
    padding-top: 70px;
}

.Cookie {
    z-index: 3447483646!important;

    .cookie-text {
        font-size: 18px;
        a {
            color: red;
        }
    }

    .cookie-buttons {
        margin-top: 15px;

        .cookie-buttons-container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .ps-btn {
            margin-right: 20px;
            color: white;
        }
        i {
            font-size: 30px;
            font-weight: 700;
        }
    }
}
</style>
