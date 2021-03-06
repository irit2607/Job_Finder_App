import React, { useState } from 'react'
import { Button, Card, Form, Col, Row ,Modal} from 'react-bootstrap';

const PostItems = ({ allitem ,onDelete}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Card className="text-center" style={{ margin: '10px 160px 15px' }}>
                <Card.Header>
               <Row >
                       <Form.Group as={Col}>
                            <Form.Label style={{ marginLeft:'-10rem' }}><b>{allitem.companyname}</b></Form.Label>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label  style={{ marginLeft:'10rem' }}> {allitem.fulltime} | {allitem.remote}</Form.Label>
                        </Form.Group>

                    </Row>

                    <br/>

                    <Row>
                        <Button style={{ backgroundColor: "purple", marginLeft: '25px', height: '35px', width: '8rem' }}>{allitem.jobtitle}</Button>{' '}
                     
                        <Form.Group as={Col}>
                            <Form.Label style={{ }}><b>Skills Required: </b>{allitem.skills}</Form.Label>
                        </Form.Group>
                        
                        <Button style={{ backgroundColor: "black", borderRadius:'18px', marginLeft: '50px', height: '35px', width: '8rem' }} onClick={handleShow}>Check</Button>{' '}


                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{allitem.companyname}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body><b>Job title: </b> {allitem.jobtitle} 
                            <br/>
                            <b>Duration : </b>
                            {allitem.fulltime}
                            <br/>
                            <b>Company url: </b>{allitem.companyurl}
                            <br/>
                            <b>Job Link: </b>{allitem.joblink}
                            <br/>
                            <b>Place: </b>
                            {allitem.remote}
                            <br/>
                            <b>Job Description: </b>
                            {allitem.jobdesc}
                            <br/>
                            <b>Skills: </b>
                            {allitem.skills}
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
