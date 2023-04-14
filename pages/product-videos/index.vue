<template lang="html">
    <div>
        <section>
            <h2 class="title"></h2>
            <div class="container">
                <div id="video_player">
                    <iframe
                        width="100%"
                        height="415"
                        :src="videoSrc"
                        :title="allVideos.length"
                        frameborder="0"
                        allowfullscreen
                    ></iframe>
                </div>
                <div class="playlistBx">
                    <div class="header">
                        <div class="row">
                            <span class="AllLessons"></span>
                        </div>
                    </div>
                    <ul class="playlist" id="playlist">
                        <li :li-index="i" v-for="(allVideo, i) in allVideos" @click="(event) => changeVideoSrc(allVideo.src, i, event)"> 
                            <div class="row">
                                <span>{{ `${i+1}. ${allVideo.name}` }}</span>
                            </div>
                            <span :id="allVideo.id" class="duration"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import ShopWidget from '~/components/partials/shop/modules/website/ShopWidget';
import LayoutShopSidebarCategories from '~/components/partials/shop/website/LayoutShopSidebarCategories';
import ProductCategoryDefault from '~/components/elements/product/website/ProductCategoryDefault';
import Repository from '~/repositories/Repository.js';
import { subBaseUrl } from '~/repositories/Repository';

export default {
    components: {
        LayoutShopSidebarCategories,
        ShopWidget,
        ProductCategoryDefault,
        BreadCrumb
    },

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
                    name: "ZKTeco Biotime Introduction",
                    src: "https://www.youtube.com/embed/81Pp8iW_ftk",
                    id: "vid_1"
                },
                {
                    name: "Creating Company's Profile",
                    src: "https://www.youtube.com/embed/tfxMCYM_Ygc",
                    id: "vid_2"
                },
                {
                    name: "Computer Monitor Shape",
                    src: "http://d10.o2tv.org/The%20Blacklist/Season%2010/The%20Blacklist%20-%20S10E04%20(TvShows4Mobile.Com)%20otv-hkxzi.mp4",
                    id: "vid_3"
                },
                {
                    name: "Computer Monitor Shape",
                    src: "http://d10.o2tv.org/The%20Blacklist/Season%2010/The%20Blacklist%20-%20S10E04%20(TvShows4Mobile.Com)%20otv-hkxzi.mp4",
                    id: "vid_4"
                },
                {
                    name: "Computer Monitor Shape",
                    src: "http://d10.o2tv.org/The%20Blacklist/Season%2010/The%20Blacklist%20-%20S10E04%20(TvShows4Mobile.Com)%20otv-hkxzi.mp4",
                    id: "vid_5"
                },
                {
                    name: "Computer Monitor Shape",
                    src: "http://d10.o2tv.org/The%20Blacklist/Season%2010/The%20Blacklist%20-%20S10E04%20(TvShows4Mobile.Com)%20otv-hkxzi.mp4",
                    id: "vid_6"
                },
            ]
        }
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
        async changeVideoSrc(src, i, event){
            this.videoSrc = src
            let allLiTags = event.target.tagName

        }
    }
};
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body::-webkit-scrollbar
{
   width: 10px;
}


li
{
    list-style: none;
}
section
{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2.5%;
    min-height: 100vh;
    background-color: black;
}
.title
{
    font-size: 20px;
    font-weight: 600;
    color: #dcdee1;
    text-align: left;
    width: 100%;
    margin-bottom: 10px;
}
.container
{
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    overflow: hidden;
    /* border: 2px solid red; */
}
.container #main-Video
{
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
    outline: none;
}
.playlistBx
{
    position: relative;
    height: 100%;
    margin: 0 10px 0 10px;
    /* border: 2px solid green; */
}
.playlist
{
    position: absolute;
    width: 100%;
    height: calc(100% - 40px);
    overflow-y: scroll;
    border-top: 1px solid #dcdee1;
}
.playlist::-webkit-scrollbar
{
   width: 0px;
}
.playlistBx .row .AllLessons
{
   display: block;
   text-align: left;
   color: #dcdee1;
   font-size: 15px;
   font-weight: 700;
   margin-left: 40px;
   line-height: 40px;
}
.playlist li
{
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
.playlist li:hover
{
    border: 0.5px solid #375666;
}
.playlist li .row span
{
    font-size: 15px;
    font-weight: 400;
    color: #dcdee1;
    text-decoration: none;
    display: inline-block;
    text-align: left;
}
.playlist li .row span::before
{
    content: '\f01d';
    font-family: FontAwesome;
    color: #328a59;
    margin-right: 15px;
    font-size: 20px;
}
ul li.playing .row span::before
{
    content: '\f28c';
    font-family: FontAwesome;
    color: #328a59;
    margin-right: 15px;
    font-size: 20px;
}
.playlist li.playing .row span
{
   color: #fff;
}
.playlist li span.duration
{
    font-size: 15px;
    font-weight: 400;
    display: inline-block;
    color: #dcdee1;
    text-align: right;
}
.playlist li.playing
{
   pointer-events: none;
   background: #1d3541;
   border: 0.5px solid #1d3541;
}
@media(max-width: 1092px){
    section
    {
        padding: 30px 10px;
    }
    .container
    {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(1,1fr);
        overflow: hidden;
    }
    .container #main-Video
    {
        height: 100%;
    }
    .playlistBx
    {
        height: 380px;
        margin-top: 10px;
    }
    .playlist
    {
        position: absolute;
        width: 100%;
        height: calc(100% - 40px);
        overflow-y: scroll;
    }
}

</style>
