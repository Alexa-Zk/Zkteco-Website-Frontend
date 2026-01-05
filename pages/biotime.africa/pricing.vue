<template>
    <section class="ps-container section-pricing-hero">
        <button
            class="ps-btn ps-btn--xs ps-btn--gray"
            style="margin-bottom: 20px;"
            v-on:click="goBack"
        >
            Back
        </button>

        <div class="ps-header">
            <h2>
                Pricing Plans
            </h2>
            <p>
                Choose a plan that fits your needs. Flexible pricing plans
                designed to support individuals, teams, and growing businesses
            </p>
            <p class="disclaimer">
                Free Biotime cloud for First YEAR: 10 Devices and 200 Users, 10
                apps
            </p>
        </div>

        <div
            class="flex-baseline"
            style="justify-content: center; margin-bottom: 30px;"
        >
            <div
                v-for="duration in durations"
                :key="duration"
                style="margin: 0 10px;"
            >
                <button
                    class="ps-btn"
                    :class="
                        period === duration ? 'ps-btn--green' : 'ps-btn--gray'
                    "
                    style="text-transform: uppercase;"
                    @click="switchDuration(duration)"
                >
                    {{ duration }}
                </button>
            </div>
        </div>

        <ul class="pricing-grid-list">
            <li
                :class="{
                    'grid-list': true,
                    'grid-list-last': plan.plan === 'Enterprise Version'
                }"
                v-for="plan in plans"
                :key="plan.plan"
            >
                <div class="tag">
                    <span>
                        {{ plan.plan }}
                    </span>
                </div>

                <div class="price-section">
                    <span v-if="plan.price">{{
                        plan.price[period] === 0
                            ? 'Free'
                            : `$${plan.price[period]}`
                    }}</span>

                    <a href="tel:2348175555512" v-else class="contact"
                        >Contact Us</a
                    >
                </div>

                <!-- <p v-if="plan.note">{{ plan.note }}</p> -->
                <ul class="plan-descriptions">
                    <li class="plan-description">
                        <i class="icon-user"></i>
                        <span> Max Users: {{ plan.maxUsers }} </span>
                    </li>
                    <li class="plan-description">
                        <i class="icon-desktop"></i>
                        <span> Max Devices: {{ plan.maxDevices }} </span>
                    </li>
                    <li class="plan-description">
                        <i class="icon-tablet"></i>
                        <span>
                            Mobile App Users: {{ plan.mobileAppUsers }}</span
                        >
                    </li>
                    <li class="plan-description">
                        <i class="icon-bubble-text"></i>
                        <span
                            >WhatsApp Push Notifications:
                            {{ plan.whatsappPush }}
                        </span>
                    </li>
                    <li class="plan-description">
                        <i class="icon-eye"></i>
                        <span> Transactions: {{ plan.transactions }}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'Pricing',
    layout: 'layout-biotime',
    data() {
        return {
            period: 'monthly',
            durations: ['monthly', 'annually'],
            plans: [
                {
                    plan: 'SME Version',
                    note: 'One-time payment for activation license',
                    maxUsers: '1-20',
                    maxDevices: 1,
                    whatsappPush: 500,
                    transactions: 50000,
                    mobileAppUsers: 2,
                    price: {
                        monthly: 0,
                        annually: 0
                    }
                },
                {
                    plan: 'Standard Version',
                    maxUsers: '21-50',
                    maxDevices: 3,
                    whatsappPush: 1000,
                    transactions: 75000,
                    mobileAppUsers: 5,
                    price: {
                        monthly: 6,
                        annually: 65
                    }
                },
                {
                    plan: 'Bronze Version',
                    maxUsers: '51-100',
                    maxDevices: 4,
                    whatsappPush: 1500,
                    transactions: 100000,
                    mobileAppUsers: 10,
                    price: {
                        monthly: 12,
                        annually: 118
                    }
                },
                {
                    plan: 'Silver Version',
                    maxUsers: '101-200',
                    maxDevices: 5,
                    whatsappPush: 2000,
                    transactions: 200000,
                    mobileAppUsers: 20,
                    price: {
                        monthly: 19,
                        annually: 194
                    }
                },
                {
                    plan: 'Gold Version',
                    maxUsers: '201-300',
                    maxDevices: 10,
                    whatsappPush: 2500,
                    transactions: 300000,
                    mobileAppUsers: 30,
                    price: {
                        monthly: 27,
                        annually: 269
                    }
                },
                {
                    plan: 'Premium Classic Version',
                    maxUsers: '301-400',
                    maxDevices: 15,
                    whatsappPush: 3000,
                    transactions: 400000,
                    mobileAppUsers: 40,
                    price: {
                        monthly: 32,
                        annually: 323
                    }
                },
                {
                    plan: 'Premium Bronze Version',
                    maxUsers: '401-500',
                    maxDevices: 20,
                    whatsappPush: 3500,
                    transactions: 500000,
                    mobileAppUsers: 50,
                    price: {
                        monthly: 48,
                        annually: 484
                    }
                },
                {
                    plan: 'Premium Silver Version',
                    maxUsers: '501-700',
                    maxDevices: 50,
                    whatsappPush: 3700,
                    transactions: 700000,
                    mobileAppUsers: 70,
                    price: {
                        monthly: 54,
                        annually: 538
                    }
                },
                {
                    plan: 'Premium Gold Version',
                    maxUsers: '701-900',
                    maxDevices: 80,
                    whatsappPush: 3900,
                    transactions: 900000,
                    mobileAppUsers: 90,
                    price: {
                        monthly: 77,
                        annually: 774
                    }
                },
                {
                    plan: 'Premium Platinum Version',
                    maxUsers: '901-1000',
                    maxDevices: 100,
                    whatsappPush: 4000,
                    transactions: 1000000,
                    mobileAppUsers: 200,
                    price: {
                        monthly: 97,
                        annually: 968
                    }
                },
                {
                    plan: 'Premium Diamond Version',
                    maxUsers: '1001-2500',
                    maxDevices: 200,
                    whatsappPush: 4500,
                    transactions: 2500000,
                    mobileAppUsers: 500,
                    price: {
                        monthly: 194,
                        annually: 1935
                    }
                },
                {
                    plan: 'Diamond Plus Version',
                    maxUsers: '2501-5000',
                    maxDevices: 500,
                    whatsappPush: 7000,
                    transactions: 5000000,
                    mobileAppUsers: 1000,
                    price: {
                        monthly: 323,
                        annually: 3225
                    }
                },
                {
                    plan: 'Enterprise Version',
                    maxUsers: '5000 & above',
                    maxDevices: '501 & above',
                    whatsappPush: 10000,
                    transactions: 'Contact ZKTeco',
                    mobileAppUsers: 'Contact ZKTeco'
                    /* price: {
                        monthly: 'Contact ZKTeco',
                        annually: 'Contact ZKTeco'
                    } */
                }
            ]
        };
    },
    methods: {
        goBack() {
            this.$router.push('/biotime.africa');
        },
        switchDuration(value) {
            this.period = value;
        }
    }
};
</script>

