import React from 'react'
import { Button, Spin, Row, Col, Card, Typography } from 'antd';
import useApproveAndJoin from '../hooks/useApproveAndJoin'
import usePlayer from '../hooks/usePlayer'
import useWithdraw from '../hooks/useWithdraw';

const GameInfo: React.FC = () => {
    const [join] = useApproveAndJoin()
    const [player, fetchingPlayer] = usePlayer()
    const [withdraw] = useWithdraw()

    if (fetchingPlayer) {
        return (
            <Card>
                <Row justify="center">
                    <Col>
                        <Spin size="large" />
                    </Col>
                </Row>
                <Typography.Text>
                    We are currently retrieving your info...
                </Typography.Text>
            </Card>
        )
    }

    // player joined the game
    // if (!player.withdrawn && Number(player.amountPaid) > 0) {
        return (
            <Card data-id="game-info">
                <Typography.Title level={2}>Your Game Info</Typography.Title>
                <Row gutter={[20, 20]}>
                    <Col span={12}>
                        <strong>addr</strong>
                    </Col>
                    <Col span={12}>
                        {player.addr}
                    </Col>
                </Row>
                <Row gutter={[20, 20]}>
                    <Col span={12}>
                        <strong>withdrawn</strong>
                    </Col>
                    <Col span={12}>
                        {String(player.withdrawn)}
                    </Col>
                </Row>
                <Row gutter={[20, 20]}>
                    <Col span={12}>
                        <strong>canRejoin</strong>
                    </Col>
                    <Col span={12}>
                        {String(player.canRejoin)}
                    </Col>
                </Row>
                <Row gutter={[20, 20]}>
                    <Col span={12}>
                        <strong>mostRecentSegmentPaid</strong>
                    </Col>
                    <Col span={12}>
                        {player.mostRecentSegmentPaid}
                    </Col>
                </Row>
                <Row gutter={[20, 20]}>
                    <Col span={12}>
                        <strong>amountPaid</strong>
                    </Col>
                    <Col span={12}>
                        {player.amountPaid}
                    </Col>
                </Row>
                <Button onClick={withdraw} data-testid="withdrawbutt">Withdraw</Button>
            </Card>
        )
    // }

    return (
        <Button onClick={join} data-testid="joinbutt">Join Our Game</Button>
    )
}


export default GameInfo