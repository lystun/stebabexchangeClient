<template>
    <section class="slice bg-section-secondary">
        <div class="container">
            <div class="mb-5">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card card-stats bg-gradient-danger border-0 hover-shadow-lg hover-translate-y-n3 mb-4 ml-lg-0">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div>
                                        <div class="icon text-white icon-sm">
                                            <i class="fas fa-coins"></i>
                                        </div>
                                    </div>
                                    <div class="pl-4">
                                        <span class="d-block h5 text-white mr-2 mb-1">{{ cryptoCount }} </span>
                                        <span class="text-white">Cryptos</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card card-stats bg-gradient-success border-0 hover-shadow-lg hover-translate-y-n3 mb-4 ml-lg-0">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div>
                                        <div class="icon text-white icon-sm">
                                            <i class="fas fa-credit-card"></i>
                                        </div>
                                    </div>
                                    <div class="pl-4">
                                        <span class="d-block h5 text-white mr-2 mb-1">{{ sellOrdersCount }}</span>
                                        <span class="text-white">Sell Orders</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card card-stats bg-gradient-primary border-0 hover-shadow-lg hover-translate-y-n3 mb-4 ml-lg-0">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div>
                                        <div class="icon text-white icon-sm">
                                            <i class="fas fa-credit-card"></i>
                                        </div>
                                    </div>
                                    <div class="pl-4">
                                        <span class="d-block h5 text-white mr-2 mb-1">{{ buyOrdersCount }}</span>
                                        <span class="text-white">Buy Orders</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card card-stats bg-gradient-info border-0 hover-shadow-lg hover-translate-y-n3 mb-4 ml-lg-0">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div>
                                        <div class="icon text-white icon-sm">
                                            <i class="fas fa-file-alt"></i>
                                        </div>
                                    </div>
                                    <div class="pl-4">
                                        <span class="d-block h5 text-white mr-2 mb-1"> {{ postCount }} </span>
                                        <span class="text-white">Blog Posts</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card card-stats bg-gradient-dark border-0 hover-shadow-lg hover-translate-y-n3 mb-4 ml-lg-0">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div>
                                        <div class="icon text-white icon-sm">
                                            <i class="fas fa-comments"></i>
                                        </div>
                                    </div>
                                    <div class="pl-4">
                                        <span class="d-block h5 text-white mr-2 mb-1">{{ testimonialsCount }} </span>
                                        <span class="text-white">Testimonials</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <!-- <div class="col-lg-4">
                        <div class="card card-stats bg-gradient-warning border-0 hover-shadow-lg hover-translate-y-n3 mb-4 ml-lg-0">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div>
                                        <div class="icon text-white icon-sm">
                                            <i class="fas fa-users"></i>
                                        </div>
                                    </div>
                                    <div class="pl-4">
                                        <span class="d-block h5 text-white mr-2 mb-1">{{ usersCount }} </span>
                                        <span class="text-white">Users</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        layout: 'admin',

        async asyncData ({ $axios, store }){

            //get coins data
            const cryptoInfo = await $axios.$get('/coins/count');

            //get all transactions for sell orders
            const sellOrders = await $axios.$get('/transactions/count');

            //get all transactions for buy orders
            const buyOrders = await $axios.$get('/orders/count');

            // //get all blog posts
            const posts = await $axios.$get('/posts/count');

            // //get all testimonials
            const testimonials = await $axios.$get('/testimonials/count');

            // //get all users
            // const users = await $axios.$get('/users');
            // // store.dispatch('users/setUsers', users.data)

            return {
                cryptoCount: cryptoInfo.data.count,
                sellOrdersCount: sellOrders.data.count,
                buyOrdersCount: buyOrders.data.count,
                postCount: posts.data.count,
                testimonialsCount: testimonials.data.count,
                // usersCount: users.results,
            }
        }
    }
</script>

<style>

</style>