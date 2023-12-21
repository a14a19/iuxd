import { useSelector } from "react-redux";
import cross from "../../assets/cross-small-w.svg"

function Cursor({ position, enter }) {

    const { iconDisplay } = useSelector((store) => store.cursor)

    return (
        <>
            {iconDisplay ?
                <div className='bg-red-600 rounded-full h-16 aspect-square w-16 fixed' style={enter ? { transform: `translate3D(${position.x - 25}px, ${position.y - 25}px, 0px)`, scale: '1', willChange: "transform", transformStyle: "preserve-3D" } : { transform: `translate3D(${position.x}px, ${position.y}px, 0px)`, scale: '0', willChange: "transform", transformStyle: "preserve-3D" }}>
                    {/* <img src={cross} className="md:h-4 h-3 text-white" alt="" /> */}
                </div>
                :
                <div className='bg-red-600 rounded-full h-5 aspect-square w-5 fixed' style={enter ? { transform: `translate3D(${position.x}px, ${position.y - 1}px, 0px)`, scale: '1', willChange: "transform", transformStyle: "preserve-3D", } : { transform: `translate3D(${position.x}px, ${position.y}px, 0px)`, scale: '0', willChange: "transform", transformStyle: "preserve-3D" }}></div>
            }
        </>
    )
}

export default Cursor