import React from "react";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import firebase from "../config/firebase";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const history = useHistory();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(value, formikBag) => {
        console.log("formik", value);
        firebase
          .auth()
          .createUserWithEmailAndPassword(value.email, value.password)
          .then((res) => {
            history.replace("/");
          })
          .catch((e) => {
            formikBag.setFieldError("email", e.message);
          });
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .required("Email is required")
          .email("Email is invalid"),
        password: Yup.string().required("Password is required").min(6),
      })}
    >
      {(formik) => (
        <div className="flex h-screen bg-gray-200">
          <div className="m-auto w-1/3 text-white flex flex-warp justify-center shadow-lg rounded-lg bg-gradient-to-r from-indigo-900 to-indigo-300">
            <form className="m-5 w-10/12" onSubmit={formik.handleSubmit}>
              <h1 className="w-full text-4xl tracking-widest text-center my-6">
                Sign Up Here
              </h1>
              <div>
                <Field
                  name="email"
                  type="email"
                  className="w-full p-2 rounded shadow text-black"
                  placeholder="Email or Username"
                />
                <ErrorMessage name="email" />
              </div>

              <div>
                <input
                  type="password"
                  className="w-full p-2 rounded shadow mt-5 text-black"
                  placeholder="password"
                  //value={formik.values.password}
                  //onChange={formik.handleChange}
                  //onBlur={formik.handleBlur}
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <p>{formik.errors.password}</p>
                ) : null}
              </div>
              <button className="p-2 w-full rounded shadow bg-gradient-to-r from-yellow-300 to-yellow-600 text-black mt-5">
                {/*{loading ? (
              <i className="fas fa-circle-notch fa-spin"></i>
            ) : (
              "Login"
            )}*/}
                SignUp
              </button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
}
