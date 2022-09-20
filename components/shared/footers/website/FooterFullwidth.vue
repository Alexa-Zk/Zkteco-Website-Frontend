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
                    Last connection of the user to browse the website and use its different options or services. They will never be used to collect information in order to show you personalized advertising. A user identifier per session, the date and time of the user's last connection and the parameters necessary to navigate between the company website and that of individuals.
                    <v-checkbox color="warning" style="margin: -5px 0px -21px 0px; font-size: 13px;" label="Analytics" />
                    They are used to analyze the browsing habits of users, with the aim of optimizing the functionalities and technical and operational maintenance of the website and guaranteeing the best possible service. They will never be used to display personalized advertisements, or to remember user preferences beyond the session. Technological profile of the device, origin of access to the web, browsing activity and search terms used.
                    <v-checkbox color="warning" style="margin: -5px 0px -21px 0px; font-size: 13px;" label="Advertising" />
                    They are those that allow the storage of information on the behavior of users obtained through the continuous observation of their browsing habits, which allows the development of a specific user profile. In this way, they are used to personalize the advertising campaigns that are adjusted to the user's preferences.
                    <v-checkbox color="warning" style="margin: -2px 0px -20px 0px; font-size: 13px;" label="Personalization" />
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
