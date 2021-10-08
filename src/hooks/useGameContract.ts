import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as C from '../store/constants'
import { RootState } from '../store/reducers'
import SmartContractABI from '../abi/ABI-GoodGhostingWhitelisted'

export default function useGameContract(): void {
    const dispatch = useDispatch()
    const web3 = useSelector((s: RootState) => s.network.web3)

    useEffect(() => {
        if (!Object.keys(web3).length) return

        ;(async function joinGame(): Promise<void> {
            try {
                const goodGhostingContract = new web3.eth.Contract(SmartContractABI, "0xc69a569405EAE312Ca13C2eD85a256FbE4992A35")
                dispatch({ type: C.SET_GAME_CONTRACT, payload: goodGhostingContract })
            } catch (err) {
                console.log(err)
            }
        })()
    }, [web3])

}