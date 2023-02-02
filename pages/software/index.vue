<template lang="html">
    <div class="ps-page--single">
        <div class="top_banner">
            <div></div>
            <div class="top_banner_div">
                <p class="top_banner_txt">
                Making Access control and Time Management easier with our industry-leading software and innovation.
                </p>
                <a href="#" class="readmore_btn">Read More</a>
            </div> 
            <div></div>
        </div>
        <!--bread-crumb :breadcrumb="breadCrumb" / -->
        <!-- <our-team /> -->
        <!--about-value />
        <about-mission />
        <about-vision / -->

        <div class="group_profile_container">

            <div class="group_profile">
                <div>
                   
                    <v-alert
                    icon="mdi-cloud-alert"
                    prominent
                    title="Text"
                    color="#dff0d8"
                    elevation="2"
                    type="warning"
                    variant="outlined"
                    >
                    <span style="color:#3c763d; font-size: 20px; font-weight: bold;">Update Alert</span><br>
                    <span style="color:#3c763d;font-family: Montserrat, Sans-serif;font-size: 12px;font-weight: normal;">
                        Version V5000 4.1.1 Replaces V3.1.1 (Size : 1.19 GB).
                    </span>  
                </v-alert>
    
                    <div>
                        <p>
                            <span style="color: #8bc76f;font-weight: bold;">ZKBioSecurity V5000 4.1.1 </span>
                            ZKTECO CO., LTD. (ZKTeco) (301330: CN Shenzhen Stock
                            Exchange) is an internationally renowned enterprise
                            which specializes in pioneering biometric
                            recognition techniques, and provides products and
                            solutions of smart entrance management, smart
                            identity authentication and smart office. ZKTeco
                            offers services on all fronts to public-service,
                            enterprise-level and personal users.
                        </p>
                        <hr size="100%" color="#333">
                        <div class="d-flex justify-center align-baseline" style="gap: 1rem">
                            <v-btn
                            style="padding: 14px 25px 14px 25px;border-radius: 30px 30px 30px 30px;"
                            color="#7CBF5B"
                            prepend-icon="mdi-cloud-upload"
                            @click="load(2)"
                            >
                            <span style="color:white; font-weight: bold; font-size: 13px;">User Manual</span> 
                                <i style="color:white; font-weight: bold; font-size: 15px; margin-left: 8px;" class="icon icon-arrow-right"></i>
                            </v-btn>
                            <v-btn
                            style="padding: 14px 25px 14px 25px;border-radius: 30px 30px 30px 30px;"
                            color="#7CBF5B"
                            prepend-icon="mdi-cloud-upload"
                            @click="load(2)"
                            >
                            <span style="color:white; font-weight: bold; font-size: 13px;">Download</span> 
                                <i style="color:white; font-weight: bold; font-size: 15px; margin-left: 8px;" class="icon icon-arrow-right"></i>
                            </v-btn>
                            <v-btn
                            style="padding: 14px 25px 14px 25px;border-radius: 30px 30px 30px 30px;"
                            color="#7CBF5B"
                            prepend-icon="mdi-cloud-upload"
                            @click="load(2)"
                            >
                            <span style="color:white; font-weight: bold; font-size: 13px;">Offline Activation</span> 
                                <i style="color:white; font-weight: bold; font-size: 15px; margin-left: 8px;" class="icon icon-arrow-right"></i>
                            </v-btn>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        data-src="/img/software.png"
                        class="lazyload"
                        alt=""
                    />
                </div>
            </div>

            <div class="group_profile2">
                <div>
                    <img
                        data-src="/img/software.png"
                        class="lazyload"
                        alt=""
                    />
                </div>
                <div>
                    <v-alert
                    icon="mdi-cloud-alert"
                    prominent
                    title="Text"
                    color="#dff0d8"
                    elevation="2"
                    type="warning"
                    variant="outlined"
                    >
                    <span style="color:#3c763d; font-size: 20px; font-weight: bold;">Update Alert</span><br>
                    <span style="color:#3c763d;font-family: Montserrat, Sans-serif;font-size: 12px;font-weight: normal;">
                        Version V5000 4.1.1 Replaces V3.1.1 (Size : 1.19 GB).
                    </span>  
                </v-alert>
    
                    <div>
                        <p>
                            <span style="color: #8bc76f;font-weight: bold;">ZKBioSecurity V5000 4.1.1 </span>
                            ZKTECO CO., LTD. (ZKTeco) (301330: CN Shenzhen Stock
                            Exchange) is an internationally renowned enterprise
                            which specializes in pioneering biometric
                            recognition techniques, and provides products and
                            solutions of smart entrance management, smart
                            identity authentication and smart office. ZKTeco
                            offers services on all fronts to public-service,
                            enterprise-level and personal users.
                        </p>
                        <hr size="100%" color="#333">
                        <div class="d-flex justify-center align-baseline" style="gap: 1rem">
                            <v-btn
                            style="padding: 14px 25px 14px 25px;border-radius: 30px 30px 30px 30px;"
                            color="#7CBF5B"
                            prepend-icon="mdi-cloud-upload"
                            @click="load(2)"
                            >
                            <span style="color:white; font-weight: bold; font-size: 13px;">User Manual</span> 
                                <i style="color:white; font-weight: bold; font-size: 15px; margin-left: 8px;" class="icon icon-arrow-right"></i>
                            </v-btn>
                            <v-btn
                            style="padding: 14px 25px 14px 25px;border-radius: 30px 30px 30px 30px;"
                            color="#7CBF5B"
                            prepend-icon="mdi-cloud-upload"
                            @click="load(2)"
                            >
                            <span style="color:white; font-weight: bold; font-size: 13px;">Download</span> 
                                <i style="color:white; font-weight: bold; font-size: 15px; margin-left: 8px;" class="icon icon-arrow-right"></i>
                            </v-btn>
                            <v-btn
                            style="padding: 14px 25px 14px 25px;border-radius: 30px 30px 30px 30px;"
                            color="#7CBF5B"
                            prepend-icon="mdi-cloud-upload"
                            @click="load(2)"
                            >
                            <span style="color:white; font-weight: bold; font-size: 13px;">Offline Activation</span> 
                                <i style="color:white; font-weight: bold; font-size: 15px; margin-left: 8px;" class="icon icon-arrow-right"></i>
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>
            <div class="group_profile">
                <div>
                   
                    <v-alert
                    icon="mdi-cloud-alert"
                    prominent
                    title="Text"
                    color="#dff0d8"
                    elevation="2"
                    type="warning"
                    variant="outlined"
                    >
                    <span style="color:#3c763d; font-size: 20px; font-weight: bold;">Update Alert</span><br>
                    <span style="color:#3c763d;font-family: Montserrat, Sans-serif;font-size: 12px;font-weight: normal;">
                        Version V5000 4.1.1 Replaces V3.1.1 (Size : 1.19 GB).
                    </span>  
                </v-alert>
    
                    <div>
                        <p>
                            <span style="color: #8bc76f;font-weight: bold;">ZKBioSecurity V5000 4.1.1 </span>
                            ZKTECO CO., LTD. (ZKTeco) (301330: CN Shenzhen Stock
                            Exchange) is an internationally renowned enterprise
                            which specializes in pioneering biometric
                            recognition techniques, and provides products and
                            solutions of smart entrance management, smart
                            identity authentication and smart office. ZKTeco
                            offers services on all fronts to public-service,
                            enterprise-level and personal users.
                        </p>
                        <hr size="100%" color="#333">
                        <div class="d-flex justify-center align-baseline" style="gap: 1rem">
                            <v-btn
                            style="padding: 14px 25px 14px 25px;border-radius: 30px 30px 30px 30px;"
                            color="#7CBF5B"
                            prepend-icon="mdi-cloud-upload"
                            @click="load(2)"
                            >
                            <span style="color:white; font-weight: bold; font-size: 13px;">User Manual</span> 
                                <i style="color:white; font-weight: bold; font-size: 15px; margin-left: 8px;" class="icon icon-arrow-right"></i>
                            </v-btn>
                            <v-btn
                            style="padding: 14px 25px 14px 25px;border-radius: 30px 30px 30px 30px;"
                            color="#7CBF5B"
                            prepend-icon="mdi-cloud-upload"
                            @click="load(2)"
                            >
                            <span style="color:white; font-weight: bold; font-size: 13px;">Download</span> 
                                <i style="color:white; font-weight: bold; font-size: 15px; margin-left: 8px;" class="icon icon-arrow-right"></i>
                            </v-btn>
                            <v-btn
                            style="padding: 14px 25px 14px 25px;border-radius: 30px 30px 30px 30px;"
                            color="#7CBF5B"
                            prepend-icon="mdi-cloud-upload"
                            @click="load(2)"
                            >
                            <span style="color:white; font-weight: bold; font-size: 13px;">Offline Activation</span> 
                                <i style="color:white; font-weight: bold; font-size: 15px; margin-left: 8px;" class="icon icon-arrow-right"></i>
                            </v-btn>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        data-src="/img/software.png"
                        class="lazyload"
                        alt=""
                    />
                </div>
            </div>

            <div class="group_profile2">
                <div>
                    <img
                        data-src="/img/software.png"
                        class="lazyload"
                        alt=""
                    />
                </div>
                <div>
                    <v-alert
                    icon="mdi-cloud-alert"
                    prominent
                    title="Text"
                    color="#dff0d8"
                    elevation="2"
                    type="warning"
                    variant="outlined"
                    >
                    <span style="color:#3c763d; font-size: 20px; font-weight: bold;">Update Alert</span><br>
                    <span style="color:#3c763d;font-family: Montserrat, Sans-serif;font-size: 12px;font-weight: normal;">
                        Version V5000 4.1.1 Replaces V3.1.1 (Size : 1.19 GB).
                    </span>  
                </v-alert>
    
                    <div>
                        <p>
                            <span style="color: #8bc76f;font-weight: bold;">ZKBioSecurity V5000 4.1.1 </span>
                            ZKTECO CO., LTD. (ZKTeco) (301330: CN Shenzhen Stock
                            Exchange) is an internationally renowned enterprise
                            which specializes in pioneering biometric
                            recognition techniques, and provides products and
                            solutions of smart entrance management, smart
                            identity authentication and smart office. ZKTeco
                            offers services on all fronts to public-service,
                            enterprise-level and personal users.
                        </p>
                        <hr size="100%" color="#333">
                        <div class="d-flex justify-center align-baseline" style="gap: 1rem">
                            <v-btn
                            style="padding: 14px 25px 14px 25px;border-radius: 30px 30px 30px 30px;"
                            color="#7CBF5B"
                            prepend-icon="mdi-cloud-upload"
                            @click="load(2)"
                            >
                            <span style="color:white; font-weight: bold; font-size: 13px;">User Manual</span> 
                                <i style="color:white; font-weight: bold; font-size: 15px; margin-left: 8px;" class="icon icon-arrow-right"></i>
                            </v-btn>
                            <v-btn
                            style="padding: 14px 25px 14px 25px;border-radius: 30px 30px 30px 30px;"
                            color="#7CBF5B"
                            prepend-icon="mdi-cloud-upload"
                            @click="load(2)"
                            >
                            <span style="color:white; font-weight: bold; font-size: 13px;">Download</span> 
                                <i style="color:white; font-weight: bold; font-size: 15px; margin-left: 8px;" class="icon icon-arrow-right"></i>
                            </v-btn>
                            <v-btn
                            style="padding: 14px 25px 14px 25px;border-radius: 30px 30px 30px 30px;"
                            color="#7CBF5B"
                            prepend-icon="mdi-cloud-upload"
                            @click="load(2)"
                            >
                            <span style="color:white; font-weight: bold; font-size: 13px;">Offline Activation</span> 
                                <i style="color:white; font-weight: bold; font-size: 15px; margin-left: 8px;" class="icon icon-arrow-right"></i>
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>
            <div class="group_profile">
                <div>
                   
                    <v-alert
                    icon="mdi-cloud-alert"
                    prominent
                    title="Text"
                    color="#dff0d8"
                    elevation="2"
                    type="warning"
                    variant="outlined"
                    >
                    <span style="color:#3c763d; font-size: 20px; font-weight: bold;">Update Alert</span><br>
                    <span style="color:#3c763d;font-family: Montserrat, Sans-serif;font-size: 12px;font-weight: normal;">
                        Version V5000 4.1.1 Replaces V3.1.1 (Size : 1.19 GB).
                    </span>  
                </v-alert>
    
                    <div>
                        <p>
                            <span style="color: #8bc76f;font-weight: bold;">ZKBioSecurity V5000 4.1.1 </span>
                            ZKTECO CO., LTD. (ZKTeco) (301330: CN Shenzhen Stock
                            Exchange) is an internationally renowned enterprise
                            which specializes in pioneering biometric
                            recognition techniques, and provides products and
                            solutions of smart entrance management, smart
                            identity authentication and smart office. ZKTeco
                            offers services on all fronts to public-service,
                            enterprise-level and personal users.
                        </p>
                        <hr size="100%" color="#333">
                        <div class="d-flex justify-center align-baseline" style="gap: 1rem">
                            <v-btn
                            style="padding: 14px 25px 14px 25px;border-radius: 30px 30px 30px 30px;"
                            color="#7CBF5B"
                            prepend-icon="mdi-cloud-upload"
                            @click="load(2)"
                            >
                            <span style="color:white; font-weight: bold; font-size: 13px;">User Manual</span> 
                                <i style="color:white; font-weight: bold; font-size: 15px; margin-left: 8px;" class="icon icon-arrow-right"></i>
                            </v-btn>
                            <v-btn
                            style="padding: 14px 25px 14px 25px;border-radius: 30px 30px 30px 30px;"
                            color="#7CBF5B"
                            prepend-icon="mdi-cloud-upload"
                            @click="load(2)"
                            >
                            <span style="color:white; font-weight: bold; font-size: 13px;">Download</span> 
                                <i style="color:white; font-weight: bold; font-size: 15px; margin-left: 8px;" class="icon icon-arrow-right"></i>
                            </v-btn>
                            <v-btn
                            style="padding: 14px 25px 14px 25px;border-radius: 30px 30px 30px 30px;"
                            color="#7CBF5B"
                            prepend-icon="mdi-cloud-upload"
                            @click="load(2)"
                            >
                            <span style="color:white; font-weight: bold; font-size: 13px;">Offline Activation</span> 
                                <i style="color:white; font-weight: bold; font-size: 15px; margin-left: 8px;" class="icon icon-arrow-right"></i>
                            </v-btn>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        data-src="/img/android.png"
                        class="lazyload"
                        alt=""
                    />
                </div>
            </div>

        </div>
      
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import AboutMission from '~/components/partials/page/website/AboutMission';
import AboutVision from '~/components/partials/page/website/AboutVision';
import AboutValue from '~/components/partials/page/website/AboutValue';

