import { useEffect, useState } from 'react'
import axios from "axios"


function App() {
  let [count, setCount] = useState(0)
  let [data, setdata] = useState('')
  let [kasi, setkasi] = useState(0)


  useEffect(function () {
    async function kopi() {
      let as = await axios("https://randomuser.me/api/")
      setdata(as.data.results[0])
    } kopi()
   
  }, [count,kasi])


  return (
    <>
      <div className="box h-screen w-screen bg-black text-white flex justify-center items-center gap-4 p-4    ">
        <div className="count border-2 rounded w-1/2 h-full flex justify-around items-center flex-col gap-10   border-emerald-500  ">
          <div className="sce flex flex-col items-center  gap-10 ">
            <h1 className='font-bold text-9xl  ' >{count}</h1>
            <button className='bg-emerald-400 px-5 py-2  rounded text-3xl active:scale-95 transition-all duration-100 hover:scale-105   '
              onClick={() => {
                setCount(++count)


              }}>incs</button>
          </div>
          <h2 className='text-4xl '>{data.cell}</h2>


        </div>


        <div className="count border-2 rounded w-1/2 h-full flex justify-around items-center flex-col gap-10  border-emerald-500  ">
          <h1 className='font-bold text-9xl  ' >{kasi}</h1>
          <button className='bg-emerald-400 px-5 py-2  rounded text-3xl active:scale-95 transition-all duration-100 hover:scale-105   '
            onClick={() => {
              setkasi(++kasi)
            }}
          >incs</button>
          <h1>{data.email}</h1>


        </div>




      </div>
    </>
  )
}

export default App
