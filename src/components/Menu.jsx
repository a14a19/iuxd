import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {Link} from 'react-router-dom'

export default function Menu() {
    const [open, setOpen] = useState(true)
    return (
        <>
            <div className="main px-20 py-10">
                <div className="menu flex flex-col gap-8 mb-10">
                    <div className="menu-heading flex flex-col">
                        Menu
                    </div>
                    <div className="menu-items flex flex-col gap-24">
                        <div className="row1 group flex flex-col gap-8">
                            <div className="divider bg-[#666] h-0.5 w-full group-hover:bg-[#fff]"></div>
                            <div className="flex flex-row gap-14 md:gap-24 justify-start items-center">
                                <div className="number text-2xl">01</div>
                                <div className="item text-4xl md:text-9xl group-hover:text-[#074aad]">About</div>
                            </div>
                        </div>
                        <div className="row1 group flex flex-col gap-8">
                            <div className="divider bg-[#666] h-0.5 w-full group-hover:bg-[#fff]"></div>
                            <div className="flex flex-row gap-14 md:gap-24 justify-start items-center">
                                <div className="number text-2xl">02</div>
                                <div className="item text-4xl md:text-9xl group-hover:text-[#074aad]">Service</div>
                            </div>
                        </div>
                        <div className="row1 group flex flex-col gap-8">
                            <div className="divider bg-[#666] h-0.5 w-full group-hover:bg-[#fff]"></div>
                            <div className="flex flex-row gap-14 md:gap-24 justify-start items-center">
                                <div className="number text-2xl">03</div>
                                <div className="item text-4xl md:text-9xl group-hover:text-[#074aad]">Clients</div>
                            </div>
                        </div>
                        <div className="row1 group flex flex-col gap-8">
                            <div className="divider bg-[#666] h-0.5 w-full group-hover:bg-[#fff]"></div>
                            <div className="flex flex-row gap-14 md:24 justify-start items-center">
                                <div className="number text-2xl">04</div>
                                <div className="item text-4xl md:text-9xl group-hover:text-[#074aad]">Contact</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
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
                                                <button
                                                    type="button"
                                                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="absolute -inset-2.5" />
                                                    <span className="sr-only">Close panel</span>
                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </Transition.Child>
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                            <div className="px-4 w-[60vw] sm:px-6 md:w-[80vw]">
                                                <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                                    Panel title
                                                </Dialog.Title>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">{/* Your content */}</div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            <div className="footer-main px-20 py-4 mt-20">
                <div className="footer flex flex-col  gap-4 justify-between md:items-center md:flex-row items-start">
                    <div className="left-side flex flex-col justify-start items-start md:flex flex-col justify-start items-start">
                        <div>All rights reversed 2023</div>
                        <Link><div className="underline underline-offset-1  ">Privacy Policy</div></Link>
                    </div>
                    <div className="right-side flex flex-row gap-4">
                        <Link><div className="insta underline underline-offset-1">Instagram</div></Link>
                        <Link><div className="linkedin underline underline-offset-1">LinkedIn</div></Link>
                        <Link><div className="dribbble underline underline-offset-1">Dribbble</div></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
