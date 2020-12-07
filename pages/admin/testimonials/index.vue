<template>
    <section class="slice testimonials">
        <div class="container">
            <div class="row row-grid">
                <div class="col mb-3 text-right">
                    <nuxt-link to="/admin/testimonials/create" class="btn btn-sm btn-warning hover-translate-y-n3">Create a new Testimonial</nuxt-link>
                </div>

                <div class="col-md-12 text-center justify-content-center my-5" v-if="!testimonials">
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

                <div class="table-responsive" v-if="testimonials">
                    <table class="table table-cards align-items-center">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Testimony</th>
                                <th scope="col" class="text-">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="list">
                            <tr v-for="(testimonial, index) in testimonials"  :key="index">
                                <td class="">{{ index+1 }}</td>
                                <td class="">
                                    <img :src="testimonial.photo">
                                </td>
                                <td class="">{{ testimonial.name }}</td>
                                <td class="">{{ testimonial.testimony }}</td>
                                <td class="text-">
                                    <div class="actions">
                                        <nuxt-link :to="{ name: 'admin-testimonials-id', params:{ id: testimonial._id } }" class="btn edit mr-2" data-toggle="tooltip" title="Edit">
                                            <span class="fas fa-edit"></span>
                                        </nuxt-link>
                                        <a @click="deleteTestimonial(testimonial._id)" class="btn del mr-2" data-toggle="tooltip" title="Move to trash">
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
                testimonials: 'testimonials/getTestimonials',
            })
        },

        filters:{
            uppercase(value) {
                if (!value) return ''
                value = value.toString()
                return value.toUpperCase()
            },

            dollarSymbol(value){
                if (!value) return ''
                return '$'+value;
            }
        },

        created(){
            this.checkTestimonials();
        },

        methods: {
            async getTestimonials(){
                let { data } = await this.$axios.$get('/testimonials')
                this.$store.dispatch('testimonials/setTestimonials', data)
            },

            checkTestimonials(){
                if(!this.testimonials){
                    this.getTestimonials();
                }
            },

            deleteTestimonial(id){
                this.$swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!'

                }).then((result) => {

                    if (result.value) {

                        this.$axios.$delete(`/testimonials/${id}`)
                        this.$toast.success("Testimonial deleted successfully", {
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
    .testimonials  {
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