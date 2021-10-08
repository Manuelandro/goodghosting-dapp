import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as C from '../store/constants'
import { RootState } from '../store/reducers'
import DAICONTRACT from '../abi/ABI-dai'


export default function useApproveAndJoin(): [() => void, boolean] {
    const dispatch = useDispatch()
    const web3 = useSelector((s: RootState) => s.network.web3)
    const accountAddress = useSelector((s: RootState) => s.network.accountAddress)
    const gameContract = useSelector((s: RootState) => s.game.contract)
    const gameAddress = useSelector((s: RootState) => s.game.address)
    const [error, setError] = useState(false)

    async function join(): Promise<void> {
        if (
            !Object.keys(web3).length ||
            !Object.keys(gameContract).length ||
            !accountAddress.length
        ) return

        setError(false)

        try {
            dispatch({ type: C.SET_APPROVING, payload: true })
            const daiContract = new web3.eth.Contract(DAICONTRACT, gameAddress)
            const daiAmount = String(10**18)
            await daiContract.methods.approve(gameAddress, daiAmount).send({ from: accountAddress })

            dispatch({ type: C.SET_APPROVING, payload: false })
            dispatch({ type: C.SET_JOINING, payload: true })

            const res = await gameContract.methods.joinGame().send({ from: accountAddress })
            console.log(res)

        } catch (err: any) {
            console.log(err)
            if (err.code !== 4001) {
                setError(true)
            }
        } finally {
            dispatch({ type: C.SET_APPROVING, payload: false })
            dispatch({ type: C.SET_JOINING, payload: false })
        }

    }

    return [join, error]
}