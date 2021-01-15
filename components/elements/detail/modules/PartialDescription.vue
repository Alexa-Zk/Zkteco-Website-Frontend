<template lang="html">
    <div class="ps-document">
        <p v-html="product.description"></p>
        <p v-html="product.short_description"></p>
    </div>
</template>

<script>
export default {
    name: 'PartialDescription',
    props: {
        product: {
            type: Object,
            default: {}
        }
    }

};
</script>

<style lang="scss" scoped></style>
