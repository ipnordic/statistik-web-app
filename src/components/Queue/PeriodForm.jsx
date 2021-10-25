import { Table, Button, Icon } from "semantic-ui-react";
import styles from "../Styles/PeriodForm.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CustomContext from "../../Context/CustomContext";
import Chart from "../Chart";
import {
  totalCalls,
  totalAnsweredCalls,
  totalTransfers,
  totalAbandoned,
} from "../../helpers/calcTotal";

const Period = () => {
  const { apiData, setApiData, queueNumber } = useContext(CustomContext);

  const tableTotalCalls = totalCalls(apiData);
  const tableTotalAnsweredCalls = totalAnsweredCalls(apiData);
  const tableTotalTransfers = totalTransfers(apiData);
  const tableTotalAbandoned = totalAbandoned(apiData);

  return (
    <div className={styles.table}>
      {apiData && (
        <div>
          {queueNumber === "" ? <Chart /> : ""}
          {apiData.length > 0 ? (
            <Table selectable striped>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Kønavn</Table.HeaderCell>
                  <Table.HeaderCell>Kønummer</Table.HeaderCell>
                  <Table.HeaderCell>Antal kald</Table.HeaderCell>
                  <Table.HeaderCell>Besvaret</Table.HeaderCell>
                  <Table.HeaderCell>Omstillet</Table.HeaderCell>
                  <Table.HeaderCell>Frafald</Table.HeaderCell>
                  <Table.HeaderCell>Gns. Samtaletid</Table.HeaderCell>
                  <Table.HeaderCell>Gns. Ventetid</Table.HeaderCell>
                  <Table.HeaderCell colSpan="2">
                    Længste ventetid
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {apiData &&
                  apiData
                    .sort((a, b) => {
                      return b.Calls - a.Calls;
                    })
                    .map((item) => (
                      <Table.Row key={Math.random()}>
                        <Table.Cell>{item.QueueName}</Table.Cell>
                        <Table.Cell>{item.QueueExtension}</Table.Cell>
                        <Table.Cell>{item.Calls}</Table.Cell>
                        <Table.Cell>{item.AnsweredCalls}</Table.Cell>
                        <Table.Cell>{item.Transfers}</Table.Cell>
                        <Table.Cell>{item.Abandoned}</Table.Cell>
                        <Table.Cell>{item.AverageCalltime}</Table.Cell>
                        <Table.Cell>{item.AverageHoldtime}</Table.Cell>
                        <Table.Cell>{item.MaxHoldtime}</Table.Cell>
                        <Table.Cell>
                          <Link
                            to={`/statistik/detaljer/${item.QueueExtension}`}
                          >
                            <Button
                              primary
                              animated="fade"
                              size="small"
                              onClick={() => {
                                setApiData(null);
                              }}
                            >
                              <Button.Content visible>Se mere</Button.Content>
                              <Button.Content hidden>
                                <Icon name="arrow right" />
                              </Button.Content>
                            </Button>
                          </Link>
                        </Table.Cell>
                      </Table.Row>
                    ))}
              </Table.Body>

              <Table.Footer fullWidth>
                <Table.Row>
                  <Table.HeaderCell>
                    <strong>Total</strong>
                  </Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                  <Table.HeaderCell>
                    <strong>{tableTotalCalls}</strong>
                  </Table.HeaderCell>
                  <Table.HeaderCell>
                    <strong>{tableTotalAnsweredCalls}</strong>
                  </Table.HeaderCell>
                  <Table.HeaderCell>
                    <strong>{tableTotalTransfers}</strong>
                  </Table.HeaderCell>
                  <Table.HeaderCell colSpan="6">
                    <strong>{tableTotalAbandoned}</strong>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default Period;
