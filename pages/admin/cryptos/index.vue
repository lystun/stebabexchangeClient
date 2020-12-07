<template>
    <section class="slice cryptos">
        <div class="container">
            <div class="row row-grid">
                <div class="col mb-3 text-right">
                    <nuxt-link to="/admin/cryptos/create" class="btn btn-sm btn-warning">Add a Crypto</nuxt-link>
                </div>

                <div class="col-md-12 text-center justify-content-center my-5" v-if="!cryptos">
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
            
                <div class="table-responsive" v-if="cryptos">
                    <table class="table table-cards table-striped align-items-center">
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
                            <tr v-for="(crypto, index) in cryptos" :key="index">
                                <td class="">{{ index + 1 }}</td>
                                <td class="">
                                    <img :src="crypto.photo" class="">
                                </td>
                                <td class="">{{ crypto.name | uppercase }}</td>
                                <td class="">{{ crypto.walletAddress }}</td>
                                <td class="">{{ crypto.tradeAmount | dollarSymbol }}</td>
                                <td class="">{{ crypto.exchangeRate | dollarSymbol }}</td>
                                <td class="text-">
                                    <div class="actions">
                                        <nuxt-link :to="{ name: 'admin-cryptos-id', params:{ id: crypto._id } }" class="btn edit mr-2" data-toggle="tooltip" title="Edit">
                                            <span class="fas fa-edit"></span>
                                        </nuxt-link>
                                        <a href="#" @click="deleteCrypto(crypto._id)" class="btn del mr-2" data-toggle="tooltip" title="Move to trash">
                                            <i class="fas fa-trash"></i>
                                        </a>
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
    import { mapGetters } from "vuex";

    export default {
        layout: 'admin',
        
        data(){
            return {

            }
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

            }
        },

        created(){
            this.checkCryptos();
        },

        methods: {
            checkCryptos(){
                if(!this.cryptos){
                    this.getCryptos();
                }
            },

            deleteCrypto(id){

                this.$swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!'

                }).then((result) => {

                    if (result.value) {

                        this.$axios.$delete(`/coins/${id}`)
                        this.$toast.success("Crypto coin deleted successfully", {
                            icon: "check"
                        })

                        location.reload()
                    }
                })
            },

            async getCryptos(){
                let { data } = await this.$axios.$get('/coins')
                this.$store.dispatch('cryptos/setCryptos', data)
            }
        }



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