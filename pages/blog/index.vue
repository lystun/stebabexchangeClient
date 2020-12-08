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
                    <div class="col-md-12 text-center justify-content-center my-5" v-if="!posts">
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

                    <div class="col-lg-4 col-md-6" v-for="(post, index) in posts" :key="index">
                        <div class="mb-5 mb-lg-0" data-animate-hover="1">
                            <div class="animate-this p-3">
                                <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug } }">
                                    <img :alt="post.title" :src="post.photo" class="img-fluid rounded shadow" >
                                    <div class="pt-4 text-muted">
                                        <small class="text-uppercase">{{ post.createdAt | formatDate }} </small>
                                        <h5>{{ post.title }}</h5>
                                        <p class="mt-3">{{ post.content }} </p>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div class="row">
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

                    
                </div> -->
            </div>
        </section>
    </div>
</template>

<script>
    
    import { mapGetters } from "vuex";

    export default {
        transitions: 'fade',

        head(){
            return{
                title: "Stebab Exchange | Blog Posts"
            }
        },

        data(){
            return{

            }
        },

        filters : {
            formatDate(value){
                return new Date(value).toDateString()
            }
        },

        computed:{
            ...mapGetters({
                posts: 'posts/getPosts',
            })
        },

        created(){
            this.checkPosts();
        },

        methods: {
            async getPosts(){
                let { data } = await this.$axios.$get('/posts')
                this.$store.dispatch('posts/setPosts', data)
            },

            checkPosts(){
                if(!this.posts){
                    this.getPosts();
                }
            },
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