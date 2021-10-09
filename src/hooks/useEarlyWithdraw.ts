import { useDispatch, useSelector } from 'react-redux'
import * as C from '../store/constants'
import { RootState } from '../store/reducers'

export default function useEarlyWithdraw(): [() => void, boolean] {
    const dispatch = useDispatch()
    const gameContract = useSelector((s: RootState) => s.game.contract)
    const accountAddress = useSelector((s: RootState) => s.network.accountAddress)
    const withdrawing = useSelector((s: RootState) => s.game.withdrawing)


    const withdraw = async () => {
        try {
          dispatch({ type: C.SET_WITHDRAWING })
          await gameContract.methods.earlyWithdraw().send({ from: accountAddress });
          dispatch({ type: C.SET_WITHDRAWN })
        } catch (err) {
          console.log(err)
        } finally {
          dispatch({ type: C.SET_FETCHING, payload: false })
        }
      };

    return [withdraw, withdrawing]

}