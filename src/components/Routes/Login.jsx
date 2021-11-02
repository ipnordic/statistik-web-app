import { useCallback, useContext, useEffect } from "react";
import axios from "axios";
import CustomContext from "../../Context/CustomContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "../Styles/Login.module.css";
import { Button, Message, Icon } from "semantic-ui-react";
import ForgetPassword from "../ForgetPassword";
import { encryptData, decryptData } from ".././utils/utils";

const validationSchema = yup.object({
  username: yup.string().required("Brugernavn (email) er påkrævet!"),
  password: yup.string().required("Kodeord er påkrævet!"),
});

const Login = () => {
  const { REACT_APP_SALT } = process.env;
  const { setIsLoggedIn, setUserEmail, setUserPassword, setError, error } =
    useContext(CustomContext);

  const loginUser = useCallback(
    (username, password) => {
      const API_URL = `https://api-prod01.ipnordic.dk/api/Statistics/Queue`;
      const options = {
        auth: {
          username: username,
          password: password,
        },
      };

      axios(
        `${API_URL}/v2/Period?startDate=2100-01-01&endDate=2100-01-01`,
        options
      )
        .then((data) => {
          const user = { username: username, password: password };
          const encryptedData = encryptData(user, `${REACT_APP_SALT}`);
          localStorage.setItem("ipnordic_saveCredentials", encryptedData);
          setIsLoggedIn(true);
          setError(null);
        })
        .catch((err) => {
          setIsLoggedIn(false);
          setError("Noget gik galt, prøv igen.");
          console.log(err);
        });
    },
    [setError, setIsLoggedIn, REACT_APP_SALT]
  );

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

  useEffect(() => {
    let getLocalStorage = localStorage.getItem("ipnordic_saveCredentials");
    if (!getLocalStorage) {
      return;
    }
    const originalData = decryptData(getLocalStorage, `${REACT_APP_SALT}`);
    if (!originalData) {
      return;
    }
    setIsLoggedIn(true);
    loginUser(originalData.username, originalData.password);
    setUserEmail(originalData.username);
    setUserPassword(originalData.password);
  }, [setIsLoggedIn, loginUser, setUserEmail, setUserPassword, REACT_APP_SALT]);

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
          <Button animated="fade" primary>
            <Button.Content visible>Log ind</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow circle right" />
            </Button.Content>
          </Button>
          <ForgetPassword />
        </div>
      </form>

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
