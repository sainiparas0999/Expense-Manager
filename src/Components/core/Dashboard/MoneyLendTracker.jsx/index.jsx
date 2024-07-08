import SetMoneyLending from "./setMoneyLending"
import ShowMoneyLending from "./ShowMoneyLending"
export default function MoneyLendTracker(){
    return(
        <div className="w-full h-full">

        <h1 className="text-blue-200 text-center w-[1000px] mb-3 text-3xl">Personal Loan Log: Tracking Lended Funds</h1>
        <p className="font-edu-sa  italic text-center text-blue-100 mb-5 text-lg">
        Friendship is built on trust, but clear records keep it strong. By keeping track of the money you lend, you ensure transparency and maintain the harmony that true friendship deserves.
          </p>
        <SetMoneyLending/>
        <ShowMoneyLending/>
    </div>
    )
}