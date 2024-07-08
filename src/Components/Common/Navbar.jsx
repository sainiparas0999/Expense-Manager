import React from "react";
import {Link} from "react-router-dom";
import ExpenseManagerLogo from "../../assets and Data/Images/ExpenseManagerLogo.jpeg";
import { matchPath,useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import ProfileDropdown from "../core/auth/Profiledropdown";
const NavbarLinks = [
   {
      title:"Home",
      path:"/"
   },
   {
      title:"About Us",
      path:"/about",
   },
   {
      title:"Contact Us",
      path:"/contactUs"
   }
 ]
const Navbar = ()=>{

   const{token} = useSelector( (state) => state.auth) ;
  
   const location = useLocation();
   const matchRoute = (route) => {
      return matchPath({path:route}, location.pathname);
  }

    return(
     <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 mt-1">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
           <Link to="/" className=" flex justify-center items-center">
             <img src={ExpenseManagerLogo} width={40} height={4} loading='lazy' className="object-fit text-blue-600"/>
              <h1 className="ml-1 text-blue-100 font-bold">Expense Manager</h1>
           </Link>

           <ul className="flex gap-x-6 ">
              {NavbarLinks.map( (link , index) =>{
               return(
                 <li key={index}>
                     <Link to ={link?.path}>
                       <p className={`${ matchRoute(link.path) ? "text-yellow-25" : "text-richblack-25"}`}>
                        {link.title}
                       </p>
                     </Link>
                 </li>
               );
              })}
           </ul>
         
          
      {/* Login/SignUp/Dashboard */}
      <div className='flex gap-x-4 items-center'>

         {
            token === null && (
               <Link to="/login">
                     <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                        Log in
                     </button>
               </Link>
            )
         }
         {
            token === null && (
               <Link to="/signup">
                     <button  className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                        Sign Up
                     </button>
               </Link>
            )
         }
    
          {
            token !==null && <ProfileDropdown/>
          }
         </div>
            

        </div> 
     </div>
    );
}

export default Navbar ;