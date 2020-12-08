<template>
    <section class="slice orders">
        <div class="container">
            <div class="row row-grid">
                <div class="mt-2 mb-4 ml-3">
                    <h3 class="">Buy Orders</h3>
                </div>

                <div class="col-md-12 text-center justify-content-center my-5" v-if="!orders">
                    <div class="spinner-grow text-" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                
                <div class="table-responsive" v-if="orders">
                    <table class="table table-cards align-items-center table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Actions</th>
                                <th scope="col">Status</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Email Address</th>
                                <th scope="col">Asset Needed</th>
                                <th scope="col">Rate</th>
                                <th scope="col">Amount Paid</th>
                                <th scope="col">Wallet Address</th>
                                <th scope="col">Bank Details</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>

                        <tbody class="list">
                            <tr v-for="(order, index) in orders" :key="index">
                                <td class="">{{ index+1 }}</td>
                                <td class="">
                                    <div class="actions">
                                        <nuxt-link :to="{ name: 'admin-orders-buy-id', params: { id: order._id } }" class="btn edit mr-2" data-toggle="tooltip" title="Edit">
                                            <span class="fas fa-eye"></span>
                                        </nuxt-link>
                                    </div>
                                </td>
                                <td class="">
                                    <span class="badge badge-success" v-if="order.status"> Completed </span>
                                    <span class="badge badge-warning" v-else> Pending </span>
                                </td>
                                <td class="">{{ order.name }}</td>
                                <td class="">{{ order.email }}</td>
                                <td class="">{{ order.qtyNeeded }} - {{ order.digitalAsset }} </td>
                                <td class="">{{ order.rate | formatMoney }}</td>
                                <td class="">{{ order.amountPaid | formatMoney }}</td>
                                <td class="">{{ order.walletAddress }}</td>
                                <td class="">{{ order.bankName }} -  {{ order.bankAccountName }} </td>
                                <td class="">{{ order.createdAt | formatDate }}</td>
                            </tr>
                            <tr class="table-divider"></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        layout: 'admin',

        computed: {
            ...mapGetters({
                orders : 'orders/getBuyOrders',
            })
        },

        filters:{
            uppercase(value) {
                if (!value) return ''
                value = value.toString()
                return value.toUpperCase()
            },

            formatDate(value){
                return new Date(value).toUTCString()
            },

            formatMoney(value){
                return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                .format(value); // '$100.00'
            }
        },

        created(){
            this.checkData()
        },

        methods : {

            checkData(){
                if(!this.orders){
                    this.getOrders();
                }
            },

            async getOrders(){
                const res = await this.$axios.$get('/orders')
                this.$store.dispatch("orders/setBuyOrders", res.data)
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    .orders  {
        .table {
            .list {
                
                .actions {
                    
                    .btn {

                        color: $white;
                        font-size: .75rem;
                        padding: .2rem .35rem;

                        &.edit {
                            background: $primary;
                        }
                        &.del {
                            background: red;
                        }
                    }
                }
            }
        }
    }
</style>