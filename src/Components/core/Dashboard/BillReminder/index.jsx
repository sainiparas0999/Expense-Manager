import SetBillReminder from "./SetBillReminder"
import ShowBillReminder from "./ShowBillReminder"
export default function BillReminder(){
    return(
        <div className="w-full h-full">

            <h1 className="text-blue-300 text-center w-[1000px] mb-4 text-3xl">Set Your Bill Reminder.</h1>
            <p className="font-edu-sa  italic text-center text-blue-100 mb-5 text-lg">
            Don't let due dates sneak up on you! Set a bill reminder and stay on top of your finances effortlessly.
              </p>
            <SetBillReminder/>
            <ShowBillReminder/>
        </div>
    )
}