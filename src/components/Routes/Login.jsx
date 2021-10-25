import React, { useContext } from "react";
import axios from "axios";
import CustomContext from "../../Context/CustomContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "../Styles/Login.module.css";
import { Button, Message, Icon } from "semantic-ui-react";
import ForgetPassword from "../ForgetPassword";

const validationSchema = yup.object({
  username: yup.string().required("Dette felt er påkrævet!"),
  password: yup.string().required("Dette felt er påkrævet!"),
});

const Login = () => {
  const { setIsLoggedIn, setUserEmail, setUserPassword, setError, error } =
    useContext(CustomContext);

  const loginUser = async (username, password) => {
    const API_URL = `https://api-prod01.ipnordic.dk/api/Statistics/Queue`;
    const options = {
      auth: {
        username: username,
        password: password,
      },
    };

    try {
      const response = await axios(
        `${API_URL}/v2/Period?startDate=2100-01-01&endDate=2100-01-01`,
        options
      );

      setIsLoggedIn(true);
      setError(null);
      return response.data;
    } catch (error) {
      setIsLoggedIn(false);

      setError("Noget gik galt, prøv igen.");
      console.log(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    setUserEmail(data.username);
    setUserPassword(data.password);
    loginUser(data.username, data.password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Email"
            {...register("username")}
          />
        </div>
        <div className={styles.validateErrorInput}>
          {errors.username?.message}
        </div>
        <div className={styles.input}>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Kodeord"
            {...register("password")}
          />
        </div>
        <div className={styles.validateErrorInput}>
          {errors.password?.message}
        </div>
        <div className={styles.btn}>
          <Button animated primary>
            <Button.Content visible>Log ind</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow circle right" />
            </Button.Content>
          </Button>
          <ForgetPassword />
        </div>
      </form>

      {error && (
        <div>
          <Message negative>
            <Message.Header>Fejl!</Message.Header>
            {error}
          </Message>
        </div>
      )}
    </div>
  );
};

export default Login;
