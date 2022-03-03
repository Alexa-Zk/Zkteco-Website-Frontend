<template>
    <div class="btc-faq">
        <div class="header-text">
            <h2>
                Questions frequent
            </h2>

            <p>
                See answers to frequently asked questions from BioTime-NG
                customers
            </p>
        </div>
        <div>
            <accordion class="grid-cols2-gap30">
                <accordion-item v-for="items in accordionData" :key="items.id">
                    <template slot="accordion-trigger">
                        <div class="title-text">
                            <i :class="items.icons"></i>
                            <h3>{{ items.question }}</h3>
                        </div>
                    </template>

                    <template slot="accordion-content">
                        <span>{{ items.answer }}</span>
                    </template>
                </accordion-item>
            </accordion>
        </div>
    </div>
</template>

<script>
import Accordion from '../../elements/accordion/accordion';
import AccordionItem from '../../elements/accordion/accordion-item';

export default {
    components: {
        Accordion,
        AccordionItem
    },
    data() {
        return {
            accordionData: [
                {
                    id: 1,
                    icons: 'icon-clipboard-check',
                    question:
                        'How is BioTime-NG different from other time and attendance management solutions on the market?',
                    answer:
                        'Unlike other solutions or time control software, BioTime-NG is implemented in the AWS cloud (Amazon Web Services). Being a presence control service in the cloud, users do not manage the infrastructure and the cloud platform where the application runs, which eliminates the need to install and run programs on the users computers or servers. This simplifies maintenance, support and enables global access to the GoTime Cloud at any time on any device with Internet access.'
                },
                {
                    id: 2,
                    icons: 'icon-clipboard-check',
                    question:
                        'Where is my data stored and how can I know that it is safe?',
                    answer:
                        'BioTime-NG is a web service for time control hosted and protected in the AWS (Amazon Web Services) cloud located in the Amazon EC2 data center in Ireland, and with the necessary network architecture to meet the requirements of the most sensitive organizations to safety. AWS, as a third-party provider of cloud services, guarantees certifications such as SOC 1,2 and 3, PCI DSS level 1, ISO 27001, FIPS 140-2 to ensure that your data is safe in a high-performance environment. Amazon EC2 works in conjunction with Amazon VPC to provide security and strong networking functionality.'
                },
                {
                    id: 3,
                    icons: 'icon-user',
                    question: 'What is included in each BioTime-NG license?',
                    answer:
                        'The BioTime-NG license includes the provision of the entire platform up to the limit of employees that have been hired'
                },
                {
                    id: 4,
                    icons: 'icon-clipboard-check',
                    question: 'How to update BioTime-NG if I need more users?',
                    answer:
                        'It is necessary to contact your dealer or ZKTeco to extend the license to allow more users. Once the request is registered, we will contact you to indicate that you can now add the users up to the new limit.'
                },
                {
                    id: 5,
                    icons: 'icon-bubble-text',
                    question:
                        'Can I register and unregister a terminal to solve any connection problem with BioTime-NG?',
                    answer:
                        'If the terminal is out of sync and has already logged ins and outs, modifying the terminal record in BioTime-NG could cause the unsynchronized ins and outs in the terminal to be lost. If you have already checked the connection details and made sure that the device is connected to the Internet, and still the synchronization between BioTime-NG and the terminal cannot be restored, please consult your dealer.'
                },
                {
                    id: 6,
                    icons: 'icon-clipboard-check',
                    question: 'Can you register attendance on mobile?',
                    answer:
                        'Yes it is very easy. The BioTime-NG app is compatible with iOS and Android and is the fastest and easiest way for employees to register their attendance. You just have to open the application and click on "virtual assistance" in the main menu. Select the desired type of event and click on “Register”. A screen will appear with the information of the new registration, confirm by clicking on "Close" ... and thats it! Your record will now show up on the attendance page identified as Mobile.'
                },
                {
                    id: 7,
                    icons: 'icon-bubble-text',
                    question:
                        'Can I import users from my existing Time & Attendance solution?',
                    answer:
                        'Yes, you can, BioTime-NG incorporates a powerful employee import functionality with which, from a CSV file, you can select the content of the columns so that, once imported, each file data is in its correct position.'
                }
            ]
        };
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

.grid-cols2-gap30 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    @include media('<sm') {
        grid-template-columns: 1fr;
        row-gap: 5px;
    }
}

.btc-faq {
    padding: 100px 0px;
    .header-text {
        p {
            font-size: 20px;
            margin-bottom: 40px;
        }
    }
}

h3 {
    font-size: 14px;
    margin: 0;
    font-weight: 600;
}
.title-text {
    display: flex;

    i {
        color: #7ac143;
        font-weight: 700;
    }

    h3 {
        margin-left: 8px;
    }
}
</style>
