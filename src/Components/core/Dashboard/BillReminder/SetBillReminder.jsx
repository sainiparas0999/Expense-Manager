import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SetReminder } from "../../../../Services/operations/authapis";
import { ShowtReminder } from "../../../../Services/operations/authapis";
export default function SetBillReminder(){
    const dispatch = useDispatch();
    const {
        register,
        formState :{errors, isSubmitSuccessful} ,
        handleSubmit,
        reset
    } = useForm();

     const ReminderFunction = async(data) =>{
        
        const{
        BillAmount ,
        BillName,
        ReminderDate,
        } = data ;

        console.log(BillAmount , " " ,BillName , " " , ReminderDate) ;
        dispatch(SetReminder(BillAmount , BillName , ReminderDate));
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
          reset({
            BillAmount: "",
            BillName:"",
            ReminderDate:"",
          })
        }
      }, [reset, isSubmitSuccessful])
    return (
   <form onSubmit={handleSubmit(ReminderFunction)}>
         <div className=" gap-5 lg:flex-row w-7/12 mx-auto border-2 border-richblack-600
             rounded-3xl p-5 h-full">

            <div className=" text-richblack-200  flex flex-col w-full m-2 gap-5">
                <input type="number" name="BillAmount" 
               className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
                id="BillAmount"
                placeholder="Enter your BillAmount"
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                {...register("BillAmount", { required: true })}
                />

                <input type="text" name="BillName" 
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
                id="BillName"
                placeholder="Enter BillName"
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  {...register( "BillName" , {required:true})}
                />

                <input type="Date" name="ReminderDate" 
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-200"
                id="ReminderDate"
                placeholder="Enter ReminderDate"
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  {...register( "ReminderDate" , {required:true})}
                />

                </div>

            
                <div className="mb-3 mt-3 w-1/2 mx-auto ">
                    <button 
                    // disabled={loading}
                    type="submit"
                    className=" w-full bg-blue-400 rounded-full text-richblack-100 py-2">
                        SetReminder
                    </button>
                </div>
                
                </div>
       </form>

    )
}