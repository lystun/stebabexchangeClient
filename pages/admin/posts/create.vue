<template>
    <section class="slice post">
        <div class="container">
            <div class="row">
                <div class="col-md-8 mx-auto">
                    <div class="mt-2 mb-4">
                        <h4>Create New Post</h4>
                    </div>
                    
                    <form @submit.prevent="create" class="post__form">
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
                                    @change="uploadImage" :class="{'is-invalid': imageErr }"  type="file" required>
                                    <div class="invalid-feedback">{{ this.imageErr }} </div>
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <label for="content">Post Content</label>
                                <div class="quill-editor" 
                                    :content="form.content"
                                    v-quill:myQuillEditor="editorOption"
                                    @change="onEditorChange($event)" >
                                </div>
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

                editorOption: {
                    // some quill options
                    modules: {
                        toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block']
                        ]
                    }
                },

                form : {
                    title: '',
                    content: '',
                    author: '',
                    photo: '',
                },

                imageErr: null,
                status: true,
            }
        },

        mounted() {
            console.log('app init, my quill insrance object is:', this.myQuillEditor)
            setTimeout(() => {
                this.content = 'i am changed'
            }, 3000)
        },


        methods: {
            onEditorChange({ editor, html, text }) {
                this.form.content = html
            },

            async create(){
                this.loading = true;

                try {
                    
                    await this.$axios.$post('/posts', this.form)
                    this.loading = false;

                    this.$toast.success("Post created successfully", {
                        icon : 'check'
                    });

                    this.$router.push('/admin/posts')
                    // location.reload()

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
                        if (photo['size'] < 500000 ){
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
                

            },
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

            .quill-editor {
                min-height: 200px;
                max-height: 300px;
                overflow-y: auto;
            }
        }
    }
</style>