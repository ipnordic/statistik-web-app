import { useContext } from "react";
import axios from "axios";
import CustomContext from "../../Context/CustomContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "../Styles/Login.module.css";
import { Button, Message, Icon, Dimmer, Loader } from "semantic-ui-react";
import ForgetPassword from "../ForgetPassword";

const validationSchema = yup.object({
  username: yup.string().required("Brugernavn (email) er påkrævet!"),
  password: yup.string().required("Kodeord er påkrævet!"),
});

const Login = () => {
  const {
    setIsLoggedIn,
    setUserEmail,
    setUserPassword,
    setError,
    error,
    loading,
    setLoading,
  } = useContext(CustomContext);

  const loginUser = async (username, password) => {
    const API_URL = `https://api-prod01.ipnordic.dk/api/Statistics/Queue`;
    const options = {
      auth: {
        username: username,
        password: password,
      },
    };

    try {
      setLoading("Logger dig ind...");
      const response = await axios(
        `${API_URL}/v2/Period?startDate=2100-01-01&endDate=2100-01-01`,
        options
      );

      setError(null);
      setLoading(null);
      setIsLoggedIn(true);
      return response.data;
    } catch (error) {
      setIsLoggedIn(false);
      setLoading(null);
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

  function isErrorsEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  const checkForErrors = isErrorsEmpty(errors);

  return (
    <div className={styles.container}>
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

        <div className={styles.input}>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Kodeord"
            {...register("password")}
          />
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
      {loading && (
        <div>
          <Dimmer active>
            <Loader size="large" active inline="centered">
              {loading}
            </Loader>
          </Dimmer>
        </div>
      )}

      {error && (
        <div className={styles.messageBox}>
          <Message negative>
            <Message.Header>Fejl!</Message.Header>
            {error}
          </Message>
        </div>
      )}
      {!checkForErrors ? (
        <div className={styles.messageBox}>
          <Message
            error
            header="Der skete en fejl med din indtastning"
            list={[errors.username?.message, errors.password?.message]}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Login;
