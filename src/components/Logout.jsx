import { useContext } from "react";
import { Button, Icon } from "semantic-ui-react";
import CustomContext from "../Context/CustomContext";

const Logout = () => {
  const { setIsLoggedIn } = useContext(CustomContext);

  const onSubmit = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Button animated="vertical" onClick={onSubmit}>
        <Button.Content visible>Log ud</Button.Content>
        <Button.Content hidden>
          <Icon name="log out" />
        </Button.Content>
      </Button>
    </div>
  );
};

export default Logout;
