import { useContext } from "react";
import { Icon, Button } from "semantic-ui-react";
import Contex from "../../store/Context";

const ForgetPassword = () => {
  const { userEmail } = useContext(Contex);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Button
      type="button"
      animated="fade"
      onClick={() => {
        openInNewTab(
          `https://identity.ipnordic.dk/Identity/Account/forgotpassword/?account=${userEmail}&culture=da`
        );
      }}
    >
      <Button.Content visible>Glemt adgangskode?</Button.Content>
      <Button.Content hidden>
        <Icon name="arrow circle right" />
      </Button.Content>
    </Button>
  );
};

export default ForgetPassword;
