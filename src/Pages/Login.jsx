import Template from "../Components/core/auth/Template";

 function Login(){
 console.log(" you are in the Login Page");
     return(
        <div>
           <Template
            title="Welcome Back"
            description1= "Lets Start Saving your expenses from today"
            description2="Login By using your Email And Password."
            formType="login"
           />
        </div>
     );
 }

 export default Login ;