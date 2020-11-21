<template>
    <div class="sell">
        <section class="jumbotron sell__header bg-gradient-primary">
            <div class="container text-center">
                <h1 class="header text-white">Buy Cryptcurrency</h1>
                <p></p>
            </div>
        </section>

        <section class="slice slice-lg sell__process">
            <div class="container">
                <div class="row">
                    <div class="col-md-5 sell__process--steps">
                        
                    </div>

                    <div class="col-md-7 bg-dark">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore praesentium ex vero! Velit in minima quae dicta sequi at doloribus! Ab ut fuga nihil adipisci odit mollitia eligendi voluptate quis?</p>
                    </div>
                </div>
            </div>
        </section>
        


    </div>
</template>

<script>

    export default {
      

        data(){
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .sell {

        &__header{
            padding-top: 12rem;
            color: $white;
        }

        &__process {
            
        }

        &__others {
            .btn {

                &.buy {
                    color: #fff;
                    border: none;
                    background: $secondary;
                }

                &.sell {
                    color: #fff;
                    border: 1px solid $white;
                    background: transparent;
                }

                &:hover {
                    color: $primary;
                    background: white;
                    border: 1px solid $white;
                }
            }
        }
    }
</style>