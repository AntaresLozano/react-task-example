const Task=()=> {
    return (
        <div className=" flex w-full  items-center bg-slate-500 hover:bg-slate-600 h-16 cursor-pointer" >
            {/* <BiPlusCircle className='text-black text-4xl' /> */}
            <input type="text" className='bg-transparent border-none w-full h-full text-3xl' onChange={(e) =>
                setTask(e.target.value)
            } />
        </div>
    )
}

export default Task