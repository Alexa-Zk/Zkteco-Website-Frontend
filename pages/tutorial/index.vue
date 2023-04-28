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
                </section>
            </article>
        </section>
    </div>
</template>

<script>
export default {
    components: {},

    transition() {
        return 'fadeIn';
    },
    layout: 'layout-default-website',
    data() {
        return {
            videoSrc: null,
            musicIndex: 0,
            isClicked: false,
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
            ]
        };
    },

    computed: {
        title() {
            return 'Product Videos';
        }
    },
    mounted() {
        this.videoSrc = this.allVideos[this.musicIndex].src;

        let menu = document.getElementsByClassName('menu');

        for (let i = 0; i < menu.length; i++) {
            menu[i].addEventListener('click', e => {
                let dropdown = menu[i].querySelector('.dropdown');
                let rotate = menu[i].querySelector('.mdi');
                dropdown.classList.toggle('active');
                rotate.classList.toggle('rotate');
            });
        }
    },
    methods: {
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
