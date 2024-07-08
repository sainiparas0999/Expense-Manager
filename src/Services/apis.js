const BASE_URL = process.env.REACT_APP_BASE_URL 

export const endpoints = {
    SENDOTP_API:  "/auth/sendotp",
    SIGNUP_API:  "/auth/signup",
    LOGIN_API:   "/auth/login",
    RESETPASSTOKEN_API: "/auth/reset-password-token",
    RESETPASSWORD_API: "/auth/reset-password",
    SETBILLREMINDER_API: "/auth/BillReminder",
    SHOWBILLREMINDER_API: "/auth/getAllBillReminder",
    SETMONEYLENDING_API: "/auth/Balance",
    SHOWMONEYLENDING_API: "/auth/getAllBalance",
    SENDBALANCEEMAIL_API: "/auth/SendBalanceEmail",
  }