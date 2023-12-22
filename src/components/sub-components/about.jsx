import React from 'react'

const About = ()=> {
  return (
    <div className='sm:w-4/5 float-right'>
        <div className="container header sm:mt-32 p-8">
                <div className="sm:ml-20 text-1">About</div>
                <div>
                    <div className='relative'>
                        <div className=' h-16 w-16 bg-black rounded-full sm:mr-20 flex justify-center items-center'>
                            <div className="w-8 h-8 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                             </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className='p-8 sm:p-0'>
            <div className=" container flex flex-col sm:flex-row sm:mt-32">
                <div className="container font-extrabold text-2xl scale text-black sm:ml-20">
                        Scale Design <br/>made in Brazil.
                </div>
                <div className='container mr-20 text-1 text-2 mt-8 sm:mt-8'>
                        We are a proudly Brazilian digital product studio. We were born from the desire to mix 
                        design with social impact and ended up discovering a vocation for the Design System. We 
                        became experts on the subject,shaped the market and helped big companies from different 
                        segments with this challenge.<br/><br/>
                        Naturally, we started helping our customers to take the next 
                        step: designing and developing amazing products from the Design System that we created.<br/><br/>
                        We believe that design is about making a difference, but now we are adding technology and artificial intelligence in equal 
                        measure to help our clients prepare for this revolution we are experiencing.
                </div>
            </div>
            <div className='border-b border-gray-500 py-4 mt-8 sm:mt-0 sm:ml-20 sm:mr-20'></div>
            <div className='container flex flex-col sm:flex-row mt-16 sm:mt-24'>
                <div className='container text-black font-extrabold text-2 text-2xl scale sm:ml-20'>
                    Join our team!
                </div>
                <div className='container mr-20 text-1 text-2 mt-8 sm:mt-0'>
                    We believe that happiness at work comes from a balance between purpose, technical challenge, mental health and,
                    of course, a good pay. If you are looking for a challenging environment with lots of incredible people,
                    keep an eye on our vacancies. Meiuca could be your place.
                </div>
            </div>
            <button className='border border-black text-black text-md sm:text-xl mb-24 mt-24 px-16 py-8 sm:py-4 sm:px-4 rounded-full text-2 sm:ml-20'>
                See Open Position
            </button>   
        </div>
    </div>
  )
}

export default About;
