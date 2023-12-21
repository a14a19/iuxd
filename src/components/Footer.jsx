import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer-main px-20 py-4 mt-20">
            <div className="footer flex flex-col  gap-4 justify-between md:items-center md:flex-row items-start">
                <div className="left-side flex flex-col justify-start items-start md:flex flex-col justify-start items-start">
                    <div>All rights reversed 2023</div>
                    <Link to="/privacy-policy"><div className="underline underline-offset-1  ">Privacy Policy</div></Link>
                </div>
                <div className="right-side flex flex-row gap-4">
                    <Link><div className="insta underline underline-offset-1">Instagram</div></Link>
                    <Link><div className="linkedin underline underline-offset-1">LinkedIn</div></Link>
                    <Link><div className="dribbble underline underline-offset-1">Dribbble</div></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer