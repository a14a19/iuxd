import figma from "../../assets/Services/figma.svg";
import github from "../../assets/Services/github.svg";
import react from "../../assets/Services/react.svg";
import redux from "../../assets/Services/redux.svg";
import slack from "../../assets/Services/slack.svg";
import tailwind from "../../assets/Services/tailwindcss.svg";
import trello from "../../assets/Services/trello.svg";
import vscode from "../../assets/Services/vscode.svg";
import { useDispatch, useSelector } from 'react-redux';
import { displayOff, nameOfSliderComponent } from "../../features/slider/sliderSlice";
import { iconHide, iconShow } from "../../features/cursor/cursorSlice";
import { clientData, toolsData } from "../../data/clientsData.js";

const Client = () => {

    const { iconDisplayCircle } = useSelector((store) => store.cursor)
    const dispatch = useDispatch()

    const openContact = () => {
        dispatch(displayOff())
        setTimeout(() => {
            dispatch(nameOfSliderComponent({ name: "contact" }))
        }, 555)
    }

    return (
        <div className="main-div bg-[#fff] w-full flex flex-col gap-12 md:gap-16">
            <div className="inner-first flex justify-between items-center px-4 py-4 md:px-20 py-4">
                <h1 className="text-gray-900 text-xl">Clients</h1>
                <button onClick={() => dispatch(displayOff())} onPointerEnter={() => dispatch(iconShow({ type: "circle" }))} onPointerLeave={() => dispatch(iconHide({ type: "circle" }))}>
                    {iconDisplayCircle ?
                        <div className=' h-10 w-10 bg-blue-600 rounded-full flex justify-center items-center md:h-16 md:w-16'>
                            <div className="w-4 h-4 text-white md:w-8 md:h-8 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                        </div>
                        :
                        <div className=' h-10 w-10 bg-black rounded-full flex justify-center items-center md:h-16 md:w-16'>
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
            {/* <div className="w-full px-6 flex flex-col gap-16 justify-start items-start md:px-20">
                <div className="w-full h-full flex justify-start items-center">
                    <img className="w-full md:w-[90%] lg:w-[90%] rounded-lg" src={WorkoProject} />
                </div>
                <div className="flex flex-col gap-8">
                    <div className="upper-side flex justify-between items-center">
                        <div className="text-black font-normal text-2xl">Worko</div>
                    </div>
                    <div className="text-gray-500 text-xs md:text-base w-[60%] md:w-[50%] text-left">Elevating Worko's digital landscape, our team seamlessly fused ReactJS and Figma to craft a dynamic web experience. ReactJS ensures a responsive and captivating user journey, while Figma's canvas shapes a visually stunning interface, catapulting Worko into the digital forefront with a cutting-edge web presence.</div>
                </div>
            </div> */}
            {/* <div className="divider h-0.5 w-[90%] bg-gray-300 mx-auto m-20"></div> */}
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 w-full md:px-16 px-0 md:px-20 lg:gap-x-[2rem] gap-x-[4rem] md:gap-y-40 gap-y-20">
                {
                    clientData && clientData.map((client, index) => {
                        return (
                            <>
                                {
                                    client.name === "pleasure" ?
                                        <div className="md:w-16 w-12" key={index}>
                                            <img className="rounded-lg" style={{ filter: "grayscale(1) invert(1) brightness(10)" }} src={client.img} />
                                        </div>
                                        :
                                        <div className="md:w-16 w-12" key={index}>
                                            <img className="rounded-lg grayscale contrast-200" src={client.img} />
                                        </div>
                                }
                            </>
                        )
                    })
                }
            </div>
            <div className="divider h-0.5 w-[90%] bg-gray-300 mx-auto md:m-10 m-8"></div>
            <div className="inner-first flex justify-between items-center px-4 py-4 md:px-20 py-4">
                <h1 className="text-gray-900 text-xl">What we use</h1>
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 w-full md:px-16 px-0 md:px-20 lg:gap-x-[2rem] gap-x-[4rem] md:gap-y-40 gap-y-20">
                {
                    toolsData && toolsData.map((tool, index) => {
                        return (
                            <div className="md:w-16 w-12" key={index}>
                                <img className="rounded-lg grayscale contrast-200" src={tool.img} />
                            </div>
                        )
                    })
                }
            </div>
            <div className="divider h-0.5 w-[90%] bg-gray-300 mx-auto md:m-10 m-8"></div>
            <div className="flex justify-between md:items-center items-start px-6 md:px-20 gap-4 md:flex-row flex-col">
                <div className="text-black text-base md:text-4xl font-thin">Partner with Us</div>
                <div className="text-gray-500 text-sm md:w-[50%] w-full md:text-base ">We can help in many ways, including helping you see what you really need.</div>
            </div>
            <div className="flex ps-6 md:ps-20">
                <button className='border border-gray-400 text-gray-700 w-min whitespace-nowrap text-md sm:text-xl mb-20 mt-10 px-12 md:h-[58px] h-[50px] rounded-full' onClick={() => openContact()}>
                    Let's Talk
                </button>
            </div>
        </div>
    )
}

export default Client;