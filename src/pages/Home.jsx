// import { useState } from 'react';
import Cursor from '../components/sub-components/Cursor';
import HeroBanner from '../components/HeroBanner';
import Menu from '../components/Menu';
// import CursorContext from '../context/cursor-context';
import ServicesMain from '../components/serviceMain/ServicesMain';
import { useDispatch } from 'react-redux';
import { cursorEnter, cursorLeave, handlePosition } from '../features/cursor/cursorSlice';
import SliderComp from '../components/SliderComp';
// import Multiple from '../components/sub-components/contact/Contact';
// import Services from '../components/sub-components/services/services';
// import Sample from '../components/sub-components/Clients';
// import About from '../components/sub-components/about';

function Home() {

    const dispatch = useDispatch()

    // const [position, setPosition] = useState({ x: 0, y: 0 });
    // const [enter, setEnter] = useState(false)

    const mouseOver = (e) => {
        // setPosition({ x: e.clientX, y: e.clientY });
        dispatch(handlePosition({ x: e.clientX, y: e.clientY }))
    }

    return (
        <main className="relative" onMouseMove={(e) => mouseOver(e)} onMouseEnter={() => dispatch(cursorEnter())} onMouseLeave={() => dispatch(cursorLeave())} style={{ cursor: "none", overflow: "hidden" }}>
            <Cursor />
            <SliderComp />
            <HeroBanner />
            <ServicesMain />
            {/* <Multiple />
            <Services />
            <About />
            <Sample /> */}
            <Menu />
        </main>
    )
}

export default Home