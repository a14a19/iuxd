import React from "react";
import "./privacyPolicy.css";
import ppData from "../../data/ppData";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <div className="mainbox">
      <div className="forContent bg-white text-black  font-archivo mx-4">
        <p className="para">
          At <Link to="/" className="underline">iUXD</Link>, we value your privacy and are committed to protecting your
          data. This Privacy Statement outlines how we, the UI/UX design experts
          at iUXD, collect and utilize your information to enhance your
          experience and deliver exceptional design services. This policy
          applies to the content crafted and showcased on our website.
        </p>
        <p className="para">
          Our practices adhere to the prevailing data protection laws in India
          and internationally, particularly the General Data Protection Law of
          India and the General Data Protection Regulation of the Indian Union.
        </p>
        <p className="para">
          We urge you to carefully read and understand the entirety of this
          document. Your trust is of utmost importance to us, and we want you to
          be fully informed about how we handle your data.
        </p>
      </div>
      <div className="blackLine1"></div>

      <div className="forTable mx-4">
        {ppData.map((item, index) => (
          <React.Fragment key={index}>
            {
              item.num === "11" || item.num === "06" || item.num === "07" ?
                <div className="flex mb-4 md:flex-row flex-col">
                  <div className="numColumn w-1/5">{item.num}</div>
                  <div className="titleColumn w-3/10 md:my-0 my-2">{item.title}</div>
                  <div className="descColumn md:w-1/2 w-full">{item.description} <Link to="mailto:hello@iuxd.agency" className="underline underline-offset-2">hello@iuxd.agency</Link>.</div>
                </div>
                :
                <div className="flex mb-4 md:flex-row flex-col">
                  <div className="numColumn w-1/5">{item.num}</div>
                  <div className="titleColumn w-3/10 md:my-0 my-2">{item.title}</div>
                  <div className="descColumn md:w-1/2 w-full">{item.description}</div>
                </div>
            }
            {index < ppData.length - 1 && <hr className="tableSeparator" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default PrivacyPolicy;
