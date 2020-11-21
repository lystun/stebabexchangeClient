<template>
    <section class="slice orders">
        <div class="container">
            <div class="row row-grid">
                <div class="mt-2 mb-4 ml-3">
                    <h3 class="">Buy Orders</h3>
                </div>
            
                <div class="table-responsive">
                    <table class="table table-cards align-items-center">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">ID</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Asset Needed</th>
                                <th scope="col">Rate</th>
                                <th scope="col">Wallet Address</th>
                                <th scope="col">Bank Name</th>
                                <th scope="col">Account Name</th>
                                <th scope="col">Amount Paid</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                                <th scope="col" class="text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="list">
                            <tr>
                                <td class="">1</td>
                                <td class="">SteQW3437</td>
                                <td class="">Lystun Test</td>
                                <td class="">ETH - $3,000</td>
                                <td class="">$450</td>
                                <td class="">32ety7TYHtbdhduy67FFvd</td>
                                <td class="">First Bank</td>
                                <td class="">Lystun Test</td>
                                <td class="">$5000</td>
                                <td class="">5 days ago</td>
                                <td class=""><span class="badge badge-success"> Success </span></td>
                                <td class="text-right">
                                    <div class="actions ml-3">
                                        <nuxt-link :to="{ name: 'admin-orders-buy-id', params: { id: 'Stebt6yghd' } }" class="btn edit mr-2" data-toggle="tooltip" title="Edit">
                                            <span class="fas fa-eye"></span>
                                        </nuxt-link>
                                        <nuxt-link to="/" class="btn del mr-2" data-toggle="tooltip" title="Move to trash">
                                            <i class="fas fa-trash"></i>
                                        </nuxt-link>
                                    </div>
                                </td>
                            </tr>
                            <tr class="table-divider"></tr>
                            <tr>
                                <td class="">1</td>
                                <td class="">SteQW3437</td>
                                <td class="">Anonymous Test</td>
                                <td class="">BTC - $3,000</td>
                                <td class="">$450</td>
                                <td class="">32ety7TYHtbdhduy67FFvd</td>
                                <td class="">First Bank</td>
                                <td class="">Lystun Test</td>
                                <td class="">$5000</td>
                                <td class="">5 days ago</td>
                                <td class=""><span class="badge badge-success"> Success </span></td>
                                <td class="text-right">
                                    <div class="actions ml-3">
                                        <nuxt-link :to="{ name: 'admin-orders-buy-id', params: { id: 'Stebt6yghd' } }" class="btn edit mr-2" data-toggle="tooltip" title="Edit">
                                            <span class="fas fa-eye"></span>
                                        </nuxt-link>
                                        <nuxt-link to="/" class="btn del mr-2" data-toggle="tooltip" title="Move to trash">
                                            <i class="fas fa-trash"></i>
                                        </nuxt-link>
                                    </div>
                                </td>
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
    export default {
        layout: 'admin',
        
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