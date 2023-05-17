<template>
    <div class="tutorial">
        <section class="wrapper">
            <section class="video-wrapper">
                <section class="video">
                    <header>
                        <h3>{{ videoTitle }}</h3>
                    </header>
                    <div>
                        <iframe
                            width="100%"
                            height="415"
                            :src="videoSrc"
                            frameborder="0"
                            allowfullscreen
                        ></iframe>
                    </div>
                </section>
                <footer>
                    <div>
                        <div>Download</div>
                    </div>
                    <div>
                        <div>Attitude Test</div>
                    </div>
                </footer>
            </section>
            <article class="menu-wrapper">
                <header class="menu-header">
                    <h3>Contents</h3>
                </header>
                <div class="video-list">
                    <div
                        class="playlist"
                        div
                        v-for="(video, i) in videos"
                        :key="i"
                    >
                        <header>
                            <div class="content">
                                <h4>{{ video.name }}</h4>
                            </div>
                            <div class="icon">
                                <i
                                    aria-hidden="true"
                                    class="mdi mdi-chevron-right"
                                ></i>
                            </div>
                        </header>

                        <PlayList
                            v-if="video"
                            :playList="video.tutorial_videos"
                            @getVideoURLFromPlayList="sendVideoToVideos"
                        />
                    </div>
                </div>
            </article>
        </section>
    </div>
</template>

<script>
import PlayList from '~/components/partials/page/tutorial/PlayList';
export default {
    name: 'Video',
    components: { PlayList },
    props: ['videos'],
    data() {
        return {
            videoSrc: null,
            videoTitle: null
        };
    },
    created() {
        this.videoTitle =
            this.videos[0].tutorial_videos.length <= 0
                ? null
                : this.videos[0].tutorial_videos[0].title != null
                ? this.videos[0].tutorial_videos[0].title
                : null;

        this.videoSrc =
            this.videos[0].tutorial_videos.length <= 0
                ? null
                : this.videos[0].tutorial_videos[0].url != null
                ? this.videos[0].tutorial_videos[0].url
                : null;
    },
    methods: {
        async sendVideoToVideos(play) {
            if (play != null || play != undefined) {
                this.videoTitle = play.title;
                this.videoSrc = play.url;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.tutorial {
    padding: 5rem 0;
    .wrapper {
        margin: 0 auto;
        max-width: 1200px;
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap: 1.8rem;

        @media (max-width: 920px) {
            display: grid;
            grid-template-columns: 1fr;
        }

        .video-wrapper {
            display: flex;
            flex-direction: column;

            .video {
                padding: 3rem 2rem;
                border-top: 1px solid #dcd8d8;
                border-left: 1px solid #dcd8d8;
                border-right: 1px solid #dcd8d8;
                border-radius: 0.5rem 0.5rem 0 0;
                header {
                    h3 {
                        font-size: 2rem;
                        font-weight: normal;
                    }
                }
            }

            footer {
                border: 1px solid #dcd8d8;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1rem;

                div:not(:last-child) {
                    border-right: 1px solid #dcd8d8;
                }
                div {
                    text-align: center;

                    div {
                        padding: 2rem;
                    }
                }
            }
        }

        .menu-wrapper {
            border-radius: 3px;
            display: flex;
            flex-direction: column;

            .menu-header {
                padding: 2rem 0 1rem 2rem;
                border: 1px solid #dcd8d8;
                border-radius: 0.5rem 0.5rem 0rem 0rem;

                h3 {
                    font-size: 2rem;
                    font-weight: normal;
                }
            }
        }
    }
}
.video-list {
    border-left: 0.05rem solid #dcd8d8;
    border-right: 0.05rem solid #dcd8d8;

    display: flex;
    flex-direction: column;
}

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
