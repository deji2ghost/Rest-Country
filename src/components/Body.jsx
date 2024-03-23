import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { SearchCountry } from "./SearchCountry"

export const Body = (props) => {

    const [searchField, setSearchField] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [countryFilter, setCountryFilter] = useState([])

    useEffect(() => {
        getData()
    }, [])
      
    const getData = () => {
        // const url ='https://restcountries.com/v3.1/all'
        fetch('https://restcountries.com/v3.1/all')
          .then(res => res.json())
          .then(data =>{
            setIsLoading(false)
            props.setCountries(data)
            console.log(data)
        })
    }

    // const filteredCountry = countries.filter(country => {
    //     return country.name.common.toLowerCase().includes(searchField.toLocaleLowerCase())
    // })
    
    // console.log(filteredCountry)
    // console.log(countryFilter)

  return (
    <>
        {/* <SearchCountry searchField={searchField} setSearchField={setSearchField}/> */}
        <div className='md:w-full mx-auto flex flex-wrap my-0 justify-around'>
            {isLoading ?
                <h1>Page Will Load Soon...</h1> :
                props.filteredCountry.map((country, i) => {
                    return(
                    <Link to={`/capital/${country.capital}`} className='w-2/5 md:w-1/5 shadow-lg cursor-pointer mr-1 ml-1 my-5' key={i}>
                        <img src={country.flags.png} className='w-full object-fit h-36 rounded'/>
                        <div className='bg-white px-5 py-6 rounded'>
                            <h1 className='font-bold'>{country.name.common}</h1>
                            <p>{country.population}</p>
                            <p>{country.region}</p>
                            <p>{country.capital}</p>
                        </div>
                    </Link>
                    )
                })
            }
        </div>
    </>
  
  )
}
