import * as types from './mutation-types'

export const set_direction_state = ({commit}, flag) => {
    commit(types.SET_DIRECTION_STATE, flag)
}