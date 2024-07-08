import react from "react";
function FeaturesGrid(){
     
    return(
        <div className="flex flex-wrap mt-10 justify-between gap-16 ">
          <div className="w-1/4 h-full flex flex-col gap-3 mt-5">
            <h1 className=" font-bold text-blue-200 mx-auto text-xl">Budget Handling</h1>
            <p className=" text-richblack-100 mx-auto text-center ">
               Do Your monthly budget handling with ease and perfection now. Get the advise from experts.
            </p>
          </div>

          <div className="w-1/4 h-full flex flex-col gap-3 mt-5 ">
            <h1 className=" font-bold text-blue-200 mx-auto text-xl">Financial Goals</h1>
            <p className=" text-richblack-100 mx-auto text-center ">
                Take Advantage to reach your financial goals with the perfect strategy.
            </p>
          </div>

          <div className="w-1/4 h-full flex flex-col gap-3 mt-5 ">
            <h1 className=" font-bold text-blue-200 mx-auto text-xl">Money Lending</h1>
            <p className=" text-richblack-100 mx-auto text-center ">
                Now didn't have to take stress of Rembering Money lends to friends.We will keep Account with Interest.
            </p>
          </div>

          <div className="w-1/4 h-full flex flex-col gap-3 mt-5 ">
            <h1 className=" font-bold text-blue-200 mx-auto text-xl">Bill Reminder</h1>
            <p className=" text-richblack-100 mx-auto text-center ">
               Can't Remember your Bills Payment on time . Don't Worry We will Remind You.
            </p>  
          </div>

          <div className="w-1/4 h-full flex flex-col gap-3 mt-5 ">
            <h1 className=" font-bold text-blue-200 mx-auto text-xl">Loan Tracking</h1>
            <p className=" text-richblack-100 mx-auto text-center ">
              Keep Track of the Loan and Interest and helps to Calculate the Paymnets and Months.
            </p>
          </div>

          <div className="w-1/4 h-full flex flex-col gap-3 mt-5 ">
            <h1 className=" font-bold text-blue-200 mx-auto text-xl">Investments Tracking</h1>
            <p className=" text-richblack-100 mx-auto text-center ">
               Do Your Investment and Notify us . Now keep track of your Investment and Intrests with the help of ExpenseManager.
            </p>
          </div>


          
        </div>
    );
}

export default FeaturesGrid;