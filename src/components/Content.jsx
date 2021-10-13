import { useContext } from "react";
import Period from "./Queue/PeriodForm";
import CustomContext from "../Context/CustomContext";
import Login from "./Routes/Login";
import Form from "./Form";

const Agent = () => {
  const { isLoggedIn } = useContext(CustomContext);

  return (
    <>
      {isLoggedIn ? <Form /> : <Login />}

      <Period />
    </>
  );
};

export default Agent;
