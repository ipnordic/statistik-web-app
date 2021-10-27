import { useContext } from "react";
import CustomContext from "../Context/CustomContext";
import useFetchAPI from "../hooks/useFetchAPI";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Styles/Form.module.css";
import { Button, Message, Loader, Dimmer, Icon } from "semantic-ui-react";

const schema = yup.object({
  company: yup.string(),
  queueNumber: yup.string(),
  startDate: yup.string().required("Dette felt skal udfyldes!"),
  endDate: yup.string().required("Dette felt skal udfyldes!"),
});

const Form = () => {
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
  } = useContext(CustomContext);
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

  return (
    <div className={styles.formContainer}>
      <form className={styles.formInline} onSubmit={handleSubmit(onSubmit)}>
        {userEmail.includes("@ipnordic.dk") ? (
          <input
            className={styles.input}
            type="text"
            name="company"
            id="company"
            autoComplete="off"
            placeholder="Kundenummer"
            {...register("company", { value: company })}
            onChange={(e) => setCompany(e.target.value)}
          />
        ) : (
          ""
        )}
        <input
          className={styles.input}
          label="Kønummer"
          type="text"
          name="queueNumber"
          id="queueNumber"
          placeholder="Kønummer"
          autoComplete="off"
          {...register("queueNumber", { value: queueNumber })}
          onChange={(e) => setQueueNumber(e.target.value)}
        />
        {errors.queueNumber?.message}
        <input
          className={styles.input}
          label={`Start dato`}
          type="text"
          name="startDate"
          id="startDate"
          autoComplete="off"
          placeholder={
            errors.startDate ? errors.startDate?.message : "YYYY-MM-DD"
          }
          {...register("startDate", { value: startDate })}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          className={styles.input}
          label="Slut dato"
          type="text"
          name="endDate"
          id="endDate"
          autoComplete="off"
          placeholder={errors.endDate ? errors.endDate?.message : "YYYY-MM-DD"}
          {...register("endDate", { value: endDate })}
          onChange={(e) => setEndDate(e.target.value)}
        />

        {endDate.includes(startDate) ? (
          <Button size="large" disabled>
            Søg
          </Button>
        ) : startDate.length < 0 && endDate.length < 0 ? (
          <Button size="large" disabled>
            Søg
          </Button>
        ) : endDate < startDate ? (
          <Button size="large" disabled>
            Søg
          </Button>
        ) : (
          <Button animated size="large" primary>
            <Button.Content visible>Søg</Button.Content>
            <Button.Content hidden>
              <Icon name="search" />
            </Button.Content>
          </Button>
        )}
      </form>
      {error && (
        <div className={styles.msg}>
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
        <div className={styles.msg}>
          <Message warning>
            <Message.Header>Vigtigt!</Message.Header>
            <strong>Slut datoen</strong> skal være minimum én dag foran{" "}
            <strong>Start datoen!</strong>
          </Message>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Form;
