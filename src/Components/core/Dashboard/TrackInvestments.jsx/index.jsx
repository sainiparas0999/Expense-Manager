import Template from "./Template"
import signupImg from "../../../../assets and Data/Images/signup.webp"
export default function TrackInvestment(){
    return(
        <div className="w-full h-full">
              <Template
                title="Now Track Your Investment With Us."
                description1="Stay on Top of Your Investments."
                description2="Track, Analyze, and Grow Your Portfolio.."
                image={signupImg}
                formType="login"
                /> 
            {/* <ShowBillReminder/> */}
        </div>
    )
}