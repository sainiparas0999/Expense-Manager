import react from "react";
import { useSelector } from "react-redux";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
function Template({title , description1 , description2 , formtype}){
  const {loading} = useSelector( (state) =>state.auth);
   return(
      <div>
        {loading ?
      (<div className="text-white text-xl text-center mt-10">
         Loading...
         </div>) 
      :(<div className="text-white w-7/12 mx-auto mt-10 flex flex-col ">
        <div className="flex flex-col gap-3">
           <h1 className="text-[2rem] font-semibold leading-[2.375rem] text-blue-100 mx-auto font-edu-sa ">{title}</h1> 
           <p className="mt-4 text-[1.125rem] leading-[1.625rem] text-center">
              <span className="text-richblack-100 text-xl mt-1">{description1}</span>{" "}
              <br />
              <span className="font-edu-sa font-bold italic text-blue-100">
                {description2}
              </span>
            </p>
        </div>
         {formtype ==="signup" ? <SignUpForm/> : <LoginForm/> }
      </div>) 
      }
      </div>
   )
}
 export default Template ;