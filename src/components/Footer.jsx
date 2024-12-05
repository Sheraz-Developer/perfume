import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum qui aliquid, totam eligendi quidem illo aspernatur ratione velit laboriosam necessitatibus quasi, dolore quam tenetur veritatis fuga accusamus fugiat? Eum?
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+92-354-273-2444</li>
                    <li>Contact@gmail.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright &copy; 2024 demo.com - All Rights Reserveds.</p>
        </div>
    </div>
    )
}

export default Footer
