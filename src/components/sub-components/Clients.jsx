import Fellow from "../../assets/Services/Fellow.jpg";
import Worko from "../../assets/Services/Worko.jpg";
import Three from "../../assets/Services/three.jpg";
import WorkoProject from "../../assets/Services/WorkoProject.png";
import { useDispatch, useSelector } from 'react-redux';
import { displayOff } from "../../features/slider/sliderSlice";
import { iconHide, iconShow } from "../../features/cursor/cursorSlice";

const Client = () => {

    const { iconDisplayCircle } = useSelector((store) => store.cursor)
    const dispatch = useDispatch()

    return (
        <div className="main-div bg-[#fff] w-full flex flex-col gap-12 md:gap-16">
            <div className="inner-first flex justify-between items-center px-4 py-4 md:px-20 py-4">
                <h1 className="text-gray-900 text-xl">Clients</h1>
                <button onClick={() => dispatch(displayOff())} onPointerEnter={() => dispatch(iconShow({ type: "circle" }))} onPointerLeave={() => dispatch(iconHide({ type: "circle" }))}>
                    {iconDisplayCircle ?
                        <div className=' h-12 w-12 bg-blue-600 rounded-full flex justify-center items-center md:h-16 md:w-16'>
                            <div className="w-4 h-4 text-white md:w-8 md:h-8 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                        </div>
                        :
                        <div className=' h-12 w-12 bg-black rounded-full flex justify-center items-center md:h-16 md:w-16'>
                            <div className="w-4 h-4 text-white md:w-8 md:h-8 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                        </div>
                    }
                </button>
            </div>
            <div className="w-full px-6 flex flex-col gap-16 justify-start items-start md:px-20">
                <div className="w-full h-full flex justify-start items-center">
                    <img className="w-full md:w-[90%] lg:w-[90%] rounded-lg" src={WorkoProject} />
                </div>
                <div className="flex flex-col gap-8">
                    <div className="upper-side flex justify-between items-center">
                        <div className="text-black font-normal text-2xl">Worko</div>
                    </div>
                    <div className="text-gray-500 text-xs md:text-base w-[60%] md:w-[50%] text-left">Elevating Worko's digital landscape, our team seamlessly fused ReactJS and Figma to craft a dynamic web experience. ReactJS ensures a responsive and captivating user journey, while Figma's canvas shapes a visually stunning interface, catapulting Worko into the digital forefront with a cutting-edge web presence.</div>
                </div>
            </div>
            <div className="divider h-0.5 w-[90%] bg-gray-300 mx-auto m-20"></div>
            <div className="flex justify-between items-center w-[92%] px-6 md:px-20">
                <div className="aspect-square w-16 md:w-22 lg:w-28">
                    <img className="rounded-lg grayscale contrast-200" src={Worko} />
                </div>
                <div className="aspect-square w-16 md:w-22 lg:w-28">
                    <img className="rounded-lg grayscale contrast-200" src={Three} />
                </div>
                <div className="aspect-square w-16 md:w-22 lg:w-28">
                    <img className="rounded-lg contrast-200" src={Fellow} />
                </div>
            </div>
            <div className="divider h-0.5 w-[90%] bg-gray-300 mx-auto m-20"></div>
            <div className="flex justify-between items-center px-6 md:px-20 gap-4">
                <div className="text-gray-500 text-base md:text-4xl font-thin">Partner with Us</div>
                <div className="text-gray-500 text-xs w-[60%] md:text-base ">We can help in many ways, including helping you see what you really need.</div>
            </div>
            <div className="flex justify-end pe-4 md:pe-12">
                <button className='border border-gray-400 text-gray-700 w-min whitespace-nowrap text-md sm:text-xl mb-24 mt-24 px-12 md:h-[58px] h-[50px] rounded-full'>
                    Let's Talk
                </button>
            </div>
        </div>
    )
}

export default Client;