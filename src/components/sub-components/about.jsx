import { useDispatch, useSelector } from 'react-redux';
import { iconHide, iconShow } from '../../features/cursor/cursorSlice';
import { displayOff } from '../../features/slider/sliderSlice';
import { Link } from 'react-router-dom';

const About = () => {

    const { iconDisplayCircle } = useSelector((store) => store.cursor)
    const dispatch = useDispatch()

    return (
        <div className='w-full px-6'>
            <div className="header mt-6 p-8 flex items-center">
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
            <div className='p-8 mt-10'>
                <div className=" container flex flex-col sm:flex-row justify-between">
                    <div className="font-bold text-2xl scale text-black md:w-[30%] w-full">
                        About iUXD Design & Development Agency
                    </div>
                    <div className='text-black md:w-[50%] w-full'>
                        At iUXD Company, we are dedicated to shaping exceptional digital experiences through innovative and user-centric design. Our mission is to bridge the gap between technology and user needs, delivering interfaces that are not only visually stunning but also intuitive and engaging. With a focus on collaboration, we work closely with our clients to understand their goals and transform concepts into seamless, effective user interactions.
                    </div>
                </div>
                <div className='border-b border-gray-500 py-4 my-8'></div>
                <div className='container flex flex-col sm:flex-row mt-16 justify-between'>
                    <div className='text-black font-bold text-2 text-2xl scale md:w-[40%] w-full'>
                        Join our team!
                    </div>
                    <div className='mt-8 sm:mt-0 text-black md:w-[50%] w-full'>
                        At iUXD, we are a passionate team specializing in product design, UI/UX design, and development. If you are a talented individual who wants to work with a brilliant team, contribute to innovative projects, and grow your skills, we would love to hear from you. To apply, please submit your resume, portfolio, and a brief description of why you would be a great fit for iUXD to <Link to="mailto:hello@iuxd.agency" className='underline underline-offset-2'>hello@iuxd.agency</Link>.
                    </div>
                </div>
                <Link to="https://www.linkedin.com/company/iuxd/jobs/" target='_blank'>
                    <button className='border border-black text-black text-md sm:text-xl my-24 md:px-12 sm:px-8 px-6 md:h-[64px] h-[56px] rounded-full'>
                        See Open Position
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default About;
