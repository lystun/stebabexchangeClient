<template>
    <div class="col-lg-4 col-md-6">
        <div class="mb-5 mb-lg-0" data-animate-hover="1">
            <div class="animate-this p-3">
                <nuxt-link :to="{ name: 'blog-slug', params: { slug: 'article' } }">
                    <img alt="about the new places" class="img-fluid rounded shadow" src="~/assets/img/theme/light/img-1-800x600.jpg">

                    <div class="pt-4 text-muted">
                        <h5>Test Title</h5>
                        <!-- <small class="text-uppercase">{{ posts.createdAt }}</small> -->
                        <!-- <h5>{{ posts.title }} </h5> -->
                        <!-- <p>{{ posts.content }}</p> -->
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        props: {
            posts: Array,
        },

        mounted(){
            
        },
    }
</script>

<style>

</style>