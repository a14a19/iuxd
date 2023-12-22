import iUXD from "../../assets/iUXD.jpeg";
import menuDuo from "../../assets/menu-duo.svg";
import { useState, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { iconHide, iconShow, iconShowHide } from "../../features/cursor/cursorSlice";
import { nameOfSliderComponent } from "../../features/slider/sliderSlice";

function Header() {

    const dispatch = useDispatch()

    const toggleCursor = useCallback(() => {
        // console.log("test", cursor.cursorEnter)
        dispatch(iconShowHide())
        // cursor.setCursorEnter(({ active }) => active = !active);

        // dispatch(iconShow())
        // setCursor(({ active }) => ({ active: !active }));
    }, []);

    const toggleCursorLeave = () => {
        // console.log("test out")
        // cursor.setCursorEnter(({ active }) => active = !active);
        // dispatch(iconShow())
        // setCursor(({ active }) => ({ active: !active }));
    };

    return (
        <header className="min-h-min flex items-center justify-between">
            <div className="h-full flex items-center">
                <img src={iUXD} className="h-10 me-3" alt="" />
                <h2 className="text-3xl font-bold">
                    iUXD
                </h2>
            </div>
            <button className="md:h-16 h-12 bg-[#121212a5] aspect-square rounded-full cursor-none flex justify-center items-center" onClick={() => dispatch(nameOfSliderComponent({ name: "contact" }))} onMouseOver={() => dispatch(iconShow())} onMouseLeave={() => dispatch(iconHide())}>
                <img src={menuDuo} className="md:h-7 h-5" alt="" />
            </button>
        </header>
    )
}

export default Header;