<template>
     <section class="slice slice-lg bg-primary faqs__others">
            <a href="#sct-call-to-action" class="tongue tongue-up tongue-section-primary" data-scroll-to>
                <i class="fas fa-angle-up"></i>
            </a>
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-8 text-center">
                        <h4 class="font-weight-400 text-white">
                            {{ message }}
                        </h4>
                        <div class="mt-5">
                            <nuxt-link to="/sell-crypto" class="btn buy hover-translate-y-n3"> Sell Crypto </nuxt-link>
                            <nuxt-link to="/buy-crypto" class="btn sell hover-translate-y-n3">Buy Crypto</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
    props: ['message']
}
</script>

<style lang="scss" scoped>
    .btn {

        &.buy {
            color: #fff;
            border: none;
            background: $secondary;
        }

        &.sell {
            color: #fff;
            border: 1px solid $white;
            background: transparent;
        }

        &:hover {
            color: $primary;
            background: white;
            border: 1px solid $white;
        }
    }
</style>