import MoneyTrackerImage from "../../../assets and Data/Images/Transaction@4x.png"
function SimpleMoneyTracker(){
    return(
        <div className="w-full h-full bg-white flex justify-center items-center mt-[90px] ">
         
         <div className=" w-8/12 h-full flex mt-[100px] gap-10  mb-[90px]">
              
              <div className=" h-full object-fit">
                 <img
                  src={MoneyTrackerImage}
                   alt="Image Not Loading"
                 loading="lazy"
                 width={500}
                 height={700}
                 className="object-fit" />
              </div>

              <div className="h-full w-1/2 flex flex-col justify-center items-center px-9 gap-5  ">

                <h1 className=" text-[2.5rem] text-richblack-800 mx-auto mt-10">Simple Money Tracker</h1>
                <p className="text-richblack-500 pl-4 ">It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.</p>

              </div>
         </div>
        </div>
    );
}

export default SimpleMoneyTracker