import React, { useState } from 'react'
import { Navbar, Container, Button, Card } from 'react-bootstrap';
import PostJob from './PostJob';

const NavBar = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ lineHeight: '162px' }}>
                <Container>
                    <Navbar.Brand href="#home" style={{ fontSize: '30px' }}>
                        💻 Job Application
                    </Navbar.Brand>

                  <PostJob/>

                </Container>

            </Navbar>

            <div>

                <Card className="text-center">
                    <Card.Header> <select className="browser-default custom-select" style={{ borderRadius: '3 px', marginLeft: '25px', marginBottom: '15px', marginTop: '15px', backgroundColor: '#D0D0D0', width: '19rem', height: '50px' }}>
                        <option>Choose your option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>

                        <select className="browser-default custom-select" style={{ borderRadius: '3 px', marginLeft: '25px', marginBottom: '15px', marginTop: '15px', backgroundColor: '#D0D0D0', width: '19rem', height: '50px' }}>
                            <option>Choose your option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <Button style={{ backgroundColor: "purple", marginLeft: '25px', height: '50px', width: '19rem' }}>POST JOB</Button>{' '}
                    </Card.Header>

                </Card>
            </div>



        </>
    )
}

export default NavBar
