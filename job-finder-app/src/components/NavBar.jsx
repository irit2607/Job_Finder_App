import React, { useState, useEffect } from 'react'
import { Navbar, Container} from 'react-bootstrap';
import Search from './Search';
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

    const postjob = (jobtitle, fulltime, companyname, companyurl, joblink, remote, jobdesc, skills) => {
        console.log("addpost", jobtitle, fulltime, companyname, companyurl, joblink, remote, jobdesc, skills);
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
            skills: skills,

        }
        setAllpost([...allpost, mypost]);
        console.log(mypost);
    }

    const onDelete = (allitem) => {
        console.log("I am ondelete", allitem);
        setAllpost(allpost.filter((e) => {
            return e !== allitem;
        }));
    }

    const [allpost, setAllpost] = useState(initPost);
    useEffect(() => {
        localStorage.setItem("allpost", JSON.stringify(allpost));
    }, [allpost])

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ lineHeight: '162px' }}>
                <Container>
                    <Navbar.Brand style={{ fontSize: '30px' }}>
                        💻 Job Application
                    </Navbar.Brand>

                    <PostJob postjob={postjob} />

                </Container>

            </Navbar>

            <div>

                <Search />


                <Allpost allpost={allpost} onDelete={onDelete} />


            </div>



        </>
    )
}

export default NavBar
