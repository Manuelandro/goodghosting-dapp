import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/reducers';
import {  Modal, Row, Col, Spin } from 'antd';

const ModalApprove: React.FC = () => {
    const approving = useSelector((s: RootState) => s.game.approving)

    if (!approving) return null

    return (
      <div  data-testid="modal-approve">
        <Modal visible={true} footer={null} closable={false}>
          <Row justify="center" gutter={[20, 20]}>
              <Col>In order to join the game, you have to approve the DAI contract</Col>
          </Row>
          <Row justify="center">
            <Spin size="large" />
          </Row>
      </Modal>
      </div>
    )
}

export default ModalApprove