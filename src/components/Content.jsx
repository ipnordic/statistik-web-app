import { useContext } from "react";
import Period from "./Queue/PeriodForm";
import AgentForm from "./Queue/AgentForm";

import AgentByDay from "./Queue/AgentByDay";
import Daily from "./Queue/Daily";
import CustomContext from "../Context/CustomContext";
import Login from "./Routes/Login";
import Form from "./Form";

const Agent = () => {
  const { apiStatistics, isLoggedIn } = useContext(CustomContext);

  return (
    <>
      {isLoggedIn ? <Form /> : <Login />}

      {apiStatistics === "Agent" ? (
        <AgentForm />
      ) : apiStatistics === "Period" ? (
        <Period />
      ) : apiStatistics === "AgentByDay" ? (
        <AgentByDay />
      ) : apiStatistics === "Daily" ? (
        <Daily />
      ) : (
        ""
      )}
    </>
  );
};

export default Agent;
