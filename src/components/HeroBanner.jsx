import { iconHide, iconShow } from "../features/cursor/cursorSlice";
import { nameOfSliderComponent } from "../features/slider/sliderSlice";
import Header from "./sub-components/Header"
import { useDispatch, useSelector } from "react-redux";

function HeroBanner() {

    const dispatch = useDispatch()

    return (
        <main className="w-full md:px-24 md:pt-20 px-4 pt-8 md:pb-28 pb-0 flex flex-col md:gap-36 gap-24">
            <Header />
            <div className="flex flex-col md:gap-24 gap-16">
                <div>
                    <h3 className="text-gray-500 md-hero:text-sm text-xs">Welcome to iUXD</h3>
                    <h1 className="md:text-[5rem] md-hero:text-[2.8rem] text-[2rem] max-w-[900px]">
                        Elevate your startup&apos;s success with Interaction User Experience Design (iUXD)
                    </h1>
                </div>
                <button className="border border-[#ffffff50] md:max-w-[130px] max-w-[115px] md:h-[64px] h-[56px] rounded-full md:text-base text-sm cursor-none z-20" onClick={() => dispatch(nameOfSliderComponent({ name: "about" }))} onPointerEnter={() => dispatch(iconShow({ type: "" }))} onPointerLeave={() => dispatch(iconHide({ type: "" }))}>About</button>
            </div>
        </main>
    )
}

export default HeroBanner