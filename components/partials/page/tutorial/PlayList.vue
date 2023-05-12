<template>
    <nav class="dropdown">
        <div :index="i" v-for="(play, i) in playList" :key="i">
            <span @click="sendPlayListToVideo(play)">{{
                `${i + 1}. ${play.title}`
            }}</span>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'PlayList',
    props: ['playList'],
    async mounted() {
        let playlist = document.getElementsByClassName('playlist');

        for (let i = 0; i < playlist.length; i++) {
            playlist[i].addEventListener('click', () => {
                const play = playlist[i];
                let dropdown = play.querySelector('.dropdown');
                let rotate = play.querySelector('.mdi');
                dropdown.classList.toggle('active');
                rotate.classList.toggle('rotate');
            });
        }
    },
    methods: {
        sendPlayListToVideo: function(play) {
            this.$emit('getVideoURLFromPlayList', play);
        }
    }
};
</script>

<style lang="scss" scoped>
.dropdown {
    display: none;
    div {
        padding: 1.3rem 3rem;
        border-top: 1px solid #dcd8d8;
    }
    div:hover {
        background: #dcd8d8;
    }
}
</style>
