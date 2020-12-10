<template>
    <div class="sell">
        <section class="jumbotron sell__header bg-gradient-primary">
            <div class="container text-center">
                <h1 class="header text-white">Sell Cryptocurrency</h1>
                <p>Sell your digital assets with our simple and uncluttered process.</p>
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

                            <h6 class="text-danger font-weight-bold">N.B: Bulk sellers can chat us up via the live chat or WhatsApp for negotiation.</h6>
                        </div>
                    </div>

                    <div class="col-lg-7 sell__process--info">
                        <div class="table-responsive">
                            <table class="table table-cards align-items-center text-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">Asset</th>
                                        <th scope="col">Min Amount</th>
                                        <th scope="col">Ex. Rate</th>
                                        <th scope="col">Wallet Address</th>
                                    </tr>
                                </thead>
                                <tbody class="list">
                                    <tr v-for="(crypto, index) in cryptos" :key="index" class="list__row">
                                        <th scope="row">
                                            <div class="media align-items-center">
                                                <div>
                                                    <img :alt="crypto.name+'digital asset'" :src="crypto.photo" class="crypto rounded-circle">
                                                </div>
                                                <div class="media-body ml-2">
                                                    <span class="name mb-0 text-sm">{{ crypto.name | uppercase }}</span>
                                                </div>
                                            </div>
                                        </th>
                                        <td>{{ crypto.tradeAmount | formatMoney }} USD</td>
                                        <td>$1 = ₦{{ crypto.exchangeRate }}</td>
                                        <td class="">
                                            <div class="actions info">
                                                <button type="button" 
                                                    class="btn copy hover-translate-y-n3" 
                                                    @click="copyAdd(crypto.name)" 
                                                >
                                                    <span class="info__text" id="myTooltip">{{tooltip.msg}}</span>
                                                    <span class="fas fa-copy"></span>
                                                </button>
                                                <input 
                                                    :id="crypto.name"
                                                    class="w-100"
                                                    v-model="crypto.walletAddress"
                                                    readonly
                                                >
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

                <form @submit.prevent="create">
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
                                        <input class="form-control" v-model="form.fname" type="text" placeholder="First Name" required>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-control-label">Last name</label>
                                        <input class="form-control" v-model="form.lname" type="text" placeholder="Last name" required>
                                    </div>
                                </div>
                            </div>

                            <div class="row mb-2">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-control-label">Email Address</label>
                                        <input class="form-control" v-model="form.email" type="email" placeholder="name@exmaple.com" required>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-control-label">Phone Number</label>
                                        <input class="form-control" v-model="form.phoneNumber" type="number" placeholder="+234 7770 245 1549" required>
                                    </div>
                                </div>
                            </div>

                            <div class="row mb-2">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-control-label">Country</label>
                                        <input class="form-control" v-model="form.country" type="text" placeholder="Country" required>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-control-label">State</label>
                                        <input class="form-control" v-model="form.state" type="text" placeholder="State" required>
                                    </div>
                                </div>
                            </div>

                            <div class="row mb-3 mt-5">
                                <div class="col-md-5">
                                    <h5>Transaction Information</h5>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="form-control-label">Select Digital Asset</label>
                                        <select class="form-control" v-model="form.digitalAsset" required>
                                            <option value="" disabled></option>
                                            <option :value="crypto.name" v-for="(crypto, index) in cryptos" :key="index">{{crypto.name}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="form-control-label">Amount of Cryptocurreny sent</label>
                                        <input class="form-control" v-model="form.amountSent" type="number" placeholder="Amount sent in USD" required>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="form-control-label">Upload Screenshot</label>
                                        <input class="form-control"
                                        @change="uploadImage" :class="{'is-invalid': imageErr }"  type="file" required>
                                    <div class="invalid-feedback">{{ this.imageErr }} </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row mb-2">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="form-control-label">Your Local Bank</label>
                                        <select class="form-control" v-model="form.bankName">
                                            <option :value="bank.name" v-for="(bank, index) in allBanks" :key="index" required>
                                                {{bank.name}}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="form-control-label">Bank Account Name </label>
                                        <input class="form-control" v-model="form.bankAccountName" type="text" placeholder="Account Holder Name" required>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="form-control-label">Bank Account Number </label>
                                        <input class="form-control" v-model="form.bankAccountNumber" type="number" placeholder="Account Number" required>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group mb-5">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="check" required>
                                    <label class="form-check-label font-weight-bold" for="check">
                                        Please, check the box to agree to the terms of trade.
                                    </label>
                                </div>
                            </div>

                            <div>
                                <input type="hidden" :class="{'is-invalid': errors.message }"  name="" id="">
                                <div class="invalid-feedback" v-if="errors.message">
                                    <ul>
                                        <li v-for="(error, index) in formErrors" :key="index">
                                            {{ error.split(':')[1] }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="text-right">
                                <button class="btn hover-translate-y-n3" type="submit" :disabled="status">
                                    <span class="fas fa-spinner fa-spin mr-2" v-if="loading"></span>
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
    import { mapGetters } from "vuex";

    export default {
        data(){
            return {
                tooltip: {
                    msg: 'Copy wallet address',
                    success: 'Copied'
                },
                
                form :{
                    fame: '',
                    lame: '',
                    name: '',
                    email: '',
                    phoneNumber: '',
                    country: '',
                    state: '',
                    screenshot: '',
                    digitalAsset: '',
                    amountSent: '',
                    bankName: '',
                    bankAccountNumber: '',
                    bankAccountName: '',
                },

                allBanks : [
                    { "id": "1", "name": "Access Bank" ,"code":"044" },
                    { "id": "2", "name": "Citibank","code":"023" },
                    { "id": "3", "name": "Diamond Bank","code":"063" },
                    { "id": "4", "name": "Dynamic Standard Bank","code":"" },
                    { "id": "5", "name": "Ecobank Nigeria","code":"050" },
                    { "id": "6", "name": "Fidelity Bank Nigeria","code":"070" },
                    { "id": "7", "name": "First Bank of Nigeria","code":"011" },
                    { "id": "8", "name": "First City Monument Bank","code":"214" },
                    { "id": "9", "name": "Guaranty Trust Bank","code":"058" },
                    { "id": "10", "name": "Heritage Bank Plc","code":"030" },
                    { "id": "11", "name": "Jaiz Bank","code":"301" },
                    { "id": "12", "name": "Keystone Bank Limited","code":"082" },
                    { "id": "13", "name": "Providus Bank Plc","code":"101" },
                    { "id": "14", "name": "Polaris Bank","code":"076" },
                    { "id": "15", "name": "Stanbic IBTC Bank Nigeria Limited","code":"221" },
                    { "id": "16", "name": "Standard Chartered Bank","code":"068" },
                    { "id": "17", "name": "Sterling Bank","code":"232" },
                    { "id": "18", "name": "Suntrust Bank Nigeria Limited","code":"100" },
                    { "id": "19", "name": "Union Bank of Nigeria","code":"032" },
                    { "id": "20", "name": "United Bank for Africa","code":"033" },
                    { "id": "21", "name": "Unity Bank Plc","code":"215" },
                    { "id": "22", "name": "Wema Bank","code":"035" },
                    { "id": "23", "name": "Zenith Bank","code":"057" }
                ],

                loading: false,
                imageErr: '',
                status: true
            }
        },

        created(){
            this.checkCryptos();
        },

        computed:{
            ...mapGetters({
                cryptos: 'cryptos/getCryptos',
            })
        },

        filters:{
            uppercase(value) {
                if (!value) return ''
                value = value.toString()
                return value.toUpperCase()
            },

            dollarSymbol(value){
                if (!value) return ''
                return '$'+value;
            },

            formatMoney(value){
                return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                .format(value); // '$100.00'
            }
        },

        methods: {
            copyAdd(asset){
                const copiedAdd = document.getElementById(asset)
                copiedAdd.select()
                copiedAdd.setSelectionRange(0, 99999)

                document.execCommand("copy")
                this.tooltip.msg = `${asset.toUpperCase()} wallet address copied!`
            },

            checkCryptos(){
                if(!this.cryptos){
                    this.getCryptos();
                }
            },

            uploadImage(e){
                try {
                    const photo = e.target.files[0];
                    this.status = true;
                    this.imageErr = ''

                    if(photo.type.startsWith('image')){
                        if (photo['size'] < 1000000 ){
                            let reader = new FileReader();

                            reader.onloadend = (photo) => {
                                this.form.screenshot = reader.result;
                            }

                            reader.readAsDataURL(photo)
                            this.status=false

                        } else {
                            this.imageErr = "File size should not be larger than 1mb";
                        }
                    }else {
                        this.imageErr = "File Must be of an Image format"
                    }
                } catch (err) {
                    console.log(err);   
                }
            },

            async getCryptos(){
                let { data } = await this.$axios.$get('/coins')
                this.$store.dispatch('cryptos/setCryptos', data)
            },

            async create(){
                this.loading = true;

                try {
                    
                    this.form.name = this.form.fname+' '+this.form.lname;

                    await this.$axios.$post('/transactions', this.form)
                    this.loading = false;

                    this.$swal.fire({
                        type: 'success',
                        title: 'Thank you!',
                        text: 'Transaction submitted successfully. We\'ll respond shortly',
                    })

                    this.$toast.success("Transaction Submited Successfully", {
                        icon : 'check'
                    });

                    this.$router.push('/sell-crypto')

                } catch (err) {
                    this.loading = false;
                }
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
                        &__row {
                            margin-bottom: .5rem;
                        }

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