import iUXD from "../../assets/iUXD.jpeg";
import menuDuo from "../../assets/menu-duo.svg";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { iconHide, iconShow } from "../../features/cursor/cursorSlice";
import { nameOfSliderComponent } from "../../features/slider/sliderSlice";

function Header() {

    const dispatch = useDispatch()

    return (
        <header className="min-h-min flex items-center justify-between">
            <div className="h-full flex items-center">
                <img src={iUXD} className="h-10 me-3" alt="" />
                <h2 className="text-3xl font-bold">
                    iUXD
                </h2>
            </div>
            <button className="md:p-5 p-4 bg-[#121212] rounded-full cursor-none" onClick={() => dispatch(nameOfSliderComponent({ name: "contact" }))} onMouseEnter={() => dispatch(iconShow())} onMouseLeave={() => dispatch(iconHide())}>
                <img src={menuDuo} className="md:h-7 h-5" alt="" />
            </button>
        </header>
    )
}

export default Header