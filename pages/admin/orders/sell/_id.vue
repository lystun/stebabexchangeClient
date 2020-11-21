<template>
    <section class="slice view">
        <div class="container">
            <div class="row view__header">
                <div class="col">
                    <h5 class="mb-2">Transaction Detail - Stea89383</h5>
                    <p class="text-sm text-muted mb-0 d-none d-md-block">
                        <span class="badge badge-success">completed</span>
                    </p>
                </div>
                <div class="col text-right">
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" id="status">
                        <label class="custom-control-label" for="status">Set Status</label>
                    </div>
                </div>
            </div>

            <div class="row slice view__detail">
                <div class="col-md-5">
                    <div class="card shadow">
                       <img src="~/assets/img/spotlight/iphone.png" alt="" class="img-fluid"> 
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="card shadow p-5">
                        <p>Name: Lystun Test </p>
                        <p>Email Address: lystyntest@gmail.com</p>
                        <p>Phone Number:01234567890 </p>
                        <p>Digital Asset: ETH</p>
                        <p>Amount Sent: $2000 </p>
                        <p>Country: Nigeria</p>
                        <p>State: Lagos </p>
                        <p>Bank Name: First Bank</p>
                        <p>Bank Account Name: Lystun Test</p>
                        <p>Bank Account Number: 123456789</p>
                        <p>Date: 2020-11-20 10:09:45 </p>
                    </div>
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
    .view  {
        
        &__header{

        }

        &__detail {
            align-items: center;

            .card {

                p{
                    font-weight: bold;
                }
            }
        }
    }
</style>