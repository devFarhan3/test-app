import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


const Header = () => {

    const [toggle , setToggle] = React.useState(false)
  return (
    <div className='bg-[#2699fb] p-4'>
     
     <div className="max-w-[1240px] mx-auto  flex justify-between items-center py-[17px]">
        <div className='text-3xl font-bold'>
            Farhan React
        </div>

        {
            toggle ? <IoMdClose onClick={() => setToggle(!toggle)} className='text-3xl text-white  md:hidden block'/> :
            <IoIosMenu onClick={() => setToggle(!toggle)} className='text-3xl text-white  md:hidden block'/>
        }
        {/* <IoIosMenu onClick={() => setToggle(!toggle)} className='text-3xl text-white  md:hidden block'/>
        <IoMdClose onClick={() => setToggle(!toggle)} className='text-3xl text-white  md:hidden block'/> */}
        <ul className='hidden md:flex text-white gap-5'>
            <li>Home</li>
            <li>About</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
        </ul>
        {/* responsive menu */}
        <ul className={`md:hidden text-white fixed  top-[95px] bg-black w-full h-[100vh]  
        ${toggle ? 'left-[0]' : 'left-[-100%]'}   duration-300 ease-in `}>

            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Home</li>
            <li className='p-4'>Home</li>
            <li className='p-4'>Home</li>
        </ul>
       

     </div>
      
    </div>
  )
}

export default Header
