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
                        <span class="text-sm text-white"> {{ post.createdAt }} </span>
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

    async asyncData({$axios, params}){
        const {data} = await $axios.$get(`/posts/slug/${params.slug}`)

        return {
            post : data.post[0]
        }
    },

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