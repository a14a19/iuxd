import { iconHide, iconShow } from "../../../features/cursor/cursorSlice";
import { displayOff } from "../../../features/slider/sliderSlice";
import "./services.css"
import { useDispatch, useSelector } from 'react-redux';

function Services() {

    const { iconDisplayCircle } = useSelector((store) => store.cursor)
    const dispatch = useDispatch()

    return (
        <div className="service-container">
            <div className="header mt-6 p-0 my-16">
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
                <div className="service-row my-8">
                    <div className="heading-content">
                        <h1 className="text-lg font-semibold mt-[2rem]">Discover everything we do.</h1>
                    </div>
                    <div className="heading-content">

                        <p>Although we are well known for our work with Design Systems, we also help large companies to accelerate or streamline their product operations with different operating models, mixing design, technology and, more recently, artificial intelligence.</p>
                    </div>

                </div>
                <hr></hr>
                <div className="service-content">
                    <div className="service-row my-8">

                        <div className="heading-content">
                            <h1 className="text-lg font-semibold">Design System</h1>
                            <p>We were pioneers and are a reference when it comes to Design Systems. We recently launched Design System as a Service, a mix of software, service and artificial intelligence to do this faster, with higher quality and, as if that weren't enough, cheaper.</p>
                        </div>
                        <div className="heading-content">
                            <h1 className="text-lg font-semibold">DS Team</h1>
                            <p>We can also be your squad of super experts to accelerate implementation and enhance the impact of the Design System in your organization. In this format, we work with designers, devs and product people trained and managed by us.</p>
                        </div>
                    </div>

                    <div className="service-row my-8">
                        <div className="heading-content">
                            <h1 className="text-lg font-semibold">Chapter as a Service</h1>
                            <p>We work on the outsourcing model to build your design and front end chapters (web and mobile). The cool thing is that because we know how to work from a Design System, we need much fewer people to deliver the same as other consultancies, generally less than half.</p>
                        </div>
                        <div className="heading-content">
                            <h1 className="text-lg font-semibold">Org & AI Ops</h1>
                            <p>These are two complimentary services that we offer to enhance our clients’ results. The first is about rethinking the way the entire product team organizes itself in search of more efficient formats. The second is about monitoring tools and hypotheses for applying AI in the product workflow, from design to development.</p>
                        </div>

                    </div>



                </div>
                <hr></hr>

            </section>
            <div className="service-row my-8">
                <div className="heading-content">

                    <p className="text-lg font-semibold">Partner with us!</p>
                </div>
                <div className="heading-content">

                    <p>We can help in many ways, including helping you see what you really need.</p>
                </div>
            </div>
            <button className='border border-black text-black text-md sm:text-xl mb-24 mt-24 md:px-12 sm:px-8 px-6 md:h-[64px] h-[56px] rounded-full'>
                Let's talk
            </button>


        </div>
    )
}

export default Services