export default {
    head() {
        return {
            titleTemplate: 'About Us',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'About ZKTeco West Africa'
                }
            ]
        };
    },
    components: {
        AboutMission,
        AboutVision,
        AboutValue,
        BreadCrumb
    },
    layout: 'layout-default-website',
    transition: 'zoom',

    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'About Us'
                }
            ]
        };
    },
    mounted() {
        let valueDisplays = window.document.querySelectorAll('.num');
        let interval = 2000;

        valueDisplays.forEach(valueDisplay => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute('data-val'));

            let duration = Math.floor(interval / endValue);
            let counter = setInterval(function() {
                startValue += 1;
                valueDisplay.textContent = startValue;
                if (startValue == endValue) {
                    clearInterval(counter);
                }
            }, duration);
        });
    }
};
</script>

<style lang="scss" scoped>
.group_profile_container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8%;
    margin-right: 8%;
    padding-top: 50px;
    padding-bottom: 50px;
    flex-direction: column;
    .group_profile {
        display: grid;
        grid-template-columns: 3.4fr 1.8fr;
        justify-content: space-between;
        align-items: center;
        grid-gap: 2em;

        h3 {
            color: #8bc76f;
        }
        p {
            font-size: 1.2em;
        }
        div {
        }

        img {
            height: 100% !important;
            width: 100% !important;
            // object-fit: cover;
        }
    }
    .group_profile2 {
        display: grid;
        grid-template-columns: 1.8fr 3.4fr ;
        justify-content: space-between;
        align-items: center;
        grid-gap: 2em;

        h3 {
            color: #8bc76f;
        }
        p {
            font-size: 1.2em;
        }
        div {
        }

        img {
            height: 100% !important;
            width: 100% !important;
            // object-fit: cover;
        }
    }
    @media (max-width: 740px) {
        .group_profile {
            display: flex;
            flex-direction: column;
        }
    }
}
.readmore_btn {
    font-family: "Poppins", Sans-serif;
    font-weight: 700;
    text-transform: capitalize;
    background-color: #02010100;
    border-style: solid;
    border-width: 2px 2px 2px 2px;
    border-color: #7CBF5B;
    border-radius: 25px 25px 25px 25px;
    color: #FFFFFF;
    padding: 12px 24px;
}

