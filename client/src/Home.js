import React, { useEffect, useState } from 'react';

function Home() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/home")
    .then(res => res.json())
    .then(data => setBackendData(data))
  }, [])


  return (
    
    <div className="container m-8">
      <div className="bg-blue-100 p-4">
        <p>Logo</p>
      </div>
      <div className="bg-white p-4">
        <p className="font-sans text-3xl">{backendData.header}</p>
        <p>{backendData.body}</p>
      </div>
    </div>
  )
}

export default Home