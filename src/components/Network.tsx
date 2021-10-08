import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/reducers'

const Network: React.FC = () => {
    const networkName = useSelector((s: RootState) => s.network.networkName)
    const accountAddress = useSelector((s: RootState) => s.network.accountAddress)

    return (
        <div data-testid="user-info">
            <div>
              Network: {networkName}
            </div>
            <div>
              Account: {accountAddress}
            </div>
        </div>
    )
}

export default Network