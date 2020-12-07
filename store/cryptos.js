
//state
export const state = () =>({
    cryptos : {}
})


//getters
export const getters = {

    getCryptos(state){
        return state.cryptos.coins
    },

}

//mutations
export const mutations = {
    SET_CRYPTOS(state, cryptos){
        state.cryptos = cryptos
    }
}

//actions
export const actions = {
    setCryptos({ commit }, cryptos){
        commit("SET_CRYPTOS", cryptos)
    }
}