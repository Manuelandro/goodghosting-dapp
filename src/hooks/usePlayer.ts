import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/reducers'
import * as C from '../store/constants'

export default function usePlayer(): [Record<string, any>, boolean] {
    const dispatch = useDispatch()
    const gameContract = useSelector((s: RootState) => s.game.contract)
    const accountAddress = useSelector((s: RootState) => s.network.accountAddress)
    const fetchingPlayer = useSelector((s: RootState) => s.game.fetchingPlayer)
    const player = useSelector((s: RootState) => s.player)

    useEffect(() => {
        if (!Object.keys(gameContract).length || !accountAddress.length) return

        ;(async function() {
            const player = await gameContract.methods.players(accountAddress).call()
            dispatch({ type: C.SET_PLAYER, payload: player })
        }())
    }, [gameContract?._address, accountAddress])


    return [player, fetchingPlayer]
}