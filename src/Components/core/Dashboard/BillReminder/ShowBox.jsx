import { useSelector } from "react-redux";
import { formattedDate } from "../../../../Utils/Formatdate";
import { RiDeleteBin6Line } from "react-icons/ri";
export default function ShowBox({ id , data}){
  const handleReminderDelete = async (dataId) => {
     console.log(TodayDate);
  }

  const TodayDate = new Date();
  TodayDate.setHours(0, 0, 0, 0);
  const parsedGivenDate = new Date(data?.ReminderDate);
  parsedGivenDate.setHours(0, 0, 0, 0);
    return(
        <>
     <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-600 bg-richblack-800  p-8 px-12 mb-10">
        <div className="w-full h-full flex items-center justify-between">

          <div className="flex flex-col">
             <h1 className="text-white text-3xl ">{data?.BillName}</h1>
          </div>

          <div className="flex flex-col">
             <h1 className="text-white text-xl ">Bill Amount</h1>
             <p className="text-richblack-300 text-lg">
                  Rs:{data?.BillAmount}
             </p>
          </div>

          <div className="flex flex-col">
             <h1 className={`${TodayDate > parsedGivenDate ? "text-[#ff0000]":"text-white"} text-xl `}>{TodayDate > parsedGivenDate ?"Bill is Already Due":"Last Date to clear Bill"}</h1>
             <p className="text-richblack-300 text-lg">
                {formattedDate(data?.ReminderDate)}
             </p>
          </div>
           

          <button
                   onClick={handleReminderDelete(data?._id)}
                    className="px-1 transition-all duration-200 hover:scale-110 hover:text-[#ff0000be]"
                  >
                    <RiDeleteBin6Line size={20} />
                  </button>
        </div>
     </div>
       
       </>
    );
}