import Template from "../Components/core/auth/Template";

function Signup() {
   console.log("you are in the SignUp Page ");
  return (
    <Template
      title="Expense Manager"
      description1="Welcome to the world of the Savings and Managing . We Care for your every Cents."
      description2="let us Know about you."
      formtype="signup"
    />
  )
}

export default Signup ;