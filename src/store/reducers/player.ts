import produce, { Immutable } from 'immer'
import * as C from '../constants'

export type IState = Immutable<{
    addr: string
    amountPaid: string
    canRejoin: boolean
    mostRecentSegmentPaid: string
    withdrawn: boolean
}>


const initialState: IState = {
    addr: "",
    amountPaid: "0",
    canRejoin: false,
    mostRecentSegmentPaid: "0",
    withdrawn: false
}


const AccountReducer = produce((draft = initialState, { type, payload }) => {
    switch(type) {
        case C.SET_PLAYER:
            draft.addr = payload.addr
            draft.amountPaid = payload.amountPaid
            draft.canRejoin = payload.canRejoin
            draft.mostRecentSegmentPaid = payload.mostRecentSegmentPaid
            draft.withdrawn = payload.withdrawn
            break
        case C.SET_WITHDRAWN:
            draft.withdrawn = true
            break
        default:
            return draft
    }
})

export default AccountReducer