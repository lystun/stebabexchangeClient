<template>
    <div class="blog">
        <section class="jumbotron blog__header bg-gradient-primary">
            <div class="container text-center">
                <h1 class="header text-white">Post Title</h1>
                <p class="lead">This is to keep our customers informed and abreast of happenings in the crypto world.</p>
            
                <div class="d-flex align-items-center justify-content-center mt-5">
                    <div>
                        <a href="#" class="avatar rounded-circle mr-3">
                            <img alt="Image placeholder" src="~/assets/img/theme/light/team-6-800x800.jpg">
                        </a>
                    </div>
                    <div class="text-left">
                        <span class="d-block h6 mb-0 text-white">Lystun Tech</span>
                        <span class="text-sm text-white">20 Nov 2020</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="slice blog__article">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 bg-info">
                        Share this news
                    </div>
                    <div class="col-md-9 bg-success">
                        <article>
                            <p class="lead"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse reiciendis facere, quia obcaecati quae accusamus alias veritatis, ad corporis cum doloribus veniam deserunt, laboriosam dolor aliquid nihil cupiditate. Nulla, placeat. </p>  
                        </article>
                    </div>
                </div>
            </div>
        </section>

        <section class="slice blog__comment">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    head(){
        return{

        }
    },

    transitions: 'fade',

}
</script>

<style lang="scss" scoped>
    .blog {

        &__header{
            padding-top: 12rem;
            color: $white;
        }

        &__article {
            background: $white;
        }
    }
</style>