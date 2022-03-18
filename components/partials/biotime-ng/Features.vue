<template>
    <section id="btc-feature" class="ps-container section-btc-main-feature">
        <div class="feature-container">
            <div class="ltf">
                <div class="tag">
                    <span>
                        Main Features
                    </span>
                </div>
                <h2>Your data from any device at any time</h2>
                <div class="features-ctx">
                    <div class="features">
                        <i class="icon-checkmark-circle"></i>
                        <span>
                            Cloud-Based Time Attendance Software
                        </span>
                    </div>
                    <div class="features">
                        <i class="icon-checkmark-circle"></i>
                        <span>Flexible and Smart Shift Scheduling</span>
                    </div>
                    <div class="features">
                        <i class="icon-checkmark-circle"></i>
                        <span
                            >Auto-Synchronization of Biometric Templates and
                            Real-Time Monitoring</span
                        >
                    </div>
                    <div class="features">
                        <i class="icon-checkmark-circle"></i>
                        <span>Employee Self-Service</span>
                    </div>
                    <div class="features">
                        <i class="icon-checkmark-circle"></i>
                        <span
                            >Multi-Level Approvals and Automatic E-mail
                            Notifications</span
                        >
                    </div>
                    <div class="features">
                        <i class="icon-checkmark-circle"></i>
                        <span>Multiple Admin Privilege</span>
                    </div>
                    <div class="features">
                        <i class="icon-checkmark-circle"></i>
                        <span>Attendance Reports and Calculation</span>
                    </div>
                    <div class="features">
                        <i class="icon-checkmark-circle"></i>
                        <span>Seamless geo-location check-in</span>
                    </div>
                    <div class="features">
                        <i class="icon-checkmark-circle"></i>
                        <span>Mobile App</span>
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
                    font-size: 24px;
                    color: white;
                }
            }

            h2 {
                font-size: 30px;
                padding: 20px 0px 50px;
            }

            .features-ctx {
                margin-top: -48px;
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
