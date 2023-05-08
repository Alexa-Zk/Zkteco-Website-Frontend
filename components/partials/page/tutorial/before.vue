<template lang="html">
    <div class="tutorial">
        <section class="wrapper">
            <section class="video-wrapper">
                <section class="video">
                    <header>
                        <h3>How to Add admin to Device on ZKBioSecurity</h3>
                    </header>
                    <div>
                        <iframe
                            width="100%"
                            height="415"
                            :src="videoSrc"
                            :title="allVideos.length"
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
                <section class="menu-list">
                    <div class="menu" v-for="(video, i) in videoSubCategories">
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

                        <!--nav class="dropdown">
                            <div
                                :index="i"
                                v-for="(allVideo, i) in video.tutorial_videos"
                                @click="
                                    changeVideoSrc(allVideo.url),
                                        changeVideoTitle(allVideo.title)
                                "
                            >
                                <span>{{ `${i + 1}. ${allVideo.title}` }}</span>
                            </div>
                        </nav-->
                    </div>
                    <div class="menu">
                        <header>
                            <div class="content">
                                <h4>Modele 1 Setup Security</h4>
                            </div>

                            <div class="icon">
                                <i
                                    aria-hidden="true"
                                    class="mdi mdi-chevron-right"
                                ></i>
                            </div>
                        </header>

                        <nav class="dropdown">
                            <div
                                :index="i"
                                v-for="(allVideo, i) in allVideos"
                                @click="
                                    event =>
                                        changeVideoSrc(allVideo.src, i, event)
                                "
                            >
                                <span>{{ `${i + 1}. ${allVideo.name}` }}</span>
                            </div>
                        </nav>
                    </div>
                    <div class="menu">
                        <header>
                            <div class="content">
                                <h4>Time Switch on ZKTeco Linux Device</h4>
                            </div>
                            <div class="icon">
                                <i
                                    aria-hidden="true"
                                    class="mdi mdi-chevron-right"
                                ></i>
                            </div>
                        </header>
                        <nav class="dropdown">
                            <div
                                :index="i"
                                v-for="(allVideo, i) in allVideos"
                                @click="
                                    event =>
                                        changeVideoSrc(allVideo.src, i, event)
                                "
                            >
                                <span>{{ `${i + 1}. ${allVideo.name}` }}</span>
                            </div>
                        </nav>
                    </div>
                    <div class="menu">
                        <header>
                            <div class="content">
                                <h4>Time Attendance and Access Control</h4>
                            </div>
                            <div class="icon">
                                <i
                                    aria-hidden="true"
                                    class="mdi mdi-chevron-right"
                                ></i>
                            </div>
                        </header>
                        <nav class="dropdown">
                            <div
                                :index="i"
                                v-for="(allVideo, i) in allVideos"
                                @click="
                                    event =>
                                        changeVideoSrc(allVideo.src, i, event)
                                "
                            >
                                <span>{{ `${i + 1}. ${allVideo.name}` }}</span>
                            </div>
                        </nav>
                    </div>
                    <div class="menu">
                        <header>
                            <div class="content">
                                <h4>Modele 4 Setup Security</h4>
                            </div>
                            <div class="icon">
                                <i
                                    aria-hidden="true"
                                    class="mdi mdi-chevron-right"
                                ></i>
                            </div>
                        </header>
                        <nav class="dropdown">
                            <div
                                :index="i"
                                v-for="(allVideo, i) in allVideos"
                                @click="
                                    event =>
                                        changeVideoSrc(allVideo.src, i, event)
                                "
                            >
                                <span>{{ `${i + 1}. ${allVideo.name}` }}</span>
                            </div>
                        </nav>
                    </div>
                    <div class="menu">
                        <header>
                            <div class="content">
                                <h4>Master Slave Configuration F18 & FR1200</h4>
                            </div>
                            <div class="icon">
                                <i
                                    aria-hidden="true"
                                    class="mdi mdi-chevron-right"
                                ></i>
                            </div>
                        </header>
                        <nav class="dropdown">
                            <div
                                :index="i"
                                v-for="(allVideo, i) in allVideos"
                                @click="
                                    event =>
                                        changeVideoSrc(allVideo.src, i, event)
                                "
                            >
                                <span>{{ `${i + 1}. ${allVideo.name}` }}</span>
                            </div>
                        </nav>
                    </div>
                    <div class="menu">
                        <header>
                            <div class="content">
                                <h4>Modele 6 Setup Security</h4>
                            </div>
                            <div class="icon">
                                <i
                                    aria-hidden="true"
                                    class="mdi mdi-chevron-right"
                                ></i>
                            </div>
                        </header>
                        <nav class="dropdown">
                            <div
                                :index="i"
                                v-for="(allVideo, i) in allVideos"
                                @click="
                                    event =>
                                        changeVideoSrc(allVideo.src, i, event)
                                "
                            >
                                <span>{{ `${i + 1}. ${allVideo.name}` }}</span>
                            </div>
                        </nav>
                    </div>

                    <div class="menu">
                        <header>
                            <div class="content">
                                <h4>
                                    How to Register New Users to ZKTeco G3Pro
                                </h4>
                            </div>
                            <div class="icon">
                                <i
                                    aria-hidden="true"
                                    class="mdi mdi-chevron-right"
                                ></i>
                            </div>
                        </header>
                        <nav class="dropdown">
                            <div
                                :index="i"
                                v-for="(allVideo, i) in allVideos"
                                @click="
                                    event =>
                                        changeVideoSrc(allVideo.src, i, event)
                                "
                            >
                                <span>{{ `${i + 1}. ${allVideo.name}` }}</span>
                            </div>
                        </nav>
                    </div>

                    <div class="menu">
                        <header>
                            <div class="content">
                                <h4>ZKTeco Biotime 8.5 Installation</h4>
                            </div>
                            <div class="icon">
                                <i
                                    aria-hidden="true"
                                    class="mdi mdi-chevron-right"
                                ></i>
                            </div>
                        </header>
                        <nav class="dropdown">
                            <div
                                :index="i"
                                v-for="(allVideo, i) in allVideos"
                                @click="
                                    event =>
                                        changeVideoSrc(allVideo.src, i, event)
                                "
                            >
                                <span>{{ `${i + 1}. ${allVideo.name}` }}</span>
                            </div>
                        </nav>
                    </div>

                    <div class="menu" v-for="list in allPlayList">
                        <header>
                            <div class="content">
                                <h4>{{ list.topic }}</h4>
                            </div>
                            <div class="icon">
                                <i
                                    aria-hidden="true"
                                    class="mdi mdi-chevron-right"
                                ></i>
                            </div>
                        </header>
                        <nav
                            class="dropdown"
                            v-for="(play, i) in list.playlist"
                        >
                            <div>
                                <span>{{ `${i + 1}. ${play.title}` }}</span>
                            </div>
                        </nav>
                    </div>
                </section>
            </article>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Topic from '~/components/partials/page/tutorial/Topic.vue';

