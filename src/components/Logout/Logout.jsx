import { useContext } from "react";
import { Button, Icon } from "semantic-ui-react";
import Context from "../../store/Context";

const Logout = () => {
  const { setIsLoggedIn } = useContext(Context);

  const onSubmit = () => {
    setIsLoggedIn(false);
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
