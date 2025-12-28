import React from 'react'
import Header  from 'components/Header'

const Trips = () => {
  return (
    <main className='all-users wrapper'>
       <Header title={'Trips'} 
      description="View and edit AI-generated travel plans"
      ctaText="Create A trip"
      ctaUrl="/create-trip"
      />
      </main>
  )
}

export default Trips