import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const BtnTriggerModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>聯絡資訊</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>信箱</Form.Label>
                        <Form.Control type="email" placeholder="輸入信箱" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>聯絡姓名</Form.Label>
                        <Form.Control type="password" placeholder="輸入聯絡姓名" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>電話</Form.Label>
                        <Form.Control type="tel" placeholder="輸入電話" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type="submit">
                    送出
                </Button>
                <Button className=" btn-danger" onClick={handleClose}>
                    關閉
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default BtnTriggerModal;
