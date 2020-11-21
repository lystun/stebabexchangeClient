<template>
    <div class="sell">
        <section class="jumbotron sell__header bg-gradient-primary">
            <div class="container text-center">
                <h1 class="header text-white">Sell Cryptcurrency</h1>
                <p>Sell your digital assets with our easy and uncluttered process</p>
            </div>
        </section>

        <!-- Transaction details and information -->
        <section class="slice sell__process">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 sell__process--steps">
                        <div class="delimiter-top">
                            <!-- Title -->
                            <h6 class="mb-5"> <i class="fas fa-list mr-2"></i>Sell your Cryptocurrencies in 4 easy steps </h6>
                            <!-- Timeline -->
                            <div class="timeline timeline-one-side" data-timeline-content="axis">
                                <div class="timeline-block">
                                    <span class="timeline-step border-danger">1</span>
                                    <div class="timeline-content">
                                        <h6 class="pt-2">Transfer Crypto</h6>
                                        <p class="text-sm lh-160">
                                            Copy the specific wallet address provided for the Cryptcurrency you'd like to sell and transfer your asset from your wallet
                                        </p>
                                    </div>
                                </div>
                                <div class="timeline-block">
                                    <span class="timeline-step timeline-step border-warning">2</span>
                                    <div class="timeline-content">
                                        <h6 class="pt-2">Fill the Transaction Form</h6>
                                        <p class="text-sm lh-160">
                                            Upon successful transfer of coin, proceed to fill the transaction form below and upload the screenshot detailing the transfer transaction.</p>
                                        <p class="text-sm lh-160"></p>
                                    </div>
                                </div>
                                <div class="timeline-block">
                                    <span class="timeline-step timeline-step border-primary">3</span>
                                    <div class="timeline-content">
                                        <h6 class="pt-2">We confirm coin receipt</h6>
                                        <p class="text-sm lh-160">
                                            Confirmation email would be sent to confirm receipt of coins after at least one confirmation on blockchain.
                                        </p>
                                    </div>
                                </div>
                                <div class="timeline-block">
                                    <span class="timeline-step timeline-step border-success">4</span>
                                    <div class="timeline-content">
                                        <h6 class="pt-2">Acknowledge Payment</h6>
                                        <p class="text-sm lh-160">
                                            Acknowledge receipt of payment as seller's account would be credited in minutes after coin has been received and confirmed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-7 sell__process--info">
                        <div class="table-responsive">
                            <table class="table table-cards align-items-center text-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">Asset</th>
                                        <th scope="col">Min Amount</th>
                                        <th scope="col">Rate</th>
                                        <th scope="col">Wallet Address</th>
                                    </tr>
                                </thead>
                                <tbody class="list">
                                    <tr>
                                        <th scope="row">
                                            <div class="media align-items-center">
                                                <div>
                                                    <img alt="BTC digital asset" src="~/assets/images/cryptos/btc.png" class="crypto rounded-circle">
                                                </div>
                                                <div class="media-body ml-2">
                                                    <span class="name mb-0 text-sm">Bitcoin</span>
                                                </div>
                                            </div>
                                        </th>
                                        <td>
                                            $500 USD
                                        </td>
                                        <td>
                                            $1 = ₦450
                                        </td>
                                        <td class="">
                                            <div class="actions info">
                                                <button type="button" 
                                                    class="btn copy hover-translate-y-n3" 
                                                    @click="copyAdd('eth')" 
                                                >
                                                    <span class="info__text" id="myTooltip">{{tooltip.msg}}</span>
                                                    <span class="fas fa-copy"></span>
                                                </button>
                                                <input 
                                                    id="walletAddress"
                                                    class="w-100"
                                                    v-model="assets.eth.walletAddress"
                                                    readonly
                                                >
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="table-divider"></tr>
                                    <tr>
                                        <th scope="row">
                                            <div class="media align-items-center">
                                                <div>
                                                    <img alt="ETH digital asset" src="~/assets/images/cryptos/eth.png" class="crypto rounded-circle">
                                                </div>
                                                <div class="media-body ml-2">
                                                    <span class="name mb-0 text-sm">Ethereum</span>
                                                </div>
                                            </div>
                                        </th>
                                        <td>
                                            $2000 USD
                                        </td>
                                        <td>
                                            $1 = ₦450
                                        </td>
                                        <td class="">
                                            <div class="actions">
                                                <button type="button" class="btn copy hover-translate-y-n3">
                                                    <span class="fas fa-copy"></span>
                                                </button>
                                                1ABKnmD36eT7KUzpLCYzzYYuvRZa8bFFFB
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--Transaction form -->
        <section class="slice bg-gradient-secondary sell__form">
            <div class="container">                
                <div class="mb-5 text-center">
                    <h3 class="mt-4">Transaction Form</h3>
                    <div class="fluid-paragraph mt-3">
                        <p class="lead lh-180">Carefully fill in the transaction form.</p>
                    </div>
                </div>

                <form action="">
                    <div class="row justify-content-center">
                        <div class="col-md-12">
                            <div class="row mb-3">
                                <div class="col-md-5">
                                    <h5>Personal Information</h5>
                                </div>
                            </div>

                            <div class="row mb-2">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-control-label">First name</label>
                                        <input class="form-control is-valid" type="text" placeholder="First Name">
                                        <div class="valid-feedback">Looks good! </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-control-label">Last name</label>
                                        <input class="form-control is-invalid" type="text" placeholder="Last name">
                                        <div class="invalid-feedback">Failed! </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row mb-2">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-control-label">Email Address</label>
                                        <input class="form-control" type="email" placeholder="name@exmaple.com">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-control-label">Phone Number</label>
                                        <input class="form-control" type="number" placeholder="+234 7770 245 1549">
                                    </div>
                                </div>
                            </div>

                            <div class="row mb-2">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-control-label">Country</label>
                                        <select class="form-control" data-toggle="select">
                                            <option value="1">Nigeria</option>
                                            <option value="1">Ghana</option>
                                            <option value="1">Lebanon</option>
                                            <option value="1">USA</option>
                                            <option value="1">Canada</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-control-label">State</label>
                                        <select class="form-control" data-toggle="select">
                                            <option value="1">Oyo</option>
                                            <option value="1">Lagos</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="row mb-3 mt-5">
                                <div class="col-md-5">
                                    <h5>Transaction Information</h5>
                                </div>
                            </div>

                            <div class="row mb-2">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-control-label">Amount of Cryptocurreny sent</label>
                                        <input class="form-control" type="number" placeholder="Amount sent in USD">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-control-label">Upload Screenshot</label>
                                        <input class="form-control" type="file">
                                    </div>
                                </div>
                            </div>

                            <div class="row mb-2">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="form-control-label">Your Local Bank</label>
                                        <select class="form-control" data-toggle="select">
                                            <option value="1">Nigeria</option>
                                            <option value="1">Ghana</option>
                                            <option value="1">Lebanon</option>
                                            <option value="1">USA</option>
                                            <option value="1">Canada</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="form-control-label">Bank Account Name </label>
                                        <input class="form-control" type="text" placeholder="Account Holder Name">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="form-control-label">Bank Account Number </label>
                                        <input class="form-control" type="number" placeholder="Account Number">
                                    </div>
                                </div>
                            </div>

                            <div class="form-group mb-5">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="check" required>
                                    <label class="form-check-label font-weight-bold" for="check">
                                        Agree to terms and conditions
                                    </label>
                                    <div class="invalid-feedback">
                                        Please, check the box to agree to the terms of trade.
                                    </div>
                                </div>
                            </div>
                            
                            <div class="text-center">
                                <button class="btn hover-translate-y-n3" type="submit">
                                    <span class="fas fa-spinner fa-spin mr-2"></span>
                                    Submit Transaction
                                </button> 
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                tooltip: {
                    msg: 'Copy wallet address',
                    success: 'Copied'
                },

                assets: {
                    eth: {
                        walletAddress: "1ABKnmD36eT7KUzpLCYzzYYuvRZa8bFFFB",
                    }
                }
            }
        },

        methods :{
            copyAdd(asset){
                const copiedAdd = document.getElementById("walletAddress")
                copiedAdd.select()
                copiedAdd.setSelectionRange(0, 99999)

                document.execCommand("copy")
                this.tooltip.msg = `${asset.toUpperCase()} wallet address copied!`
            },


        }
    }
</script>

<style lang="scss" scoped>
    .sell {
        &__header{
            padding-top: 12rem;
            color: $white;
        }

        &__process {
            &--steps {
                .timeline-block {
                    margin: .5rem 0px;
                }
            }

            &--info {
                .table {
                    .list {
                        img.crypto {
                            width: 30px;
                        }

                        .info {
                            position: relative;
                            display: inline-block;
                            z-index: 5;

                            &__text {
                                visibility: hidden;
                                // width: 120px;
                                background-color: #555;
                                color: #fff;
                                text-align: center;
                                border-radius: 6px;
                                padding: .3rem .5rem;
                                position: absolute;
                                z-index: 1;
                                bottom: 150%;
                                left: 50%;
                                margin-left: -70px;
                                opacity: 0;
                                transition: opacity 0.3s;

                                &::after {
                                    content: "";
                                    position: absolute;
                                    top: 100%;
                                    left: 50%;
                                    margin-left: -5px;
                                    border-width: 5px;
                                    border-style: solid;
                                    border-color: #555 transparent transparent transparent;
                                }
                            }

                            &:hover .info__text {
                                visibility: visible;
                                opacity: 1;
                            }

                            input {
                                border-radius: 5px;

                                &:focus, &:active {
                                    border: 2px solid $primary;
                                }
                            }
                        }

                        .btn {
                            padding: 0.25rem 0.5rem;
    						font-size: .75rem;
    
                            &.copy {
                                color: #fff;
                                border: 1px solid $white;
                                background: $primary;
                            }

                            &:hover {
                                color: $primary;
                                background: white;
                                border: 1px solid $primary;
                            }
                        }
                    }
                }
                
            }
        }

        &__form {

            form {
                .btn {
                    background: $secondary;
                    color: $white;
                }
            }
        }
    }
</style>