<template lang="html">
    <footer class="ps-footer">
        <FooterLinks />
        <div class="ps-container">
            <FooterWidgets />
            <FooterCopyright />
        </div>
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
    async created() {
        let params = {}
        const categories = await this.$store.dispatch(
            'website/getArticlesCategories',
            params
        );
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
</style>