export default {
    components: {},

    transition() {
        return 'fadeIn';
    },
    layout: 'layout-default-website',
    data() {
        return {
            videoSrc: null,
            videoTitle: null,
            musicIndex: 0,
            isClicked: false,
            videoSubCategories: null,
            playList: [],
            allVideos: [
                {
                    name: 'How to Add admin to Device on ZKBioSecurity',
                    src: 'https://www.youtube.com/embed/QGgz3QlaBjk',
                    video: 'QGgz3QlaBjk',
                    id: 'vid_1'
                },
                {
                    name: 'How to Set Personnel Valid Times on ZKBioSecurity',
                    src: 'https://www.youtube.com/embed/qIxde84wxj8',
                    video: 'szH-m_W_8ss',
                    id: 'vid_2'
                },
                {
                    name: 'How to Setup Security Parameters on ZKBioSecurity',
                    src: 'https://www.youtube.com/embed/vqLn-g7scXE',
                    video: 'vqLn-g7scXE',
                    id: 'vid_3'
                },
                {
                    name: 'Computer Monitor Shape',
                    src: 'https://www.youtube.com/embed/QGgz3QlaBjk',
                    id: 'vid_4',
                    video: 'QGgz3QlaBjk'
                },
                {
                    name: 'Computer Monitor Shape',
                    src: 'https://www.youtube.com/embed/szH-m_W_8ss',
                    video: 'szH-m_W_8ss',
                    id: 'vid_5'
                },
                {
                    name: 'Computer Monitor Shape',
                    src: 'https://www.youtube.com/embed/PSp60epZrvk',
                    video: 'PSp60epZrvk',
                    id: 'vid_6'
                }
            ],
            allPlayList: [
                {
                    topic: 'ZKBioSecurity',
                    playlist: [
                        {
                            title:
                                'How to Add admin to Device on ZKBioSecurity',
                            url: 'https://www.youtube.com/embed/QGgz3QlaBjk'
                        },
                        {
                            title:
                                'How to Set Personnel Valid Times on ZKBioSecurity',
                            url: 'https://www.youtube.com/embed/qIxde84wxj8'
                        },
                        {
                            title:
                                'How to Setup Security Parameters on ZKBioSecurity',
                            url: 'https://www.youtube.com/embed/vqLn-g7scXE'
                        }
                    ]
                },

                {
                    topic: 'Introduction',
                    playlist: [
                        {
                            title: 'Computer Monitor Shape',
                            url: 'https://www.youtube.com/embed/QGgz3QlaBjk'
                        },
                        {
                            title: 'Computer Monitor Shape',
                            url: 'https://www.youtube.com/embed/szH-m_W_8ss'
                        }
                    ]
                },

                {
                    topic: 'Application',
                    playlist: [
                        {
                            title: 'Computer Monitor Shape',
                            url: 'https://www.youtube.com/embed/PSp60epZrvk'
                        },
                        {
                            title: 'Computer Monitor Shape',
                            url: 'https://www.youtube.com/embed/PSp60epZrvk'
                        },
                        {
                            title: 'Computer Monitor Shape',
                            url: 'https://www.youtube.com/embed/PSp60epZrvk'
                        }
                    ]
                }
            ]
        };
    },

    computed: {
        title() {
            return 'Product Videos';
        }
    },
    ...mapState({
        videoSubCategories: state => state.website.videoSubCategories
    }),
    async mounted() {
        let menu = document.getElementsByClassName('menu');
        for (let i = 0; i < menu.length; i++) {
            menu[i].addEventListener('click', e => {
                let dropdown = menu[i].querySelector('.dropdown');
                let rotate = menu[i].querySelector('.mdi');
                dropdown.classList.toggle('active');
                rotate.classList.toggle('rotate');
            });
        }

        this.videoSrc = this.allVideos[this.musicIndex].src;

        // await this.$store
        //     .dispatch('website/getVideoSubCategoryBySlug', {
        //         slug: 'security-solutions'
        //     })
        //     .then(data => {
        //         console.log('data::-::', data);
        //     });

        let record = [{}];

        await this.$store
            .dispatch('website/getVideoSubCategoryBySlug', {
                slug: 'security-solutions'
            })
            .then(data => {
                record = data;
            });

        if (record) {
            this.playList = record.map(e => {
                return {
                    topic: e.name,
                    playlist:
                        e.tutorial_videos != undefined
                            ? e.tutorial_videos.map(x => {
                                  return {
                                      title: x.title,
                                      url: x.url
                                  };
                              })
                            : null
                };
            });

            console.log('record', this.playList);
        }
    },
    methods: {
        async changeVideoTitle(title) {
            this.videoTitle = title;
        },

        async changeVideoSrc(src, i, event) {
            this.videoSrc = src;
            let allLiTags = event.target.tagName;
        }
    }
};
</script>

<style lang="scss" scoped>
.tutorial {
    //background: #999;
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
            .menu-list {
                border-left: 0.05rem solid #dcd8d8;
                border-right: 0.05rem solid #dcd8d8;
                display: flex;
                flex-direction: column;
                max-height: 565px;
                overflow: auto;

                .menu {
                    border-bottom: 1px solid #dcd8d8;
                    cursor: pointer;

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

                    .active {
                        display: flex;
                        flex-direction: column;
                        visibility: visible;
                    }
                }

                &::-webkit-scrollbar {
                    width: 0px;
                }
            }
        }
    }
}
</style>
