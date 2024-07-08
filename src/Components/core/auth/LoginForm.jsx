import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import  {login} from "../../../Services/operations/authapis"
import { Link } from "react-router-dom";
import { setUser } from "../../../Slices/profileSlice";
 
function LoginForm(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const{
        register,
        handleSubmit,
        reset,
        formState:{errors , isSubmitSuccessful}

    } = useForm();



     const submitLoginForm = async(data) =>{
        const {
            email,
            password
        }= data ;

         console.log(" printing LoginData" , data);
        dispatch(login(email, password, navigate));

     }

     useEffect(() => {
        if (isSubmitSuccessful) {
          reset({
            email:"",
            password:""
          })
        }
      }, [reset, isSubmitSuccessful])
    return(
       <form onSubmit={handleSubmit(submitLoginForm)}>
         <div className=" gap-5 lg:flex-row w-7/12 mx-auto border-2 border-richblack-600
             rounded-3xl p-5 h-full">

            <div className=" text-richblack-200 text-xl flex flex-col w-full m-2 gap-5">
                <input type="email" name="email" 
                className="bg-richblack-700 rounded-lg h-[35px] p-2"
                id="email"
                placeholder="Enter your email"
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                {...register("email", { required: true })}
                />

                <input type="password" name="password" 
                className="bg-richblack-700 rounded-lg h-[35px] p-2"
                id="password"
                placeholder="Enter password"
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  {...register( "password" , {required:true})}
                />
                </div>

                <div className="mb-3 mt-3">
                    <button 
                    // disabled={loading}
                    type="submit"
                    className=" w-full bg-blue-100 rounded-full text-richblack-900 font-semibold">
                        Login Now
                    </button>
                </div>
                
               <div className=" flex w-full justify-between items-center mx-auto">

               <Link Link to="/forgot-password"
                className=" text-blue-200  mx-auto ml-2">
                  forgot password
                </Link>

                <Link link to="/signup"
                 className=" text-blue-200  mx-auto ml-[190px]">
                 Create Account
                </Link>


               </div>
                </div>


       </form>
    );
}

export default LoginForm ;