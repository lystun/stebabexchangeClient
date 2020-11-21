<template>
    <div class="faqs">
        <section class="jumbotron faqs__header bg-gradient-primary">
            <div class="container text-center">
                <h1 class="header text-white">FAQs</h1>
                <p>Here are some frequently asked questions that may answer your enquires.</p>            
            </div>
        </section>

        <!-- Faqs -->
        <section class="slice slice-lg bg-section-secondary">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6">
                        <div id="accordion-1" class="accordion accordion-spaced">
                            <!-- Accordion card 1 -->
                            <div class="card">
                                <div class="card-header py-4" id="heading-1-1" data-toggle="collapse" role="button" data-target="#collapse-1-1" aria-expanded="false" aria-controls="collapse-1-1">
                                    <h6 class="mb-0"> Who Can Sell On This Platform?</h6>
                                </div>
                                <div id="collapse-1-1" class="collapse" aria-labelledby="heading-1-1" data-parent="#accordion-1">
                                    <div class="card-body">
                                        <p>We transact with sellers all over the world and pay into local bank account(s).</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Accordion card 2 -->
                            <div class="card">
                                <div class="card-header py-4" id="heading-1-2" data-toggle="collapse" role="button" data-target="#collapse-1-2" aria-expanded="false" aria-controls="collapse-1-2">
                                    <h6 class="mb-0"> How Fast Is Your Payment?</h6>
                                </div>
                                <div id="collapse-1-2" class="collapse" aria-labelledby="heading-1-2" data-parent="#accordion-1">
                                    <div class="card-body">
                                        <p>We pay immediately upon coin receipt and confirmation. No delay and no hidden charges</p>
                                    </div>
                                </div>
                            </div>
                                <!-- Accordion card 3 -->
                            <div class="card">
                                <div class="card-header py-4" id="heading-1-3" data-toggle="collapse" role="button" data-target="#collapse-1-3" aria-expanded="false" aria-controls="collapse-1-3">
                                    <h6 class="mb-0">Do You Have Customer Service?</h6>
                                </div>
                                <div id="collapse-1-3" class="collapse" aria-labelledby="heading-1-3" data-parent="#accordion-1">
                                    <div class="card-body">
                                        <p>Yes! Our reps are always available 24/7 to attend to all your trading needs either via the live chat or on the whatsapp chat platform</p>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header py-4" id="heading-1-3" data-toggle="collapse" role="button" data-target="#collapse-1-3" aria-expanded="false" aria-controls="collapse-1-3">
                                    <h6 class="mb-0">Can I Schedule Payment Time?</h6>
                                </div>
                                <div id="collapse-1-3" class="collapse" aria-labelledby="heading-1-3" data-parent="#accordion-1">
                                    <div class="card-body">
                                        <p>Yes, just send us a mail after successfully submitting the transaction details on our page and specify when you want the payment to be made.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div id="accordion-2" class="accordion accordion-spaced">
                            <div class="card">
                                <div class="card-header py-4" id="heading-2-1" data-toggle="collapse" role="button" data-target="#collapse-2-1" aria-expanded="false" aria-controls="collapse-2-1">
                                    <h6 class="mb-0">How Do I Sell Other Coins To You?</h6>
                                </div>
                                <div id="collapse-2-1" class="collapse" aria-labelledby="heading-2-1" data-parent="#accordion-2">
                                    <div class="card-body">
                                        <p>Contact us via the live chat or you send us a message on the whatsapp chat platform</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header py-4" id="heading-2-2" data-toggle="collapse" role="button" data-target="#collapse-2-2" aria-expanded="false" aria-controls="collapse-2-2">
                                    <h6 class="mb-0"> What If I Send Coin To The Wrong Wallet Address?</h6>
                                </div>
                                <div id="collapse-2-2" class="collapse" aria-labelledby="heading-2-2" data-parent="#accordion-2">
                                    <div class="card-body">
                                        <p>Sorry, we're not responsible for that and would not pay for such in any way.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header py-4" id="heading-2-3" data-toggle="collapse" role="button" data-target="#collapse-2-3" aria-expanded="false" aria-controls="collapse-2-3">
                                    <h6 class="mb-0"> Do you trade altcoins?</h6>
                                </div>
                                <div id="collapse-2-3" class="collapse" aria-labelledby="heading-2-3" data-parent="#accordion-2">
                                    <div class="card-body">
                                        <p>Yes, we buy other coins such as Ethereum(ETH), Litecoin (LTC), Ripple(XRP) and USDT.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- other enquires -->
        <cta :message="message" />

    </div>
</template>

<script>

    import CTA from "@/components/features/cta";
    
    export default {
        components : {
            CTA,
        },

        data(){
            return {
                message: "For any other questions or concerns not listed in our FAQs. Please, email us at stebabxchange@gmail.com or call 08136184782"
            }
        }
    }
</script>

<style lang="scss" scoped>
    .faqs {

        &__header{
            padding-top: 12rem;
            color: $white;
        }

        &__others {
            .btn {

                &.buy {
                    color: #fff;
                    border: none;
                    background: $secondary;
                }

                &.sell {
                    color: #fff;
                    border: 1px solid $white;
                    background: transparent;
                }

                &:hover {
                    color: $primary;
                    background: white;
                    border: 1px solid $white;
                }
            }
        }
    }
</style>