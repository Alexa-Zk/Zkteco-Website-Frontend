<template>
    <div>
        <div class="menu" v-for="(list, i) in allPlayList" :key="i">
            <header>
                <div class="content">
                    <h4>{{ list.topic }}</h4>
                </div>
                <div class="icon">
                    <i aria-hidden="true" class="mdi mdi-chevron-right"></i>
                </div>
            </header>
            <!--nav
                            class="dropdown"
                            v-for="(play, i) in list.playlist"
                        >
                            <div>
                                <span>{{ `${i + 1}. ${play.title}` }}</span>
                            </div>
                        </nav-->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Subject',
    props: ['allPlayList']
};
</script>

<style></style>
