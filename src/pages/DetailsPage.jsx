import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const DetailsPage = () => {

    const {capital} = useParams()
    const [details, setDetails] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch(`https://restcountries.com/v3.1/capital/${capital}`)
            .then(res => res.json())
            .then(data =>{
                console.log('Updated')
                console.log(data[0])
                setDetails(data[0])
            })
    }
  return (
    <div>
        <Link to='/'><button>Back</button></Link>

        <div>{details.area}</div>
        
    </div>
  )
}
