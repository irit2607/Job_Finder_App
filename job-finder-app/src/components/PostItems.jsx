import React from 'react'
import {Button, Card ,Form, Col,Row} from 'react-bootstrap';

const PostItems = ({allitem}) => {
    return (
        <div>
            <Card className="text-center" style={{ margin: '10px 160px 15px' }}>
                <Card.Header>
                    <Row >
                        <Form.Group as={Col}>
                        <Form.Label style={{textAlign:'left'}}>{allitem.companyname}</Form.Label>
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
                    
                        <Button variant="outline-primary" style={{borderRadius:'20px', marginLeft: '25px', height: '35px', width: '8rem' }}>Check</Button>{' '}
                    
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
 