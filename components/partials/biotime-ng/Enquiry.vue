<template>
    <div class="ps-container contact-form-link">
        <div class="contact-form-card">
            <div class="circle">
                <i class="icon-telephone"></i>
            </div>
            <div class="card-text">
                <h6>Call Us</h6>
                <p><a href="tel:+2348175555512">(+234) 817 5555 512</a></p>
                <p><a href="tel:+2348175555513">(+234) 817 5555 513</a></p>
            </div>
        </div>
        <div class="contact-form-card">
            <div class="circle">
                <i class="icon-mailbox-full"></i>
            </div>
            <div class="card-text">
                <h6>Email</h6>
                <p>
                    <a
                        href="mailto:enquiry@zkteco-wa.com?subject=Biotime Africa&body=Enquiry"
                        >enquiry@zkteco-wa.com</a
                    >
                </p>
                <!--p>
                        <a
                            href="mailto:support@zkteco-wa.com?subject=Biotime Cloud&body=Support"
                            >support@zkteco-wa.com</a
                        >
                    </p-->
            </div>
        </div>
        <div class="contact-form-card">
            <div class="circle">
                <i class="icon-earth"></i>
            </div>
            <div class="card-text">
                <h6>Visit Us</h6>
                <p>64 Adetokunbo Ademola Street, Victoria Island, Lagos</p>
            </div>
        </div>
        <div class="contact-form-card">
            <div class="circle">
                <i class="icon-telephone"></i>
            </div>
            <div class="card-text">
                <h6>Whatapp</h6>
                <p><a href="tel:+2348175555514">(+234) 817 5555 514</a></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Enquiry'
};
</script>

<style lang="scss" scoped>
.contact-form-link {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    margin-bottom: 60px;

    @include media('<sm') {
        gap: 10px;
        grid-template-columns: 1fr;
    }

    .contact-form-card {
        background: white;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        border-radius: 10px;
        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        cursor: pointer;
        padding: 20px;

        &:hover {
            box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.05),
                0 0.625rem 1.5rem rgba(0, 0, 0, 0.15);
            transform: translate(0, -3px);
        }

        .circle {
            width: 64.8px;
            height: 64.8px;
            background-color: rgba(176, 218, 144, 0.15);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 16px;
            i {
                font-size: 30px;
                color: #7ac143;
            }
        }

        .card-text {
            h6 {
                font-size: 18px;
                font-weight: 700;
                padding: 0;
                margin: 0;
            }
            p {
                padding: 0;
                margin: 0;
                font-size: 16px;
            }
        }
    }
}
</style>
