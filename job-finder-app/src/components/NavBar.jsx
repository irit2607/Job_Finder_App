import React, { useState, useEffect } from 'react'
import { Navbar, Container, Button, Card } from 'react-bootstrap';
import PostJob from './PostJob';
import Allpost from './Allpost';

const NavBar = () => {

    let initPost;
    if (localStorage.getItem("allpost") === null) {
        initPost = [];
    }
    else {
        initPost = JSON.parse(localStorage.getItem("allpost"));
    }

    const postjob = (jobtitle, fulltime, companyname, companyurl, joblink, remote, jobdesc) => {
        console.log("addpost", jobtitle, fulltime, companyname, companyurl, joblink, remote, jobdesc);
        let sno;
        if (allpost.length === 0) {
            sno = 0;
        }
        else {
            sno = allpost[allpost.length - 1].sno + 1;
        }

        const mypost = {
            sno: sno,
            jobtitle: jobtitle,
            fulltime: fulltime,
            companyname: companyname,
            companyurl: companyurl,
            joblink: joblink,
            remote: remote,
            jobdesc: jobdesc,

        }
        setAllpost([...allpost, mypost]);
        console.log(mypost);
    }

    const [allpost, setAllpost] = useState(initPost);
    useEffect(() => {
        localStorage.setItem("posts", JSON.stringify(allpost));
    }, [allpost])

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ lineHeight: '162px' }}>
                <Container>
                    <Navbar.Brand href="#home" style={{ fontSize: '30px' }}>
                        💻 Job Application
                    </Navbar.Brand>

                    <PostJob postjob={postjob}/>

                </Container>

            </Navbar>

            <div>

                <Card className="text-center">
                    <Card.Header> <select className="browser-default custom-select" style={{ borderRadius: '3 px', marginLeft: '25px', marginBottom: '15px', marginTop: '15px', backgroundColor: '#D0D0D0', width: '19rem', height: '50px' }}>
                        <option> Full Time </option>
                        <option value="1">Full Time</option>
                        <option value="2">Part Time</option>
                        <option value="3">Contract</option>
                    </select>

                        <select className="browser-default custom-select" style={{ borderRadius: '3 px', marginLeft: '25px', marginBottom: '15px', marginTop: '15px', backgroundColor: '#D0D0D0', width: '19rem', height: '50px' }}>
                            <option>Remote </option>
                            <option value="1">Remote</option>
                            <option value="2">In office</option>

                        </select>
                        <Button style={{ backgroundColor: "purple", marginLeft: '25px', height: '50px', width: '19rem' }}>POST JOB</Button>{' '}
                    </Card.Header>

                </Card>

                <Allpost allpost={allpost} />
            </div>



        </>
    )
}

export default NavBar
