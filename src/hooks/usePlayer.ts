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
        if (
            !Object.keys(gameContract).length ||
            !accountAddress.length ||
            !fetchingPlayer
        ) return

        ;(async function() {
            try {
                const player = await gameContract.methods.players(accountAddress).call()
                dispatch({ type: C.SET_PLAYER, payload: player })
            } catch (err) {
                console.log(err)
            }
        })()
    }, [gameContract?._address, accountAddress, fetchingPlayer])


    return [player, fetchingPlayer]
}