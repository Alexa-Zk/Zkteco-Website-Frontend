<template lang="html">
    <div class="ps-page--single ps-page--vendor">
        <bread-crumb :breadcrumb="breadCrumb" />
        <!--div class="ps-vendor-banner bg--cover"></div -->

        <div class="softwarebanner">
            <p>
                Making Access control and Time Management easier with our
                industry-leading software and innovation. <br />
                <button>Read More</button>
            </p>
        </div>

        <div class="softwarecontainer">
            <div class="wrapper_001">
                <div class="container">
                    <div class="logo">
                        <img
                                data-src="/img/software/ZKBioCVSecurity.png"
                                class="lazyload"
                                alt=""
                            />
                    </div>
                    <div class="content">
                        <div class="contentHead">
                            <p>
                            <h4> New Software  </h4>
                            ZKBio CVSecurity.
                            </p>
                        </div>
                        <div class="wrapper">
                            <p>
                                
                                ZKBio CVSecurity is a web-based access control software that uses hybrid biometric and computer 
                                vision technology. It offers various modules for comprehensive security solutions for various 
                                settings.
                                
                                If you currently hold a ZKBioSecurity V5000 3.0.0 Licence we will do a free migration to ZKBio CVSecurity. 
                                If your version is under 3.0.0, there will be a migration fee.
                            </p>
                        </div>
                        <div class="footer">
                            <div>
                                <button class="ps-btn"
                                    @click.prevent="
                                        download(
                                            ZKAccess35.manual
                                        )
                                    ">Brochure</button>
                                <button class="ps-btn"
                                    @click.prevent="
                                        download(
                                            ZKAccess35.download
                                        ) 
                                    ">Download(V5.0.0)</button>

                                    <button class="ps-btn"
                                    @click.prevent="
                                        download(
                                            ZKBioCVSecurityV531.download
                                        ) 
                                    ">Download(V5.3.1)</button>
                            </div>

                        </div>
                    </div>
                    
                </div>

                <div class="container">
                    <div class="logo">
                        <img
                                data-src="/img/software/zkbiosecurityV5000.png"
                                class="lazyload"
                                alt=""
                            />
                    </div>

                    <div class="content">
                        <div class="contentHead">
                            <p>
                            <h4> Update Alert </h4>
                                Version V5000 4.1.1 Replaces V3.1.1 (Size : 1.19 GB)
                            </p>
                        </div>
                        <div class="wrapper">
                            <p>
                                <b>ZKBioSecurity V5000 4.1.1 :</b> ZKBioSecurity is the
                                ultimate “All-in-One” web-based security platform
                                developed by ZKTeco. It contains multiple integrated
                                modules: access control, time & attendance, consumption
                                management, elevator control, visitor management,
                                parking, guard patrol, entrance control, FaceKiosk, and
                                intelligent facial recognition camera management,
                                video(VMS), mask, and temperature detection module and
                                other smart sub-systems. All of the sub-systems support
                                both single-unit deployment and multi-module.
                            </p>
                        </div>
                        <div class="footer">
                            <div>
                                <button
                                    class="ps-btn"
                                    @click.prevent="
                                        download(
                                            ZKBioSecurityV5000.manual
                                        )
                                    "
                                >
                                    User Manual
                                </button>
                                
                                <button
                                    class="ps-btn"
                                    @click.prevent="
                                        download(
                                            ZKBioSecurityV5000.download
                                        )
                                    "
                                >
                                    V5000 4.1.1
                                </button>
                                
                            </div>

                        </div>
                    </div>
                    
                </div>

                <div class="container">

                    <div class="logo">
                        <img
                                data-src="/img/software/ZKBioHLMS.png"
                                class="lazyload"
                                alt=""
                            />
                    </div>
                    
                    <div class="content">
                        <div class="contentHead">
                            <p>
                            <h4> New Software Alert </h4>
                            ZKBioHLMS is newly released for wireless smart hotels.
                            </p>
                        </div>
                        <div class="wrapper">
                            <p>
                                <b>ZKBioHLMS :</b> ZKBioHLMS is an app-less wireless smart hotel platform developed by ZKTeco. 
                                Without the need to download or register for an app, hotel guests could check-in and request 
                                room services through an HTML5 user interface by clicking on a hyperlink provided in an 
                                SMS or email automatically sent from ZKTeco’s cloud server before their stay. 
                                ZKBioHLMS is considered a version of ZKBioSecurity. 
                                It contains multiple integrated modules: hotel, access control, elevator control, personnel, 
                                and other modules from ZKBioSecurity V6000, truly achieving smart deployment, smart operation, 
                                and smart check-in.
                            </p>
                        </div>
                        <div class="footer">
                            <div>
                                <button class="ps-btn"
                                    @click.prevent="
                                        download(
                                            ZKBioHLM.manual
                                        )
                                    ">User Manual</button>
                                <button class="ps-btn"
                                    @click.prevent="
                                        download(
                                            ZKBioHLM.download
                                        )
                                    ">Download</button>
                                
                            </div>

                        </div>
                    </div>

                    
                    
                </div>


                <div class="container">
                    <div class="logo">
                        <img
                                data-src="/img/software/biotime.png"
                                class="lazyload"
                                alt=""
                            />
                    </div>

                    <div class="content">
                        <div class="contentHead">
                            <p>
                            <h4> Update Alert </h4>
                            Version 8 now available.
                            </p>
                        </div>
                        <div class="wrapper">
                            <p>
                                <b>BioTime 8 :</b> a powerful web-based time and attendance management software 
                                that provides a stable connection to ZKTeco’s standalone push communication devices by 
                                Ethernet/Wi-Fi/GPRS/3G and working as a private cloud to offer employee self-service by 
                                mobile application and web browser. BioTime 8.0 comes with an intuitive 
                                user interface that is able to manage timetable, shift and schedule and can 
                                easily generate attendance report.
                            </p>
                        </div>
                        <div class="footer">
                            <div>
                                <button class="ps-btn"
                                    @click.prevent="
                                        download(
                                            BioTime04.manual
                                        )
                                    ">User Manual</button>
                                <!--button>App User Manual</button-->
                                <button class="ps-btn"
                                    @click.prevent="
                                        download(
                                            BioTime04.download
                                        )
                                    "> Download(V8.0.8)</button>
                                
                            </div>

                        </div>
                    </div>
                    
                </div>


                <!--div class="container">
                    <div class="logo">
                        <img
                                data-src="/img/software/zkbiosecurityV320.png"
                                class="lazyload"
                                alt=""
                            />
                    </div>
                    <div class="content">
                        <div class="contentHead">
                            <p>
                            <h4> New Software  </h4>
                            ZKBioSecurity.
                            </p>
                        </div>
                        <div class="wrapper">
                            <p>
                                <b>
                                    ZKBioSecurity 3.2.0.0 : </b> ZKBioSecurity is the ultimate “All-in-One” web-based security platform 
                                developed by ZKTeco. It contains multiple integrated modules: access control, time & attendance, 
                                consumption management, elevator control, visitor management, parking, guard patrol, entrance control, 
                                FaceKiosk, and intelligent facial recognition camera management, video(VMS), mask, and temperature 
                                detection module and other smart sub-systems. All of the sub-systems support both single-unit 
                                deployment and multi-module.
                            </p>
                        </div>
                        <div class="footer">
                            <div>
                                <button class="ps-btn"
                                    @click.prevent="
                                        download(
                                            ZKBioSecurity320.manual
                                        )
                                    ">User Manual</button>
                                <button class="ps-btn"
                                    @click.prevent="
                                        download(
                                            ZKBioSecurity320.download
                                        )
                                    ">Try Free</button>
                                
                            </div>

                        </div>
                    </div>
                    
                </div -->


                <div class="container">

                    <div class="logo">
                        <img
                                data-src="/img/software/zktimenet.png"
                                class="lazyload"
                                alt=""
                            />
                    </div>

                    <div class="content">
                        <div class="contentHead">
                            <p>
                            <h4> Update Alert </h4>
                                Time Net
                            </p>
                        </div>
                        <div class="wrapper">
                            <p>
                                <b>Time.Net 3.3.1 : </b> is a time attendance management software. It integrates with Time Attendance 
                                and Access Control systems. Frequently used functions such as attendance reports, device management, 
                                and employee management can be managed directly on the home page which provides an excellent 
                                user experience. Owing to the Pay code function, it can generate both time attendance records 
                                and corresponding payroll in the software and easy to merge with the most ERP and Payroll 
                                software, which can rapidly upgrade your working efficiency. The brand new flat GUI design 
                                and humanized structure will make your daily management more pleasant and convenient.
                            </p>
                        </div>
                        <div class="footer">
                            <div>
                                <button class="ps-btn"
                                    @click.prevent="
                                        download(
                                            ZKTimeNet331.manual
                                        )
                                    ">User Manual</button>
                                <button class="ps-btn"
                                    @click.prevent="
                                        download(
                                            ZKTimeNet331.download
                                        )
                                    ">Try Free</button>
                                
                            </div>

                        </div>
                    </div>
                    
                </div>



                

                
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';

