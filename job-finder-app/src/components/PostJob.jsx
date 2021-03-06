import React, { useState } from 'react'
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
// import FormPost from './FormPost';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

const PostJob = ({ postjob }) => {

    const [jobtitle, setJobtitle] = useState("");
    const [fulltime, setFulltime] = useState("");
    const [companyname, setCompanyname] = useState("");
    const [companyurl, setCompanyurl] = useState("");
    const [joblink, setJoblink] = useState("");
    const [remote, setRemote] = useState("");
    const [jobdesc, setJobdesc] = useState("");
    const [skills, setSkills] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!jobtitle || !fulltime || !companyname || !companyurl || !joblink || !remote || !jobdesc || !skills) {
            alert("All fields are compulsory")
        }
        else {
            postjob(jobtitle, fulltime, companyname, companyurl, joblink, remote, jobdesc, skills);
            setJobtitle("");
            setFulltime("");
            setCompanyname("");
            setCompanyurl("");
            setJoblink("");
            setRemote("");
            setJobdesc("");
            setSkills("");
        }

    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button style={{ backgroundColor: "purple" , height: '40px', width: '10rem', marginBottom:'15px'}} onClick={handleShow}> POST JOB </Button>{' '}
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Post Job</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={submit}>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
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

                        <DropdownMultiselect value={skills} handleOnChange={(e) => setSkills(e)} id="skills" placeholder="Required Skils"
                            options={["JavaScript ", "React ", "Node ", "Vue ", "Firebase ", "SQL "]}

                        />
                        <br />

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type="submit" className="btn btn-primary mb-1.8" >
                                Submit
                            </Button>

                        </Modal.Footer>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default PostJob
