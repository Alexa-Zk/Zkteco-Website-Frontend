<template>
    <div class="bitome-wrapper">
        <div class="wrapper">
            <h2>Attendance Solution</h2>
            <h3>Attendance Solution</h3>
            <div class="cloud">
                <div class="image-awa">
                    <img
                        loading="lazy"
                        src="/img/biotime/biotime_africa_website.png"
                        alt="biotime Africa"
                    />
                </div>
                <div class="ptag">
                    <p>
                        AWS cloud technology powers the Biotime.ng platform,
                        making it the most flexible and secure cloud computing
                        environment available today. The platform gives you
                        total visibility into your business operations and makes
                        it simple to collaborate with users.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    //name: BiotimeNG
};
</script>

<style lang="scss" scoped>
h1,
h2,
h3,
span,
h5,
h6 {
    color: #acb3b9;
}

.bitome-wrapper {
    //display: flex;
    justify-content: center;
    align-items: center;
    display: grid;
    margin-top: 8rem;
    background-color: #fff;
    border-radius: 2px;
    text-align: center;

    .wrapper {
        max-width: 70vw;
        h2 {
            font-size: 4.5em;
            font-weight: 800;
            background: linear-gradient(to top, transparent 0%, #0e2431 70%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            opacity: 0.1;
        }
        h3 {
            color: #000;
            font-size: 2.5em;
            font-weight: 700;
            transform: translateY(-50px);

            &::before {
                content: '';
                position: absolute;
                width: 70px;
                height: 5px;
                right: 34%;
                bottom: 0;
                background: #7ac143;
            }
        }
    }
    .cloud {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-areas:
            'image'
            'ptag';
        align-items: center;
        gap: 4em;
        transform: translateY(-35px);
        i {
            font-size: 6em;
        }

        p {
            text-align: left;
            font-size: 2rem;
            background-color: #fff;
        }
    }
}

@media (max-width: 600px) {
    .bitome-wrapper {
        .cloud {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-areas:
                'image'
                'ptag';
        }
    }
}
</style>
