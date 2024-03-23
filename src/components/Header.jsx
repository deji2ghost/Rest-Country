import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const Header = (props) => {

  const [searchField, setSearchField] = useState('')
  
  
  // searchCountry(filteredMonsters)
  

  return (
    <>
      <div className=''>
        <div className='flex justify-between bg-white py-2 px-8 shadow-md'>
          <h1><Link className='text-2xl font-bold'>Where in the world</Link></h1>

          <div className='flex justify-between items-center'>
            <FontAwesomeIcon icon={faMoon} />
            <p>Dark Mode</p>
          </div>
        </div> 
      </div>

        {/* {props.children} */}
    </>
  )
}