<template>
    <section class="slice cryptos">
        <div class="container">
            <div class="row row-grid">
                <!-- <div class="col mb-3 text-right">
                    <nuxt-link to="/admin/coins/create" class="btn btn-sm btn-warning">Add a crypto</nuxt-link>
                </div> -->

                <div class="table-responsive">
                    <table class="table table-cards align-items-center">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Icon</th>
                                <th scope="col">Name</th>
                                <th scope="col">Wallet Address</th>
                                <th scope="col">Min Trade Amount</th>
                                <th scope="col">Ex. Rate</th>
                                <th scope="col" class="text-">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="list">
                            <tr>
                                <td class="">1</td>
                                <td class="">
                                    <img src="~/assets/images/cryptos/btc.png" class="">
                                </td>
                                <td class="">BTC</td>
                                <td class="">!2seetsbi8hhjds8ydjgq8gef</td>
                                <td class="">$300</td>
                                <td class="">$450</td>
                                <td class="text-">
                                    <div class="actions">
                                        <nuxt-link :to="{ name: 'admin-cryptos-id', params:{ id: '5faeab9314cd5305c880ae42' } }" class="btn edit mr-2" data-toggle="tooltip" title="Edit">
                                            <span class="fas fa-edit"></span>
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
    .cryptos  {
        .table {
            .list {

                img {
                    width: 30px;
                }
                
                .actions {
                    .btn {

                        color: $white;
                        font-size: .65;
                        padding: .15rem .4rem;

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