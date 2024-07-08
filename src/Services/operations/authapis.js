import { toast } from "react-hot-toast"
import { endpoints } from "../apis"
import { setLoading, setToken } from "../../Slices/authSlice"
// import { resetCart } from "../../slices/cartSlices"
import { setUser } from "../../Slices/profileSlice"
import { apiConnector } from "../apisConnector"



const {
    SENDOTP_API,
    SIGNUP_API,
    LOGIN_API,
    RESETPASSTOKEN_API,
    RESETPASSWORD_API,
    SETBILLREMINDER_API,
    SHOWBILLREMINDER_API,
    SETMONEYLENDING_API,
    SHOWMONEYLENDING_API,
    SENDBALANCEEMAIL_API
  } = endpoints ;



  export function sendOtp(email, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", SENDOTP_API, {
          email,
          checkUserPresent: true,
        })
        console.log("SENDOTP API RESPONSE............", response)

        console.log(response.data.success)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        toast.success("OTP Sent Successfully")
        navigate("/verify-email")
      } catch (error) {
        console.log("SENDOTP API ERROR............", error)
        toast.error("Could Not Send OTP")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }


  export function signUp(
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    otp,
    navigate
  ) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", SIGNUP_API, {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          otp,
        })
  
        console.log("SIGNUP API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success("Signup Successful")
        navigate("/login")
      } catch (error) {
        console.log("SIGNUP API ERROR............", error)
        toast.error("Signup Failed")
        navigate("/signup")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }


  export function login(email, password, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", LOGIN_API, {
          email,
          password,
        })
  
        console.log("LOGIN API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        toast.success("Login Successful")
        dispatch(setToken(response.data.token))
        const userImage = response.data?.user?.image
          ? response.data.user.image
          : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
        dispatch(setUser({ ...response.data.user, image: userImage }))
        
        localStorage.setItem("token", JSON.stringify(response.data.token))
        localStorage.setItem("user", JSON.stringify(response.data.user))
        navigate("/dashboard/my-profile")
      } catch (error) {
        console.log("LOGIN API ERROR............", error)
        toast.error("Login Failed")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }

  export function logout(navigate) {
    return (dispatch) => {
      dispatch(setToken(null))
      dispatch(setUser(null))
      // dispatch(resetCart())
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logged Out")
      navigate("/")
    }
  }

  
  export function getPasswordResetToken(email , setEmailSent) {
    return async(dispatch) => {
      dispatch(setLoading(true));
      try{
        const response = await apiConnector("POST", RESETPASSTOKEN_API, {email,})
  
        console.log("RESET PASSWORD TOKEN RESPONSE....", response);
  
        if(!response.data.success) {
          throw new Error(response.data.message);
        }
  
        toast.success("Reset Email Sent");
        setEmailSent(true);
      }
      catch(error) {
        console.log("RESET PASSWORD TOKEN Error", error);
        toast.error("Failed to send email for resetting password");
      }
      dispatch(setLoading(false));
    }
  }







  export function SetReminder(
    BillAmount,
    BillName,
    ReminderDate,
  ) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", SETBILLREMINDER_API, {
           BillAmount,
           BillName,
           ReminderDate,
        })
  
        console.log("SetReminder API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success("SetReminder Successful")
      } catch (error) {
        console.log("SetReminder API ERROR............", error)
        toast.error("SetReminder Failed")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }


  
  export const showtReminder = async () => {
    let result = []
    try {
      const response = await apiConnector("GET", SHOWBILLREMINDER_API)
      console.log("SHOWBILLREMINDER_API API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Reminder Data")
      }
      result = response?.data?.data
    } catch (error) {
      console.log("SHOWBILLREMINDER_API API ERROR............", error)
      toast.error(error.message)
    }
    return result
  }


  
  export function setLending(
    Name,
    AmountGiven,
    TimeSpan,
    Intrest,
    email,
    phoneNo
  ) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      try {
        const response = await apiConnector("POST", SETMONEYLENDING_API, {
          Name,
          AmountGiven,
          TimeSpan,
          Intrest,
          email,
          phoneNo
        })
  
        console.log("setlending API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success("SetReminder Successful")
      } catch (error) {
        console.log("SetReminder API ERROR............", error)
        toast.error("SetReminder Failed")
      }
      toast.dismiss(toastId)
    }
  }


  export const showLending = async () => {
    let result = []
    try {
      const response = await apiConnector("GET", SHOWMONEYLENDING_API)
      console.log("SHOWBILLREMINDER_API API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Reminder Data")
      }
      result = response?.data?.data
    } catch (error) {
      console.log("SHOWBILLREMINDER_API API ERROR............", error)
      toast.error(error.message)
    }
    return result
  }

  export function sendReminderMail(email) {
    return async(dispatch) => {
      dispatch(setLoading(true));
      try{
        const response = await apiConnector("POST", SENDBALANCEEMAIL_API, {email,})
  
        console.log("RESET PASSWORD TOKEN RESPONSE....", response);
  
        if(!response.data.success) {
          throw new Error(response.data.message);
        }
  
        toast.success("Reset Email Sent");
        // setEmailSent(true);
      }
      catch(error) {
        console.log("SendReminder mail Error", error);
        toast.error("Failed to send Reminder");
      }
      dispatch(setLoading(false));
    }
  }
  