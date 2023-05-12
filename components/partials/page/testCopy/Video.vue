<template>
    <div class="playlist">
        <header>
            <div class="content">
                <h4>{{ video.name }}</h4>
            </div>
            <div class="icon">
                <i aria-hidden="true" class="mdi mdi-chevron-right"></i>
            </div>
        </header>

        <PlayList
            :playList="video.tutorial_videos"
            @getVideoURLFromPlayList="sendVideoToVideos"
        />
    </div>
</template>

<script>
import PlayList from '~/components/partials/page/test/PlayList';
export default {
    name: 'Video',
    props: ['video'],
    components: { PlayList },
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
        sendVideoToVideos: play => {
            console.log('::-:: Video Page', play);
            //this.$emit('getVideoURLFromVideo', play);
        }
    }
};
</script>

<style lang="scss" scoped>
.playlist {
    border-bottom: 1px solid #dcd8d8;
    cursor: pointer;
    display: flex;
    flex-direction: column;

    header {
        display: flex;
        justify-content: space-between;
        justify-items: center;
        align-items: center;

        .mdi-chevron-right {
            display: flex;
            font-size: 2.5rem;
        }

        .rotate {
            transform: rotate(90deg);
        }
    }

    h4 {
        padding: 2rem 0 1rem 2rem;
        font-size: 1.4rem;
        font-weight: normal;
        font-weight: bold;
    }

    .active {
        display: flex;
        flex-direction: column;
        visibility: visible;
    }
}
</style>
