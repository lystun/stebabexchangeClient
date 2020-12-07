
//state
export const state = () =>({
    testimonials : {}
})


//getters
export const getters = {

    getTestimonials(state){
        return state.testimonials.testimonials
    },

}

//mutations
export const mutations = {
    SET_TESTIMONIALS(state, testimonials){
        state.testimonials = testimonials
    }
}

//actions
export const actions = {
    setTestimonials({ commit }, testimonials){
        commit("SET_TESTIMONIALS", testimonials)
    }
}