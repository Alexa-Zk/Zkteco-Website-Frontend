<template lang="html">
    <div class="table-responsive">
        <p v-html="product.short_description"></p>
    </div>
</template>

<script>
export default {
    name: 'PartialSpecification',
    props: {
        product: {
            type: Object,
            default: {}
        }
    }
};
</script>

<style lang="scss" scoped></style>
