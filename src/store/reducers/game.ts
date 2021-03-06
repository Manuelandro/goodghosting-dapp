import produce, { Immutable } from 'immer'
import * as C from '../constants'

export type IState = Immutable<{
    approving: boolean
    contract: { [k: string]: any }
    fetchingPlayer: boolean
    joining: boolean
    joined: boolean
    withdrawing: boolean
}>


const initialState: IState = {
    approving: false,
    contract: {},
    fetchingPlayer: true,
    joining: false,
    joined: false,
    withdrawing: false,
}


const GameReducer = produce((draft = initialState, { type, payload }) => {
    switch(type) {
        case C.SET_APPROVING:
            draft.approving = payload
            break
        case C.SET_GAME_CONTRACT:
            draft.contract = payload
            break
        case C.SET_FETCHING:
            draft.fetchingPlayer = payload
            break
        case C.SET_PLAYER:
            draft.fetchingPlayer = false;
            break
        case C.SET_JOINING:
            draft.joining = payload
            break
        case C.SET_WITHDRAWING:
            draft.withdrawing = true
            break
        case C.SET_WITHDRAWN:
            draft.withdrawing = false
            draft.fetchingPlayer = true;
            break
        default:
            return draft
    }
})

export default GameReducer