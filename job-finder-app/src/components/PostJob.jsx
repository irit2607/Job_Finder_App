import React, { useState } from 'react'
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
// import FormPost from './FormPost';

const PostJob = ({ postjob }) => {

    const [jobtitle, setJobtitle] = useState("");
    const [fulltime, setFulltime] = useState("");
    const [companyname, setCompanyname] = useState("");
    const [companyurl, setCompanyurl] = useState("");
    const [joblink, setJoblink] = useState("");
    const [remote, setRemote] = useState("");
    const [jobdesc, setJobdesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!jobtitle || !fulltime || !companyname || !companyurl || !joblink || !remote || !jobdesc) {
            alert("JobTitle or Description cannot be blank")
        }
        else {
            postjob(jobtitle, fulltime, companyname, companyurl, joblink, remote, jobdesc);
            setJobtitle("");
            setFulltime("");
            setCompanyname("");
            setCompanyurl("");
            setJoblink("");
            setRemote("");
            setJobdesc("");
        }

    }
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
                <Modal.Body>
                    <Form onSubmit={submit}>


                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Control type="text" value={jobtitle} onChange={(e) => setJobtitle(e.target.value)} id="jobtitle" placeholder="Job Title*" />
                            </Form.Group>

                            <Form.Group as={Col}>

                                <Form.Select defaultValue="Choose..." value={fulltime} onChange={(e) => setFulltime(e.target.value)} id="fulltime">
                                    <option>Choose...</option>
                                    <option>Full Time</option>
                                    <option>Part Time</option>
                                    <option>Contract</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>


                        <Row className="mb-3">
                            <Form.Group as={Col} >

                                <Form.Control type="text" value={companyname} onChange={(e) => setCompanyname(e.target.value)} id="companyname" placeholder="Company Name*" />
                            </Form.Group>

                            <Form.Group as={Col} >

                                <Form.Control type="url" value={companyurl} onChange={(e) => setCompanyurl(e.target.value)} id="companyurl" placeholder="Company URL*" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} >

                                <Form.Control type="text" value={joblink} onChange={(e) => setJoblink(e.target.value)} id="joblink" placeholder="Job Link*" />
                            </Form.Group>

                            <Form.Group as={Col}>

                                <Form.Select defaultValue="Choose..." value={remote} onChange={(e) => setRemote(e.target.value)} id="remote">
                                    <option>Choose...</option>
                                    <option>Remote</option>
                                    <option>In office</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3">

                            <Form.Control value={jobdesc} onChange={(e) => setJobdesc(e.target.value)} id="jobdesc" placeholder="Job Description" />
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
                </Modal.Body>
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
