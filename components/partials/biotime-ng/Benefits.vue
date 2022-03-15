<template>
    <div id="btc-prices" class="btc-pricing">
        <div class="header-text">
            <h2>
                Benefits on Biotime Cloud
            </h2>
            <div class="flex-center-center">
                <p>
                    ZKTeco Biotime cloud offers you the best Cloud functionality
                    for your business.
                </p>
            </div>
        </div>

        <div class="benefit-container">
            <div>
                <i class="mdi mdi-track-light"></i>
                <p>
                    A simple and cost-effective system for tracking employee
                    time, managing productivity, and producing high-quality
                    outputs with a profit margin
                </p>
            </div>

            <div>
                <i class="mdi mdi-car-shift-pattern"></i>
                <p>
                    With a versatile scheduler, you can easily organize
                    processes, assign shifts correctly, and make workflows
                    simpler and more efficient.
                </p>
            </div>

            <div>
                <i class="mdi mdi-image-filter-tilt-shift"></i>
                <p>
                    A customizable and user-friendly reporting tool that gives
                    comprehensive data and makes it simple for businesses to
                    analyze and improve their processes.
                </p>
            </div>

            <div>
                <i class="mdi mdi-human-male-board"></i>
                <p>
                    User-friendly dashboard design and simple modules for
                    managing user profiles, shifts and leave schedules, and
                    more.
                </p>
            </div>

            <div>
                <i class="mdi mdi-location-enter"></i>
                <p>
                    With our Biotime mobile app, we provide a comprehensive
                    solution for continuous attendance management with a
                    geo-located time clock.
                </p>
            </div>
        </div>

        <!--div class="pricing-configuration">
            <div class="grid-cols4-30">
                <benefit-item
                    tagText="A simple and cost-effective system for tracking employee time, managing productivity, and producing high-quality outputs with a profit margin"
                />
                <benefit-item
                    tagText="With a versatile scheduler, you can easily organize processes, assign shifts correctly, and make workflows simpler and more efficient."
                />
                <benefit-item
                    tagText="A customizable and user-friendly reporting tool that gives comprehensive data and makes it simple for businesses to analyze and improve their processes."
                />
                <benefit-item
                    tagText="User-friendly dashboard design and simple modules for managing user profiles, shifts and leave schedules, and more."
                />
                <benefit-item
                    tagText="With our Biotime mobile app, we provide a comprehensive solution for continuous attendance management with a geo-located time clock."
                />
            </div>
        </div -->
    </div>
</template>

<script>
import BenefitItem from './modules/BenefitItem';
export default {
    components: {
        BenefitItem
    }
};
</script>

<style lang="scss" scoped>
h1,
h2,
h3,
span,
p,
h5,
h6 {
    color: #6c757d;
}

.flex-center-center {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    p {
        font-size: 1.8rem;
    }
}

.btc-pricing {
    padding: 80px 0px 20px;
    .header-text {
        text-align: center;
        h2 {
            margin-bottom: 16px;
        }
        p {
            width: 60%;
            @include media('<sm') {
                width: 100%;
            }
        }
    }
    .benefit-container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 2rem;

        div {
            flex-direction: column;
            box-shadow: 0px 0px 20px rgb(0 0 0 / 10%);
            padding: 2rem;
            border-radius: 4px;
            text-align: center;
            p {
                font-size: 1.8rem;
                background-color: #fff;
                text-align: left;
            }
            i {
                color: #7ac143;
                font-size: 4em;
                text-align: center;
            }
            &:hover {
                transform: scale(1.03);
            }
        }

        @include media('<sm') {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 1rem;
        }
    }
    .pricing-configuration {
        padding-top: 60px;
        .pricing-nav {
            padding-bottom: 30px;

            .pricing-nav-item {
                height: 54px;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 103px;
                cursor: pointer;
                background: white;
                box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.05),
                    0 1.5rem 2.2rem rgba(0, 0, 0, 0.1);
                span {
                    color: #7ac143;
                    font-size: 16px;
                    font-weight: bold;
                }
            }
        }

        .grid-cols4-30 {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 30px;
            @include media('<sm') {
                grid-template-columns: 1fr;
            }
        }
    }
}
h2 {
    font-size: 30px;
}
</style>
