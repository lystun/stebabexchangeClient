<template>
    <div class="blog">
        <section class="jumbotron blog__header bg-gradient-primary">
            <div class="container text-center">
                <h1 class="header text-white"> {{ post.title }} </h1>
                <div class="d-flex align-items-center justify-content-center mt-5">
                    <!-- <div>
                        <a href="#" class="avatar rounded-circle mr-3">
                            <img :alt="post.title" :src="post.photo">
                        </a>
                    </div> -->
                    <div class="text-left">
                        <span class="d-block h6 mb-0 text-white">{{ post.author }} </span>
                        <span class="text-sm text-white"> {{ post.createdAt | formatDate }} </span>
                    </div>
                </div>
            </div>
        </section>

        <section class="slice blog__article">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 bg-info">
                        Share this post
                    </div>
                    <div class="col-md-9">
                        <article>
                            <p class="lead"> {{ post.content }} </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>

        <section class="slice blog__comment">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="my-5">
                            <Disqus :identifier="this.$route.path" />
                        </div>
                        <!-- <div id="disqus_thread" class="my-5"></div> -->
                        <!-- <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">Stebab Exchange Comment Section.</a></noscript> -->
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    head(){
        return{

        }
    },

    transitions: 'fade',

    mounted(){
        this.post
    },

    filters : {
        formatDate(value){
            return new Date(value).toDateString()
        },
    },

    mounted(){

    },

    async asyncData({$axios, params}){
        const {data} = await $axios.$get(`/posts/slug/${params.slug}`)

        return {
            post : data.post[0]
        }
    },

    methods : {
        
        disquso(){
            if(process.client){
                var disqus_config = function () {
                    this.page.url = 'https://stebabexchange.com/blog/';  // Replace PAGE_URL with your page's canonical URL variable
                    this.page.identifier = this.$route.params.slug; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
                };
            
            
                (function() { // DON'T EDIT BELOW THIS LINE
                    if(process.client){
                        var d = document, s = d.createElement('script');
                        s.src = 'https://stebab-exchange.disqus.com/embed.js';
                        s.setAttribute('data-timestamp', +new Date());
                        (d.head || d.body).appendChild(s);
                    }
                })();
            }
        },

    }

}
</script>

<style lang="scss" scoped>
    .blog {

        &__header{
            padding-top: 12rem;
            color: $white;
        }

        &__article {
            background: $white;
        }
    }
</style>