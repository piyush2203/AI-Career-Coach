import React from 'react'

const CoverLetter = async({params}) => {
    const id = await params.id;
  return (
    <div className='mt-20'>
      Cover Letter: {id}
    </div>
  )
}

export default CoverLetter
