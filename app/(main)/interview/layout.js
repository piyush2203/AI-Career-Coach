import React, { Suspense } from 'react'
import { BarLoader } from 'react-spinners'

const layout = ({children}) => {
  return (
    <div className='px-5 md:mt-[8vw] mt-[20vw]'>
        <Suspense fallback={<BarLoader className='mt-4 ' width={"100%"} color='gray'/>} > {children} </Suspense>
    </div>
  )
}

export default layout;
