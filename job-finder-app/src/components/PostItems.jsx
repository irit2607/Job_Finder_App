import React from 'react'
import {Button, Card ,Form, Col,Row} from 'react-bootstrap';

const PostItems = () => {
    return (
        <div>
            <Card className="text-center" style={{ margin: '10px 160px 15px' }}>
                <Card.Header>
                    <Row >
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label style={{textAlign:'left'}}>Company Name</Form.Label>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Time | Full Time | Remote</Form.Label>
                        </Form.Group>
                       
                    </Row>
                    <Row>
                
                    <Button style={{ backgroundColor: "purple", marginLeft: '25px', height: '35px', width: '8rem' }}>Job title</Button>{' '}
                    <Form.Group >
                    <Button variant="outline-primary">JavaScript</Button>{' '}
    <Button variant="outline-primary">React</Button>{' '}
                        </Form.Group>
                    
                        <Button variant="outline-primary" style={{borderRadius:'20px', marginLeft: '25px', height: '35px', width: '8rem' }}>Check</Button>{' '}
                    
                    </Row>
                </Card.Header>

            </Card>
        </div>
    )
}

export default PostItems
