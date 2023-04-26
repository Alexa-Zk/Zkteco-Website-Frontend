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
                <section class="menu-list" @click="collapsible">
                    <div class="menu">
                        <header>
                            <div class="content">
                                <h4>Modele 1 Setup Security</h4>
                            </div>

                            <div class="icon">
                                <i
                                    aria-hidden="true"
                                    class="mdi mdi-chevron-down"
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
                        <div>
                            <h4>Time Switch on ZKTeco Linux Device</h4>
                        </div>
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
                        <div>
                            <h4>Time Attendance and Access Control</h4>
                        </div>
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
                        <div>
                            <h4>Modele 4 Setup Security</h4>
                        </div>
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
                        <div>
                            <h4>Master Slave Configuration F18 & FR1200</h4>
                        </div>
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
                        <div>
                            <h4>Modele 6 Setup Security</h4>
                        </div>
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
                        <div>
                            <h4>How to Register New Users to ZKTeco G3Pro</h4>
                        </div>
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
                        <div>
                            <h4>ZKTeco Biotime 8.5 Installation</h4>
                        </div>
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
    },
    methods: {
        async changeVideoSrc(src, i, event) {
            this.videoSrc = src;
            let allLiTags = event.target.tagName;
        },

        collapsible() {
            let menu = document.getElementsByClassName('menu');
            //let menu = document.querySelectorAll('.menu');

            for (let i = 0; i < menu.length; i++) {
                menu[i].addEventListener('click', e => {
                    let active = e.target.parentElement.parentElement;
                    active.classList.toggle('active');

                    console.log(' act ', e.target.parentElement);
                    //e.target.parentElement.paremtElement;

                    //console.log(' act ', active);
                    // if (menu[i]) {
                    //     console.log(' active', menu[i]);
                    //     menu[i].children[1].classList.toggle('active');
                    // } else {
                    //     menu[i].children[1].classList.toggle();
                    // }
                });
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.tutorial {
    background: #999;
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
                border-top: 1px solid #7c7474;
                border-left: 1px solid #7c7474;
                border-right: 1px solid #7c7474;
                border-radius: 0.5rem 0.5rem 0 0;
                header {
                    h3 {
                        font-size: 2rem;
                        font-weight: normal;
                    }
                }
            }

            footer {
                border: 1px solid #7c7474;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1rem;

                div:not(:last-child) {
                    border-right: 1px solid #7c7474;
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
                border: 1px solid #7c7474;
                border-radius: 0.5rem 0.5rem 0rem 0rem;

                h3 {
                    font-size: 2rem;
                    font-weight: normal;
                }
            }
            .menu-list {
                border-left: 0.05rem solid #7c7474;
                border-right: 0.05rem solid #7c7474;
                display: flex;
                flex-direction: column;
                max-height: 530px;
                overflow: auto;
                .menu {
                    border-bottom: 1px solid #000;
                    cursor: pointer;

                    header {
                        display: flex;
                        justify-content: space-between;
                        justify-items: center;
                        align-items: center;

                        .mdi {
                            font-size: 2.5rem;
                        }
                    }

                    h4 {
                        //padding: 2rem 2rem;
                        padding: 2rem 0 1rem 2rem;
                        font-size: 1.4rem;
                        font-weight: normal;
                        font-weight: bold;
                    }

                    .dropdown {
                        display: none;
                        div {
                            padding: 1.3rem 3rem;
                            border-top: 1px solid #7c7474;
                        }
                        div:hover {
                            background: #7c7474;
                        }
                    }
                }
                .active {
                    .dropdown {
                        display: flex;
                        flex-direction: column;
                        visibility: visible;
                    }
                }

                &::-webkit-scrollbar {
                    width: 0.5em;
                }

                &::-webkit-scrollbar-track {
                    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                    border-radius: 30px;
                }

                &::-webkit-scrollbar-thumb {
                    border-radius: 20px;
                    background-color: darkgrey;
                    outline: 1px solid slategrey;
                }
            }
        }
    }
}
/*
section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2.5%;
    min-height: 100vh;
    background-color: black;
}
.title {
    font-size: 20px;
    font-weight: 600;
    color: #dcdee1;
    text-align: left;
    width: 100%;
    margin-bottom: 10px;
}
.container {
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    overflow: hidden;
    // border: 2px solid red;
}
.container #main-Video {
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
    outline: none;
}
.playlistBx {
    position: relative;
    height: 100%;
    margin: 0 10px 0 10px;
    // border: 2px solid green;
}
.playlist {
    position: absolute;
    width: 100%;
    height: calc(100% - 40px);
    overflow-y: scroll;
    border-top: 1px solid #dcdee1;
}
.playlist::-webkit-scrollbar {
    width: 0px;
}
.playlistBx .row .AllLessons {
    display: block;
    text-align: left;
    color: #dcdee1;
    font-size: 15px;
    font-weight: 700;
    margin-left: 40px;
    line-height: 40px;
}
.playlist li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    color: #dcdee1;
    cursor: pointer;
    border: 1px solid transparent;
    padding: 15px 20px;
    border-radius: 5px;
}
.playlist li:hover {
    border: 0.5px solid #375666;
}
.playlist li .row span {
    font-size: 15px;
    font-weight: 400;
    color: #dcdee1;
    text-decoration: none;
    display: inline-block;
    text-align: left;
}
.playlist li .row span::before {
    content: '\f01d';
    font-family: FontAwesome;
    color: #328a59;
    margin-right: 15px;
    font-size: 20px;
}
ul li.playing .row span::before {
    content: '\f28c';
    font-family: FontAwesome;
    color: #328a59;
    margin-right: 15px;
    font-size: 20px;
}
.playlist li.playing .row span {
    color: #fff;
}
.playlist li span.duration {
    font-size: 15px;
    font-weight: 400;
    display: inline-block;
    color: #dcdee1;
    text-align: right;
}
.playlist li.playing {
    pointer-events: none;
    background: #1d3541;
    border: 0.5px solid #1d3541;
}
@media (max-width: 1092px) {
    section {
        padding: 30px 10px;
    }
    .container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        overflow: hidden;
    }
    .container #main-Video {
        height: 100%;
    }
    .playlistBx {
        height: 380px;
        margin-top: 10px;
    }
    .playlist {
        position: absolute;
        width: 100%;
        height: calc(100% - 40px);
        overflow-y: scroll;
    }
}
*/
</style>
