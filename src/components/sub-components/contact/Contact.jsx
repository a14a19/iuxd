import { useState } from "react";
import "./Contact.css";
import { useDispatch, useSelector } from 'react-redux';
import { displayOff } from "../../../features/slider/sliderSlice";
import { iconHide, iconShow } from "../../../features/cursor/cursorSlice";
import { Link } from 'react-router-dom'

const Contact = () => {

  const { iconDisplayCircle } = useSelector((store) => store.cursor)
  const dispatch = useDispatch()

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    closeDropdown();
  };


  return (
    <div className="login-container gap-9">
      <div className="w-full header mt-6 md:p-8 p-2 flex items-center justify-between">
        <div className="">Lets Talk</div>
        <div onClick={() => dispatch(displayOff())} onPointerEnter={() => dispatch(iconShow({ type: "circle" }))} onPointerLeave={() => dispatch(iconHide({ type: "circle" }))}>
          {iconDisplayCircle ?
            <div className='relative'>
              <div className=' md:h-16 md:w-16 w-10 h-10 bg-blue-600 rounded-full flex justify-center items-center'>
                <div className="md:w-8 md:h-8 w-4 h-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
              </div>
            </div>
            :
            <div className='relative'>
              <div className=' md:h-16 md:w-16 w-10 h-10 bg-black rounded-full flex justify-center items-center'>
                <div className="md:w-8 md:h-8 h-4 w-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      {/* Name */}
      <div className="form md:w-[80%] w-full">
        <input
          type="text"
          name="name"
          required
          autoComplete="off"
          className="input bg-white"
        />
        <label htmlFor="name" className="label-name">
          <span className="content-name">Name</span>
        </label>
      </div>

      {/* Email */}
      <div className="form md:w-[80%] w-full">
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          className="input bg-white"
        />
        <label htmlFor="email" className="label-name">
          <span className="content-name">Email</span>
        </label>
      </div>

      {/* Phone Number */}
      <div className="form md:w-[80%] w-full">
        <input
          type="number"
          name="phone"
          required
          autoComplete="off"
          className="input bg-white"
        />
        <label htmlFor="number" className="label-name">
          <span className="content-name">Phone Number</span>
        </label>
      </div>

      {/* Dropdown */}
      <div className="dropdown md:w-[80%] w-full">
        <div className="dropdown-toggle" onClick={toggleDropdown}>
          {selectedOption || "How can we help you"}
        </div>

        {isOpen && (
          <div className="dropdown-menu" onBlur={closeDropdown} tabIndex="0">
            <ul>
              <li onClick={() => handleOptionClick('Design System')}>Design System</li>
              <li onClick={() => handleOptionClick('Outsourcing')}>Outsourcing</li>
              <li onClick={() => handleOptionClick('Job Openings')}>Job Openings</li>
              <li onClick={() => handleOptionClick('Other Subjects')}>Other Subjects</li>
            </ul>
          </div>
        )}
      </div>

      {/* Message */}
      <div className="form md:w-[80%] w-full">
        <label htmlFor="message" style={{margin:"5px 0 0 10px"}}>Message</label>
        <textarea id="message" name="message" className="input bg-white overflow-hidden"></textarea>
        <p className="text-xs mt-8">
          We will never share your information. By submitting, you agree to our{' '}
          <Link to="/privacy-policy" className="underline-offset-4">Privacy Policy.</Link>
        </p>
      </div>

      {/* Submit Button */}
      {/* <button type="submit" className="submit-button">
        See Open Position
      </button> */}

      <button className='border border-black text-black text-md sm:text-xl md:mb-24 md:mt-20 mb-14 mt-10 md:px-12 sm:px-8 px-6 md:h-[64px] h-[56px] rounded-full'>
        Submit
      </button>
    </div >
  );
};

export default Contact;