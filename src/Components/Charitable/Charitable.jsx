import React from 'react'
import pdf from "../../Assetes/pdfs/Radha Kishan Vansda.pdf"
import { TbCertificate } from "react-icons/tb";
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaBookOpenReader } from "react-icons/fa6";
const Charitable = () => {
    return (
        <>
            <div className="container text-center">
                <div className="flex justify-center items-center text-2xl gap-2 text-customGold mt-8">
                    <h3 className="flex items-center justify-center text-2xl border-b-4 border-customGold gap-4 tracking-[4px] font-semibold">
                        <FaBookOpenReader />
                        Yash Charitable Trust
                    </h3>
                </div>
                <div className='flex justify-center items-center'>
                <h2 className=' text-customBlue w-[50%] text-5xl'> <br /> Serving the  <span className='text-customGold'>  Community with Compassion  and Care </span></h2>
                </div>
                <div className='flex items-center justify-center '>
                    <p className='w-[60%] mt-4 text-contentColor'>
                        Under the guidance of Yash Campus, Yash Charitable Trust is dedicated to uplifting lives and fostering a healthier society. Operating in alignment with the Health and Family Welfare Department and the Gujarat Nursing Council (Government of Gujarat), we are committed to delivering impactful initiatives that promote:
                    </p>
                </div>
                <p className='mt-4 text-contentColor flex items-center justify-center gap-3'><span className='text-2xl text-customBlue'><FaHandshakeAngle /></span>Healthcare Access: Free medical camps and health awareness programs for underserved communities. </p>
                <p className='mt-4 text-contentColor flex items-center justify-center gap-3'><span className='text-2xl text-customBlue'><FaHandshakeAngle /></span>Family Welfare: Empowering families with the knowledge and support needed for a better quality of life.</p>
                <p className='mt-4 text-contentColor flex items-center justify-center gap-3'><span className='text-2xl text-customBlue'><FaHandshakeAngle /></span> Education Excellence: Providing nursing education and skill development in line with government standards. </p>
                <p className='mt-4 text-contentColor flex items-center justify-center gap-3'><span className='text-2xl text-customBlue'><FaHandshakeAngle /></span>
                    Join us in making a difference—together, we can build a healthier and more compassionate Gujarat!
                </p>
                {/* <div className=' flex items-center justify-center mt-7'>
                    <a
                        href={pdf} // The PDF link from the course data
                        download
                        className="w-[30%] flex items-center justify-center gap-3 bg-customGold text-white p-2 rounded-full hover:bg-customBlue hover:text-white transition-colors duration-300 mt-3 md:mt-0"
                    >
                        Download Documents <TbCertificate className="text-xl" />
                    </a>
                </div> */}
            </div>
        </>
    )
}

export default Charitable