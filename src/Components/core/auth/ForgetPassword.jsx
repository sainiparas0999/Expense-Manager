import { useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi"
import { getPasswordResetToken } from "../../../Services/operations/authapis";
import { useDispatch,useSelector } from "react-redux";
function ForgetPassword(){
    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(false)
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.auth)
    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(getPasswordResetToken(email, setEmailSent))
      }

    return(

<div className=" w-[500px] h-full flex justify-center items-center border bg-richblack-800 rounded-3xl mx-auto mt-20">

{loading ? (
        <div className="text-white w-[500px] mx-auto text-bold">Loading...</div>
      ) :(
        <div className="max-w-[500px] p-4 lg:p-8">
<h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
  {!emailSent ? "Reset your password" : "Check email"}
</h1>

<form  onSubmit={handleOnSubmit}>
  {!emailSent && (
    <label className="w-full">
      <input
        required
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email address"
        className="form-style w-full bg-richblack-600 rounded-xl p-2 mt-5"
      />
    </label>
  )}
  <button
    type="submit"
    className="mt-6 w-full rounded-[8px] bg-blue-300 py-[10px] px-[12px] font-medium text-richblack-900 text-xl"
  >
    {!emailSent ? "Sumbit" : "Resend Email"}
  </button>
</form>
<div className="mt-6 flex items-center justify-between">
  <Link to="/login">
    <p className="flex items-center gap-x-2 text-richblack-5">
      <BiArrowBack /> Back To Login
    </p>
  </Link>
</div>
</div>
  )}
</div>
    );
}

export default ForgetPassword;