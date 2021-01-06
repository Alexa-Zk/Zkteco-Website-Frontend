<template lang="html">
    <div class="ps-product__desc">
        <!-- <p>
            Categories:
            <nuxt-link to="/shop">
                <strong> {{ product.product_category.name }}</strong>
            </nuxt-link>
        </p> -->
        <ul class="ps-list--dot">
            <p>{{product.description}}</p>
           
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ModuleProductDetailDesc',
    props: {
        product: {
            type: Object,
            default: {}
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-product__desc {
    .ps-list--dot {
        p { 
            color: #666;
        }
    }
}

</style>
