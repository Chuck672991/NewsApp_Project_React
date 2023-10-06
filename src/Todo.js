// import React,{useState} from 'react'

// const Todo =(props)=>{
//     const [tasks,setTask] = useState([])
//     const [newTask,setNewTask]= useState('')

//     const addTask =() =>{
//         setTask([...tasks,newTask]);
//         setNewTask('');
//     }
//     const removeTodo = ()=>{
        
//     }
//     return (
//         <div>
//             <h1> {props.heading} </h1>
//             <input
//             type ="text"
//             value={newTask}
//             onChange={(e)=>setNewTask(e.target.value)}
//             />
//             <button onClick={addTask}>Add Task </button>
//             <ul>
//                 {tasks.map((task,index)=>(
//                     <li key={index}>
//                     {task}
                
//                   </li>

//                 )
                
//                 )}
//             </ul>
//         </div>

//     )
        

// }
// export default Todo