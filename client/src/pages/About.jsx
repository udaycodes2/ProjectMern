import React from 'react'
import Title from '../components/Title'

const About = () => {
  return (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>

      <Title 
        title='About QuickStay' 
        subTitle='Making travel simple, comfortable, and memorable — one stay at a time.' 
        align='left'
      />

      <div className='mt-10 max-w-3xl text-gray-600 space-y-6'>
        <p>
          QuickStay is a hotel booking platform built to make finding and reserving 
          the perfect place to stay effortless. Whether you're planning a weekend 
          getaway or a longer trip, we connect you with a curated selection of 
          hotels, resorts, and villas across top destinations.
        </p>

        <p>
          Our platform gives hotel owners an easy way to list their properties, 
          manage rooms, and track bookings — while giving travelers a smooth, 
          transparent booking experience with real-time availability and secure 
          payments.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10'>
          <div className='p-5 border border-gray-200 rounded-xl'>
            <p className='text-2xl font-playfair text-gray-800'>Verified Stays</p>
            <p className='text-sm mt-2'>Every listing is reviewed for quality and accuracy before it goes live.</p>
          </div>
          <div className='p-5 border border-gray-200 rounded-xl'>
            <p className='text-2xl font-playfair text-gray-800'>Real-Time Booking</p>
            <p className='text-sm mt-2'>Instant availability checks mean no surprises at check-in.</p>
          </div>
          <div className='p-5 border border-gray-200 rounded-xl'>
            <p className='text-2xl font-playfair text-gray-800'>Secure & Simple</p>
            <p className='text-sm mt-2'>Straightforward booking flow with flexible payment options.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About