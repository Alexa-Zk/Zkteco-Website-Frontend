<template lang="html">
    <div class="phasewrapper">
        <div class="phasesidebar">
            <div class="sidebartop">
                <p>
                    Essential fundamentals of zkteco time attendance and access
                    control products overview
                </p>
            </div>
            <div class="sidebarcontent">
                <div>
                    <p>
                        <b>Modele One:</b> Introduction to zkteco products
                        overview
                    </p>
                </div>
                <div>
                    <p>
                        <b>Modele Two:</b> Introduction to zkteco products
                        overview
                    </p>
                </div>

                <div>
                    <p>
                        <b>Modele Three:</b> Introduction to zkteco products
                        overview
                    </p>
                </div>

                <div>
                    <p>
                        <b>Modele Four:</b> Introduction to zkteco products
                        overview
                    </p>
                </div>

                <div>
                    <p>
                        <b>Modele Five:</b> Introduction to zkteco products
                        overview
                    </p>
                </div>

                <div>
                    <p>
                        <b>Modele Six:</b> Introduction to zkteco products
                        overview
                    </p>
                </div>
            </div>
        </div>
        <div class="phasecontainer">
            <div class="courseHeader">
                <h2>
                    Essential fundamentals of zkteco time attendance and access
                    control products overview
                </h2>
            </div>
            <div class="courseImage">
                <img
                    src="https://lh3.googleusercontent.com/eX6bT9eYEiwYqiN5UNxxgqolkNtq4-_-wuxHytDGh25FpajHyqZYScQPY43R-mnrpqjLE1paTPN550qQSlqx7in2ZyaYn2E_NNYs-nM"
                />
            </div>
            <div class="coures">
                <div>
                    <p>
                        <b>Modele One:</b> Introduction to zkteco products
                        overview
                    </p>
                </div>
                <div>
                    <p>
                        <b>Modele Two:</b> Introduction to zkteco products
                        overview
                    </p>
                </div>
                <div>
                    <p>
                        <b>Modele Three:</b> Introduction to zkteco products
                        overview
                    </p>
                </div>
                <div>
                    <p>
                        <b>Modele Four:</b> Introduction to zkteco products
                        overview
                    </p>
                </div>
                <div>
                    <p>
                        <b>Modele Five:</b> Introduction to zkteco products
                        overview
                    </p>
                </div>
                <div>
                    <p>
                        <b>Modele Six:</b> Introduction to zkteco products
                        overview
                    </p>
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
    layout: 'layout-default-website'
};
</script>

<style lang="scss" scoped>
.phasewrapper {
    // height: 83vh;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    display: grid;
    grid-template-columns: 1fr 4fr;
    .phasesidebar {
        height: 100%;
        background: #d9d9d9;
        margin-bottom: 2rem;
        .sidebartop {
            padding: 2rem;
            background: #000;
            p {
                color: #fff;
                font-size: 1.6rem;
            }
        }
        .sidebarcontent {
            display: flex;
            flex-direction: column;
            padding: 2rem;

            div {
                margin-top: 3rem;
                padding: 0.5rem 1.4rem;
                background: #fff;
                p {
                    color: #000;
                    font-size: 1.4rem;
                }
            }
        }
    }
    .phasecontainer {
        background: yellow;
        display: flex;
        flex-direction: column;
        padding: 5rem;
        .courseHeader {
            text-align: center;
            font-size: 1rem;
        }
        .courseImage {
            img {
                // height: 50%;
                // width: 100%;
            }
            height: 45vh;
            margin: 2rem 0;
            background: red;
        }
        .coures {
        }
    }
}
</style>
