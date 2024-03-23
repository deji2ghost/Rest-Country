import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { DetailsPage } from './pages/DetailsPage'
import { Region } from './pages/Region'
import { Body } from './components/Body'
import { SearchCountry } from './components/SearchCountry'
import { useState } from 'react'

function App() {
  const [regions, setRegions] = useState([]);
  const [countries, setCountries] = useState([])
  const [searchField, setSearchField] = useState('')

  const filteredCountry = countries.filter(country => {
    return country.name.common.toLowerCase().includes(searchField.toLocaleLowerCase())
  })

  const filteredRegion = regions.filter(region => {
    return region.name.common.toLowerCase().includes(searchField.toLocaleLowerCase())
  })

  return(
    <div className='bg-slate-300'>

      <BrowserRouter>
        <div className='shadow-md'>
          <Header />
          <SearchCountry searchField={searchField} setSearchField={setSearchField} />
        </div>
        <Routes>
          <Route index element={<Body countries={countries} setCountries={setCountries} filteredCountry={filteredCountry}/>} />
          <Route path='v3.1/:region' element={<Region regions={regions} setRegions={setRegions} filteredRegion={filteredRegion}/>}/>
          <Route path='capital/:capital' element={<DetailsPage />}/>
          <Route path='/*' element={<div>Error Page</div>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )

}

export default App
