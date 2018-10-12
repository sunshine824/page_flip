import * as types from './mutation-types'
import * as api from '../libs/js/api'

export const actions = {
    set_direction_state({commit}, flag) {
        commit(types.SET_DIRECTION_STATE, flag)
    },
    async get_logo({commit}) {
        commit(types.GET_LOGO, await api.getLogo())
    }
}