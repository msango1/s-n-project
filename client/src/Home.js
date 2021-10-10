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
      <p>{backendData.header}</p>
      <p>{backendData.body}</p>
    </div>
  )
}

export default Home