import { useContext } from "react";
import Period from "./PeriodForm/PeriodForm";
import Context from "../store/Context";
import Login from "./Login/Login";
import Form from "./Form/FormInput";

const Agent = () => {
  const { isLoggedIn } = useContext(Context);

  return (
    <main>
      {isLoggedIn ? <Form /> : <Login />}

      {isLoggedIn ? <Period /> : ""}
    </main>
  );
};

export default Agent;
