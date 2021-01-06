<template lang="html">
    <div class="ps-container shop-brands-website">
        <h3>Our Partners</h3>
        <div class="ps-shop-brand">
            <nuxt-link to="/" v-for="logo in partnersLogo" :key="logo.name">
                <img :src="logo.image.url" alt="martfury" />
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShopBrands',
    props: ["partnersLogo"]
};
</script>

<style lang="scss" scoped>
.shop-brands-website {
    padding-top: 60px;
    h3 {
        margin-bottom: 60px;
        text-align: center;
        font-size: 24px;
        color: #000;
    }
    .ps-shop-brand {
        margin: 45px 0px;
        a { 
            height: 100px;
            width: 200px;
            img { 
                height: 100%;
                width: 100%;
                object-fit: contain;
            }
        }
        
    }
}
</style>
