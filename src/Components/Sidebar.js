import React, {useState} from 'react'
import { FaHome, FaShoppingCart, FaInternetExplorer, FaHistory, FaHeart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { SiSpond } from "react-icons/si";
import { HiOutlineMenu } from "react-icons/hi";
import { NavLink } from 'react-router-dom';

export default function Sidebar({Children}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItems = [
        {
            path: "/",
            name: "Home",
            icon: <FaHome />
        },
        {
            path: '/account',
            name: "Account",
            icon: <MdAccountCircle />
        },
        {
            path: '/cart',
            name: "Cart",
            icon: <FaShoppingCart />
        },
        {
            path: '/explore',
            name: "Explore",
            icon: <FaInternetExplorer />
        },
        {
            path: '/history',
            name: "History",
            icon: <FaHistory />
        },
        {
            path: '/saved',
            name: "Saved",
            icon: <FaHeart />
        },
        {
            path: '/sponsored',
            name: "Sponsored",
            icon: <SiSpond />
        }
    ]
  return (

    <div className='bg-gray-500 rounded-2xl'>
     <div   className='text-white h-100vh  '>
        <div className='flex items-center mt-4 '>
           <div style={{ ml: !isOpen ? "100px" : "0px" }} className='flex text-2xl '>
           <HiOutlineMenu onClick={toggle}  />
           </div>
           <div className='text-3x1 ml-2'>
            <h6> Collections</h6>
           </div>
        </div>
                    {
                        menuItems.map((item, index) => (
                            <NavLink to={item.path} key={index} className="flex items-center py-5 gap-5 hover:bg-blue-400  w-full  transition-all  text-white h-3/5">
                                <div>{item.icon}</div>
                                <div>{item.name}</div>
                            </NavLink>
                        ))
                    }
     </div>
     <main className='w-full p-10'>{Children}</main>
    </div>
  )
}




