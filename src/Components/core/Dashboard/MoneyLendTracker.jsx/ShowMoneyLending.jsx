import { useEffect, useState } from "react";
import { showLending } from "../../../../Services/operations/authapis";
import LendShowBox from "./LendShowBox";
export default function ShowMoneyLending(){
  const [ BalanceData, setBalanceData] = useState([])
  useEffect(() => {
    const getReminderData = async () => {
      const data =  await showLending()
      if (data.length > 0) {
        setBalanceData(data)
      }
    }
    getReminderData()
  }, [setBalanceData])
   console.log( "Finally BillData Nikal Gya",BalanceData)
    return(
        <>
      <h1 className="mb-5 text-3xl font-medium text-blue-200 mt-16">
         Your Lended Money -:
     </h1>
         <div className="flex flex-wrap gap-10">
         {
              BalanceData?.map((data , index) => (
             <LendShowBox key={index}  data ={data}/>
            ))}
         </div>
        </>
    );
}
