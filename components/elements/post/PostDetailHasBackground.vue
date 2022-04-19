<template id="post-with-background">
    <div class="ps-post--detail ps-post--parallax" style="position: relative;" v-if="articles">
        <div
            class="ps-post__header bg--cover"
            :style="{
                backgroundImage: 'url(' + articles.image[0].url + ')',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }"
        ></div>
        <div class="container" id="content-scroll">
            <div class="icon-bar hide" id="icon-bar">
                <a
                    :href="
                        `https://www.facebook.com/sharer/sharer.php?u=${url}`
                    "
                    class="facebook"
                    ><i class="fa fa-facebook"></i
                ></a>
                <a
                    :href="
                        `https://twitter.com/intent/tweet?text=ZKTeco%20News%20Articles%20-%20${articles.title}%20-%20${url}`
                    "
                    class="twitter"
                    ><i class="fa fa-twitter"></i
                ></a>
                <a
                    :href="
                        `https://wa.me/2348175555514?text=I%20am%20interested%20in%20your%20product%20for%20sale%20url=${url}%20title=${articles.name}`
                    "
                    class="whatsapp"
                    ><i class="fa fa-whatsapp"></i
                ></a>
                <a
                    :href="
                        `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${articles.name}&summary=${articles.body}`
                    "
                    class="linkedin"
                    ><i class="fa fa-linkedin"></i
                ></a>
                <a
                    :href="
                        `https://api.whatsapp.com/send?url=${url}?title=${articles.name}`
                    "
                    class="instagram"
                    ><i class="fa fa-instagram"></i
                ></a>
            </div>
            <div class="ps-post__content post-header ">
                <h2>
                    {{ articles ? articles.title : '' }}
                </h2>
                <p>{{ articles ? formatDate(articles.created_at) : '' }}</p>
                <p>
                   Written by: {{ articles.Author }}
                </p>
                <div class="category_tags">
                    <h4
                        v-for="category in articles.categories"
                        :key="category.name"
                    >
                        {{ category ? category.name : '' }}
                    </h4>
                </div>
            </div>
            <div class="ps-post__content">
                <p v-html="articles.body"></p>
            </div>
            <div class="ps-post__footer">
                <p class="ps-post__tags">
                    Tags:<a
                        :href="`/news-center/categories/${category.id}`"
                        v-for="category in articles.categories"
                        :key="category.name"
                        >{{ category ? category.name : '' }}</a
                    >
                </p>
                <div class="ps-post__social">
                    <a
                        class="facebook"
                        :href="
                            `https://www.facebook.com/sharer/sharer.php?u=${url}`
                        "
                    >
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a
                        class="instagram"
                        :href="
                            `https://api.whatsapp.com/send?url=${url}?title=${articles.name}`
                        "
                    >
                        <i class="fa fa-instagram"></i>
                    </a>
                    <a
                        class="whatsapp"
                        :href="
                            `https://wa.me/2348175555514?text=I%20am%20interested%20in%20your%20product%20for%20sale%20url=${url}%20title=${articles.name}`
                        "
                    >
                        <i class="fa fa-whatsapp"></i>
                    </a>

                    <a
                        class="twitter"
                        :href="
                            `https://twitter.com/intent/tweet?text=ZKTeco%20News%20Articles%20-%20${articles.title}%20-%20${url}`
                        "
                    >
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a
                        class="linkedin"
                        :href="
                            `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${articles.name}&summary=${articles.body}`
                        "
                    >
                        <i class="fa fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
        <button @click="scrollToPageTop" id="scroll-to-top" title="Go to top">Top</button>

    </div>
</template>

<script>
export default {
    name: 'PostDetailHasBackground',
    props: ['articles'],
    data() {
        return {
            url: ''
        };
    },
    methods: {
        scrollToPageTop() {
            window.scrollTo(0,0);
        },
        formatDate(date) {
            let formated = new Date(date);
            return formated.toDateString();
        },
        handleScroll(event) {
            const HEADLINE = 361.11;

            const elmnt = document.getElementById('content-scroll');
            const icons = document.querySelector('#icon-bar');
            const buttonTop = document.querySelector('#scroll-to-top');

            const divHeight = elmnt ? elmnt.offsetHeight: 0;
            const distanceToTop = elmnt.getBoundingClientRect().top - HEADLINE;
            const scrollHeight = event.target.scrollingElement.scrollTop;

            if (scrollHeight > 200) {
                icons.classList.add('show');
                icons.classList.remove('hide');
                buttonTop.classList.add('show');
                buttonTop.classList.remove('hide');
                
            } else {
                icons.classList.add('hide');
                icons.classList.remove('show')
                
                buttonTop.classList.add('hide');
                buttonTop.classList.remove('show');;
            }

            if (distanceToTop + divHeight - HEADLINE < 200) {
                icons.classList.add('hide');
                icons.classList.remove('show');

                buttonTop.classList.add('hide');
                buttonTop.classList.remove('show');
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.url = window.location.href;
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
};
</script>

<style lang="scss" scoped>
#scroll-to-top {
  position: fixed;
  bottom: 100px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: #78bc27;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
  @include media('<sm') {
        bottom: 120px;
    }
}

#scroll-to-top:hover {
  background-color: #555;
}

.hide {
    display: none;
}
.show {
    display: block;
}
.icon-bar {
    position: fixed;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    @include media('<sm') {
        display: none;
    }
    @include media('<xs') {
        display: none;
    }
}

.icon-bar a {
    display: block;
    text-align: center;
    padding: 16px;
    transition: all 0.3s ease;
    color: white;
    font-size: 20px;
}

.icon-bar a:hover {
    background-color: #000;
}

.facebook {
    background: #3b5998;
    color: white;
}

.twitter {
    background: #55acee;
    color: white;
}

.instagram {
    background: #e1306c;
    color: white;
}

.linkedin {
    background: #007bb5;
    color: white;
}

.whatsapp {
    background: #128c7e;
    color: white;
}
.ps-post--parallax {
    .ps-post__header {
        // background-image: url('/img/bg/blog-detail.jpg');
        padding: 120px 0;
        .category {
            display: flex;
            place-content: center;
            h4 {
                margin-left: 12px;
            }
        }
    }

    .post-header {
        padding: 30px 0 10px;
        .category_tags {
            display: flex;
            h4 {
                background: orange;
                color: white;
                padding: 0px 10px;
                border-radius: 20px;
                font-size: 16px;
                display: flex;
                align-items: center;
                margin-right: 12px;
            }
        }
    }
    .ps-post__content {
        padding: 10px 0;
        .image {
            img {
                width: 100%;
            }
        }
        p {
            strong {
                font-size: 24px;
                font-weight: 600;
                margin-bottom: 30px;
                line-height: 1.4em;
            }
            figure {
                img {
                    width: 100% !important;
                }
            }
        }
    }
}
</style>
