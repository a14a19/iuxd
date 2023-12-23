import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer-main py-4 md:px-24 md:pt-20 px-4 md:pt-12 pt-8 cursor-none">
            <div className="footer flex flex-col  gap-4 justify-between md:items-center md:flex-row items-start">
                <div className="left-side flex flex-col justify-start items-start md:flex flex-col justify-start items-start">
                    <div className='cursor-none'>All rights reversed 2023</div>
                    <Link to="/privacy-policy" className='cursor-none'><div className="underline underline-offset-1  ">Privacy Policy</div></Link>
                </div>
                <div className="right-side flex flex-row gap-4 cursor-none">
                    <Link target="_blank" title='Instagram' to="https://www.instagram.com/iuxdstudio/" className='cursor-none'><div className="insta underline underline-offset-1 cursor-none">Instagram</div></Link>
                    <Link target="_blank" title='LinkedIn' to="https://www.linkedin.com/company/iuxd/" className='cursor-none'><div className="linkedin underline underline-offset-1" >LinkedIn</div></Link>
                    <Link target="_blank" title='Twitter' to="https://twitter.com/iuxd_design" className='cursor-none'><div className="dribbble underline underline-offset-1">Twitter</div></Link>
                    <Link target="_blank" title='Facebook' to="https://www.facebook.com/iuxdesign/" className='cursor-none'><div className="dribbble underline underline-offset-1 cursor-none">Facebook</div></Link>
                    <Link target="_blank" title='Crunchbase' to="https://www.crunchbase.com/organization/iuxd" className='cursor-none'><div className="dribbble underline underline-offset-1 cursor-none">Crunchbase</div></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer