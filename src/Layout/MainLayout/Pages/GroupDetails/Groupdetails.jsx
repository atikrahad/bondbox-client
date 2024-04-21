
import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import Axiospublic from "../../../../Apis/Axiospublic"
import Profileheader from "../../Shared/Profileheader"
import { Helmet } from "react-helmet"

const Groupdetails = () => {
    const [data, setData] = useState({})
    const id = useLoaderData()
    console.log(id)
    console.log(data)
    useEffect(()=>{
        Axiospublic.get(`/group/${id}`)
        .then(res => setData(res.data))
    },[id, setData])
  return (
    <div className="max-w-screen-lg mx-auto">
      <Helmet title={`BondBox | Group | ${data?.groupName}`}></Helmet>
        <Profileheader data={data}></Profileheader>
    </div>
  )
}

export default Groupdetails