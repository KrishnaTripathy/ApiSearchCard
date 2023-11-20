import axios from 'axios'
import React from 'react'
import { useState, useEffect} from 'react'



const FetchData = () => {
    const [records, setRecords ] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {setRecords(res.data)})
        .catch(err => console.log(err))
    },[])
  return (
    <div>
    <table>
    <thead>
    <tr>
    <th>ID</th>
    <th>Name</th>
    </tr>

    </thead>
    <tbody>

    {records.map((r, i)=>(
        <tr key={i}>
        <td>{r.id}</td>
        <td>{r.name}</td>
        </tr>
    ))}
    </tbody>
    </table>

      
    </div>
  )
}

export default FetchData
