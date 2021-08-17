import React from 'react'
import PostItems from './PostItems'

const Allpost = (props) => {
    return (
        <div className="container" >
            <h3 className="my-2">Job Applications</h3><hr />
            {props.allpost.length === 0 ? "No Job Posted" :
                props.allpost.map((allitem) => {
                    return <PostItems allitem={allitem} key={allitem.sno} />
                })
            }
        </div>
    )
}

export default Allpost

// import React from 'react'
// import { TodosItem } from "../MyComponents/TodosItem";

// export const Todos = (props) => {
//   let mystyle = {
//     minHieght: '70vh',
//     margin: "10px auto",
//     paddingTop: '30px',
//     color: '#00ffff',
//     fontFamily: 'sans-serif',
//   }
//   return (
//     <div className="container" style={mystyle}>
//       <h3 className="my-2">Todo List</h3><hr />
//       {props.todos.length === 0 ? "No todos" :
//         props.todos.map((todo) => {
//           return <TodosItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
//         })
//       }
//     </div>
//   )
// }

// export default Todos
