<template>
    <div class="blog">
        <section class="jumbotron blog__header bg-gradient-primary">
            <div class="container text-center">
                <h1 class="header text-white">Blog Posts</h1>
                <p class="lead">This is to keep our customers informed and abreast of happenings in the crypto world.</p>
            </div>
        </section>

        <section class="slice-sm">
            <div class="container">
                <div class="row">
                    <Post v-for="(post, index) in posts" :key="index" :index="index" :posts="posts" />
                    <!-- <div class="col-lg-4 col-md-6">
                        <div class="mb-5 mb-lg-0" data-animate-hover="1">
                            <div class="animate-this p-3">
                                <nuxt-link to="/">
                                    <img alt="Image placeholder" class="img-fluid rounded shadow" src="~/assets/img/theme/light/img-8-800x600.jpg">

                                    <div class="pt-4 text-muted">
                                        <small class="text-uppercase">Oct 15, 2019</small>
                                        <h5><h5>Listen to the nature</h5></h5>
                                        <p class="mt-3">When we strive to become better than we are, everything around us becomes better, too.</p>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                    </div> -->
                </div>

                <div class="row">
                    <div class="col-md-12  mt-5">
                        <nav class="">
                            <ul class="pagination justify-content-end">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#" aria-label="Previous"> Previous </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item active" aria-current="page">
                                    <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">Next </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Post from '@/components/blog/Post';
    import {mapGetters} from 'vuex'

    export default {
        transitions: 'fade',
        head(){
            return{
                title: "Stebab Exchange | Blog Posts"
            }
        },

        components : {
            Post
        },

        data(){
            return{
                // posts: {}
            }
        },

        computed:{
            ...mapGetters([
                'posts'
            ]),
        },

        async asyncData({$axios, store}) {
            const res = await $axios.$get('https://jsonplaceholder.typicode.com/posts');
            // return ({ posts: res });
            store.dispatch('setPosts', res)
        },
    }
</script>

<style lang="scss" scoped>
    .blog {

        &__header{
            padding-top: 12rem;
            color: $white;
        }
    }
</style>