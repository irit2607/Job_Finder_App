import React, { useState } from 'react'
import { Button, Card, Form, Col, Row ,Modal} from 'react-bootstrap';
// import CheckBox from './CheckBox';

const PostItems = ({ allitem }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Card className="text-center" style={{ margin: '10px 160px 15px' }}>
                <Card.Header>
                    <Row >
                        <Form.Group as={Col}>
                            <Form.Label style={{ textAlign: 'left' }}>{allitem.companyname}</Form.Label>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Time | {allitem.fulltime} | {allitem.remote}</Form.Label>
                        </Form.Group>

                    </Row>

                    <Row>
                        <Button style={{ backgroundColor: "purple", marginLeft: '25px', height: '35px', width: '8rem' }}>{allitem.jobtitle}</Button>{' '}
                        <Form.Group >
                            <Button variant="outline-primary">JavaScript</Button>{' '}
                            <Button variant="outline-primary">React</Button>{' '}
                        </Form.Group>

                        {/* <CheckBox/> */}

                        <Button variant="outline-primary" onClick={handleShow}>Check</Button>{' '}


                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{allitem.companyname}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Job title: {allitem.jobtitle} 
                            <br/>
                            {allitem.fulltime}
                            <br/>
                            Company url: {allitem.companyurl}
                            <br/>
                            Job Link: {allitem.joblink}
                            <br/>
                            {allitem.remote}
                            <br/>
                            {allitem.jobdesc}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                               
                            </Modal.Footer>
                        </Modal>

                    </Row>
                </Card.Header>

            </Card>
        </div>
    )
}

export default PostItems


// import React from 'react'

// export const TodosItem = ({todo, onDelete, oncheck}) => {
//   return (
//     <>
//     <div>
//       <h4>{todo.title}</h4>
//       <p>{todo.desc}</p>
//        <button className="btn btn-sm btn-danger" onClick = {()=>{onDelete(todo)}}>Delete</button> &emsp;
//        <input type="checkbox" style={{width:'20px', height: '20px'}} ></input>
//     </div>
//     <hr/>
//     </>
//   )
// }

// export default TodosItem
