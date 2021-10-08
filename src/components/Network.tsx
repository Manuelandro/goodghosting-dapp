import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/reducers'
import { Row, Col, Badge, Typography, Button } from 'antd'

const Network: React.FC = () => {
    const networkName = useSelector((s: RootState) => s.network.networkName)
    const networkId = useSelector((s: RootState) => s.network.networkId)
    const accountAddress = useSelector((s: RootState) => s.network.accountAddress)

    async function change() {
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x2A' }],
            });
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <Row data-testid="network-info">
            <Col span={24}>
              <Typography.Text strong>Network:</Typography.Text>{' '}
              <Typography.Text>{networkName}</Typography.Text>{' '}
              <Badge color={'green'} text="" />{' '}
              {networkId !== 42 ? <Button onClick={change} size="small" type="primary">Change to Kovan</Button> : null}
            </Col>
            <Col span={24}>
            <Typography.Text strong>Account:</Typography.Text>{' '}
            <Typography.Text>{accountAddress}</Typography.Text>
            </Col>
        </Row>
    )
}

export default Network