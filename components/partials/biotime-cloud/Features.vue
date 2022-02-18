<template>
    <section class="ps-container section-btc-main-feature">
        <div class="feature-container">
            <div class="ltf">
                <div class="tag">
                    <span>
                        main features
                    </span>
                </div>
                <h2>Your data from any device at any time</h2>
                <div class="features-ctx">
                    <div class="features">
                        <i class="icon-checkmark-circle"></i>
                        <span>
                            Attendance reports, from any device and at any time
                        </span>
                    </div>
                    <div class="features">
                        <i class="icon-checkmark-circle"></i>
                        <span>Reduce costs, time and space</span>
                    </div>
                    <div class="features">
                        <i class="icon-checkmark-circle"></i>
                        <span>Create fixed and flexible schedules</span>
                    </div>
                    <div class="features">
                        <i class="icon-checkmark-circle"></i>
                        <span
                            >Home office and location control for
                            employees</span
                        >
                    </div>
                </div>
            </div>
            <div class="rtf">
                <img
                    loading="lazy"
                    src="/img/website/biotime-feature.gif"
                    alt="biotime cloud logo"
                />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Features'
};
</script>

<style lang="scss" scoped>
h1,
h2,
h3,
span,
h5,
h6 {
    color: #6c757d;
}

.section-btc-main-feature {
    padding-top: 80px;
    padding-bottom: 80px;
    .feature-container {
        padding-bottom: 60px;
        display: flex;
        align-items: center;
        @include media('<sm') {
            display: block;
        }
        .ltf,
        .rtf {
            width: 50%;
            @include media('<sm') {
                
                width: 100%;
            }
        }

        .rtf {
            @include media('<sm') {
                margin-top: 10px;
            }
        }

        .ltf {
            .tag {
                background: #7ac143;

                padding: 3px 6px;
                border-radius: 0.25rem;
                width: fit-content;
                span {
                    font-weight: 700;
                    letter-spacing: -0.03rem;
                    font-size: 14px;
                    color: white;
                }
            }

            h2 {
                font-size: 30px;
                padding: 40px 0px 50px;
            }

            .features-ctx {
                .features {
                    padding: 8px 0px;
                    font-size: 16px;
                    span {
                        font-weight: 500;
                    }
                    i {
                        color: #7ac143;
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
</style>
