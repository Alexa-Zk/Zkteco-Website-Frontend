<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth"/>
        <div class="ps-container">
            <div class="guarantee-box">
                <h2 data-v-a49706d2="">Warranty</h2>
                <p data-v-a49706d2="" class="text"><p>
                    <strong>ZKTeco provides One (1) Year Limited Hardware Warranty-Worldwide to authorize clients of ZKTeco as follows:</strong></p><p>ZKTeco warrantees all the hardware products to be free from manufacturing defects. It also warrants this ZKTeco-branded hardware product against defects in materials and workmanship&nbsp;that result in a material deviation from the applicable published ZKTeco technical specifications or customized specifications for that particular client (“Hardware system failure”). &nbsp;</p><p>If a hardware defect arises and a valid claim is received within the Warranty period, ZKTeco will repair or replace such product hardware within 15 working days on receipt of the failed hardware. The hardware product must be shipped to ZKTeco and the shipping cost must be pre-paid and ZKTeco is not liable for any kind of shipping cost.</p><p>In the event of repair/replacement of any part(s) of the unit, this warranty will thereafter continue and remain in force only for the unexpired period of the warranty or 60 days, whichever is greater. The time taken for repair and in transit, whether under the warranty or otherwise, shall not be excluded from the warranty period.</p><p><br>&nbsp;</p><p><strong>Warranty Start Date</strong></p><p>All ZKTeco warranties are effective from the date of Commercial Invoice or Tax Invoice or 30 days from the date of shipment, whichever occurs first. All warranty claims must be submitted before the expiration date of the warranty term.</p><p>&nbsp;</p><h3><strong>Warranty Coverage</strong></h3><p>This warranty will only be upheld upon the proper use of the ZKTeco hardware and shall not apply:</p><p>If the hardware has been modified without ZKTeco’s written approval,</p><p>If the serial number of hardware has been removed/altered,</p><p>If the product(s) has been damaged or impaired in any ways, including but not limited to lightning, abnormal voltage, water or malicious damage. This warranty is in lieu of all other rights, conditions and warranties.</p><p>ZKTeco makes no warranties or representations, either express or imply, with respect to its products or documentation, including their quality, performance, merchant-ability, or fitness for a particular purpose.</p><p>Under no circumstances will ZKTeco be liable for direct, indirect, special, incidental or consequential damages arising out of the use of or inability to use our products or documentation, even if advised of the possibility of such damages.</p><p>ZKTeco is not responsible for any costs, including, but not limited to, those incurred as a result of lost profits or revenue, loss of data, cost of losses.</p><p>ZKTeco will also not be liable for any personal injury or death because of the use of our products, directly or indirectly.</p><p>&nbsp;</p><h3><strong>Warranty Claim</strong></h3><p><strong>Below are the information and procedures laid down by ZKTeco for handling repair of hardware products, which are subject to ZKTeco's terms of the Warranty Policy.</strong></p><p>&nbsp;</p><p><strong>Repair of products under warranty.</strong></p><p>All products returned for repair within the warranty period will be repaired or exchanged free of charge provided:</p><p>The product(s) are returned to Company within the warranty period.</p><p>Provided that on ZKTeco’s inspection of returned products that the defect is not a result of accident, misuse, neglect, alteration, water damage, lightning damage, voltage surge damage or other improper use.</p><p>&nbsp;</p><p><strong>Non-warranty repair or exchange of products.</strong></p><p>Products returned for repair are only available for devices which are still in production, but not for the discontinued products and provided that the cost of repair does not exceed the cost of replacement. In the case where a product cannot be repaired it will be returned to the customer at their expense detailing the reasons for this action. For repairs outside of warranty a standard minimum booking charge per unit will be levied as set forth in the price schedule contained in this document. The ZKTeco staff will send the customer a quotation on the cost of the parts that need to be replaced and then will seek written authorization and a purchase order number to proceed with the repair prior to the repair being completed.</p><p>&nbsp;</p><p><strong>Procedure for returning products for repair.</strong></p><p>Prior to returning any product for a repair, the customer must complete a Repair Fault Report obtained from ZKTeco or a self-generated fault report from the customer themselves. The Company will not accept the return of any product for a repair without this form. This form must contain a detailed explanation of the fault including the circumstances and environment the fault occurred in. An extra fault-finding charge will be levied if the “Repair Fault Report” form is not submitted with the repairs.</p><p>&nbsp;</p><p><strong>Shipping</strong></p><p>The hardware product must be couriered to and from the ZKTeco office and the shipping cost must be pre-paid and is not the responsibility of ZKTeco.</p><p>&nbsp;</p><p><strong>Insurance</strong></p><p>The customer should ensure that the consignment is correctly insured whilst in transit to the ZKTeco offices. ZKTeco assumes no liability for loss or damages to a product during transit.</p><p><strong>&nbsp;</strong></p><p><strong>Product configuration</strong></p><p>Products returned for repair or exchange will be upgraded to the latest product build revision unless otherwise previously agreed upon in writing. The Company reserves the right to refuse to repair or exchange any product that has been modified in any way from the original product specification.&nbsp;ZKTeco shall not be responsible for damages or loss of data contained in the product, which has been added by the customer to a product returned for repair.</p><p>&nbsp;</p><p><strong>Charges for repair</strong></p><p>As previously mentioned, if charges are applicable, the customer must submit a purchase order number that accompanies the signed quotation sent by the ZKTeco staff for the applicable repairs. The customer must prepay all shipment charges to and from the ZKTeco offices, including insurance charges.</p><p><br>&nbsp;</p><p>Date: 06/01/2015</p></p></div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import Faqs from '~/components/partials/page/Faqs';

export default {
    components: {
        Faqs,
        BreadCrumb
    },
    transition: 'zoom',
    layout: 'layout-default-website',
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'After Sales',
                    url: '/website/page/after-sales'
                },
                {
                    text: 'Product Warranty Policy'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.ps-page--single {
    .guarantee-box {
        margin: 50px 0px;
    }
}

</style>
