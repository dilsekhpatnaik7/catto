import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cat from './Cat'
import axios from 'axios'

function App() {
  const [catData, setCatData] = useState([]);

  const fetchCatData = async() => {
    const { data } = await axios.get("https://api.thecatapi.com/v1/images/search?limit=10");
    console.log(data);
    setCatData(data);
  }

  const refreshPage = () => {
    window.location.reload(false);
  }

  useEffect(()=> {
    fetchCatData();
  })

  return (
    <>
      <div className=' bg-gray-950 p-4 lg:p-10 h-max-content pb-4'>
        <div className='bg-gray-900 p-4 rounded-2xl'>
          <h1 className='text-center text-gray-200 text-3xl mb-7'>Generating Random Cats</h1>
          <div className='text-center mb-7 lg:mb-10'><button className='text-gray-200 bg-gray-700 p-4 py-3 rounded-3xl w-40' onClick={refreshPage}>Get More</button></div>
          <div className='grid lg:grid-cols-4 lg:gap-7 gap-8 pb-4'>
            {
              catData.map((cat) => 
                <Cat url={cat.url} />
              )
            }
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
