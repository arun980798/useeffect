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
      console.log(data)
    } kopi()

  }, [count, kasi])


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



        {data && (
          <div className="count border-2 rounded w-1/2 h-full flex justify-around items-center text-center flex-col gap-10   border-emerald-500 ">
            <div className=" flex flex-col items-center justify-center">

              {/* Profile Image */}
              <img
                src={data.picture.large}
                alt="profile"
                className="w-40 h-40 rounded-full object-cover "
              />

              {/* User Info */}
              <div className="flex flex-col justify-center space-y-2">
                <h2 className="text-2xl font-semibold">
                  {data.name.title} {data.name.first} {data.name.last}
                </h2>

                <p className="text-gray-600">{data.email}</p>
                <p className="text-gray-600 capitalize">Gender: {data.gender}</p>
                <p className="text-gray-600">Age: {data.dob.age}</p>

                <p className="text-gray-600 mt-4">
                  📍 {data.location.city}, {data.location.state}, {data.location.country}
                </p>

                <p className="text-gray-600">📞 {data.phone}</p>
              </div>

            </div>
          </div>
        )}





      </div>
    </>
  )
}

export default App
