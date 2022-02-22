<template lang="html">
    <div class="ps-footer__copyright">
        <p>
            Copyright © {{ new Date().getFullYear() }} ZKTECO CO. LTD. All
            rights reserved
        </p>
        <ul class="ps-list--link">
            <li>
                <nuxt-link to="/website/page/legal">Legal Statement</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/website/page/privacy-policy">Privacy Policy</nuxt-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'FooterCopyright'
};
</script>

<style lang="scss" scoped>
.ps-footer__copyright {
    p {
        color: #e5e5e5;
    }

    .ps-list--link {
        display: flex;

        :not(:last-child) {
            margin-right: 20px;
        }
        li {
            a {
                color: white;
            }

            
        }
    }
}
</style>
