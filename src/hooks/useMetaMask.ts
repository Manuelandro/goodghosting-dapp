import Web3 from 'web3'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as C from '../store/constants'
import { RootState } from '../store/reducers'


export default function useMetaMask(): [boolean] {
    const dispatch = useDispatch()
    const web3 = useSelector((s: RootState) => s.network.web3)
    const networkStatus = useSelector((s: RootState) => s.network.status)
    const noProvider = useSelector((s: RootState) => s.network.noProvider)

    /**
     *
     */
    useEffect(() => {
        ;(async function(): Promise<void> {
          if (window.ethereum) {
            const instance = new Web3(window.ethereum)
            try {
              // ensure user approved connection from dapp to metamask
              await window.ethereum.enable()
              dispatch({ type: C.SET_WEB3, payload: instance })
            } catch (err) {
                console.log(err)
            }
          } else {
            dispatch({ type: C.SET_NO_PROVIDER })
          }
        })()
      }, [])



      /**
       * get network and account info
       * ask the user to switch network if it is wrong
       */
      useEffect(() => {
        if (!Object.keys(web3).length || networkStatus === 'connected') return

        ;(async function(): Promise<void> {
            const accounts = await web3.eth.getAccounts()
            dispatch({ type: C.SET_ACCOUNT, payload: accounts[0] })


            const id = await web3.eth.net.getId()
            dispatch({ type: C.SET_NETWORK, payload: id })

            // detect Metamask account change
            window.ethereum.on('accountsChanged', function (changedAccounts: string[]) {
              dispatch({ type: C.SET_ACCOUNT, payload: changedAccounts[0] })
            });

            // detect Network account change
            window.ethereum.on('networkChanged', function(networkId: number){
              dispatch({ type: C.SET_NETWORK, payload: networkId })
            });
        })()
      }, [web3])


      return [noProvider]

}