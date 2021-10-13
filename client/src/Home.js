import React, { useEffect, useState } from 'react';

function Home() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/home")
    .then(res => res.json())
    .then(data => setBackendData(data))
  }, [])


  return (
    <div className="bg-white p-4">
      <p className="font-sans text-3xl">{backendData.header}</p>
      <p>{backendData.body}</p>
      <p className="font-sans text-lg text-red-400">{backendData.info}</p>
    </div>
  )
}

export default Home