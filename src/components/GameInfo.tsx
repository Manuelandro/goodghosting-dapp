import React from 'react'
import { Button, Spin, Row, Col, Card, Typography, Alert } from 'antd';
import useApproveAndJoin from '../hooks/useApproveAndJoin'
import usePlayer from '../hooks/usePlayer'
import useEarlyWithdraw from '../hooks/useEarlyWithdraw';

const GameInfo: React.FC = () => {
    const [join, joining, error] = useApproveAndJoin()
    const [player, fetchingPlayer] = usePlayer()
    const [withdraw] = useEarlyWithdraw()

    /**
     * render when fetching data from blo
     */
    if (fetchingPlayer) {
        return (
            <Card bordered={false}>
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


    /**
     * render when user is joining the game
     */
    if (joining) {
        return (
            <Card bordered={false}>
                <Row justify="center">
                    <Col>
                        <Spin size="large" />
                    </Col>
                </Row>
                <Typography.Text>
                    Please wait! We are setting up the game
                </Typography.Text>
            </Card>
        )
    }




    /**
     * note that when user withdraw the variable is set to true
     * even if user rejoin, so I must check withdran false to render the info
     */
    if (!player.withdrawn && player.amountPaid === 10 ** 18) {
        return (
            <Card data-testid="game-info">
                <Typography.Title level={2}>Your Game Info</Typography.Title>
                <Row gutter={[20, 20]}>
                    <Col span={12}>
                        <strong>addr</strong>
                    </Col>
                    <Col span={12} data-testid="addr-value">
                        {player.addr}
                    </Col>
                </Row>
                <Row gutter={[20, 20]}>
                    <Col span={12}>
                        <strong>withdrawn</strong>
                    </Col>
                    <Col span={12} data-testid="withdrawn-value">
                        {String(player.withdrawn)}
                    </Col>
                </Row>
                <Row gutter={[20, 20]}>
                    <Col span={12} >
                        <strong>canRejoin</strong>
                    </Col>
                    <Col span={12} data-testid="canrejoin-value">
                        {String(player.canRejoin)}
                    </Col>
                </Row>
                <Row gutter={[20, 20]}>
                    <Col span={12}>
                        <strong>mostRecentSegmentPaid</strong>
                    </Col>
                    <Col span={12} data-testid="mostrecent-value">
                        {player.mostRecentSegmentPaid}
                    </Col>
                </Row>
                <Row gutter={[20, 20]}>
                    <Col span={12}>
                        <strong>amountPaid</strong>
                    </Col>
                    <Col span={12} data-testid="amountpaid-value">
                        {player.amountPaid}
                    </Col>
                </Row>
                <Button onClick={withdraw} data-testid="withdrawbutt">Withdraw</Button>
            </Card>
        )
    }

    if (player.withdrawn && player.canRejoin) {
        return (
            <Card data-testid="rejoin-card" bordered={false}>
                <Row>
                    <Col>
                        <Typography.Text>Hey there! Wanna rejoin the game?</Typography.Text>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col>
                        <Button onClick={join} data-testid="joinbutt">Rejoin Game</Button>
                    </Col>
                </Row>
            </Card>
        )
    }

    return (
        <Card data-testid="join-card" bordered={false}>
            <Row justify="center">
                <Col>
                    <Button onClick={join} data-testid="joinbutt">Join Our Game</Button>
                </Col>
            </Row>
            {error ? (
                <Row>
                    <Col><Alert message="Oh! It looks like we had some problem! :( plesase try again" type="error" /></Col>
                </Row>
            ) : null}
        </Card>
    )
}


export default GameInfo