export default {
    head() {
        return {
            titleTemplate: 'Software',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Software'
                }
            ]
        };
    },
    components: {
        BreadCrumb
    },
    layout: 'layout-default-website',
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Software'
                }
            ],
            ZKBioCVSecurityV531:{
                manual:"https://storage.googleapis.com/zkteco_website_bucket/ZK_Bio_Security_v5000_user_manual_8302bd30d7/ZK_Bio_Security_v5000_user_manual_8302bd30d7.pdf",
                download: "https://zkteco-india-official-website.s3.ap-south-1.amazonaws.com/files/20230427/India_ZKBio%20CVSecurity%205.3.1_R_x64.rar",
            },
            ZKBioSecurityV5000:{
                manual:"https://storage.googleapis.com/zkteco_website_bucket/ZK_Bio_Security_v5000_user_manual_8302bd30d7/ZK_Bio_Security_v5000_user_manual_8302bd30d7.pdf",
                download: "https://zkteco.co.za/softwarenew/standalone/V5000_4.1.1_R_2021-11-04_x64.zip",
            },

            ZKBioHLM:{
                manual:"https://storage.googleapis.com/zkteco_website_bucket/ZK_Bio_HLMS_User_Manual_V1_0_20210208_d65557c994/ZK_Bio_HLMS_User_Manual_V1_0_20210208_d65557c994.pdf",
                download: "https://zkteco.co.za/softwarenew/standalone/ZKBioHLMS_x64_2021-06-10-1352.zip"
            },

            BioTime04:{
                manual: "https://storage.googleapis.com/zkteco_website_bucket/Bio_Time_8_0_user_manual_b74ea3f371/Bio_Time_8_0_user_manual_b74ea3f371.pdf",
                download: "https://storage.googleapis.com/zkteco_website_bucket/ZK_Bio_Time8_0_8_20221205_15972_d838e9b89d/ZK_Bio_Time8_0_8_20221205_15972_d838e9b89d.exe"
            },

            ZKBioSecurity320:{
                manual: "https://storage.googleapis.com/zkteco_website_bucket/ZK_Bio_Security_3_2_0_user_manual_9dbfbe72e4/ZK_Bio_Security_3_2_0_user_manual_9dbfbe72e4.pdf",
                download: "https://storage.googleapis.com/zkteco_website_bucket/ZK_Bio_Security_3_2_0_0_0ed76f3179/ZK_Bio_Security_3_2_0_0_0ed76f3179.zip",
            },

            ZKTimeNet331:{
                manual: "https://storage.googleapis.com/zkteco_website_bucket/ZK_Time_Net_3_2_user_manual_5c3666f97d/ZK_Time_Net_3_2_user_manual_5c3666f97d.pdf",
                download: "https://storage.googleapis.com/zkteco_website_bucket/ZK_Time_Net_3_3_1_3_e9caf8887b/ZK_Time_Net_3_3_1_3_e9caf8887b.zip"
            },

            ZKAccess35:{
                manual:"https://zkteco.co.za/downloads/brochures/zkbio_cvsecurity_brochure.pdf",
                download: "https://zkteco.co.za/downloads/software/zkbio_cv_security_5.3.0.zip"
            },
            
            // zkbioV5000 :"https://storage.googleapis.com/zkteco_website_bucket/KF_160_3af1582d3b/KF_160_3af1582d3b.pdf",
            // LPRS_2000  :"https://storage.googleapis.com/zkteco_website_bucket/LPRS_2000_2f0d9580f9/LPRS_2000_2f0d9580f9.pdf",
            // SBTL_9000_ :"https://storage.googleapis.com/zkteco_website_bucket/SBTL_9000_Series_Data_Sheet_f357ee8d38/SBTL_9000_Series_Data_Sheet_f357ee8d38.pdf",
            // ZK_Bio_Time_Soft:"https://storage.googleapis.com/zkteco_website_bucket/ZK_Bio_Time8_0_8_20221205_15972_d838e9b89d/ZK_Bio_Time8_0_8_20221205_15972_d838e9b89d.exe",
            // ZK_Bio_Security_Soft:"https://storage.googleapis.com/zkteco_website_bucket/ZK_Bio_Security_3_2_0_0_0ed76f3179/ZK_Bio_Security_3_2_0_0_0ed76f3179.zip",
            // ZK_Time_NetSoft:"https://storage.googleapis.com/zkteco_website_bucket/ZK_Time_Net_3_3_1_3_e9caf8887b/ZK_Time_Net_3_3_1_3_e9caf8887b.zip",
            // ZK_Access:"https://storage.googleapis.com/zkteco_website_bucket/ZK_Access_3_5_5_1_1_874da05153/ZK_Access_3_5_5_1_1_874da05153.zip"
        
        };
    },

    methods: {
        download(data) {
            // const tokenForDownloads = this.$cookies.get('download_token', {
            //     parseJSON: true
            // });
            // if (tokenForDownloads) {
                const link = document.createElement('a');
                link.href = data;
                link.setAttribute('download', 'image.jpg');
                link.setAttribute('target', '_blank');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            // } else {
            //     this.$router.push('/auth/login');
            // }
        }
    }
};

