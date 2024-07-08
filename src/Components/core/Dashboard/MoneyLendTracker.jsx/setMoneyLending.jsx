import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLending, showLending } from "../../../../Services/operations/authapis";
export default function SetMoneyLending(){
    const dispatch = useDispatch();
    const {
        register,
        formState :{errors, isSubmitSuccessful} ,
        handleSubmit,
        reset
    } = useForm();

     const ReminderFunction = async(data) =>{
        
        const{
        Name,
        AmountGiven,
        TimeSpan,
        Intrest,
        email,
        phoneNo
        } = data ;

        console.log(Name , " " ,AmountGiven , " " , TimeSpan , " " ,Intrest , " " , email , " " ,phoneNo) ;
        dispatch(setLending(  Name,
            AmountGiven,
            TimeSpan,
            Intrest,
            email,
            phoneNo));
            // const result =  await showLending()
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
          reset({
            Name:"",
            AmountGiven: "",
            TimeSpan : "",
            Intrest:"",
            email:"",
            phoneNo:""
          })
        }
      }, [reset, isSubmitSuccessful])
    return (
   <form onSubmit={handleSubmit(ReminderFunction)}>
         <div className=" gap-5 lg:flex-row w-7/12 mx-auto border-2 border-richblack-600
             rounded-3xl p-5 h-full">

            <div className=" text-richblack-200 text-xl flex flex-col w-full m-2 gap-5">
                <input type="text" name="Name" 
                className="bg-richblack-700 rounded-lg h-[35px] p-2"
                id="Name"
                placeholder="Name of Borrower "
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                {...register("Name", { required: true })}
                />

                <input type="Number" name="AmountGiven" 
                className="bg-richblack-700 rounded-lg h-[35px] p-2"
                id="AmountGiven"
                placeholder="Enter Amount Lended"
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  {...register( "AmountGiven" , {required:true})}
                />

                <input type="Number" name="TimeSpan" 
                className="bg-richblack-700 rounded-lg h-[35px] p-2"
                id="TimeSpan"
                placeholder="Enter TimeSpan of Lending"
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  {...register( "TimeSpan" , {required:true})}
                />

                <input type="Number" name="Intrest" 
                className="bg-richblack-700 rounded-lg h-[35px] p-2"
                id="Intrest"
                placeholder="Intrest%"
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                {...register("Intrest", { required: true })}
                />

                <input type="email" name="email" 
                className="bg-richblack-700 rounded-lg h-[35px] p-2"
                id="email"
                placeholder="Email of Borrower"
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                {...register("email", { required: true })}
                />

                <input type="Number" name="phoneNo" 
                className="bg-richblack-700 rounded-lg h-[35px] p-2"
                id="phoneNo"
                placeholder="Contact of Borrower"
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                {...register("phoneNo", { required: true })}
                />

                </div>

            
                <div className="mb-3 mt-3 w-1/2 mx-auto ">
                    <button 
                    type="submit"
                    className=" w-full bg-blue-400 rounded-full text-richblack-100 py-2">
                        SetReminder
                    </button>
                </div>
                
                </div>
       </form>

    )
}