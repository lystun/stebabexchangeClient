<template>
    <section class="slice crypto">
        <div class="container">
            <div class="row">
                <div class="col-md-8 mx-auto">
                    <div class="mt-2 mb-4">
                        <h4>Create New Crypto</h4>
                    </div>
                    
                    <form action="" class="crypto__form">
                        <div class="row">
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Crypto Name</label>
                                    <input class="form-control is-vali" type="text" placeholder="Crypto Name">
                                    <div class="valid-feedback">Looks good! </div>
                                </div>
                            </div>
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Wallet Address</label>
                                    <input class="form-control is-vali" type="text" placeholder="Crypto Name">
                                    <div class="valid-feedback">Looks good! </div>
                                </div>
                            </div>
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Minimun Trade Amount</label>
                                    <input class="form-control is-vali" type="number" placeholder="Crypto Name">
                                    <div class="valid-feedback">Looks good! </div>
                                </div>
                            </div>
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Exchange Rate</label>
                                    <input class="form-control is-vali" type="number" placeholder="Crypto Name">
                                    <div class="valid-feedback">Looks good! </div>
                                </div>
                            </div>

                            <div class="col-auto my-2 ml-auto">
                                <button class="btn hover-translate-y-n3">
                                    <span class="fas fa-spinner fa-spin mr-2 d-none"></span>
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