<style lang="scss" scoped>
ul {
    list-style: none;
    padding: 0;
}

.flex-baseline {
    display: flex;
    align-items: center;
    justify-items: center;
}

.section-pricing-hero {
    padding-top: 60px;
    padding-bottom: 40px;

    .ps-header {
        text-align: center;
        margin-bottom: 40px;

        h2 {
            color: #000;
            font-size: 2.5em;
            font-weight: 700;
            position: relative;

            &::before {
                content: '';
                position: absolute;
                width: 50px;
                height: 5px;
                left: 54%;
                bottom: 0;
                background: #7ac143;
            }
        }

        p {
            font-size: 16px;
            font-weight: 500;
        }

        .disclaimer {
            font-size: 24px;
            font-weight: 500;
            color: #7ac143;
            margin-top: 10px;
        }
    }

    .pricing-grid-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 40px;

        .grid-list {
            border-radius: 5px;
            border: 0 solid rgba(0, 0, 0, 0.125);
            box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15) !important;

            .tag {
                background: linear-gradient(to right, #7ac143, #8ed05b);
                padding: 6px 18px;
                //border-radius: 0.25rem;
                width: fit-content;
                margin: 0 auto;
                span {
                    font-weight: 700;
                    letter-spacing: -0.03rem;
                    font-size: 20px;
                    color: white;
                }
            }

            .price-section {
                text-align: center;
                padding: 15px 0;
                color: #6c757d;
                span {
                    font-size: 48px;
                    font-weight: 700;
                }

                .contact {
                    font-size: 24px;
                    color: #007bff;
                    text-decoration: underline;
                }
            }
        }

        .grid-list-last {
            grid-column: 1 / -1;
            justify-self: center;
        }
    }

    .plan-descriptions {
        padding-bottom: 20px;
        margin: 0 20px;

        .plan-description {
            display: flex;
            align-items: center;
            padding: 10px;

            i {
                font-size: 20px;
                color: #7ac143;
            }

            span {
                font-size: 16px;
                padding-left: 10px;
                font-weight: 500;
            }
        }
    }
}
</style>
