
//state
export const state =  () => ({
    sellOrders : {},
    buyOrders : {},
})

//getters
export const getters ={ 
    getSellOrders(state){
        return state.sellOrders.transactions
    },

    getBuyOrders(state){
        return state.buyOrders.orders
    },


}

//mutations
export const mutations ={ 

    SET_SELL_ORDERS(state, sellOrders){
        state.sellOrders = sellOrders
    },

    SET_BUY_ORDERS(state, buyOrders){
        state.buyOrders = buyOrders
    },
}

//actions
export const actions ={ 
    setSellOrders({commit}, sellOrders){
        commit("SET_SELL_ORDERS", sellOrders)
    },

    setBuyOrders({commit}, buyOrders){
        commit("SET_BUY_ORDERS", buyOrders)
    }

}