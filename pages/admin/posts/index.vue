<template>
    <section class="slice posts">
        <div class="container">
            <div class="row row-grid">
                <div class="col mb-3 text-right">
                    <nuxt-link to="/admin/posts/create" class="btn btn-sm btn-warning hover-translate-y-n3">Create a new post</nuxt-link>
                </div>

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

                <div class="table-responsive" v-if="posts">
                    <table class="table table-cards align-items-center">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Author</th>
                                <th scope="col">Date</th>
                                <th scope="col" class="text-">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="list">
                            <tr v-for="(post, index) in posts"  :key="index">
                                <td class="">{{ index+1 }}</td>
                                <td class="">
                                    <img :src="post.photo">
                                </td>
                                <td class="">{{ post.title }}</td>
                                <td class="">{{ post.author }}</td>
                                <td class="">{{ post.createdAt | formatDate }}</td>
                                <td class="text-">
                                    <div class="actions">
                                        <nuxt-link :to="{ name: 'admin-posts-id', params:{ id: post._id } }" class="btn edit mr-2" data-toggle="tooltip" title="Edit">
                                            <span class="fas fa-edit"></span>
                                        </nuxt-link>
                                        <a @click="deletePost(post._id)" class="btn del mr-2" data-toggle="tooltip" title="Move to trash">
                                            <i class="fas fa-trash"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr class="table-divider"></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        layout: 'admin',
    
        computed:{
            ...mapGetters({
                posts: 'posts/getPosts',
            })
        },

        filters:{
            uppercase(value) {
                if (!value) return ''
                value = value.toString()
                return value.toUpperCase()
            },

            formatDate(value){
                return new Date(value).toDateString()
            },
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

            deletePost(id){
                this.$swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!'

                }).then((result) => {

                    if (result.value) {

                        this.$axios.$delete(`/posts/${id}`)
                        this.$toast.success("Post deleted successfully", {
                            icon: "check"
                        })

                        location.reload()
                    }
                })
            },
        }



    }
</script>


<style lang="scss" scoped>
    .posts  {
        .table {
            .list {

                img {
                    width: 50px;
                }
                
                .actions {
                    .btn {

                        color: $white;
                        font-size: .65;
                        padding: .15rem .4rem;

                        &.edit {
                            background: $primary;
                        }
                        &.del {
                            background: red;
                        }
                    }
                }
            }
        }
    }
</style>