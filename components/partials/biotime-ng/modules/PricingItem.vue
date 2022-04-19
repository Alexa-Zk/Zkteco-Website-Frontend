<template>
    <div
        class="pricing-item"
        :class="`${active ? 'pricing-item-invert' : null}`"
    >
        <div class="tag" :class="`${active ? 'tag-invert' : null}`">
            <span>
                {{ tagText }}
            </span>
        </div>
        <div class="price-section" :class="`${active ? 'ctx-invert' : null}`">
            <div class="flex-baseline">
                <div class="currency">
                    <span>&#x20A6;</span>
                </div>
                <div class="price">
                    {{ price }}
                </div>
            </div>

            <p :class="`${active ? 'ctx-invert' : null}`">Month</p>
        </div>
        <div>
            <div class="pricing-list-items">
                <div class="ctx" :class="`${active ? 'ctx-invert' : null}`">
                    <i class="icon-user"></i>
                    <span>{{ users }} Employees</span>
                </div>
            </div>
            <div class="pricing-list-items">
                <div class="ctx" :class="`${active ? 'ctx-invert' : null}`">
                    <i class="icon-desktop"></i>
                    <span>{{ devices }} Device</span>
                </div>
            </div>
            <div class="pricing-list-items">
                <div class="ctx" :class="`${active ? 'ctx-invert' : null}`">
                    <i class="icon-tablet"></i>
                    <span>{{ app }} Mobile App</span>
                </div>
            </div>
            <div class="pricing-list-items">
                <div class="ctx" :class="`${active ? 'ctx-invert' : null}`">
                    <i class="icon-eye"></i>
                    <span>{{ events }} Transaction</span>
                </div>
            </div>
            <div class="pricing-list-items">
                <div class="ctx" :class="`${active ? 'ctx-invert' : null}`">
                    <i class="icon-icons"></i>
                    <span>{{ valid }} Monthly</span>
                </div>
            </div>
            <div class="pricing-list-items">
                <div class="ctx" :class="`${active ? 'ctx-invert' : null}`">
                    <i class="icon-cog"></i>
                    <span>Rest API</span>
                </div>
            </div>
            <div class="pricing-list-items">
                <div class="ctx" :class="`${active ? 'ctx-invert' : null}`">
                    <i class="icon-self-timer"></i>
                    <span>SMS Nofication</span>
                </div>
            </div>
            <div class="pricing-list-items">
                <div class="ctx" :class="`${active ? 'ctx-invert' : null}`">
                    <i class="icon-self-timer"></i>
                    <span>Attendance Module</span>
                </div>
            </div>
            <div class="pricing-list-items">
                <div class="ctx" :class="`${active ? 'ctx-invert' : null}`">
                    <i class="icon-bubble-text"></i>
                    <span>Access Module</span>
                </div>
            </div>
            <div class="pricing-list-items">
                <div class="ctx" :class="`${active ? 'ctx-invert' : null}`">
                    <i class="icon-bubble-text"></i>
                    <span>WhatsApp Push Notification</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tagText: String,
        price: String,
        users: String,
        devices: String,
        app: String,
        events: String,
        valid: String,
        active: Boolean
    }
};
</script>

<style lang="scss" scoped>
h1,
h2,
h3,
h5,
h6 {
    color: #6c757d;
}

.flex-baseline {
    display: flex;
    align-items: baseline;
}
.ctx-invert {
    color: white !important;
}
.pricing-item-invert {
    background: #7ac143 !important;
    color: white;
}
.pricing-item {
    background: white;
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: column;
    border: 0 solid rgba(0, 0, 0, 0.125);
    border-radius: 5px;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    padding: 40px 25px;
    height: fit-content;
    box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.05),
        0 0.625rem 1.5rem rgba(0, 0, 0, 0.15);
    &:hover {
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15) !important;
    }
    .tag {
        background: #494949;
        padding: 6px 12px;
        border-radius: 0.25rem;
        width: fit-content;
        span {
            font-weight: 700;
            letter-spacing: -0.03rem;
            font-size: 20px;
            color: white;
        }
    }
    .tag-invert {
        background: white;
        span {
            color: #7ac143;
        }
    }
    .price-section {
        padding-top: 16px;
        padding-bottom: 25px;
        color: #6c757d;
        p {
            text-align: center;
            font-weight: 400;
        }
        .price {
            font-size: 48px;
            font-weight: 700;
        }
        .currency {
            font-size: 48px;
            font-weight: 700;
        }
    }
    .pricing-list-items {
        display: flex;
        justify-content: left;
        align-items: top;
        padding: 8px 0px;
        .ctx {
            color: #6c757d;
            i {
                font-weight: 700;
                margin-top: 0px;
            }
            span {
                font-size: 16px;
                padding-left: 10px;
                //font-weight: 600;
            }
        }
    }
}
</style>
