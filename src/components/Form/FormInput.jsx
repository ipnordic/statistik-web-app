import { useContext } from "react";
import Context from "../../store/Context";
import useFetchAPI from "../../hooks/useFetchAPI";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Message, Loader, Dimmer, Icon, Form } from "semantic-ui-react";
import "./Form.css";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

const schema = yup.object({
  company: yup.string(),
  queueNumber: yup.string(),
  startDate: yup.string().required("Dette felt skal udfyldes!"),
  endDate: yup.string().required("Dette felt skal udfyldes!"),
});

const FormInput = () => {
  const {
    startDate,
    endDate,
    userEmail,
    company,
    loading,
    setCompany,
    queueNumber,
    setQueueNumber,
    setStartDate,
    setEndDate,
    error,
  } = useContext(Context);
  const { fetchData } = useFetchAPI();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    fetchData();
  };

  const formatDate = (date) => {
    const formatdate = format(new Date(date), "yyyy-MM-dd");
    return formatdate;
  };

  return (
    <>
      <Form className="formInline" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group widths="equal">
          {userEmail.includes("@ipnordic.dk") ? (
            <Form.Field>
              <label htmlFor="company">Kundenummer</label>
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="off"
                placeholder="Blankt for ipnordic"
                {...register("company", { value: company })}
                onChange={(e) => setCompany(e.target.value)}
              />
            </Form.Field>
          ) : (
            ""
          )}
          <Form.Field>
            <label htmlFor="queueNumber">Kønummer</label>
            <input
              label="Kønummer"
              type="text"
              name="queueNumber"
              id="queueNumber"
              placeholder="F.eks. 1500"
              autoComplete="off"
              {...register("queueNumber", { value: queueNumber })}
              onChange={(e) => setQueueNumber(e.target.value)}
            />
          </Form.Field>

          {errors.queueNumber?.message}

          <Form.Field>
            <label htmlFor="startDate">Start dato</label>

            <DatePicker
              name="startDate"
              id="startDate"
              dateFormat="yyyy-MM-dd"
              value={startDate}
              {...register("startDate", { value: startDate })}
              onChange={(date) => setStartDate(formatDate(date))}
            />
          </Form.Field>

          <Form.Field>
            <label htmlFor="endDate">Slut dato</label>
            <DatePicker
              name="endDate"
              id="endDate"
              dateFormat="yyyy-MM-dd"
              value={endDate}
              {...register("endDate", { value: endDate })}
              onChange={(date) => setEndDate(formatDate(date))}
            />
          </Form.Field>
        </Form.Group>

        {endDate.includes(startDate) ? (
          <div className="formInline buttongroup">
            <Button size="medium" disabled>
              Søg
            </Button>
          </div>
        ) : startDate.length < 0 && endDate.length < 0 ? (
          <div className="formInline buttongroup">
            <Button size="medium" disabled>
              Søg
            </Button>
          </div>
        ) : endDate < startDate ? (
          <div className="formInline buttongroup">
            <Button size="medium" disabled>
              Søg
            </Button>
          </div>
        ) : (
          <div className="formInline buttongroup">
            <Button size="medium" animated primary>
              <Button.Content visible>Søg</Button.Content>
              <Button.Content hidden>
                <Icon name="search" />
              </Button.Content>
            </Button>
          </div>
        )}
      </Form>
      {error && (
        <div>
          <Message negative>
            <Message.Header>Fejl!</Message.Header>
            <span>{error}</span>
          </Message>
        </div>
      )}
      {loading && (
        <div>
          <Dimmer active>
            <Loader size="large" active inline="centered">
              {loading}
            </Loader>
          </Dimmer>
        </div>
      )}
      {endDate && endDate.includes(startDate) ? (
        <div>
          <Message warning>
            <Message.Header>Vigtigt!</Message.Header>
            <strong>Slut datoen</strong> skal være minimum én dag foran{" "}
            <strong>Start datoen!</strong>
          </Message>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FormInput;
