import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SearchCountry } from '../components/SearchCountry';

export const Region = (props) => {

    const {region} = useParams()
    // const [searchField, setSearchField] = useState('')

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/region/${region ? region : 'all'}`)
            .then(res => res.json())
            .then(data =>{
                console.log('Updated')
                console.log(data)
                props.setRegions(data)
            })
    }, [])

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/region/${region ? region : 'all'}`)
            .then(res => res.json())
            .then(data =>{
                console.log('Updated')
                console.log(data)
                props.setRegions(data)
            })
    }, [region])

  return (
    <>
        <div className='w-full flex flex-wrap my-0 justify-around px-7'>
            {
                props.filteredRegion.map((reg, i) => {
                        return(
                            <div className='w-1/5 cursor-pointer shadow-lg mr-1 ml-1 my-5' key={i}>
                                <img src={reg.flags.png} className='w-full h-36 rounded object-fit'/>
                                <div className='bg-white px-5 py-6 rounded'>
                                    <h1 className='font-bold'>{reg.name.common}</h1>
                                    <p>{reg.population}</p>
                                    <p>{reg.region}</p>
                                    <p>{reg.capital}</p>
                                </div>
                            </div>
                        )
                })
            }
        </div>
    </>
  )
}
