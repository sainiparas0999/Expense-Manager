import React from "react";

const Cards = ({Image , heading , desc})=>{
    return(
     <div className="w-10/12 h-3/4 max-w-maxContent bg-richblack-800 flex flex-col  mt-5 justify-center
      items-center hover:bg-richblack-700  hover:scale-150 hover:duration-1000  rounded-lg scale-110">
          <img src={Image} alt="" />
          <h1 className="font-bold text-white ">
            {heading}
          </h1>
     </div>
    );
}
export  default Cards ;