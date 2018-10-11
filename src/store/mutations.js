import * as types from './mutation-types'

const mutations = {
    [types.SET_DIRECTION_STATE](state, flag) {
        state.direction = flag
    }
}

export default mutations