</script>

<style lang="scss" scoped>

$startWithContent : 3fr 1.3fr;
$startWithImage : 1.3fr 3fr;

@mixin switchContent($gridTemplateColumns){
    display: grid;
    grid-template-columns: $gridTemplateColumns;
    grid-gap: 1.4em;
    margin-top: 5em;
    .content{
        display: flex;
        flex-direction: column;
        .header{
            background-color: #dff0d8;
            //padding-left: 1.3em;
            //border-left: .6em solid #cae6be;
            //margin-bottom: 1.3em;
            h4{
                color: #3c763d;
            }
        }
        .contentHead{
            background-color: #dff0d8;
            border-left: .6em solid #cae6be;
            padding-left: 1.3em;
            margin-bottom: 1.3em;

            h4{
                color: #3c763d;
            }
            
        }
        .wrapper{
            p{
                font-size: 1.1em
            };
        }
        .footer{
            
            margin-top: 1em;
            border-top: 1px solid #000;
            div{
                display: flex;
                margin-top: 2em;
                
                button{
                    padding: .6em 2.4em;
                    background-color: #7cbd27;
                    font-size: 1.1em;
                    font-weight:500;
                    border-radius: 50px;
                    color:#fff;
                    margin-right: 3em;
                }
            }
        }
    }

    .logo{
        align-items: center;
    }

    
    @media (max-width: 900px){
        grid-template-columns: 1fr;
        margin-top: .1em;
        margin-bottom: 2em;
        .logo{
            text-align: center;
        }

       
        
    }

    @media (max-width: 700px){
        .footer{
            div{
                display: flex;
                flex-direction: column;
                justify-items: center;
                gap: 1em;
                button{
                    background-color: #dff0d8;
                }
            }
        }
    }
    
}

