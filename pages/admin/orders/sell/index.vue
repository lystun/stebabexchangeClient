<template>
    <section class="slice orders">
        <div class="container">
            <div class="row row-grid">
                <div class="mt-2 mb-4 ml-3">
                    <h3 class="">Sell Orders</h3>
                </div>
            
                <div class="table-responsive">
                    <table class="table table-cards align-items-center">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">ID</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Email Address</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Crypto Info</th>
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
                                <td class="">lystuntest@gmail.com</td>
                                <td class="">01234567890</td>
                                <td class="">ETH - $3,000</td>
                                <td class="">5 days ago</td>
                                <td class=""><span class="badge badge-success"> Success </span></td>
                                <td class="text-right">
                                    <div class="actions ml-3">
                                        <nuxt-link :to="{ name: 'admin-orders-sell-id', params: { id: 'Stebt6yghd' } }" class="btn edit mr-2" data-toggle="tooltip" title="Edit">
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
                                <td class="">2</td>
                                <td class="">SteQW3437</td>
                                <td class="">Lystun Test</td>
                                <td class="">lystuntest@gmail.com</td>
                                <td class="">01234567890</td>
                                <td class="">BTC - $3,000</td>
                                <td class="">3 days ago</td>
                                <td class=""><span class="badge badge-danger"> New </span></td>
                                <td class="text-right">
                                    <div class="actions ml-3">
                                        <nuxt-link to="/" class="btn edit mr-2" data-toggle="tooltip" title="Edit">
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