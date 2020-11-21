<template>
    <section class="slice post">
        <div class="container">
            <div class="row">
                <div class="col-md-8 mx-auto">
                    <div class="mt-2 mb-4">
                        <h4>Create New Post</h4>
                    </div>
                    
                    <form action="" class="post__form">
                        <div class="row">
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Post Title</label>
                                    <input class="form-control is-vali" type="text" placeholder="Post Title">
                                    <div class="valid-feedback">Looks good! </div>
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Post Image</label>
                                    <input class="form-control" type="file">
                                    <div class="invalid-feedback">Failed! </div>
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <label for="content">Post Content</label>
                                <textarea id="content" class="form-control" placeholder="Post Content" rows="10"></textarea>
                            </div>

                            <div class="col-auto my-2 ml-auto">
                                <button class="btn hover-translate-y-n3">Create Post</button>
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