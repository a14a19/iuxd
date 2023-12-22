import { useSelector } from "react-redux";
import cross from "../../assets/cross-small-w.svg"
// import cursorContext from "../../context/cursor-context";
// import { useContext } from "react";

function Cursor() {

    // const cursor = useContext(cursorContext);
    const { iconDisplay, position, enter } = useSelector((store) => store.cursor)

    // console.log(iconDisplay, "cursor")

    return (
        <aside className="absolute">
            {iconDisplay ?
                <div className='bg-blue-600 rounded-full h-20 aspect-square w-20 fixed z-10 flex items-center justify-center' style={{ transform: `translate3D(${position.x - 25}px, ${position.y - 25}px, 0px)`, scale: '1', willChange: "transform", transformStyle: "preserve-3D" }}>
                    <img src={cross} className="h-10 text-white" alt="" />
                </div>
                :
                <div className='bg-blue-600 rounded-full h-5 aspect-square w-5 fixed z-20' style={{ transform: `translate3D(${position.x}px, ${position.y - 1}px, 0px)`, scale: '1', willChange: "transform", transformStyle: "preserve-3D", }}></div>
            }
        </aside>
    )
}

export default Cursor