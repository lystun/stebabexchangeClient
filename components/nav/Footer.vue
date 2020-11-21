<template>
    <footer class="footer-dark footer bg-dark pt-7 pb-5" id="footer-main">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-5 mb-lg-0">
                    <nuxt-link to="/" class="d-inline-block mb-4">
                        <img src="/logo2.png" alt="stebab exchange logo" style="height: 50px;">
                    </nuxt-link>
                    <p class="text-sm">
                        Stebab Xchange trades cryptocurrency in all volumes at the best rate in the nigerian market with integrity.
                    </p>
                </div>
                <div class="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
                    <h6 class="heading mb-3">Company</h6>
                    <ul class="list-unstyled">
                        <li><nuxt-link to="/sell-crypto">Sell Crypto</nuxt-link></li>
                        <li><nuxt-link to="/buy-crypto">Buy Crypto</nuxt-link></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
                    <h6 class="heading mb-3">Quick</h6>
                    <ul class="list-unstyled text-small">
                        <li><nuxt-link to="/blog">Blog</nuxt-link></li>
                        <li><nuxt-link to="/#prices">Current Prices</nuxt-link></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-sm-4 mb-5 mb-lg-0">
                    <h6 class="heading mb-3">Support</h6>
                    <ul class="list-unstyled">
                        <li><nuxt-link to="/terms-condition">Terms &amp; Conditions</nuxt-link></li>
                        <li><nuxt-link to="/faqs">FAQs</nuxt-link></li>
                    </ul>
                </div>
            </div>
            <div class="row align-items-center justify-content-md-between py-4 mt-4 delimiter-top">
                <div class="col-md-6">
                    <div class="copyright text-sm font-weight-bold text-center text-md-left">
                        &copy; {{year}} <nuxt-link to="/" class="font-weight-bold" target="_blank">Stebab Exchange</nuxt-link>. All rights reserved.
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                        <li class="nav-item">
                            <a class="nav-link" href="https://wa.me/2348136184782" target="_blank">
                                <i class="fab fa-2x fa-whatsapp"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="https://www.instagram.com/stebabxchange/?igshid=13084by1mv38h" target="_blank">
                                <i class="fab fa-2x fa-instagram"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://facebook.com/" target="_blank">
                                <i class="fab fa-2x fa-facebook"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        
        data(){
            return{
                year: new Date().getFullYear(),
            }
        },

        created(){

        }
    }
</script>

<style>

</style>