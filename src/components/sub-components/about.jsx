import { useDispatch, useSelector } from 'react-redux';
import { iconHide, iconShow } from '../../features/cursor/cursorSlice';
import { displayOff } from '../../features/slider/sliderSlice';

const About = () => {

    const { iconDisplayCircle } = useSelector((store) => store.cursor)
    const dispatch = useDispatch()

    return (
        <div className='w-full px-6'>
            <div className="header mt-6 p-8">
                <div className="text-black">About</div>
                <div onClick={() => dispatch(displayOff())} onPointerEnter={() => dispatch(iconShow({ type: "circle" }))} onPointerLeave={() => dispatch(iconHide({ type: "circle" }))}>
                    {iconDisplayCircle ?
                        <div className='relative'>
                            <div className=' h-16 w-16 bg-blue-600 rounded-full flex justify-center items-center'>
                                <div className="w-8 h-8 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='relative'>
                            <div className=' h-16 w-16 bg-black rounded-full flex justify-center items-center'>
                                <div className="w-8 h-8 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className='p-8 sm:p-0 mt-10'>
                <div className=" container flex flex-col sm:flex-row">
                    <div className="container font-extrabold text-2xl scale text-black">
                        Scale Design <br />made in Brazil.
                    </div>
                    <div className='container text-1 text-black'>
                        We are a proudly Brazilian digital product studio. We were born from the desire to mix
                        design with social impact and ended up discovering a vocation for the Design System. We
                        became experts on the subject,shaped the market and helped big companies from different
                        segments with this challenge.<br /><br />
                        Naturally, we started helping our customers to take the next
                        step: designing and developing amazing products from the Design System that we created.<br /><br />
                        We believe that design is about making a difference, but now we are adding technology and artificial intelligence in equal
                        measure to help our clients prepare for this revolution we are experiencing.
                    </div>
                </div>
                <div className='border-b border-gray-500 py-4 mt-8 sm:mt-0'></div>
                <div className='container flex flex-col sm:flex-row mt-16'>
                    <div className='container text-black font-extrabold text-2 text-2xl scale'>
                        Join our team!
                    </div>
                    <div className='container mr-20 text-1 text-2 mt-8 sm:mt-0 text-black'>
                        We believe that happiness at work comes from a balance between purpose, technical challenge, mental health and,
                        of course, a good pay. If you are looking for a challenging environment with lots of incredible people,
                        keep an eye on our vacancies. Meiuca could be your place.
                    </div>
                </div>
                <button className='border border-black text-black text-md sm:text-xl mb-24 mt-24 md:px-12 sm:px-8 px-6 md:h-[64px] h-[56px] rounded-full'>
                    See Open Position
                </button>
            </div>
        </div>
    )
}

export default About;