.top_banner_div {
    text-align: center;
    height: 70%;
    padding: 120px
}
.top_banner_txt {
    text-align: center;
    color: #FFFFFF;
    font-family: "Poppins", Sans-serif;
    font-size: 27px;
    font-weight: 500;
}
.top_banner {
    background: #141414;
    height: 400px;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    // gap: 10px;
}


.emp_stat_container {
    background: #8bc63e;
    .emp_stat {
        margin-left: 8%;
        margin-right: 8%;
        padding-top: 50px;
        padding-bottom: 50px;

        text-align: center;

        display: grid;
        grid-template-columns: repeat(4, 1fr);

        div {
            color: #fff;
            span {
                font-size: 4.8rem;
                font-weight: bold;
            }
            p {
                color: #fff;
                font-size: 1.5rem;
            }
        }
    }
    @media (max-width: 740px) {
        .emp_stat {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            text-align: center;
        }
    }
}

.goals {
    .vission_mission {
        margin-left: 8%;
        margin-right: 8%;
        padding-top: 45px;
        padding-bottom: 40px;

        display: grid;
        grid-template-columns: 1.5fr 1.5fr;

        .vission {
            display: grid;
            grid-template-columns: 1fr 3fr;
            grid-gap: 0.8em;
            align-items: center;
            font-size: 1.5rem;
            margin-bottom: 2em;
        }

        h2 {
            color: #8bc76f;
        }

        img {
            width: 10em;
            height: 10em;
        }

        .mission {
            background: #8bc63e;
            border-radius: 10px;
        }

        @media (max-width: 740px) {
            grid-template-columns: 1fr;
        }
    }
}

