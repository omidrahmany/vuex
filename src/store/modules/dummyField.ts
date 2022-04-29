import * as types from "../types"
const state = {
    dummyField: "000"
}

const getters = {
    [types.GET_DUMMY_FIELDS]: (state: any) => {
        return state.dummyField;
    }
}

const mutations = {
    [types.MUTATE_DUMMY_FIELDS]: ((state: any, payload: any) => {
        state.dummyField = payload;
    })
}

const actions = {

}

export default {
    state, getters,  mutations, actions
}
