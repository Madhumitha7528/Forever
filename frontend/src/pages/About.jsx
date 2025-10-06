import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Our brand offers thoughtfully designed, high-quality essentials crafted for the modern individual.</p>
          <p>We focus on timeless style, versatile pieces, and sustainable materials to elevate your everyday wardrobe.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to provide a budget-friendly clothing store that has colorful and trendy pieces for men, women and kids.</p>
        </div>
      </div>
      <div className='text-xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance : </b>
          <p className='text-gray-600'>Experience the blissful ease of our breezy cotton sundress.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience : </b>
          <p className='text-gray-600'>Its soft, breathable fabric keeps you cool, while the playful pattern and flirty hemline add effortless style to your summer wardrobe.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service : </b>
          <p className='text-gray-600'>Identify and resolve customer concerns, ensuring their satisfaction and exceeding expectations.</p>
        </div>
      </div>
      <NewsLetter />
    </div>
  )
}

export default About
