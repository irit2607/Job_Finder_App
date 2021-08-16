import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import FormPost from './FormPost';

const PostJob = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button style={{ backgroundColor: "purple" }} onClick={handleShow} > POST JOB</Button>{' '}
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Post Job</Modal.Title>
                </Modal.Header>
                <Modal.Body><FormPost/></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Post Job
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default PostJob
