<template lang="html">
    <div>
        <div class="container">
            <div class="wrap">
                <div class="twrap">
                    <img src="~/static/tutorial/elearning.png" />
                </div>
                <div class="tcontent">
                    <h2>ZKTeco E-Learning Platform</h2>

                    <div class="content">
                        <p>
                            Are you in need of professional guidance and
                            assistance? Look no further than ZKTeco! Our team of
                            dedicated sales executives and technical specialists
                            are ready to provide you with expert advice and
                            tailored assistance to meet your specific needs.
                            Whether you require advice on our services or
                            technical support, we are here to help and ensure
                            your complete satisfaction. Our team is equipped
                            with extensive knowledge and expertise to assist you
                            in making informed decisions and resolving issues
                            promptly.
                            <br /><br />
                            Our unwavering commitment to excellence and customer
                            satisfaction ensures unparalleled dissemination of
                            ZKTeco's products and solution training, as well as
                            outstanding support.
                        </p>
                    </div>
                    <div class="tbutton">
                        <a href="#phases">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="phases" class="phases">
            <div class="phaseheader">
                <h2>Learning Phases</h2>
                <h3>
                    Advance Your Career. With Our Security & Smart technology
                    Solution
                </h3>
            </div>
            <div class="phasecontent">
                <div class="content" v-for="course in courses" :key="course.id">
                    <h4>{{ course.name }}</h4>
                    <p>
                        {{ course.description }}
                    </p>
                    <div class="learn">
                        <nuxt-link :to="`/tutorial/${course.slug}`">
                            Start Learning
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Video from '~/components/partials/page/tutorial/Video';

export default {
    components: { Video },

    transition() {
        return 'fadeIn';
    },
    layout: 'layout-default-website',

    computed: {
        title() {
            return 'Product Videos';
        },
        ...mapState({
            loading: state => state.website.loading,
            courses: state => state.website.courses
        })
    },
    async mounted() {
        await this.$store.dispatch('website/getCourse');
    }
};
</script>

<style lang="scss" scoped>
.container {
    margin-top: 3rem;
    height: 83vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    justify-content: center;
    align-items: center;

    .twrap {
        width: 90%;
    }
    .tcontent {
        h2 {
            color: #8fc74a;
        }

        .content {
            p {
                font-size: 1.65rem;
            }
        }

        .tbutton {
            display: flex;
            justify-items: start;
            a {
                text-align: left;
                border: 1px solid #8fc74a;
                font-size: 1.5rem;
                padding: 1.2rem 2.5rem;
            }
            a:hover {
                //background: #8fc74a;

                background: #8fc74a;
            }
        }
    }
    @media (max-width: 740px) {
        margin-top: 10rem;
        grid-template-columns: 1fr;
    }
}

.phases {
    padding-top: 18rem;
    margin-left: 8%;
    margin-right: 8%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .phaseheader {
        display: flex;
        flex-direction: column;
        align-items: center;
        // h2,
        // h3 {
        //     color: #8fc74a;
        // }
    }
    .phasecontent {
        margin-top: 3rem;
        margin-bottom: 10rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3.4rem;
        margin-left: 5%;
        margin-right: 5%;

        .content {
            //display: flex;
            padding: 3rem;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

            .learn {
                a {
                    border: 2px solid #8fc74a;
                    padding: 0.8em;
                    border-radius: 3px;
                }
                a:hover {
                    color: #000;
                    background: #8fc74a;
                }
            }
        }

        @media (max-width: 740px) {
            grid-template-columns: 1fr;
            margin-left: 1%;
            margin-right: 1%;
        }
    }
}
</style>
