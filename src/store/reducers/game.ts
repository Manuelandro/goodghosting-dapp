import produce, { Immutable } from 'immer'
import * as C from '../constants'

export type IState = Immutable<{
    approving: boolean
    contract: { [k: string]: any }
    currentSegment: number | null
    fetchingPlayer: boolean
    joining: boolean
}>


const initialState: IState = {
    approving: false,
    contract: {},
    currentSegment: null,
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
        case C.SET_GAME_SEGMENT:
            draft.currentSgmet = payload
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