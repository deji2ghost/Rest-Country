import React, { useEffect } from 'react'

export const Country = ({country}) => {

    // const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoading(false)
    //     }, 100);
    // })
  return (
    <div>
        {/* { isLoading ? 
            ""
            :
            <div key={i} className='text-black-500'>
                <div>{console.log(country.area)}</div>
            </div>
        } */}
        {console.log(country)}
    </div>
  )
}
