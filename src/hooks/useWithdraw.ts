import { useDispatch, useSelector } from 'react-redux'
import * as C from '../store/constants'
import { RootState } from '../store/reducers'

export default function useWithdraw(): [() => void] {
    const dispatch = useDispatch()
    const gameContract = useSelector((s: RootState) => s.game.contract)
    const accountAddress = useSelector((s: RootState) => s.network.accountAddress)


    const withdraw = async () => {
        try {
          dispatch({ type: C.SET_FETCHING, payload: true })
          await gameContract.methods.withdraw().send({ from: accountAddress });
          dispatch({ type: C.SET_WITHDRAWN })
        } catch (err) {
          console.log(err)
        }
      };

    return [withdraw]

}