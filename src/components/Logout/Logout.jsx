import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import Context from "../../store/Context";

const Logout = () => {
  const { setIsLoggedIn, setApiData } = useContext(Context);
  const history = useHistory();

  const onSubmit = () => {
    setIsLoggedIn(false);
    setApiData(null);
    history.push("/");
    localStorage.removeItem("ipnordic_saveCredentials");
  };

  return (
    <div>
      <Button size="small" animated="fade" onClick={onSubmit}>
        <Button.Content visible>Log ud</Button.Content>
        <Button.Content hidden>
          <Icon name="log out" />
        </Button.Content>
      </Button>
    </div>
  );
};

export default Logout;
