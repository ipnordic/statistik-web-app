import React from "react";
import { useForm } from "react-hook-form";

/**
 * !!!                            !!!
 * ! Component is under construction!
 * !!!                            !!!
 */

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="Kundenummer" {...register("example")} />
                <input
                    defaultValue="Kønummer"
                    {...register("exampleRequired", { required: true })}
                />
                {errors.exampleRequired && <span>This field is required!</span>}
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};

export default Form;
