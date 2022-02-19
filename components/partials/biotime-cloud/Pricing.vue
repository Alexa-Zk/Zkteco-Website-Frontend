<template>
    <div id="btc-prices" class="btc-pricing">
        <div class="header-text">
            <h2>
                Query the planes available
            </h2>
            <div class="flex-center-center">
                <p>
                    ZKTeco offers you the best BioTime Cloud plan that best
                    suits your company's needs. The experience, reliability,
                    security and performance of our platform are second to none!
                </p>
            </div>
        </div>

        <div class="pricing-configuration">
            <div class="pricing-nav flex-center-center">
                <div class="pricing-nav-item">
                    <span>Annual</span>
                </div>
            </div>
            <div class="grid-cols4-30">
                <pricing-item
                    tagText="Lite"
                    price="100"
                    users="20"
                    devices="1"
                    app="1"
                    events="30,000"
                    valid="1"
                />
                <pricing-item
                    tagText="Standard"
                    price="125"
                    users="50"
                    devices="1"
                    app="3"
                    events="100,000"
                    valid="1"
                />
                <pricing-item
                    tagText="Premium"
                    price="159"
                    users="50"
                    devices="1"
                    app="5"
                    events="250,000"
                    valid="2"
                />
                <pricing-item
                    tagText="Enterprise"
                    price="199"
                    users="50"
                    devices="2"
                    app="10"
                    events="300,000"
                    valid="2"
                    :active="true"
                />
            </div>
        </div>
    </div>
</template>

<script>
import PricingItem from './modules/PricingItem';
export default {
    components: {
        PricingItem
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
