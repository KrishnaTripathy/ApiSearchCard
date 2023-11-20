import React, { useState, useEffect } from 'react'
import './Search.css'

const Search = () => {
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            // setData(data);//displaying the data
            setFilterData(data);//filtering
        })
        .catch(err => console.log(err));
    },[])
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const handleFilter = (value) => {
        const res= filterData.filter(f=> f.name.toLowerCase().includes(value))
        setData(res);
        if(value === " ")
        {
          setData([])
        }
    }
  return (
    <div className='search-top'>
    <div className='search'>
      <input type="text" placeholder='Search Here...' onChange={e => handleFilter(e.target.value)}></input>
    </div>
    <div className='search-result'>
    {data.map((d,i) =>(
      
      <div className='card' key={i}>
      <div className="card-content">
      <h2 className="card-title">Details</h2>
      <p className="card-text">Name: {d.name}
         Email: {d.email}</p>
      </div>
      
      </div>
      
        
    ))}
    </div>
    </div>
  )
}

export default Search
