import React, { useContext, useEffect, useRef } from 'react'
import { CodeContext } from '../context/EditorContext'

function Home() {
    let {  sethtml, setcss, setjs } = useContext(CodeContext)

    let sethtmlinput = (e) => {
        // console.log(e.target.value);
        sethtml(e.target.value)
    }
    let setcssinput = (e) => {
        // console.log(e.target.value);
        setcss(e.target.value)
    }
    let setjsinput = (e) => {
        // console.log(e.target.value);
        setjs(e.target.value)
    }
    return (
        <div>
            <div className="mx-auto">
                <div className='max-h-[550px]'>
                    <div className='flex'>
                        <div className='w-1/3 bg-black'>
                            <div className='ps-2 w-[80px] pt-2  text-center'>
                                <h1 className='text-green-400 text-xl font-bold bg-gray-800 rounded-tl-md rounded-tr-md px-2 py-2'>HTML</h1>
                            </div>
                            <div className='mx-2 bg-black '>
                                <textarea name="html" id=""  className='bg-gray-800 p-2 font-medium text-[#a7925a] min-h-[500px] max-h-[550px]  w-full' onChange={sethtmlinput}></textarea>
                            </div>
                        </div>
                        <div className='w-1/3 bg-black'>
                            <div className='ps-2 w-[80px]  pt-2 rounded text-center'>
                                <h1 className='text-yellow-400 text-xl font-bold bg-gray-800 px-2 py-2 rounded-tl-md rounded-tr-md'>CSS</h1>
                            </div>
                            <div className='mx-2 bg-black  '>
                                <textarea name="css" id="" className='bg-gray-800 p-2 text-[#d0782a]   min-h-[500px] max-h-[550px] w-full' onChange={setcssinput}></textarea>
                            </div>
                        </div>
                        <div className='w-1/3 bg-black'>
                            <div className='ps-2 w-[80px]  pt-2 rounded text-center' >
                                <h1 className='text-red-500 font-bold text-xl bg-gray-800 px-2 py-2 rounded-tl-md rounded-tr-md'>JS</h1>
                            </div>
                            <div className='mx-2 bg-black   '>
                                <textarea name="js" id="" className='bg-gray-800 p-2 text-[#ddca7e]  min-h-[500px] max-h-[550px] w-full' onChange={setjsinput}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home