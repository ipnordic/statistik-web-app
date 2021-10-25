import { useState } from "react";
import { Modal, Header, Icon, Button } from "semantic-ui-react";

const Help = () => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      size="small"
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button size="small" type="button" animated secondary>
          <Button.Content visible>Hjælp</Button.Content>
          <Button.Content hidden>
            <Icon name="help" />
          </Button.Content>
        </Button>
      }
    >
      <Header icon="help" content="Hjælp" />
      <Modal.Content>
        <p>
          For at kunne bruge vores statistik web app, så skal du bruge dit
          ipnordic Communicator login. <br />
          Har du nogen spørgsmål, så er du velkommen til at ringe til{" "}
          <strong>89 10 10 10</strong> eller sende en mail til{" "}
          <strong>support@ipnordic.dk</strong>
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
      </Modal.Actions>
    </Modal>
  );
};

export default Help;
