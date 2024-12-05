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
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, pariatur? Nostrum quia fuga nulla accusantium perferendis sed rem ea, maxime tenetur iusto autem quo voluptatem cumque sint quisquam officia dolore!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nemo voluptatum non mollitia doloremque aspernatur dolorem inventore. Placeat culpa, quam animi cupiditate officiis sapiente, minus maiores sequi enim similique assumenda.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit alias vel explicabo asperiores, dignissimos nesciunt at voluptate deleniti pariatur delectus repellendus sunt animi eum non numquam consequuntur voluptatem beatae excepturi.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolor, harum non culpa, in ipsa vero quia, reiciendis at quaerat tenetur asperiores molestiae fugiat ullam iure ab tempore ipsam enim!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolor, harum non culpa, in ipsa vero quia, reiciendis at quaerat tenetur asperiores molestiae fugiat ullam iure ab tempore ipsam enim!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolor, harum non culpa, in ipsa vero quia, reiciendis at quaerat tenetur asperiores molestiae fugiat ullam iure ab tempore ipsam enim!</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
