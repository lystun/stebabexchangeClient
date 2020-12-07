<template>
    <section class="slice post">
        <div class="container">
            <div class="row">
                <div class="col-md-8 mx-auto">
                    <div class="mt-2 mb-4">
                        <h4>Edit Post - {{ form.title }} </h4>
                    </div>
                    
                    <form @submit.prevent="edit" class="post__form">
                        <div class="row">
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Post Title</label>
                                    <input class="form-control" v-model="form.title" type="text" placeholder="Post Title" required>
                                </div>
                            </div>
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Post Author</label>
                                    <input class="form-control" v-model="form.author" type="text" placeholder="Post Author" required>
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Post Image</label>
                                    <input class="form-control" 
                                    @change="uploadImage" :class="{'is-invalid': imageErr }"  type="file">
                                    <div class="invalid-feedback">{{ this.imageErr }} </div>
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <label for="content">Post Content</label>
                                <textarea id="content" class="form-control" v-model="form.content"  placeholder="Post Content" rows="10" required></textarea>
                            </div>

                            <div>
                                <input type="hidden" :class="{'is-invalid': errors.message }"  name="" id="">
                                <div class="invalid-feedback" v-if="errors.message">
                                    <ul>
                                        <li v-for="(error, index) in formErrors" :key="index">
                                            {{ error.split(':')[1] }}
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-auto my-2 ml-auto">
                                <button type="submit" class="btn hover-translate-y-n3" :disabled="status">
                                    <span class="fas fa-spinner fa-spin mr-2" v-if="loading"></span>
                                    Create Post
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        layout: 'admin',

        data(){
            return {
                loading: false,

                form : {
                    title: '',
                    content: '',
                    author: '',
                    photo: '',
                },

                imageErr: null,
                status: false,
            }
        },

        async asyncData({$axios, params}){
            const {data} = await $axios.$get(`/posts/${params.id}`)

            return {
                form : data.post
            }
        },

        methods: {
            async edit(){
                this.loading = true;

                try {
                    
                    await this.$axios.$patch(`/posts/${this.$route.params.id}`, this.form)
                    this.loading = false;

                    this.$toast.success("Post updated successfully", {
                        icon : 'check'
                    });

                    this.$router.push('/admin/posts')

                } catch (err) {
                    this.loading = false;
                }
            },

            uploadImage(e){
                try {
                    const photo = e.target.files[0];
                    this.status = true;
                    this.imageErr = ''

                    if(photo.type.startsWith('image')){
                        if (photo['size'] < 1000000 ){
                            let reader = new FileReader();

                            reader.onloadend = (photo) => {
                                this.form.photo = reader.result;
                            }

                            reader.readAsDataURL(photo)
                            this.status=false

                        } else {
                            this.imageErr = "File size should not be larger than 1mb";
                        }
                    }else {
                        this.imageErr = "File Must be of an Image format"
                    }
                } catch (err) {
                    console.log(err);   
                }
            }
        }


        
    }
</script>

<style lang="scss" scoped>
    .post  {
        

        &__form {
            .btn {
                color: $white;
                background: $secondary;
            }
        }
    }
</style>