.ps-vendor-banner {
    padding: 60px 0;
    h2 {
        color: black;
        visibility: hidden;
    }
    // background: url('/img/bg/vendor.jpg');
}
.softwarebanner {
    background: #000;
    height: 30em;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        width: 30em;
        text-align: center;
        font-size: 1.6em;
        color: #fff;
        letter-spacing: 1.5px;
        

        button {
            outline: 1px solid #7cbd27;
            font-size: 0.8em;
            padding: 0.3em 1.3em;
            border-radius: 40px;
            margin-top: 1em;
        }
    }
}

.softwarecontainer {
    
    .wrapper_001{
        .container{
            @include switchContent($startWithImage)
        }

        .containerStartWithImage{
            //@include switchContent($startWithImage)
            margin-left: auto;
            margin-right: auto;
            width: 1200px;
            
            display: grid;
            grid-template-columns: 3fr 1.3fr;
            grid-gap: 1.4em;
            //margin-top: 5em;

            .content{
                display: flex;
                flex-direction: column;
                .header{
                    background-color: #dff0d8;
                    padding-left: 1.3em;
                    border-left: .6em solid #cae6be;
                    margin-bottom: 1.3em;
                    h4{
                        color: #3c763d;
                    }
                }
                .wrapper{
                    p{
                        font-size: 1.1em
                    };
                }
                .footer{
                    
                    margin-top: 1em;
                    border-top: 1px solid #000;
                    div{
                        display: flex;
                        margin-top: 2em;
                        
                        button{
                            padding: .6em 2.4em;
                            background-color: #7cbd27;
                            font-size: 1.1em;
                            font-weight:500;
                            border-radius: 50px;
                            color:#fff;
                            margin-right: 3em;
                        }
                    }
                }
            }

            .logo{
                align-items: center;
            }

            @media (max-width: 1200px){
                width: 900px;
                margin-left: auto;
                margin-right: auto;
                background: red;
            }

            @media (max-width: 900px){
                width: 700px;
                margin-left: auto;
                margin-right: auto;
                background: yellow;

                grid-template-columns: 1fr;
                margin-top: .1em;
                margin-bottom: 2em;
                .logo{
                    text-align: center;
                }
            }


            @media only screen and (max-width: 800px) and (min-width: 600px)  {
                width: 700px;
                margin-left: auto;
                margin-right: auto;
                background: green;

                grid-template-columns: 1fr;
                margin-top: .1em;
                margin-bottom: 2em;
                .logo{
                    text-align: center;
                }

            }

            @media (max-width: 600px){
                background: #000;
            }
            // @media (max-width: 600px){
            //     width: 500px;
            //     margin-left: auto;
            //     margin-right: auto;
            //     background: green;

            //     grid-template-columns: 1fr;
            //     margin-top: .1em;
            //     margin-bottom: 2em;
            //     .logo{
            //         text-align: center;
            //     }
            // }
        }
                    
    }
}
</style>
