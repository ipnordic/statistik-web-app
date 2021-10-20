import { useContext } from "react";
import CustomContext from "../Context/CustomContext";
import useFetchAPI from "../hooks/useFetchAPI";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Styles/Form.module.css";
import { Button, Message, Loader, Dimmer } from "semantic-ui-react";

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
    setError,
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
    setError(null);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.formInline} onSubmit={handleSubmit(onSubmit)}>
        {userEmail.includes("@ipnordic.dk") ? (
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Kundenummer"
            {...register("company", { value: company })}
            onChange={(e) => setCompany(e.target.value)}
          />
        ) : (
          ""
        )}

        <input
          type="text"
          name="queueNumber"
          id="queueNumber"
          placeholder="Kønummer"
          {...register("queueNumber", { value: queueNumber })}
          onChange={(e) => setQueueNumber(e.target.value)}
        />
        {errors.queueNumber?.message}

        <input
          type="text"
          name="startDate"
          id="startDate"
          placeholder={
            errors.startDate ? errors.startDate?.message : "Start dato"
          }
          {...register("startDate", { value: startDate })}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <input
          type="text"
          name="endDate"
          id="endDate"
          placeholder={errors.endDate ? errors.endDate?.message : "Slut dato"}
          {...register("endDate", { value: endDate })}
          onChange={(e) => setEndDate(e.target.value)}
        />

        {endDate.includes(startDate) ? (
          <Button disabled>Søg</Button>
        ) : startDate.length < 0 && endDate.length < 0 ? (
          <Button disabled>Søg</Button>
        ) : endDate < startDate ? (
          <Button disabled>Søg</Button>
        ) : (
          <Button primary>Søg</Button>
        )}
      </form>
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
    </div>
  );
};

export default Form;
