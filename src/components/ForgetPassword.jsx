import { useState, useContext } from "react";
import { Modal, Header, Icon, Button } from "semantic-ui-react";
import CustomContex from "../Context/CustomContext";

const ForgetPassword = () => {
  const [open, setOpen] = useState(false);

  const { userEmail } = useContext(CustomContex);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
      trigger={
        <Button type="button" animated negative>
          <Button.Content visible>Glemt adgangskode</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow circle right" />
          </Button.Content>
        </Button>
      }
    >
      <Header>
        <Icon name="user" />
        Glemt adgangskode
      </Header>

      <Modal.Content>
        <p>
          Hvis du har glemt din adgangskode, så kan du trykke på "Nulstil" for
          at få nulstillet din adgangskode.
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          type="button"
          basic
          color="red"
          inverted
          onClick={() => setOpen(false)}
        >
          <Icon name="remove" /> Luk
        </Button>
        <Button
          type="button"
          basic
          color="green"
          inverted
          onClick={() => {
            openInNewTab(
              `https://identity.ipnordic.dk/Identity/Account/forgotpassword/?account=${userEmail}&culture=da`
            );
            setOpen(false);
          }}
        >
          <Icon name="redo" /> Nulstil
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ForgetPassword;
