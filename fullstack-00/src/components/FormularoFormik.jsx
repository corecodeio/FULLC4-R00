import React from "react";
import { Formik } from "formik";

const FormularoFormik = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        first_name: "",
        last_name: "",
      }}
      validate={(values) => {
        let errors = {};
        if (values.name.length < 6) {
          errors.name = "el nombre debe ser mayor que 6 caracteres";
        }
        return errors;
      }}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
          setSubmitting(false);
        }, 3000);
        //resetForm();
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        touched,
        handleSubmit,
        isSubmitting,
        errors,
      }) => (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            id="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.name && <p>{errors.name}</p>}
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="first_name">First name:</label>
          <input
            name="first_name"
            id="first_name"
            value={values.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="last_name">Last name:</label>
          <input
            name="last_name"
            id="last_name"
            value={values.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button type="submit" disabled={isSubmitting}>
            ENVIAR
          </button>
        </form>
      )}
    </Formik>
  );
};

export default FormularoFormik;
