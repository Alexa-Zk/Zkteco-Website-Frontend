<template lang="html">
    <footer class="ps-footer" >
        <FooterLinks />
        <div class="ps-container">
            <FooterWidgets />
            <FooterCopyright />
        </div>

        <cookie-law > 
            <div slot-scope="props" style="line-height: 1.42857; font-size: 8px !important; font-family: 'Open Sans'">
                <div class="cookie-text" slot="message" style="line-height: 1.42857 !important;font-size: small">
                    We use cookies on this site to enhance your user experience
                    By clicking OK, I agree button on this banner you are giving your consent for us to set cookies. 
                    <v-checkbox input-value="true" disabled color="warning" style="margin: -5px 0px -21px 0px; font-size: 13px;" label="Mandatory"/>
                    These cookies enable core functionality such as security, verification of identity and network management. These cookies cannot be disabled.                   
                    <v-checkbox color="warning" style="margin: -5px 0px -21px 0px; font-size: 13px;" label="Analytics" />
                     These cookies help us to understand how visitors interact with our website, discover errors and provide a better overall analytics.
                    <v-checkbox color="warning" style="margin: -5px 0px -21px 0px; font-size: 13px;" label="Advertising" />
                    These cookies are used to track advertising effectiveness to provide a more relevant service and deliver better ads to suit your interests.
                    <v-checkbox color="warning" style="margin: -2px 0px -20px 0px; font-size: 13px;" label="Personalization" />
                    These cookies collect data to remember choices users make to improve and give a more personalised experience.
                    <br/>
                    Learn more about how we use cookies in our                     
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
                        <button class="ps-btn ps-btn--sm" @click="props.accept">
                            Accept all cookies
                        </button>
                        <button class="ps-btn ps-btn--sm" @click="props.accept">
                            Save preferences
                        </button>
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
.v-label {
    font-size: 13px;
}
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
