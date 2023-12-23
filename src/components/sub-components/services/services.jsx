import { iconHide, iconShow } from "../../../features/cursor/cursorSlice";
import { displayOff, nameOfSliderComponent } from "../../../features/slider/sliderSlice";
import "./services.css"
import { useDispatch, useSelector } from 'react-redux';

function Services() {

    const { iconDisplayCircle } = useSelector((store) => store.cursor)
    const dispatch = useDispatch()

    const openContact = () => {
        dispatch(displayOff())
        setTimeout(() => {
            dispatch(nameOfSliderComponent({ name: "contact" }))
        }, 555)
    }

    return (
        <div className="service-container">
            <div className="header mt-6 p-0 my-16 flex items-center">
                <div className="">Services</div>
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

            <section className="services-section">
                {/* <div className="service-row my-8">
                    <div className="heading-content">
                        <h1 className="text-lg font-semibold mt-[2rem]">Discover everything we do.</h1>
                    </div>
                    <div className="heading-content">

                        <p>Although we are well known for our work with Design Systems, we also help large companies to accelerate or streamline their product operations with different operating models, mixing design, technology and, more recently, artificial intelligence.</p>
                    </div>

                </div> */}
                {/* <hr></hr> */}
                <div className="service-content">
                    <div className="service-row my-8 md:flex-row flex-col" >

                        <div className="heading-content">
                            <h1 className="text-base md:text-4xl font-thin">Design System</h1>
                            <p>We were pioneers and are a reference when it comes to Design Systems. We recently launched Design System as a Service, a mix of software, service and artificial intelligence to do this faster, with higher quality and, as if that weren't enough, cheaper.</p>
                        </div>
                        <div className="heading-content">
                            <h1 className="text-base md:text-4xl font-thin">Development</h1>
                            <p>Our developer system at iUXD fosters collaboration, innovation, and professional growth. With cutting-edge tools, code reviews, and cross-functional teamwork, we empower our developers to bring their ideas to life and deliver exceptional products.</p>
                        </div>
                    </div>

                    {/* <div className="service-row my-8">
                        <div className="heading-content">
                            <h1 className="text-lg font-semibold">Chapter as a Service</h1>
                            <p>We work on the outsourcing model to build your design and front end chapters (web and mobile). The cool thing is that because we know how to work from a Design System, we need much fewer people to deliver the same as other consultancies, generally less than half.</p>
                        </div>
                        <div className="heading-content">
                            <h1 className="text-lg font-semibold">Org & AI Ops</h1>
                            <p>These are two complimentary services that we offer to enhance our clients’ results. The first is about rethinking the way the entire product team organizes itself in search of more efficient formats. The second is about monitoring tools and hypotheses for applying AI in the product workflow, from design to development.</p>
                        </div>

                    </div> */}



                </div>

            </section>
            <div className="divider h-0.5 w-full bg-gray-300 mx-auto md:my-16 my-10"></div>
            <div className="flex justify-between gap-4 md:items-center items-start md:flex-row flex-col">
                <div className="text-black text-base md:text-4xl font-thin">Partner with Us</div>
                <div className="text-gray-500 text-sm md:w-[49%] w-full md:text-base ">We can help in many ways, including helping you see what you really need.</div>
            </div>
            <div className="flex mt-10">
                <button className='border border-gray-400 text-gray-700 w-min whitespace-nowrap text-md sm:text-xl mb-20 mt-10 px-12 md:h-[58px] h-[50px] rounded-full' onClick={() => openContact()}>
                    Let's Talk
                </button>
            </div>


        </div>
    )
}

export default Services