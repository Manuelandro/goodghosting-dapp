import produce, { Immutable } from 'immer'
import * as C from '../constants'


const networksMap: Record<number, string> = {
    1: 'mainnet',
    2: 'morden',
    3: 'ropsten',
    42: 'kovan',
    4: 'rinkeby'
  }


export type IState = Immutable<{
    accountAddress: string
    networkName: string
    networkId: number
    noProvider: boolean
    status: 'connected' | 'disconnected'
    web3: { [k: string]: any }
}>


const initialState: IState = {
    accountAddress: "",
    networkName: '',
    networkId: 0,
    noProvider: false,
    status: 'disconnected',
    web3: {},
}


const NetworkReducer = produce((draft = initialState, { type, payload }) => {
    switch(type) {
        case C.SET_WEB3:
            draft.web3 = payload
            break
        case C.SET_NETWORK:
            draft.networkName = networksMap[payload]
            draft.networkId = ~~payload
            if (~~payload === 42) {
                draft.status = 'connected'
            } else {
                draft.status = 'disconnected'
            }
            break;
        case C.SET_ACCOUNT:
                draft.accountAddress = payload
                break
        case C.SET_NO_PROVIDER:
            draft.noProvider = true
            break
        default:
            return draft
    }
})

export default NetworkReducer