import produce, { Immutable } from 'immer'
import * as C from '../constants'

export type IState = Immutable<{
    address: "0xc69a569405EAE312Ca13C2eD85a256FbE4992A35"
    approving: boolean
    contract: { [k: string]: any }
    fetchingPlayer: boolean
    joining: boolean
}>


const initialState: IState = {
    address: "0xc69a569405EAE312Ca13C2eD85a256FbE4992A35",
    approving: false,
    contract: {},
    fetchingPlayer: true,
    joining: false
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
        default:
            return draft
    }
})

export default GameReducer