<template>
    <div class="main-content home">
        <!-- Header -->
        <section class="header-1 section-rotate bg-section-secondary" data-offset-top="#header-main">
            <div class="section-inner bg-gradient-primary"></div>
            <!-- SVG illustration -->
            <div class="pt-7 position-absolute middle right-0 col-lg-7 col-xl-6 d-none d-lg-block">
                <figure class="w-100" style="max-width: 1000px;">
                    <!-- <img alt="Stebab exchange cryptocurrency" src="~/assets/img/svg/illustrations/stebab.svg" class="svg-inject img-fluid" style="height: 1000px;"> -->
                    <img alt="Stebab exchange cryptocurrency" src="~/assets/img/svg/illustrations/stebab.svg" class="svg-inject img-fluid" style="height: 1000px;">
                </figure>
            </div>
            <!-- SVG background -->
            <div class="bg-absolute-cover bg-size--contain d-flex align-items-center">
                <figure class="w-100 d-none d-lg-block">
                    <img alt="Image placeholder" src="~/assets/img/svg/backgrounds/bg-use.svg" class="svg-inject" style="height: 1000px;">
                </figure>
            </div>
            <!-- Hero container -->
            <div class="container hero py-5 pt-lg-6 d-flex align-items-center position-relative zindex-100">
                <div class="col">
                    <div class="row">
                        <div class="col-12 mb-5"></div>
                        <div class="col-lg-5 col-xl-6 text-center text-lg-left">
                            <div class="text-center text-lg-left pb-5">
                                <vue-typed-js 
                                    :strings="offers"
                                    :typeSpeed="100"
                                    :backSpeed="20"
                                    :loop="true"
                                >
                                    <h2 class="h1 text-white mb-1">At Stebab Exchange, <br> We <span class="typing"></span></h2>
                                </vue-typed-js>
                            </div>
                            <div class="cta">
                                <p class="lead text-white">
                                    Stebab Xchange is a cryptocurrency company that buys and sells BTC, ETH, XRP, LTC, USDT and others in any quantity at the best rate in the nigerian market.
                                </p>
                                <div class="mt-5">
                                    <nuxt-link to="/sell-crypto" class="btn btn-white hover-translate-y-n3 btn-icon mr-sm-4 scroll-me">
                                        <span class="btn-inner--text">Sell Crypto</span>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Our offers -->
        <section class="slice slice-xl">
            <div class="container">
                <div class="row">
                    <div class="col-12 mb-5 text-center">
                        <h5 class="h2 mb-1">Our Offers</h5>
                        <p class="text-sm text-muted mb-0">We promise and deliver on all these amongst others</p>
                    </div>
                </div>

                <div class="row row-grid">
                    <div class="col-lg-4 col-md-6 mb-5 mb-lg-1">
                        <div class="">
                            <div class="pb-4">
                                <div class="icon bg-gradient-info text-white rounded-circle icon-lg icon-shape shadow">
                                    <i class="fas fa-shield-alt"></i>
                                </div>
                            </div>
                            <h5 class="font-weight-bold">Trust</h5>
                            <p class="mt-2 mb-0">
                                We've proven in thousands transactons over the years our impeccable integrity. <br>
                                We also ensure utmost confidentiality and security of all transaction details and information.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-5 mb-lg-1">
                        <div class="">
                            <div class="pb-4">
                                <div class="icon bg-gradient-warning text-white rounded-circle icon-lg icon-shape shadow">
                                <i class="fas fa-paper-plane"></i>
                                </div>
                            </div>
                            <h5 class="font-weight-bold">Fast Settlement</h5>
                            <p class="mt-2 mb-0">
                                We speedily resolve every transactions as soon as it's confirmed. 
                                Ensuring settlement of funds directly into the given bank account.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-5 mb-lg-1">
                        <div class="">
                            <div class="pb-4">
                                <div class="icon bg-gradient-danger text-white rounded-circle icon-lg icon-shape shadow">
                                <i class="fas fa-money-bill"></i>
                                </div>
                            </div>
                            <h5 class="font-weight-bold">Best Market Rate</h5>
                            <p class="mt-2 mb-0">
                                We trade in fair pricing and usually offer the best market prices.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- About us -->
        <section class="slice slice-xl bg-gradient-primary overflow-hidden">
            <!-- SVG background -->
            <div class="bg-absolute-cover bg-size--contain d-flex align-items-center">
                <figure class="w-100">
                    <img alt="Stebab Exchange about us" src="~/assets/img/svg/backgrounds/light-texture.svg" class="svg-inject">
                </figure>
            </div>
            <div class="container position-relative zindex-100">
                <div class="row justify-content-center text-center">
                    <div class="col-lg-8 col-md-12">
                        <p class="lead text-white">
                            At Stebab Exchange we have successfully completed thousands of transactions over the years and are regarded as a leading cryptocurrency expert.
                            <br> <br>
                            We operate to ensure a quick, seamless, and safe transaction of your digital assets.
                       </p>
                    </div>
                </div>

                <div class="row align-items-md-center mt-5">
                    <div class="col-lg-3 col-6 mb-5 mb-lg-0">
                        <div class="text-center mb-5 mb-lg-0">
                            <div class="icon icon-lg text-white">
                                <i class="fas fa-heart"></i>
                            </div>
                            <span class="d-block mt-4 h3 text-white">97%</span>
                            <!-- <span class="counter" data-from="0" data-to="97" data-speed="3000" data-refresh-interval="100"></span> -->
                            <span class="d-block mt-2 h6 text-white">Happy Customers</span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6 mb-5 mb-lg-0">
                        <div class="text-center">
                            <div class="icon icon-lg text-white">
                                <i class="fas fa-money-bill-wave"></i>
                            </div>
                            <span class="d-block mt-4 h3 text-white">$4,000,000</span>
                            <span class="d-block mt-2 h6 text-white">Amount Traded</span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6 mb-5 mb-lg-0">
                        <div class="text-center">
                            <div class="icon icon-lg text-white">
                                <i class="fas fa-layer-group"></i>
                            </div>
                            <span class="d-block mt-4 h2 text-white">990</span>
                            <span class="d-block mt-2 h6 text-white">Transations Completed</span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6 mb-5 mb-lg-0">
                        <div class="text-center mb-5 mb-lg-0">
                            <div class="icon icon-lg text-white">
                                <i class="fas fa-clock"></i>
                            </div>
                            <span class="d-block mt-4 h3 text-white">365x7</span>
                            <span class="d-block mt-2 h6 text-white">Availability</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Current Prices -->
        <section class="slice slice-xl" id="prices">
            <div class="container prices">
                <CurentPrices :cryptoData="cryptoData" />
                <!-- <curent-prices></curent-prices> -->
            </div>
        </section>
        
        <!-- Testimonials -->
        <section class="slice bg-gradient-secondary slice-lg">
            <div class="container">
                <div class="mb-5 text-center">
                    <h3 class=" mt-4">What our customers say</h3>
                    <div class="fluid-paragraph mt-3">
                        <p class="lead lh-180">We are always looking for better ways to transact and help you trade your digital assets with ease.</p>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-4" v-for="(testimonial, index) in testimonials" :key="index">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <img alt="" :src="testimonial.photo" class="avatar  rounded-circle">
                                    </div>
                                    <div class="pl-3">
                                        <h5 class="h6 mb-0">{{testimonial.name}}</h5>
                                    </div>
                                </div>
                                <p class="mt-4 lh-180">{{testimonial.testimony}} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Blog -->
        <section class="slice-lg delimiter-top">
            <div class="container">
                <div class="mb-5 text-center">
                   <h3 class=" mt-4">Market tips from our blog</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6" v-for="(post, index) in posts" :key="index">
                        <div class="mb-5 mb-lg-0" data-animate-hover="1">
                            <div class="animate-this p-3">
                                <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug } }">
                                    <img alt="Image placeholder" :src="post.photo" class="img-fluid rounded shadow" >

                                    <div class="pt-4 text-muted">
                                        <small class="text-uppercase">{{ post.createdAt | formatDate }}</small>
                                        <h5>{{post.title}} </h5>
                                        <p class="mt-3">{{ post.content }} </p>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

    import CurentPrices from "@/components/features/curentPrices";

    export default {
        head () {
            return {
                title: 'Stebab Exchange | Buy, Sell all volumes of cryptocurrency at the best market rate',
                script :[
                    { src: '/libs/swiper/dist/js/swiper.js' },
                ],
                link : [
                    { rel: 'stylesheet', href: '/libs/swiper/dist/css/swiper.css'  }
                ]
            }
        },

        transitions: 'fade',

        middleware: ['auth'],

        data(){
            return {
                cryptoData : {},
                offers: ['offer the best rate.','settle payment swiftly.', 'trade with integrity.', 'are available 365/24.'],
            }
        },

        filters : {
            formatDate(value){
                return new Date(value).toDateString()
            }
        },

        components: {
            CurentPrices,
        }, 

        created(){
            this.getCryptoData()
        },  

        methods: {
            async getCryptoData(){
                const {data} = await this.$axios.$get('/coins/crypto-data')
                this.cryptoData = data
            }
        },

        async asyncData({$axios}) {
            let testimonials = await $axios.$get('/testimonials/random-testimonials')
            let posts = await $axios.$get('/posts/latest-posts')

            return {
                testimonials: testimonials.data.testimonials,
                posts: posts.data.latestPosts,
            }
        },

        

    }

</script>

<style lang="scss" scoped>
    .home {

        .hero {

            .cta {
                .btn {
                    color: #fff;
                    border: none;
                    background: $secondary;

                    &:hover {
                        color: $primary;
                        background: white;
                        border: 1px solid $white;
                    }
                }
            }
        }

    }
</style>
