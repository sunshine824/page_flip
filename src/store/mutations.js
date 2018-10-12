import * as types from './mutation-types'

const mutations = {
    [types.SET_DIRECTION_STATE](state, flag) {
        state.direction = flag
    },
    [types.GET_LOGO](state, res) {
        state.logo = res.data.logo
    }
}

export default mutations