import React from "react";
import CTAButton from "../Components/core/home/textButton";
import { Link } from "react-router-dom";
import {FaArrowRight} from "react-icons/fa";
import Cards from "../Components/Common/Cards";
import { CardsData } from "../assets and Data/CardsData";
import FeaturesGrid from "../Components/core/home/FeaturesGrid";
import SimpleMoneyTracker from "../Components/core/home/SimpleMoneyTracker";
import PainlessBudgeting from "../Components/core/home/PainlessBudgeting";
import WholePicture from "../Components/core/home/WholePicture";
const Home = ()=>{
    return(
    <div className="">
        {/* section-1 */}

        <div className="flex flex-col mx-auto w-11/12  max-w-maxContent items-center justify-between">
           <h1 className="text-6xl font-semibold mt-8 text-blue-200 text-center"> Empower Your Financial Growth With Expense-Manager </h1>
           <h2 className="text-5xl mt-7 text-white"> We care for your every cents</h2>

           <Link to={"/signup"}>
               <div className="  group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all duration-100 hover:scale-95 w-fit">
                <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblack-900">
                    <p>Become an User</p>
                    <FaArrowRight />
                </div>
               </div>   
            </Link>
        </div>

        {/* section 2 */}
         <div className=" w-11/12 max-h-maxContent max-w-maxContent   mt-[100px] mx-auto ">

          <div className=" mx-auto  h-[200px] flex  ">
              {
                CardsData.map((ele , index)=>{
                   return(
                    <div key={index} className="p-[20px]  gap-16 ml-10 w-full flex ">
                         <Cards Image={ele.path} heading={ele.heading}/> 
                         <div className={ ` ${ele.key === 1
                          ? " w-[4px] h-2/3 bg-richblack-400 mt-5 "
                          : " "
                          }`}/>
                    </div>
                   ); 
                })
              }
          </div>

         </div>

         {/* section 3 */}

         <div className=" w-full h-full flex flex-col justify-center items-center mt-[150px]">

           <h1 className=" text-bold text-blue-200 text-4xl">Features our User love</h1>

           <div className="w-9/12 max-w-[1020px] h-full ">
            <FeaturesGrid/>
           </div>

         </div>


         {/* section 4  */}

         <SimpleMoneyTracker/>

         {/* section-4 */}
         <PainlessBudgeting/>


         {/* section-5 */}
         <WholePicture/>




    </div>
    );
}
export default Home ;