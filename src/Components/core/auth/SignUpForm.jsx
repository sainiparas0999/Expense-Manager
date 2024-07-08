import react, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSignupData  } from "../../../Slices/authSlice";
import { sendOtp } from "../../../Services/operations/authapis";
function SignUpForm(){
     const [showconfirmpassword , setshowconfirmPassword] = useState(false);
     const [showPassword , setshowPassword] = useState(false) ;
     const[loading , setLoading] = useState(false);
      const{
        register,
        handleSubmit,
        reset,
        formState:{errors , isSubmitSuccessful}
      } = useForm();
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const submitFormSignup = async (data) => {
        try {
        setLoading(true)
        const { firstName,lastName, email, password, confirmPassword , contactNumber } = data ;
          if(password !== confirmPassword){
            toast.error("Password do not match");
          }
         dispatch(setSignupData(data));
         dispatch(sendOtp(email, navigate))
          setLoading(false)
        } catch (error) {
          console.log("ERROR MESSAGE - ", error.message)
          setLoading(false)
        }
      }

      useEffect(() => {
        if (isSubmitSuccessful) {
          reset({
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            confirmPassword: "",
            contactNumber:"",
          })
        }
      }, [reset, isSubmitSuccessful])

    return(
        <form className="flex flex-col gap-7 w-full mt-10 rounded-lg"
         onSubmit={handleSubmit(submitFormSignup)}
         >
            <div className="flex flex-col gap-5 lg:flex-row w-7/12 mx-auto border-2 border-richblack-600
             rounded-3xl p-5">

            <div className=" text-richblack-200 text-xl flex flex-col w-full m-2 gap-5">
                <input type="text" name="firstName" 
                className="bg-richblack-700 rounded-lg h-[35px] p-2"
                id="firstName"
                placeholder="Enter First Name"
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                {...register("firstName", { required: true })}
                />

                <input type="text" name="lastName" 
                className="bg-richblack-700 rounded-lg h-[35px] p-2"
                id="lastName"
                placeholder="Enter Last Name"
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  {...register( "lastName" , {required:true})}
                />

                <input type="text" name="email" 
                className="bg-richblack-700 rounded-lg h-[35px] p-2"
                id="email"
                placeholder="Enter your email"
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  {...register("email" , {required:true})}
                />
               
               <input type={`${showPassword ? "text" :"password"}`}
                name="password" 
                className="bg-richblack-700 rounded-lg h-[35px] p-2"
                id="password"
                placeholder="password*"
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  {...register("password" , {required:true})}
                />

                 <input type={`${showconfirmpassword ? "text" :"password"}`}
                 name="confirmPassword" 
                className="bg-richblack-700 rounded-lg h-[35px] p-2"
                id="confirmPassword"
                placeholder="Confirm Password*"
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  {...register("confirmPassword" , {required:true})}
                />

                 <input type="number" name="contactNumber" 
                className="bg-richblack-700 rounded-lg h-[35px] p-2"
                id="contactNumber"
                placeholder="Contact Number"
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  {...register("contactNumber" ,
                   {
                    required:true,
                    minLength:{value:10 , message :"Invalid Phone Number" },
                    maxLength:{ value:12 , message:"Invalid phone Number"}
                }
            )}
                 
                />

                <div>
                    <button 
                    disabled={loading}
                    type="submit"
                    className=" w-full bg-blue-400 rounded-full text-richblack-100">
                        Create Account
                    </button>
                </div>
            </div>

            </div>

            <div className="text-white w-8/12 mx-auto">
                Already have an account ! 
                <button className="ml-2 text-blue-200">
                    <Link to={"/login"}>
                    Login Account
                    </Link>
                </button>
            </div>
        </form>
    );
}
export default SignUpForm ;