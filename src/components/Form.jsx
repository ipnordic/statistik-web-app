import { useContext } from "react";
import CustomContext from "../Context/CustomContext";
import useFetchAPI from "../hooks/useFetchAPI";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Styles/Form.module.css";

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
    fetchData(data);
    setError(null);
  };

  return (
    <div className={styles.Container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {userEmail.includes("@ipnordic.dk") ? (
          <>
            <input
              className={styles.FormInput}
              type="text"
              name="company"
              placeholder="Kundenummer"
              {...register("company", { value: company })}
              onChange={(e) => setCompany(e.target.value)}
            />
            <div>{errors.company?.message}</div>
          </>
        ) : (
          ""
        )}

        <input
          className={styles.FormInput}
          type="text"
          name="queueNumber"
          placeholder="Kønummer"
          {...register("queueNumber", { value: queueNumber })}
          onChange={(e) => setQueueNumber(e.target.value)}
        />
        <div>{errors.queueNumber?.message}</div>
        <input
          className={styles.FormInput}
          type="text"
          name="startDate"
          placeholder="Start dato"
          {...register("startDate", { value: startDate })}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <div>{errors.startDate?.message}</div>
        <input
          className={styles.FormInput}
          type="text"
          name="endDate"
          placeholder="Slut dato"
          {...register("endDate", { value: endDate })}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <div>{errors.endDate?.message}</div>
        <input type="submit" value="Søg" />
      </form>
      {error && <div>{error}</div>}
      {loading && <div>{loading}</div>}
      {endDate && endDate.includes(startDate) ? (
        <div>
          <strong>Slut datoen</strong> skal være minimum én daf foran{" "}
          <strong>Start datoen!</strong>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Form;
