<template>
    <div>
        <header class="header header-transparent" id="header-main">
            <!-- Main navbar -->
            <nav class="navbar navbar-main navbar-expand-lg navbar-dark" id="navbar-main">
                <div class="container px-lg-0">
                    <nuxt-link class="navbar-brand mr-lg-5" to="/admin/dashboard" target="_blank">
                        <img alt="stebab logo" src="/logo.png" id="navbar-logo" style="height: 50px;">
                    </nuxt-link>

                    <div class="">
                        <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                            <li class="nav-item mr-0 ">
                                <nuxt-link to="/" target="_blank" class="btn btn-sm btn-white d-lg-inline-flex">
                                    <span class="btn-inner--text">Visit Site</span>
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        <div class="main-content">
            <section class="header-account-page bg-gradient-warning d-flex align-items-end" data-offset-top="#header-main">
                <div class="container pt-4 pt-lg-0">
                    <div class="row">
                        <div class=" col-lg-12">
                            <div class="row align-items-center mb-4">
                                <div class="col-md-5 mb-4 mb-md-0">
                                    <span class="h2 mb-0 text-white d-block">Morning, Lystun</span>
                                    <span class="text-white">Have a nice day!</span>
                                </div>
                            </div>
                            <div class="d-flex navigation">
                                <nuxt-link to="/admin/dashboard" class="btn btn-icon btn-group-nav shadow btn-neutral">
                                    <span class="btn-inner--icon"><i class="fas fa-home"></i></span>
                                    <span class="btn-inner--text d-none d-md-inline-block">Dashboard</span>
                                </nuxt-link>

                                <div class="btn-group btn-group-nav shadow ml-auto" role="group" aria-label="Basic example">
                                    <div class="btn-group" role="group">
                                        <nuxt-link to="/admin/cryptos" id="btn-group-settings" type="button" class="btn btn-neutral btn-icon nuxt-link-active exact">
                                            <span class="btn-inner--icon"><i class="fas fa-coins"></i></span>
                                            <span class="btn-inner--text d-none d-sm-inline-block">Crypto</span>
                                        </nuxt-link>
                                    </div>
                                    <div class="btn-group" role="group">
                                        <nuxt-link to="/admin/orders/sell" id="btn-group-settings" type="button" class="btn btn-neutral btn-icon nuxt-link-active exact">
                                            <span class="btn-inner--icon"><i class="fas fa-list-ul"></i></span>
                                            <span class="btn-inner--text d-none d-sm-inline-block">Sell Orders</span>
                                        </nuxt-link>
                                    </div>
                                    <div class="btn-group" role="group">
                                        <nuxt-link to="/admin/orders/buy" id="btn-group-listing" type="button" class="btn btn-neutral btn-icon nuxt-link-active exact">
                                            <span class="btn-inner--icon"><i class="fas fa-list-ul"></i></span>
                                            <span class="btn-inner--text d-none d-sm-inline-block">Buy Orders</span>
                                        </nuxt-link>
                                    </div>
                                    <div class="btn-group" role="group">
                                        <nuxt-link to="/admin/posts" id="btn-group-boards" type="button" class="btn btn-neutral btn-icon nuxt-link-active exact">
                                            <span class="btn-inner--icon"><i class="fas fa-book"></i></span>
                                            <span class="btn-inner--text d-none d-sm-inline-block">Blog</span>
                                        </nuxt-link>
                                    </div>
                                    <div class="btn-group" role="group">
                                        <nuxt-link to="/admin/testimonials" id="btn-group-boards" type="button" class="btn btn-neutral btn-icon nuxt-link-active exact">
                                            <span class="btn-inner--icon"><i class="fas fa-comments"></i></span>
                                            <span class="btn-inner--text d-none d-sm-inline-block">Testimonials</span>
                                        </nuxt-link>
                                    </div>
                                    <!-- <div class="btn-group" role="group">
                                        <nuxt-link to="/admin/users" id="btn-group-boards" type="button" class="btn btn-neutral btn-icon nuxt-link-active exact">
                                            <span class="btn-inner--icon"><i class="fas fa-users"></i></span>
                                            <span class="btn-inner--text d-none d-sm-inline-block">Users</span>
                                        </nuxt-link>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Nuxt />
        </div>

        <footer class="footer p-0 footer-dark bg-gradient-dark" id="footer-main">
            <div class="container">
                <div class="py-4">
                    <div class="row align-items-md-center">
                        <div class="col-md-4 mb-4 mb-md-0">
                            <div class="d-flex align-items-center">
                            <p class="text-sm mb-0">&copy; Stebab Exchange. All rights reserved.</p>
                            </div>
                        </div>

                        <div class="col-sm-8 col-md-4 ml-auto">
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
            </div>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

    .navigation {

        .btn  {
            border: none;

            &.nuxt-link-exact-active{
                background: gray;
                color: $white;
            }
        }
    }
</style>