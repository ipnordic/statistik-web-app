import { Table, Button, Icon, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useContext, useMemo, useState } from "react";
import Context from "../../store/Context";
import Chart from "../Chart/Chart";
import {
  totalCalls,
  totalAnsweredCalls,
  totalTransfers,
  totalAbandoned,
  totalTimeOut,
  totalExitempty,
} from "../../utils/calcTotal";
import PeriodContainer from "./UI/PeriodContainer";

const Period = () => {
  const { apiData, setApiData, queueNumber, startDate, endDate } =
    useContext(Context);
  const [searchTerm, setSearchTerm] = useState("");

  const tableTotalCallsMemorize = useMemo(() => totalCalls(apiData), [apiData]);
  const tableTotalAnsweredCallsMemorize = useMemo(
    () => totalAnsweredCalls(apiData),
    [apiData]
  );
  const tableTotalTransfersMemorize = useMemo(
    () => totalTransfers(apiData),
    [apiData]
  );
  const tableTotalAbandonedMemorize = useMemo(
    () => totalAbandoned(apiData),
    [apiData]
  );
  const tableTotalTimeOutMemorize = useMemo(
    () => totalTimeOut(apiData),
    [apiData]
  );
  const tableTotalExitemptyMemorize = useMemo(
    () => totalExitempty(apiData),
    [apiData]
  );
console.log(apiData);
  return (
    <>
      {apiData && (
        <PeriodContainer>
          {queueNumber.length >= 4 ? "" : <Chart />}
          {apiData.length > 0 ? (
            <>
              <Input
                size="large"
                style={{ width: "18rem" }}
                icon="search"
                type="text"
                placeholder="Søg kønavn eller kønummer"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Table structured selectable striped>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell textAlign="center">
                      Kønavn
                    </Table.HeaderCell>
                    <Table.HeaderCell>Kønummer</Table.HeaderCell>
                    <Table.HeaderCell>Antal kald</Table.HeaderCell>
                    <Table.HeaderCell>Besvaret</Table.HeaderCell>
                    <Table.HeaderCell>Omstillet</Table.HeaderCell>
                    <Table.HeaderCell>Frafald</Table.HeaderCell>
                    <Table.HeaderCell>Udløb</Table.HeaderCell>
                    <Table.HeaderCell>Udløb v. 0 agenter</Table.HeaderCell>
                    <Table.HeaderCell>Gns. Samtaletid</Table.HeaderCell>
                    <Table.HeaderCell>Gns. Ventetid</Table.HeaderCell>
                    <Table.HeaderCell>Længste ventetid</Table.HeaderCell>
                    <Table.HeaderCell>ServiceLevel</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {apiData &&
                    apiData

                      .filter((val) => {
                        if (searchTerm === "") {
                          return val;
                        } else if (
                          val.QueueName.toLowerCase().includes(
                            searchTerm.toLowerCase()
                          )
                        ) {
                          return val;
                        } else if (
                          val.QueueExtension.toString().includes(searchTerm)
                        ) {
                          return val;
                        } else {
                          return null;
                        }
                      })
                      .sort((a, b) => {
                        return b.Calls - a.Calls;
                      })
                      .map((item) => (
                        <Table.Row key={Math.random()} textAlign="center">
                          <Table.Cell>{item.QueueName}</Table.Cell>
                          <Table.Cell>{item.QueueExtension}</Table.Cell>
                          <Table.Cell>{item.Calls}</Table.Cell>
                          <Table.Cell>{item.AnsweredCalls}</Table.Cell>
                          <Table.Cell>{item.Transfers}</Table.Cell>
                          <Table.Cell>{item.Abandoned}</Table.Cell>
                          <Table.Cell>{item.TimeOut}</Table.Cell>
                          <Table.Cell>{item.Exitempty}</Table.Cell>
                          <Table.Cell>{item.AverageCalltime}</Table.Cell>
                          <Table.Cell>{item.AverageHoldtime}</Table.Cell>
                          <Table.Cell>{item.MaxHoldtime}</Table.Cell>
                          <Table.Cell>{item.ServiceLevel}</Table.Cell>
                          <Table.Cell>
                            {endDate < startDate ? (
                              <Button
                                disabled
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
                            ) : (
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
                                  <Button.Content visible>
                                    Se mere
                                  </Button.Content>
                                  <Button.Content hidden>
                                    <Icon name="arrow right" />
                                  </Button.Content>
                                </Button>
                              </Link>
                            )}
                          </Table.Cell>
                        </Table.Row>
                      ))}
                </Table.Body>

                <Table.Footer fullWidth>
                  <Table.Row textAlign="center">
                    <Table.HeaderCell>
                      <strong>Total</strong>
                    </Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell>
                      <strong>{tableTotalCallsMemorize.toString()}</strong>
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      <strong>
                        {tableTotalAnsweredCallsMemorize.toString()}
                      </strong>
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      <strong>{tableTotalTransfersMemorize.toString()}</strong>
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      <strong>{tableTotalAbandonedMemorize.toString()}</strong>
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      <strong>{tableTotalTimeOutMemorize.toString()}</strong>
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      <strong>{tableTotalExitemptyMemorize.toString()}</strong>
                    </Table.HeaderCell>
                    <Table.HeaderCell colSpan="4" />
                  </Table.Row>
                </Table.Footer>
              </Table>
            </>
          ) : (
            ""
          )}
        </PeriodContainer>
      )}
    </>
  );
};

export default Period;
