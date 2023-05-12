<template>
    <div class="video-list">
        <div v-for="(video, i) in videos" :key="i">
            <Video
                :video="video"
                :key="i"
                @getVideoURLFromVideo="sendVideosToIndex"
            />
        </div>
    </div>
</template>

<script>
import Video from '~/components/partials/page/test/Video';
export default {
    name: 'Videos',
    components: { Video },
    props: ['videos'],
    methods: {
        sendVideosToIndex: play => {
            console.log('Videos', play);
            //this.$emit('Videos1', play);
        }
    }
};
</script>

<style lang="scss" scoped>
.video-list {
    border-left: 0.05rem solid #dcd8d8;
    border-right: 0.05rem solid #dcd8d8;

    display: flex;
    flex-direction: column;
}
</style>
