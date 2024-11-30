import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to FOREVER, where innovation meets excellence. Established in 2024, we are dedicated to delivering high-quality solutions tailored to your needs.</p>
          <p>At FOREVER, we believe in empowering businesses and individuals with services that inspire trust and drive success. Our team of passionate professionals is committed to exceeding expectations, fostering long-lasting partnerships, and creating meaningful impact in every project we undertake.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to empower individuals and organizations with innovative solutions, fostering growth, collaboration, and positive impact in a rapidly evolving world. We strive to deliver excellence, prioritize sustainability, and inspire progress through dedication, integrity, and visionary thinking</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Our mission is to ensure the highest standards of quality by implementing robust processes, fostering a culture of continuous improvement, and delivering reliable and consistent outcomes. We are committed to exceeding expectations by prioritizing precision, innovation, and customer satisfaction in every aspect of our work.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Our mission is to simplify lives by providing seamless, efficient, and accessible solutions that prioritize convenience without compromising quality. We strive to empower our customers with innovative services designed to save time, reduce effort, and enhance everyday experiences.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our mission is to deliver exceptional customer service by understanding, anticipating, and exceeding our customers' needs. We are dedicated to building lasting relationships through trust, responsiveness, and a commitment to excellence, ensuring every interaction is positive and impactful.</p>
        </div>
      </div>
    <NewsletterBox/>
    </div>
  )
}

export default About
