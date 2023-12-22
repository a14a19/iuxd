import iUXD from "../../assets/iUXD.jpeg";
import menuDuo from "../../assets/menu-duo.svg";
import { useState, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { iconHide, iconShow, iconShowHide } from "../../features/cursor/cursorSlice";
import { nameOfSliderComponent } from "../../features/slider/sliderSlice";
import cross from "../../assets/cross-small-w.svg"
import plus from "../../assets/plus-w.svg"
import rightArr from "../../assets/right-arr-w.svg"

function Header() {

    const dispatch = useDispatch()
    const { iconDisplayCircle, iconDisplay } = useSelector((store) => store.cursor)

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
            {/* {iconDisplayCircle ?
                <div className="h-16 aspect-square rounded-full bg-blue-600 flex items-center justify-center" onClick={() => dispatch(nameOfSliderComponent({ name: "contact" }))} onPointerEnter={() => dispatch(iconShow({ type: "" }))} onPointerLeave={() => dispatch(iconHide({ type: "" }))}>
                    <img src={plus} className="h-10 text-white" alt="" />
                </div>
                :
                <button className="md:h-16 h-12 bg-[#121212a5] aspect-square rounded-full cursor-none flex justify-center items-center z-10" onClick={() => dispatch(nameOfSliderComponent({ name: "contact" }))} onPointerEnter={() => dispatch(iconShow({ type: "circle" }))} onPointerLeave={() => dispatch(iconHide({ type: "circle" }))}>
                    <img src={menuDuo} className="md:h-7 h-5" alt="" />
                </button>
            } */}
            <div onClick={() => dispatch(nameOfSliderComponent({ name: "contact" }))} onPointerEnter={() => dispatch(iconShow({ type: "circle" }))} onPointerLeave={() => dispatch(iconHide({ type: "circle" }))} className="z-10">
                {iconDisplayCircle ?
                    <button className="md:h-16 h-12 bg-blue-600 aspect-square rounded-full cursor-none flex justify-center items-center z-10" >
                        {/* <img src={menuDuo} className="md:h-7 h-5" alt="" /> */}
                        <img src={rightArr} className="h-6 text-white" alt="" />
                    </button>
                    :
                    <button className="md:h-16 h-12 bg-[#121212a5] aspect-square rounded-full cursor-none flex justify-center items-center z-10" >
                        <img src={menuDuo} className="md:h-7 h-5" alt="" />
                    </button>
                }
            </div>


        </header>
    )
}

export default Header;