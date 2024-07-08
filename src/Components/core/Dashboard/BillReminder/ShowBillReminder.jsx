import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { showtReminder } from "../../../../Services/operations/authapis";
import { useDispatch } from "react-redux";
import ShowBox from "./ShowBox";
export default function ShowBillReminder(){
  const [ BillData, setBillData] = useState([])
  useEffect(() => {
    const getReminderData = async () => {
      const Billdata =  await showtReminder()
      if (Billdata.length > 0) {
        setBillData(Billdata)
      }
    }
    getReminderData()
  }, [])
   console.log( "Finally BillData Nikal Gya",BillData)
    return(
        <>
      <h1 className="mb-5 text-3xl font-medium text-blue-200 mt-16">
         Your Scheduled Bills -:
     </h1>
          {
            BillData?.map((data) => (
             <ShowBox key={data?.id}  data ={data}/>
            ))}
        </>
    );
}