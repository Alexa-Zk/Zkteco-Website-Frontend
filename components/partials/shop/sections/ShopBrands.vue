<template lang="html">
    <div class="ps-shop-brand">
        <nuxt-link to="/" v-for="logo in partnersLogo" :key="logo.name">
            <img :src="logo.image.url" alt="martfury" />
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'ShopBrands',
    props: ['partnersLogo']
};
</script>

<style lang="scss" scoped>
.ps-shop-brand {
    margin-bottom: 40px;
    a {
        height: 80px;
        width: 200px;
        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
    }
}
</style>
