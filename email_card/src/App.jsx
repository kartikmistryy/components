import { useEffect, useState } from 'react'
import './App.css'
import CardList from './CardList'

function App() {

  const [selected, setSelected] = useState(null)
  const emailArray = [
    {
      email: 'john.doe@xyz.co',
      email_title: 'Code Debug'
    },
    {
      email: 'jane.smith@xyz.co',
      email_title: 'Design Changes'
    },
    {
      email: 'alice.jones@xyz.co',
      email_title: 'Feature Request'
    },
    {
      email: 'bob.miller@xyz.co',
      email_title: 'Bug Fix'
    },
    {
      email: 'carol.white@xyz.co',
      email_title: 'Performance Improvement'
    }
  ];

  return (
    <div className='flex flex-row w-[100vw] h-full'>
      <div className='w-[50vw] h-screen p-2'> 
        <div className='bg-[rgba(0,0,0,0.25)] backdrop-blur-md text-white py-2 rounded-xl w-[300px] h-full'>
          <h2 className='text-2xl font-medium border-b border-[#2e2e2e] py-3 px-3'>Email Inbox</h2>
          <ul className='w-[300px] h-full flex flex-col gap-2 mt-3'>
            {emailArray.map((li, index) => {
              return(
                <li 
                key={index}
                className='border-b border-[#313131] px-3 py-1 cursor-pointer'
                onClick={() => setSelected(index)}
                onMouseLeave={() => setSelected(null)}
                onMouseOver={() => setSelected(index)}
                >{li.email}</li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className='flex justify-center w-[50vw] h-[100vh] items-center relative'>
        <CardList selected={selected}/>
      </div>
    </div>
  )
}

export default App
