import { useEffect, useState} from "react";

function AboutUs() {

    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch("/about-us")
        .then(res => res.json())
        .then(data => setBackendData(data))
      }, [])

    return (
      <div className="bg-white p-4">
        <p className="font-sans text-lg text-green-400">Content from API displayed below</p>        
        <p className="font-sans text-3xl">{backendData.header}</p>
        <p>{backendData.body}</p>
        <p className="font-sans text-lg text-red-400">{backendData.info}</p>
      </div>
    )
}

export default AboutUs