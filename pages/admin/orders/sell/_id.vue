<template>
    <section class="slice view">
        <div class="container">
            <div class="row view__header">
                <div class="col">
                    <h5 class="mb-2">Sell Order Detail - {{order._id}}</h5>
                    <p class="text-sm text-muted mb-0 d-none d-md-block">
                        <span class="badge badge-success" v-if="order.status">Completed</span>
                        <span class="badge badge-warning" v-else>Pending</span>
                    </p>
                </div>
                <div class="col text-right">
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" 
                            id="status"
                            :checked="order.status" 
                            @click="changeStatus(order.status)" 
                        >
                        <label class="custom-control-label" for="status">Set Status</label>
                    </div>
                </div>
            </div>

            <div class="row slice view__detail">
                <div class="col-md-5">
                    <div class="card shadow">
                       <img :src="order.screenshot" alt="" class="img-fluid"> 
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="card shadow p-5">
                        <p>Name: {{ order.name }} </p>
                        <p>Email Address: {{ order.email }} </p>
                        <p>Phone Number: {{ order.phoneNumber }} </p>
                        <p>Amount Sent: ${{ order.amountSent | formatMoney }} </p>
                        <p>Digital Asset: ${{ order.digitalAsset }} </p>
                        <p>Country: {{ order.country }}</p>
                        <p>State: {{ order.state }} </p>
                        <p>Bank Name: {{ order.bankName }}</p>
                        <p>Bank Account Holder Name: {{ order.bankAccountName }}</p>
                        <p>Bank Account Number: {{ order.bankAccountNumber }}</p>
                        <p>Date: 2020-11-20 10:09:45 </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        layout: 'admin',

        data(){
            return {
                order: {},
            }
        },

        filters: {
            formatMoney(value){
                return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                .format(value); // '$100.00'
            }
        },

        async asyncData({ $axios, params }){
            let { data } = await $axios.$get(`/transactions/${params.id}`)

            return {
                order: data.transaction
            }
        },

        methods : {
            async changeStatus(status){
                let { data } =  await this.$axios.$patch(`/transactions/status/${this.$route.params.id}`, { status: !status })
                this.order = data
                this.$forceUpdate(); 
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    .view  {

        &__detail {
            align-items: center;

            .card {

                p{
                    font-weight: bold;
                }
            }
        }
    }
</style>