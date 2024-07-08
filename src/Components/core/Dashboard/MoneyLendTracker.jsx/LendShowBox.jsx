import { useSelector } from "react-redux";
import { formattedDate } from "../../../../Utils/Formatdate";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiBillFill } from "react-icons/ri";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { sendReminderMail } from "../../../../Services/operations/authapis";
export default function LendShowBox({ id , data}){
   const dispatch = useDispatch();

//   const handleReminderDelete = async (dataId) => {
//      console.log(TodayDate);
//   }

//   const sendEmail = async (email) => {
//    console.log("fuction call hua hai")
//       dispatch(sendReminderMail(email));
//  }

  const TodayDate = new Date();
  TodayDate.setHours(0, 0, 0, 0);
  const parsedGivenDate = new Date(data?.ReminderDate);
  parsedGivenDate.setHours(0, 0, 0, 0);
    return(
      
         <div className="min-w-[300px] max-w-[300px] bg-[#0a1122] rounded-xl">
         <div className="flex flex-col items-center  justify-between  p-2 px-3 ">
            
            <div className="w-full flex  items-center justify-start text-3xl text-blue-300 py-6">
              <RiBillFill/>
              {/* <RiMoneyRupeeCircleFill/> */}
            </div>

            <div className=" w-full h-full flex flex-col  gap-1">

               <h1 className="text-richblack-300 text-lg">Name: {data?.Name}</h1>
               <h1 className="text-richblack-300 text-lg">Rs: {data?.AmountGiven}.00</h1>
               <h1 className="text-richblack-300 text-lg">Phone No: {data?.phoneNo}</h1>
               <h1 className="text-richblack-300 text-lg">TimePeriod: {data?.TimeSpan} Months</h1>
               <h1 className="text-richblack-300 text-lg">Email: {data?.email}</h1>
            </div>
          </div>

          <button
               type="submit"  
               onClick={sendEmail("madhurawankhade2@gmail.com")}
               className="mt-2 ml-3 rounded-[8px] bg-blue-400 py-[8px] px-[12px] mb-4 text-richblack-100"
               >
               Send Reminder
            </button>

         </div>
    );
}