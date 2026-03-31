<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth" />
        <div class="ps-section--custom warranty-check-page">
            <div class="ps-container">
                <section class="ps-newsletter warranty-check-hero">
                    <div class="container">
                        <form class="ps-form--newsletter" @submit.prevent="checkWarranty">
                            <div class="row">
                                <div class="col-lg-5">
                                    <div class="ps-form__left">
                                        <h3>Warranty Check</h3>
                                        <p>
                                            Verify your device warranty status instantly using the serial number.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-7">
                                    <div class="ps-form__right">
                                        <div class="form-group--nest warranty-form-nest">
                                            <input
                                                class="form-control"
                                                type="text"
                                                placeholder="Input Device Serial Number"
                                                v-model="serial_number"
                                                :disabled="loading"
                                            />
                                            <button class="ps-btn warranty-check-btn" type="submit" :disabled="loading">
                                                {{ loading ? 'Checking...' : 'Check Warranty' }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div class="warranty-result" v-if="warrantyResult || errorMessage">
                            <div v-if="warrantyResult" class="result-card" :class="isWarrantyActive ? 'active' : 'inactive'">
                                <div class="result-header">
                                    <div>
                                        <h4>
                                            {{ isWarrantyActive ? 'Warranty is Active' : 'Warranty is Not Active' }}
                                        </h4>
                                        <p class="status-text" :class="isWarrantyActive ? 'status-active' : 'status-inactive'">
                                            Warranty Status: {{ warrantyResult.warranty_status || (isWarrantyActive ? 'Active' : 'Inactive') }}
                                        </p>
                                    </div>
                                    <span class="badge" :class="isWarrantyActive ? 'badge-active' : 'badge-inactive'">
                                        {{ warrantyResult.warranty_status || (isWarrantyActive ? 'Active' : 'Inactive') }}
                                    </span>
                                </div>

                                <div class="days-left-box">
                                    <p>Warranty Days Left</p>
                                    <h2>{{ normalizedWarrantyDaysLeft }}</h2>
                                </div>

                                <div class="result-grid">
                                    <div class="result-item">
                                        <span>Serial Number</span>
                                        <strong>{{ warrantyResult.serial_number || fallbackText }}</strong>
                                    </div>
                                    <div class="result-item">
                                        <span>Model ID</span>
                                        <strong>{{ warrantyResult.device_model_id || fallbackText }}</strong>
                                    </div>
                                    <div class="result-item">
                                        <span>Exclusive Area</span>
                                        <strong>{{ warrantyResult.exclusive_area || fallbackText }}</strong>
                                    </div>
                                    <div class="result-item">
                                        <span>Date Sold</span>
                                        <strong>{{ warrantyResult.date_sold || fallbackText }}</strong>
                                    </div>
                                </div>
                            </div>

                            <div v-if="errorMessage" class="result-card inactive">
                                <div class="result-header">
                                    <h4>Warranty Not Found</h4>
                                    <span class="badge badge-inactive">Not Covered</span>
                                </div>
                                <p class="error-text">{{ errorMessage }}</p>
                                <div class="result-item serial-only">
                                    <span>Serial Number</span>
                                    <strong>{{ lastSearchedSerial || fallbackText }}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';

export default {
    head() {
        return {
            titleTemplate: 'Warranty Check - ZKTeco West Africa',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Warranty Check'
                }
            ]
        };
    },
    components: {
        BreadCrumb
    },
    transition: 'zoom',
    layout: 'layout-default-website',
    data: () => {
        return {
            serial_number: '',
            loading: false,
            warrantyResult: null,
            errorMessage: '',
            lastSearchedSerial: '',
            fallbackText: 'N/A',
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'After Sales',
                    url: '/support/after-sale'
                },
                {
                    text: 'Warranty Check'
                }
            ]
        };
    },
    computed: {
        normalizedWarrantyDaysLeft() {
            const value = Number(this.warrantyResult?.warranty_days_left);
            return Number.isFinite(value) && value > 0 ? value : 0;
        },
        isWarrantyActive() {
            if (!this.warrantyResult) {
                return false;
            }

            const activeByFlag = Number(this.warrantyResult.warranty_activation_status) === 1;
            const activeByStatus = (this.warrantyResult.warranty_status || '').toLowerCase() === 'active';
            const activeByDays = this.normalizedWarrantyDaysLeft > 0;

            return activeByFlag || activeByStatus || activeByDays;
        }
    },
    methods: {
        async checkWarranty() {
            const serialNumber = (this.serial_number || '').trim();
            if (!serialNumber || this.loading) {
                return;
            }

            this.loading = true;
            this.errorMessage = '';
            this.warrantyResult = null;
            this.lastSearchedSerial = serialNumber;

            try {
                const response = await this.$axios.$post(
                    'https://wslbackend.zkteco-wa.com/api/v1/integrations/devices',
                    {
                        serial_number: serialNumber
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        skipGlobal400Redirect: true
                    }
                );

                this.warrantyResult = response?.data || response || null;

                if (!this.warrantyResult || !this.warrantyResult.serial_number) {
                    this.errorMessage =
                        'This device serial number is not currently under warranty coverage.';
                }
            } catch (error) {
                this.errorMessage =
                    'This device serial number is not currently under warranty coverage.';
            } finally {
                this.loading = false;
                this.serial_number = '';
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.warranty-check-page {
    .warranty-check-hero {
        margin-bottom: 40px;
    }

    .warranty-result {
        margin-top: 24px;
    }

    .warranty-form-nest {
        display: flex;
        align-items: center;
        gap: 12px;

        .form-control {
            height: 50px;
        }

        .warranty-check-btn {
            height: 50px;
            min-width: 220px;
            padding: 0 20px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            white-space: nowrap;
        }

        @media (max-width: 767px) {
            flex-direction: column;
            align-items: stretch;

            .warranty-check-btn {
                width: 100%;
                min-width: 100%;
            }
        }
    }

    .result-card {
        background: #fff;
        border: 1px solid #e9edf3;
        border-radius: 12px;
        padding: 24px;
        box-shadow: 0 12px 24px rgba(22, 31, 48, 0.06);

        &.active {
            border-left: 4px solid #18984b;
        }

        &.inactive {
            border-left: 4px solid #d64545;
        }
    }

    .result-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        margin-bottom: 20px;

        h4 {
            margin: 0;
            color: #1a2331;
        }
    }

    .status-text {
        margin: 6px 0 0;
        font-size: 18px;
        font-weight: 800;
        letter-spacing: 0.01em;
    }

    .status-active {
        color: #0f7b3f;
    }

    .status-inactive {
        color: #b62323;
    }

    .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 999px;
        padding: 6px 14px;
        font-size: 12px;
        font-weight: 600;
    }

    .badge-active {
        background: #e7f7ee;
        color: #148144;
    }

    .badge-inactive {
        background: #feebeb;
        color: #c33131;
    }

    .days-left-box {
        background: #f6f9fd;
        border: 1px solid #ebf0f7;
        border-radius: 10px;
        padding: 16px;
        margin-bottom: 18px;
        text-align: center;

        p {
            margin-bottom: 8px;
            color: #607086;
            font-size: 14px;
        }

        h2 {
            margin: 0;
            font-size: 34px;
            color: #1a2331;
        }
    }

    .result-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;

        @media (max-width: 767px) {
            grid-template-columns: 1fr;
        }
    }

    .result-item {
        background: #fbfcfe;
        border: 1px solid #edf2f9;
        border-radius: 8px;
        padding: 12px 14px;

        span {
            display: block;
            color: #6c7e96;
            font-size: 12px;
            margin-bottom: 4px;
            text-transform: uppercase;
            letter-spacing: 0.02em;
        }

        strong {
            color: #122033;
            word-break: break-word;
        }
    }

    .error-text {
        margin-bottom: 14px;
        color: #c33131;
    }

    .serial-only {
        max-width: 360px;
    }
}
</style>