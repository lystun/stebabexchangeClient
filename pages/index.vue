<template>
    <div class="main-content home">
        <!-- Header -->
        <section class="header-1 section-rotate bg-section-secondary" data-offset-top="#header-main">
            <div class="section-inner bg-gradient-primary"></div>
            <!-- SVG illustration -->
            <div class="pt-7 position-absolute middle right-0 col-lg-7 col-xl-6 d-none d-lg-block">
                <figure class="w-100" style="max-width: 1000px;">
                    <!-- <img alt="Stebab exchange cryptocurrency" src="~/assets/img/svg/illustrations/stebab.svg" class="svg-inject img-fluid" style="height: 1000px;"> -->
                    <img alt="Stebab exchange cryptocurrency" src="~/assets/img/svg/illustrations/work-chat.svg" class="svg-inject img-fluid" style="height: 1000px;">
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
        <section class="slice slice-lg">
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
                    <div class="col-lg-8 col-md-8">
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
                            <span class="d-block mt-4 h3 text-white">45,000,000</span>
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
        <section class="slice slice-lg" id="prices">
            <div class="container prices">
                <curent-prices></curent-prices>
            </div>
        </section>
        
        <!-- Testimonials -->
        <section class="slice bg-gradient-secondary slice-lg">
            <div class="container">
                <div class="mb-5 text-center">
                    <h3 class=" mt-4">What our customers say</h3>
                    <div class="fluid-paragraph mt-3">
                        <p class="lead lh-180">Always looking for better ways to transact and help you trade your digital assets with ease.</p>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <img alt="" src="~/assets/img/theme/light/team-1-800x800.jpg" class="avatar  rounded-circle">
                                    </div>
                                    <div class="pl-3">
                                        <h5 class="h6 mb-0">Lystun</h5>
                                    </div>
                                </div>
                                <p class="mt-4 lh-180">Trusty lorem jkfif hfjff jfjfvdj  jkcvhihvd  hddjand veritable dealer. Pays promptly and always has capacity for more purchases</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <img alt="" src="~/assets/img/theme/light/team-2-800x800.jpg" class="avatar  rounded-circle">
                                    </div>
                                    <div class="pl-3">
                                        <h5 class="h6 mb-0">Lance</h5>
                                    </div>
                                </div>
                                <p class="mt-4 lh-180">
                                    Trusty and veritable dealer. Pays promptly and always has capacity for more purchases.
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum enim sunt maxime at reprehenderit perferendis magni officiis neque? Inventore perferendis qui sit impedit similique, expedita dicta fuga! Magni, veritatis sequi!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <img alt="Image placeholder" src="~/assets/img/theme/light/team-3-800x800.jpg" class="avatar  rounded-circle">
                                    </div>
                                    <div class="pl-3">
                                        <h5 class="h6 mb-0">Stephen Aluko</h5>
                                    </div>
                                </div>
                                <p class="mt-4 lh-180">Trusty and veritable dealer. Pays promptly and always has capacity for more purchases</p>
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
                    <div class="col-lg-4 col-md-6">
                        <div class="mb-5 mb-lg-0" data-animate-hover="1">
                            <div class="animate-this p-3">
                                <nuxt-link to="/">
                                    <img alt="Image placeholder" class="img-fluid rounded shadow" src="~/assets/img/theme/light/img-1-800x600.jpg">

                                    <div class="pt-4 text-muted">
                                        <small class="text-uppercase">Nov 20, 2020</small>
                                        <h5>Bitcoin Rising</h5>
                                        <p class="mt-3">When we strive to become better than we are, everything around us becomes better, too.</p>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="mb-5 mb-lg-0" data-animate-hover="1">
                        <div class="animate-this">
                            <a href="#">
                            <img alt="Image placeholder" class="img-fluid rounded shadow" src="~/assets/img/theme/light/img-2-800x600.jpg">
                            </a>
                        </div>
                        <div class="pt-4">
                            <small class="text-uppercase">Nov 20, 2020</small>
                            <h5>Cryptocurrency in west Africa</h5>
                            <p class="mt-3">When we strive to become better than we are, everything around us becomes better, too.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div data-animate-hover="1">
                        <div class="animate-this">
                            <a href="#">
                            <img alt="Image placeholder" class="img-fluid rounded shadow" src="~/assets/img/theme/light/img-3-800x600.jpg">
                            </a>
                        </div>
                        <div class="pt-4">
                            <small class="text-uppercase">Nov 19, 2020</small>
                            <h5>Rules not to follow</h5>
                            <p class="mt-3">When we strive to become better than we are, everything around us becomes better, too.</p>
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

        data(){
            return {
                offers: ['offer the best rate.','settle payment swiftly.', 'trade with integrity.', 'are available 365/24.'],
            }
        },

        components: {
            CurentPrices,
        },

        created(){

        },

        mounted(){
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => this.$nuxt.$loading.finish(), 500)
            })
        }, 

        methods: {

        }

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
