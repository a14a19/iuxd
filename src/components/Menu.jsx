import Footer from './Footer'

export default function Menu() {

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
                            <div className="flex flex-row gap-14 md:gap-24 justify-start items-center">
                                <div className="number text-2xl">04</div>
                                <div className="item text-4xl md:text-9xl group-hover:text-[#074aad]">Contact</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
