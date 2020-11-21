<template>
    <div>
        <Header />
        <Nuxt />
        <Footer />
    </div>
</template>

<script>

    import Header from '@/components/nav/Header';
    import Footer from '@/components/nav/Footer';

    export default {
        data(){
            return{
                
            }
        },

        head () {
            return {
                title: 'Stebab Exchange | Trades all volumes of cryptocurrency at the best market rate',
            }
        },

        components : {
            Header,
            Footer
        },

    }
</script>

<style>

</style>