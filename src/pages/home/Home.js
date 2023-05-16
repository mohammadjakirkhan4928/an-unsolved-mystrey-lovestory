import React from 'react'
import Novelcover from '../novelcover/Novelcover';
import Testimonials from '../review/Testimonials';



const Home = () => {
  return (
    <div>
      <Novelcover></Novelcover>
      <div className="relative w-full flex gap-4 py-6 overflow-x-auto">
      <Testimonials></Testimonials>
      </div>
    </div>
  )
}

export default Home