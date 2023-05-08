<template>
    <div class="menu">
        <header>
            <div class="content">
                <h4>{{ list.topic }}</h4>
            </div>
            <div class="icon">
                <i aria-hidden="true" class="mdi mdi-chevron-right"></i>
            </div>
        </header>

        <!--nav class="dropdown">
            <Topic v-for="(play, i) in list.playlist" :play="play" :key="i" />
        </nav-->
    </div>
</template>

<script>
export default {
    name: 'Menu',
    props: ['list']
};
</script>

<style></style>
