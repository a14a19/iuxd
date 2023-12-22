import { iconHide, iconShow } from '../../features/cursor/cursorSlice';
import { nameOfSliderComponent } from '../../features/slider/sliderSlice';
import './ServicesMain.css'
import { useDispatch, useSelector } from "react-redux";

function ServicesMain() {

  const dispatch = useDispatch()

  return (
    <section>
      <div className='top1'>
        <img src='https://assets-global.website-files.com/64f0d8028f60928955365fe3/6504dc6dea836704657dbde3_circle%20lines.svg' alt='logo'></img>
      </div>
      <div className='top2 md:px-24 md:pt-[10rem] px-4 pt-8 pb-28'>
        <div className='top3'>
          <h2>Services</h2>
        </div>
        <div className='top4'>
          <h1>Your product operation <br /> can be much more <br />efficient</h1>
          <p className='mt-2'>We help you get your Design System off the<br /> ground and implement it very quickly, in<br /> addition to building leaner design and<br /> technology chapters, capable of delivering<br /> more with fewer people.</p>
          <button className="border border-[#ffffff50] md:max-w-[130px] max-w-[115px] mt-20 w-[150px] md:h-[64px] h-[56px] rounded-full md:text-base text-sm cursor-none z-30 absolute" onClick={() => dispatch(nameOfSliderComponent({ name: "services" }))} onPointerEnter={() => dispatch(iconShow({ type: "" }))} onPointerLeave={() => dispatch(iconHide({ type: "" }))}>Services</button>
          {/* <button className='btn'>Services</button> */}
        </div>
      </div>
    </section>
  );
}

export default ServicesMain;

