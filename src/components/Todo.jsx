

import { useEffect, useState } from 'react';
import Task from './Task';
import { BiPlusCircle } from 'react-icons/bi';

const Todo = ({title}) => {

    const [task, setTask] = useState('')

//    useEffect(() => {
//      first
   
//      return () => {
//        second
//      }
//    }, [])
   

    return (
        <>
            {/* pantalla */}
            <div className='w-screen h-screen bg-orange-300 p-5' >
                {/* tarea */}
                <div className="h-screen bg-slate-500 w-1/4 rounded-xl" >
                    {/* titulo */}
                    <div className=" flex justify-center items-center w-full bg-slate-800 h-16 rounded-t-xl" >
                        <h1 className="text-white text-2xl" > {title} </h1>
                    </div>
                    <Task/>
                </div>
            </div>
        </>
    )
}

export default Todo