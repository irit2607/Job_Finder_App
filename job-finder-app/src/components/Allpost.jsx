import React, { useState } from 'react'
import PostItems from './PostItems'

import { Card, Button } from 'react-bootstrap';

const Allpost = (props) => {

    const [job, setJob] = useState(
        {
            time: 'Full Time',
            // place: 'Remote'
        }
    );

    const [search, setSearch] = useState(0);
    // const [submitSearch, setSubmitSearch] = useState(0);
    const { time /*, place */ } = job;

    const onInputChange = e => {
        setJob({ ...job, [e.target.name]: e.target.value });
        setSearch(1);

    }

    const submit = () => {
        // setSubmitSearch(1);
     
        console.log(job);

    }

    return (
        <>


            <div>
                <form onSubmit={submit}>
                    <Card className="text-center">
                        <Card.Header>
                            
                                <select name="time" onChange={e => onInputChange(e)} className="browser-default custom-select" style={{ borderRadius: '3 px', marginLeft: '25px', marginBottom: '15px', marginTop: '15px', backgroundColor: '#D0D0D0', width: '19rem', height: '50px' }}>

                                    <option value="Full Time">Full Time</option>
                                    <option value="Part Time">Part Time</option>
                                    <option value="Contract">Contract</option>
                                </select>

                                <select className="browser-default custom-select" style={{ borderRadius: '3 px', marginLeft: '25px', marginBottom: '15px', marginTop: '15px', backgroundColor: '#D0D0D0', width: '19rem', height: '50px' }}>

                                    <option value="Remote">Remote</option>
                                    <option value="In office">In office</option>

                                </select>
                                <Button type="submit" style={{ backgroundColor: "purple", marginLeft: '25px', height: '50px', width: '19rem' }}>
                                    SEARCH JOB
                                </Button>
                           
                        </Card.Header>

                    </Card>
                </form>
            </div>


            <div className="container" >
                <h3 className="my-2">Job Applications</h3><hr />
                {props.allpost.length === 0 ? "No Job Posted" :
                    props.allpost.filter((allitem) => {
                        if (!search) {
                            return allitem
                        } else if (allitem.fulltime === time) {
                            return allitem
                        }
                    }).map((allitem) => (
                        <PostItems allitem={allitem} key={allitem.sno} onDelete={props.onDelete} />
                    ))
                }
            </div>

        </>
    )
}

export default Allpost


