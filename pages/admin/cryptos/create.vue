<template>
    <section class="slice crypto">
        <div class="container">
            <div class="row">
                <div class="col-md-8 mx-auto">
                    <div class="mt-2 mb-4">
                        <h4>Create New Crypto</h4>
                    </div>
                    
                    <form @submit.prevent="create" class="crypto__form">
                        <div class="row">
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Crypto Name</label>
                                    <input class="form-control" v-model="form.name" :class="{'is-invalid': errors.message }" type="text" placeholder="Crypto Name" required>
                                </div>
                            </div>
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Crypto Icon</label>
                                    <input class="form-control" 
                                    @change="uploadImage" :class="{'is-invalid': imageErr }"  type="file" required>
                                    <div class="invalid-feedback">{{ this.imageErr }} </div>
                                </div>
                            </div>
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Wallet Address</label>
                                    <input class="form-control" v-model="form.walletAddress" :class="{'is-invalid': errors.message }" type="text" placeholder="Wallet Address" required>
                                </div>
                            </div>
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Minimun Trade Amount</label>
                                    <input class="form-control" v-model="form.tradeAmount" :class="{'is-invalid': errors.message }" type="number" placeholder="Min Trade Amount" required>
                                </div>
                            </div>
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Exchange Rate</label>
                                    <input class="form-control" v-model="form.exchangeRate" :class="{'is-invalid': errors.message }" type="number" placeholder="Exchange Rate" required>
                                    
                                    <div class="invalid-feedback" v-if="errors.message">
                                        <ul>
                                            <li v-for="(error, index) in formErrors" :key="index">
                                                {{ error.split(':')[1] }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="col-auto my-2 ml-auto">
                                <button type="submit" class="btn hover-translate-y-n3" :disabled="status">
                                    <span class="fas fa-spinner fa-spin mr-2" v-if="loading"></span>
                                    Create Crypto
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
                    name: '',
                    walletAddress: '',
                    tradeAmount: '',
                    exchangeRate: '',
                    photo: ''
                },

                imageErr : '',
                status : true
            }
        },


        methods: {
            async create(){
                this.loading = true;

                try {
                    
                    await this.$axios.$post('/coins', this.form)
                    this.loading = false;

                    this.$toast.success("Created crypto successfully", {
                        icon : 'check'
                    });

                    this.$router.push('/admin/dashboard')

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
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    .crypto {
        

        &__form {
            .btn {
                color: $white;
                background: $secondary;
            }
        }
    }
</style>