import { useDispatch, useSelector } from 'react-redux';
import { iconHide, iconShow } from '../../features/cursor/cursorSlice';
import { displayOff } from '../../features/slider/sliderSlice';
import { Link } from 'react-router-dom';

const About = () => {

    const { iconDisplayCircle } = useSelector((store) => store.cursor)
    const dispatch = useDispatch()

    return (
        <div className='w-full md:px-6'>
            <div className="header mt-6 md:p-8 p-2 flex items-center">
                <div className="text-black">About</div>
                <div onClick={() => dispatch(displayOff())} onPointerEnter={() => dispatch(iconShow({ type: "circle" }))} onPointerLeave={() => dispatch(iconHide({ type: "circle" }))}>
                    {iconDisplayCircle ?
                        <div className='relative'>
                            <div className=' md:h-16 md:w-16 w-10 h-10 bg-blue-600 rounded-full flex justify-center items-center'>
                                <div className="md:w-8 md:h-8 w-4 h-4 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='relative'>
                            <div className='md:h-16 md:w-16 w-10 h-10 bg-black rounded-full flex justify-center items-center'>
                                <div className="md:w-8 md:h-8 w-4 h-4 text-white">
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
            <div className='md:p-8 p-2 mt-10'>
                <div className=" container flex flex-col sm:flex-row justify-between">
                    <div className="md:font-thin font-medium md:text-2xl text-lg scale text-black md:w-[30%] w-full">
                        About iUXD Studio
                    </div>
                    <div className='text-black md:w-[50%] w-full mt-2 md:mt-0'>
                        At iUXD, we're dedicated to shaping exceptional digital experiences through innovative and user-centric design. Through close collaboration with clients, we transform concepts into seamless, engaging user interactions.
                    </div>
                </div>
                <div className='border-b border-gray-500 py-4 my-8'></div>
                <div className='container flex flex-col sm:flex-row mt-16 justify-between'>
                    <div className='text-black md:font-thin font-medium md:text-2xl text-lg scale md:w-[40%] w-full'>
                        Join our team!
                    </div>
                    <div className='mt-2 md:mt-0 text-black md:w-[50%] w-full'>
                        We welcome passionate and motivated individuals who are eager to learn and grow, please submit your resume, portfolio, and a brief description of why you'd be a great fit for us at <Link to="mailto:hello@iuxd.agency" className='underline underline-offset-2'>hello@iuxd.agency</Link>.
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
