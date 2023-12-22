import { Fragment, useLayoutEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useSelector, useDispatch } from "react-redux";
import { displayOff } from '../features/slider/sliderSlice';
import About from './sub-components/about';
import Cursor from './sub-components/Cursor';
import { cursorEnter, cursorLeave, handlePosition } from '../features/cursor/cursorSlice';
import Services from './sub-components/services/services';
import Client from './sub-components/Clients';
import Contact from './sub-components/contact/Contact';

function SliderComp() {

    const { sliderShow, sliderName } = useSelector((store) => store.slider)
    const dispatch = useDispatch()

    const mouseOver = (e) => {
        // setPosition({ x: e.clientX, y: e.clientY });
        // dispatch(handlePosition({ x: e.clientX, y: e.clientY }))
    }

    const setSliderOpen = () => {
        return dispatch(displayOff())
    }

    return (
        <>
            <Cursor />
            <Transition.Root show={sliderShow} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setSliderOpen} >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-transparent bg-opacity-75 transition-opacity" onMouseMove={(e) => mouseOver(e)} onMouseEnter={() => dispatch(cursorEnter())} onMouseLeave={() => dispatch(cursorLeave())} style={{ cursor: "none", overflow: "hidden" }} />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden bg-[#0000008c]">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto relative w-full">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-in-out duration-500"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in-out duration-500"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                                {/* <button
                                                    type="button"
                                                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                    onClick={() => dispatch(displayOff())}
                                                >
                                                    <span className="absolute -inset-2.5" />
                                                    <span className="sr-only">Close panel</span>
                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                </button> */}
                                            </div>
                                        </Transition.Child>
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                            <div className="px-4 sm:px-6 w-[80vw]">
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6 w-[80vw]">
                                                {sliderName === "about" && <About />}
                                                {sliderName === "services" && <Services />}
                                                {sliderName === "clients" && <Client />}
                                                {sliderName === "contact" && <Contact />}
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export default SliderComp