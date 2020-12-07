import Vue from 'vue'
import { mapGetters } from 'vuex'; 

const Validation = {
    install(Vue, options){
        Vue.mixin({
            computed:{
                ...mapGetters({
                    errors: "validation/errors",
                    formErrors: "validation/formErrors",
                })
            }
        })
    }
}

Vue.use(Validation)