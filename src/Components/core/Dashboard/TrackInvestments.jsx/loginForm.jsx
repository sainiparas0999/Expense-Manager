import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

// import { login } from "../../../services/operations/authapis"

function LoginForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: "",
    Amount: "",
    Intrest:"",
    TimeSpan:""
  })

  const [showPassword, setShowPassword] = useState(false)

  const { Name, Amount , Intrest , TimeSpan } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    // dispatch(login(email, password, navigate))
  } 

  return (
    <form
      onSubmit={handleOnSubmit}
      className="mt-6 flex w-full flex-col gap-y-4"
    >
      <label className="w-full">
        <input
          required
          type="text"
          name="Name"
          value={Name}
          onChange={handleOnChange}
          placeholder="Enter Name of Investment"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
        />
      </label>
      <label className="relative">
        <input
          required
          type="Number"
          name="Amount"
          value={Amount}
          onChange={handleOnChange}
          placeholder="Enter Amount"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
        />
      </label>

      <label className="relative">
        <input
          required
          type="Number"
          name="Intrest"
          value={Intrest}
          onChange={handleOnChange}
          placeholder="Enter Intrest"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
        />
      </label>

      <label className="relative">
        <input
          required
          type="Number"
          name="TimeSpan"
          value={TimeSpan}
          onChange={handleOnChange}
          placeholder="Enter TimeSpan"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
        />
      </label>

      <button
        type="submit"
        className="mt-2 rounded-[8px] bg-yellow-50 py-[8px] px-[12px]  text-richblack-900"
      >
        Add Investment
      </button>
    </form>
  )
}

export default LoginForm