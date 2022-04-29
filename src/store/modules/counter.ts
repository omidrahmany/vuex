import * as types from '../types'

const state = {
    counter: 0
}

const getters = {
    [types.DOUBLE_COUNTER]: (state: any) => {
        return state.counter * 2;
    },
    [types.STRING_COUNTER]: (state: any) => {
        return state.counter + ' Clicks';
    }
}

const mutations = {
    [types.INCREMENT_COUNTER_VALUE]: (state: any, payload: number) => {
        state.counter += payload;
    },
    [types.DECREMENT_COUNTER_VALUE]: (state: any, payload: number) => {
        state.counter -= payload;
    },
}

const actions = {
    [types.ASYNC_INCREMENT]: ({commit}: any, payload: any) => {
        setTimeout(() => {
            commit(types.INCREMENT_COUNTER_VALUE, payload.by)
        }, payload.duration);
    }
}

export default {
    state, getters, mutations, actions
}
