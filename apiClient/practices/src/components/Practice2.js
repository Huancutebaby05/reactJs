import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Practice2 = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:3001/exercise1`)
    .then((res) => {
      console.log(res.data)
      setData(res.data)
    })
    .catch((err) => console.log(err))

  },[])
  return (
    <div>
      {data.map((value,index)=>(
        <ul key={value.id}>
          <li>Id: {value.id}</li>
          <li>Name: {value.name}</li>
          <li>Birthday: {value.birthday}</li>
        </ul>
      ))}
    </div>
  )
}

export default Practice2