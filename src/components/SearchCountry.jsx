import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const SearchCountry = ({searchField, setSearchField}) => {

  const [isOpen, setIsOpen] = useState(false)


  const handleChange = (e) => {
    setSearchField(e.target.value)
    console.log(searchField)
  }
  // console.log(countries)

  

  return (
    <div>
        <div className='flex justify-between py-4 items-center px-8 bg-white'>
          <div className='relative'>
            <input
              className='py-2 px-12 outline-none cursor-pointer rounded-sm'
              type='search'
              placeholder='Search for a country'
              value={searchField}
              onChange={handleChange}
            />

            <FontAwesomeIcon className='absolute top-3 bottom-0 right-2' icon={faSearch}/>
        </div>

        <div className='  bg-white relative rounded-sm p-2 cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            <div>FIlter by Region</div>
              { isOpen &&
              <div className='absolute left-0 right-0 bg-white w-full text-left py-1 px-4 top-12 rounded'>
                <p><Link to='/'>All</Link></p>
                <p><Link to='/v3.1/Africa'>Africa</Link></p>
                <p><Link to='/v3.1/Americas'>America</Link></p>
                <p><Link to='/v3.1/Asia'>Asia</Link></p>
                <p><Link to='/v3.1/Europe'>Europe</Link></p>
                <p><Link to='/v3.1/Oceania'>Oceania</Link></p>
              </div>}
            </div>
        </div>
    </div>
  )
}
