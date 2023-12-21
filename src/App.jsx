import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom'
import PrivacyPolicy from "./components/privacy-policy/privacyPolicy";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

// sub-components
// import Multiple from "./components/sub-components/contact/Contact";
// import PrivacyPolicy from "./components/privacy-policy/privacyPolicy";
// import Sample from "./components/sub-components/Clients"
// import Services from "./components/sub-components/services/services";

function App() {

  const location = useLocation()
  const currentPath1 = location.pathname.split("/")[1];
  const currentPath2 = location.pathname.split("/")[2];

  useLayoutEffect(() => {

    return () => window.scrollTo({
      top: 0,
      opacity: 0,
      behavior: "smooth",
    });

  }, [currentPath1, currentPath2])

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  )
}

export default App

{/* <main className="relative" onMouseMove={(e) => mouseOver(e)} onMouseEnter={() => setEnter(true)} onMouseLeave={() => setEnter(false)} style={{ cursor: "none", overflow: "hidden" }}>
      <Cursor position={position} enter={enter} />
      <HeroBanner />
      <Multiple />
      <PrivacyPolicy />
      <Services />
      <Sample/>
      <Menu />
    </main> */}
