<template lang="html">
    <div>
        <span>{{ `${count + 1}. ${play.title}` }}</span>
    </div>
</template>

<script>
export default {
    name: 'Topic',
    props: ['play', 'count']
};
</script>

<style lang="scss" scoped></style>
