import React from 'react'
// import CheckBox from './CheckBox'
import PostItems from './PostItems'

const Allpost = (props) => {
    return (
        <>
        <div className="container" >
            <h3 className="my-2">Job Applications</h3><hr />
            {props.allpost.length === 0 ? "No Job Posted" :
                props.allpost.map((allitem) => {
                    return(
                        <>
                        <PostItems allitem={allitem} key={allitem.sno} />
                        
                        </>
                    )
                     
                    
                })
            }
        </div>
        </>
    )
}

export default Allpost


