import { useState } from 'react';
import Cursor from '../components/sub-components/Cursor';
import HeroBanner from '../components/HeroBanner';
import Menu from '../components/Menu';
import CursorContext from '../context/cursor-context';
import ServicesMain from '../components/serviceMain/ServicesMain';

function Home() {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [enter, setEnter] = useState(false)
    const [cursorEnter, setCursorEnter] = useState(false)

    const mouseOver = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    }

    return (
        <main className="relative" onMouseMove={(e) => mouseOver(e)} onMouseEnter={() => setEnter(true)} onMouseLeave={() => setEnter(false)} style={{ cursor: "none", overflow: "hidden" }}>
            <CursorContext.Provider value={{ cursorEnter, setCursorEnter }}>
                <Cursor position={position} enter={enter} />
                <HeroBanner />
                <ServicesMain />
                {/* <Multiple /> */}
                {/* <PrivacyPolicy /> */}
                {/* <Services /> */}
                {/* <Sample/> */}
                <Menu />
            </CursorContext.Provider>
        </main>
    )
}

export default Home