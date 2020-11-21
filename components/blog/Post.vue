<template>
    <div class="col-lg-4 col-md-6">
        <div class="mb-5 mb-lg-0" data-animate-hover="1">
            <div class="animate-this p-3">
                <nuxt-link :to="{ name: 'blog-slug', params: { slug: 'article' } }">
                    <img alt="about the new places" class="img-fluid rounded shadow" src="~/assets/img/theme/light/img-1-800x600.jpg">

                    <div class="pt-4 text-muted">
                        <small class="text-uppercase">Oct 15, 2019</small>
                        <h5>Just a title</h5>
                        <h5>{{ posts[index].title }} </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sapiente, quisquam repellendus vero sunt ea culpa adipisci laboriosam reprehenderit velit repellat aliquid porro, delectus omnis voluptas non maiores. Error, neque?</p>
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
            index : Number,
        },

        data(){
            return {
                // index: 1
            }
        },

        mounted(){
        },
    }
</script>

<style>

</style>