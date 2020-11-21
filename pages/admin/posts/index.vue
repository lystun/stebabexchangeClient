<template>
    <section class="slice posts">
        <div class="container">
            <div class="row row-grid">
                <div class="col mb-3 text-right">
                    <nuxt-link to="/admin/posts/create" class="btn btn-sm btn-warning hover-translate-y-n3">Create a new post</nuxt-link>
                </div>

                <div class="table-responsive">
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
                            <tr>
                                <td class="">1</td>
                                <td class="">
                                    <img src="~/assets/img/backgrounds/img-7.jpg">
                                </td>
                                <td class="">Bitcoin adoption Rising in west africa</td>
                                <td class="">Lystun</td>
                                <td class="">5 days ago</td>
                                <td class="text-">
                                    <div class="actions">
                                        <nuxt-link :to="{ name: 'admin-posts-id', params:{ id: '5faeab9314cd5305c880ae42' } }" class="btn edit mr-2" data-toggle="tooltip" title="Edit">
                                            <span class="fas fa-edit"></span>
                                        </nuxt-link>
                                        <nuxt-link to="/" class="btn del mr-2" data-toggle="tooltip" title="Move to trash">
                                            <i class="fas fa-trash"></i>
                                        </nuxt-link>
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
    export default {
        layout: 'admin',
        
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