.icon_container {
    .icon_header {
        text-align: center;
    }
    .icon_wrapper {
        margin-left: 18%;
        margin-right: 18%;
        padding-top: 50px;
        padding-bottom: 50px;

        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 2rem;

        div {
            padding-top: 40px;
            padding-bottom: 18px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            // justify-items: center;
            align-items: center;
            text-align: center;

            img {
                width: 9rem;
                height: 9rem;
                text-align: center;
            }
            span {
                font-family: 1.8rem;
                padding-top: 5px;
            }
        }
    }
    @media (max-width: 740px) {
        .icon_wrapper {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            text-align: center;
        }
    }
}
.main_business {
    .main_business_wrapper {
        margin-left: 8%;
        margin-right: 8%;
        padding-top: 30px;
        padding-bottom: 50px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h3 {
            padding-bottom: 10px;
        }

        .business_content {
            h3 {
                color: #8bc76f;
            }
            .business_emp {
                padding-top: 20px;
                padding-bottom: 60px;
                display: grid;
                grid-template-columns: 1.8fr 3.4fr;
                grid-gap: 2em;
                align-items: center;

                img {
                    height: 100% !important;
                    width: 100% !important;
                    // object-fit: cover;
                }
                p {
                    font-size: 1.5rem;
                    text-align: justify;
                }
            }

            .business_entrance {
                padding-top: 40px;
                padding-bottom: 60px;
                display: grid;
                grid-template-columns: 3.4fr 1.8fr;
                grid-gap: 2em;
                align-items: center;

                p {
                    font-size: 1.5rem;
                    text-align: justify;
                }

                img {
                    height: 100% !important;
                    width: 100% !important;
                    font-size: 1.5rem;
                }
            }

            .business_entrance_mobile {
                display: none;
            }
        }

        @media (max-width: 740px) {
            .business_content {
                .business_emp {
                    display: flex;
                    flex-direction: column;
                }
                .business_entrance {
                    display: none;
                }
                .business_entrance_mobile {
                    display: flex;
                    flex-direction: column;
                    padding-top: 40px;
                    padding-bottom: 60px;
                    grid-gap: 2em;

                    p {
                        font-size: 1.5rem;
                        text-align: justify;
                    }
                }
            }
        }
    }
}

.ps-page--single {
    img {
        height: 200px;
        width: 100%;
        object-fit: cover;
    }
}
</style>
