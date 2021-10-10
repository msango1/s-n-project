import react, { useEffect, useState} from "react";

function AboutUs() {

    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch("/about-us")
        .then(res => res.json())
        .then(data => setBackendData(data))
      }, [])

    return (
        <div className="container m-8">
        <h1>Welcome to the about us page</h1>            
        <p>{backendData.header}</p>
        <p>{backendData.body}</p>
        </div>
    )
}

export default AboutUs