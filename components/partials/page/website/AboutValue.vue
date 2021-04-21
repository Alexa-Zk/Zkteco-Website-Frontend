<template lang="html">
    <div class="ps-about-awards">
        <div class="ps-container">
            <div class="ps-section__header">
                <h4>Enterprise Values</h4>
                <p>
                    We regard values as seeds, culture as trees and state of
                    mind as soil, without mind there is no seed, without core
                    value there is no culture
                </p>
            </div>
            <div class="ps-section__content">
                <div class="value-images">
                    <div class="value-images--item">
                        <img data-src="/img/bg/about-us.jpg" class="lazyload" alt="" />
                        <div class="value-images--item--text">
                            <div class="text">
                                <h5>Responsibility</h5>
                                <p>
                                    Responsibility is a major indicator for
                                    ZKTeco to measure individual spiritual
                                    quality, which penetrates our mutual
                                    commitment to customers, partners,
                                    employees, shareholders and other
                                    stakeholders
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="value-images--item">
                        <img data-src="/img/bg/about-us.jpg" class="lazyload" alt="" />
                        <div class="value-images--item--text">
                            <div class="text">
                                <h5>Integrity</h5>
                                <p>
                                    As for culture and self-discipline of
                                    ZKTeco, integrity is the most important
                                    guidance of common values and the
                                    cornerstone of all virtues. Integrity
                                    reminds us to insist on correct orientation,
                                    dare to
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="value-images--item">
                        <img data-src="/img/bg/about-us.jpg" class="lazyload" alt="" />
                        <div class="value-images--item--text">
                            <div class="text">
                                <h5>Pragmatism</h5>
                                <p>
                                    Being practical-minded means to be
                                    down-to-earth, practical and realistic.
                                    Fundamentally, it is to proceed from
                                    reality, boldly upholding truth and science
                                    and dauntlessly correcting errors.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="value-images--item">
                        <img data-src="/img/bg/about-us.jpg" class="lazyload" alt="" />
                        <div class="value-images--item--text">
                            <div class="text">
                                <h5>Excellence</h5>
                                <p>
                                    In ZKTeco, excellence means being a
                                    world-class enterprise and providing
                                    top-standard innovated products and
                                    services. The process of being a sustainable
                                    excellent enterprise with unremitting
                                    efforts and
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutAwards',
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.ps-about-awards {
    padding: 40px 0px;
    .ps-section__header {
        max-width: unset;
        margin: 0 auto 16px;
        text-align: center;
        h4 {
            margin-bottom: 30px;
            font-size: 30px;
            color: #000;
            font-weight: 500;
        }
    }
    .ps-section__content {
        .value-images {
            margin-top: 40px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 10px;
            @include media('<sm') {
                grid-template-columns: 1fr;
            }
            @include media('<xs') {
                grid-template-columns: 1fr;
            }
            .value-images--item {
                height: 300px;
                position: relative;
                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
                .value-images--item--text {
                    position: absolute;
                    background: rgba(0, 0, 0, 0.7);
                    top: 50%;
                    left: 50%;
                    width: 100%;
                    height: 100%;
                    max-width: 100%;
                    transform: translate(-50%, -50%);
                }
                .text {
                    padding: 0px 40px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    h5 {
                        color: white;
                        font-size: 25px;
                    }
                    p {
                        color: white;
                        font-size: 17px;
                    }
                }
            }
        }
    }
}
</style>
