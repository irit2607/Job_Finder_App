import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';

const FormPost = () => {
  return (
    <div>
      <Form>


        <Row className="mb-3">
          <Form.Group as={Col}>

            <Form.Control type="text" placeholder="Job Title*" />
          </Form.Group>

          <Form.Group as={Col}>

            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Contract</option>
            </Form.Select>
          </Form.Group>
        </Row>


        <Row className="mb-3">
          <Form.Group as={Col}>

            <Form.Control type="text" placeholder="Company Name*" />
          </Form.Group>

          <Form.Group as={Col}>

            <Form.Control type="url" placeholder="Company URL*" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>

            <Form.Control type="text" placeholder="Job Link*" />
          </Form.Group>

          <Form.Group as={Col} >

            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>Remote</option>
              <option>In office</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">

          <Form.Control placeholder="Job Description" />
        </Form.Group>

        <Form.Group as={Col} controlId="my_multiselect_field">
      <Form.Label>My multiselect</Form.Label>
      <Form.Control as="select" multiple value={field} onChange={e => setField([].slice.call(e.target.selectedOptions).map(item => item.value))}>
        <option value="field1">Field 1</option>
        <option value="field2">Field 2</option>
        <option value="field3">Field 3</option>
      </Form.Control>
    </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Skills*</Form.Label>
          <br />
          <Button variant="outline-primary">JavaScript</Button>{' '}
          <Button variant="outline-primary">React</Button>{' '}
          <Button variant="outline-primary">Node</Button>{' '}
          <Button variant="outline-primary">Vue</Button>{' '}
          <Button variant="outline-primary">Firebase</Button>{' '}
          <Button variant="outline-primary">SQL</Button>{' '}

        </Form.Group>

      </Form>
    </div>
  )
}

export default FormPost
