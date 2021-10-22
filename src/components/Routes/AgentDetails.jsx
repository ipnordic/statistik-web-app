import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Dimmer, Loader, Table, Button, Icon } from "semantic-ui-react";
import styles from "../Styles/AgentForm.module.css";
import CustomContext from "../../Context/CustomContext";

const AgentDetails = () => {
  const {
    setLoading,
    setApiData,
    apiData,
    startDate,
    endDate,
    isLoggedIn,
    userEmail,
    userPassword,
    loading,
    company,
  } = useContext(CustomContext);
  let { queueId } = useParams();
  const history = useHistory();

  useEffect(() => {
    setLoading("Henter data...");
    const fetchAgentData = async () => {
      const API_URL = `https://api-prod01.ipnordic.dk/api/Statistics/Queue`;
      const options = {
        auth: {
          username: userEmail,
          password: userPassword,
        },
      };
      try {
        const response = await axios(
          `${API_URL}/v2/Agent?startDate=${startDate}&endDate=${endDate}&company=${company}&queue=${queueId}`,
          options
        );
        response.data && setApiData(response.data);
        setLoading(null);
      } catch (error) {
        setLoading(null);
        console.log(error.response);
      }
    };
    fetchAgentData();
  }, [
    queueId,
    setApiData,
    setLoading,
    startDate,
    endDate,
    userEmail,
    userPassword,
    company,
  ]);

  return (
    <div className={styles.table}>
      {isLoggedIn ? (
        <>
          {loading && (
            <div>
              <Dimmer active>
                <Loader size="large" active inline="centered">
                  {loading}
                </Loader>
              </Dimmer>
            </div>
          )}
          {apiData && (
            <Button
              primary
              animated="fade"
              size="medium"
              onClick={() => {
                setApiData(null);
                history.goBack();
              }}
            >
              <Button.Content visible>Tilbage</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow left" />
              </Button.Content>
            </Button>
          )}
          {apiData && (
            <Table selectable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Navn</Table.HeaderCell>
                  <Table.HeaderCell>Lokalnummer</Table.HeaderCell>
                  <Table.HeaderCell>Kald besvaret</Table.HeaderCell>
                  <Table.HeaderCell>Gns. Samtaletid</Table.HeaderCell>
                  <Table.HeaderCell>Omstillet</Table.HeaderCell>
                  <Table.HeaderCell>DND Tid</Table.HeaderCell>
                  <Table.HeaderCell>Pause Tid</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {apiData &&
                  apiData.map((item) => (
                    <Table.Row key={Math.random()}>
                      <Table.Cell>{item.Name}</Table.Cell>
                      <Table.Cell>{item.Agent}</Table.Cell>
                      <Table.Cell>{item.Calls}</Table.Cell>
                      <Table.Cell>{item.AverageCalltime}</Table.Cell>
                      <Table.Cell>{item.Transfers}</Table.Cell>
                      <Table.Cell>{item.DND}</Table.Cell>
                      <Table.Cell>{item.Pause}</Table.Cell>
                    </Table.Row>
                  ))}
              </Table.Body>
            </Table>
          )}
        </>
      ) : (
        history.push("/statistik")
      )}
    </div>
  );
};

export default AgentDetails;
