import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as C from '../store/constants'
import { RootState } from '../store/reducers'
import SmartContractABI from '../abi/ABI-GoodGhostingWhitelisted'
import DaiAbi from '../abi/ABI-dai'

const daiAddress = "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD"
const gameAddress = "0xc69a569405EAE312Ca13C2eD85a256FbE4992A35"


export default function useApproveAndJoin(): [() => void, boolean, boolean] {
    const dispatch = useDispatch()
    const web3 = useSelector((s: RootState) => s.network.web3)
    const accountAddress = useSelector((s: RootState) => s.network.accountAddress)
    const gameContract = useSelector((s: RootState) => s.game.contract)
    const joining = useSelector((s: RootState) => s.game.joining)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!web3?.version?.length) return

        const goodGhostingContract = new web3.eth.Contract(SmartContractABI, gameAddress)
        dispatch({ type: C.SET_GAME_CONTRACT, payload: goodGhostingContract })

    }, [web3?.version])

    async function join(): Promise<void> {
        if (
            !Object.keys(web3).length ||
            !accountAddress.length
        ) return

        setError(false)

        try {
            dispatch({ type: C.SET_APPROVING, payload: true })
            const daiContract = new web3.eth.Contract(DaiAbi, daiAddress)
            const daiAmount = String(10**18)
            await daiContract.methods.approve(gameAddress, daiAmount).send({ from: accountAddress })

            dispatch({ type: C.SET_APPROVING, payload: false })
            dispatch({ type: C.SET_JOINING, payload: true })

            await gameContract.methods.joinGame().send({ from: accountAddress })
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

    return [join, joining, error]
}