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
                        <header @click="collapsible(i)">
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
                            :playList="video.course_videos"
                            @getVideoURLFromPlayList="sendVideoToVideos"
                        />
                    </div>
                </div>
            </article>
        </section>

        <div class="videoOverview">
            <div v-html="videoOverView"></div>
            <div></div>
        </div>

        <div class="downloader" v-for="i in videoDownload" :key="i.id">
            <div class="downloaderInfo">
                <div class="downloadname">
                    <img
                        src="~/static/img/website/download-2.png"
                        alt="Download"
                    />
                    <p>
                        {{ i.name }}
                    </p>
                </div>
                <div class="dowloadbutton">
                    <a v-on:click.prevent="download(i.file.url)">
                        Download
                    </a>
                </div>
            </div>
            <div class="downloaderSide"></div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import PlayList from '~/components/partials/page/tutorial/PlayList';
export default {
    name: 'Video',
    components: { PlayList },
    props: ['videos'],
    data() {
        return {
            videoSrc: null,
            videoTitle: null,
            videoOverView: null,
            videoDownload: null
        };
    },
    computed: {
        ...mapState({
            loading: state => state.website.loading,
            courseVideo: state => state.website.courseVideo
        })
    },
    created() {
        this.sendVideoToVideos(this.videos[0].course_videos[0]);
    },

    methods: {
        async sendVideoToVideos(play) {
            await this.$store.dispatch('website/getVideoById', play.id);
            if (this.courseVideo) {
                this.videoTitle = this.courseVideo.title
                    ? this.courseVideo.title
                    : null;
                this.videoSrc = this.courseVideo.url
                    ? this.courseVideo.url
                    : null;
                this.videoOverView = this.courseVideo.overview
                    ? this.courseVideo.overview
                    : null;
                this.videoDownload = this.courseVideo.product_files
                    ? this.courseVideo.product_files
                    : null;
            }
        },
        collapsible(i) {
            let menu = document.getElementsByClassName('playlist');
            let icon = menu[i].children[0].children[1];
            menu[i].children[1].classList.toggle('activeToggle');
            icon.classList.toggle('rotate');
        },
        download(data) {
            //event.preventDefault();
            const link = document.createElement('a');
            link.href = data;
            link.setAttribute('download', 'image.jpg');
            link.setAttribute('target', '_blank');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            location.href = data;
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
                border-bottom: 1px solid #dcd8d8;
                border-radius: 0.5rem 0.5rem 0 0;
                header {
                    h3 {
                        font-size: 2rem;
                        font-weight: bold;
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
                    font-weight: bold;
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

    .activeToggle {
        display: flex;
        flex-direction: column;
        visibility: visible;
    }
}

.videoOverview {
    margin: 0 auto;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 1.8rem;
    margin-top: 5rem;
}

.downloader {
    margin: 0 auto;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 1.8rem;
    margin-top: 5rem;
    .downloaderInfo {
        display: flex;
        justify-content: space-between;

        .downloadname {
            display: flex;
            // justify-content: center;
            // justify-items: center;
            align-items: center;
            p {
                padding-left: 2rem;
                padding-top: 1.6rem;
            }
        }

        .dowloadbutton {
            a {
                background: #7fc22e;
                padding: 1.2rem 2.5rem;
                border: none;
                border-radius: 3px;
            }
        }
    }
}
</style>
