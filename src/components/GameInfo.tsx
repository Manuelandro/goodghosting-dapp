import React from 'react'
import { Button, Spin, Row, Col, Card, Typography, Alert } from 'antd';
import useApproveAndJoin from '../hooks/useApproveAndJoin'
import usePlayer from '../hooks/usePlayer'
import useWithdraw from '../hooks/useWithdraw';

const GameInfo: React.FC = () => {
    const [join, joining, error] = useApproveAndJoin()
    const [player, fetchingPlayer] = usePlayer()
    const [withdraw] = useWithdraw()

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




    // player joined the game
    if (!player.withdrawn && Number(player.amountPaid) > 0) {
        return (
            <Card data-testid="game-info">
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