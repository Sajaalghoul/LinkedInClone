import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerWithEmail } from "../../../APIS/AuthApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../../state/User/UserSlice";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { regiterValidationSchema } from "../../../schemas/registerSchema";
import { addUserToStorage } from "../../../APIS/FireStoreAPI";
const JoinNow = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
    name: "",
  };
  const handleRegister = async (values, { setSubmitting }) => {
    try {
      const result = await registerWithEmail(
        values.email,
        values.password,
        values.name
      );
      const userDate = {
        email: result.user.email,
        displayName: values.name,
      };
      dispatch(setUser(userDate));
      await addUserToStorage(userDate);
      console.log(userDate);
      localStorage.setItem("currentuser", JSON.stringify(userDate));
      navigate("/home");
      toast.success("Registered successfully");
    } catch (error) {
      let errorMessage =
        "Error registering. Please check your email and password.";
      if (error.code) {
        switch (error.code) {
          case "auth/email-already-in-use":
            errorMessage = "Email is already in use.";
            break;
          case "auth/invalid-email":
            errorMessage = "Invalid email address.";
            break;
          case "auth/operation-not-allowed":
            errorMessage = "Operation not allowed.";
            break;
          case "auth/weak-password":
            errorMessage = "Password is too weak.";
            break;
          default:
            errorMessage = error.message;
        }
      }
      toast.error(errorMessage);
    }
    setSubmitting(false);
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center justify-center w-full">
          <Link
            to="/"
            className="flex items-center justify-start w-full mx-20 my-10"
          >
            <img
              src="../../assets/images/login-logo.svg"
              alt="NavLogoLinkedIn"
              className="mr-auto w-32"
            />
          </Link>
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Join LinkedIn Today
            </h1>
            <Formik
              initialValues={initialValues}
              validationSchema={regiterValidationSchema}
              onSubmit={handleRegister}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="bg-red-50 "
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="bg-red-50 "
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Your Name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="bg-red-50 "
                    />
                  </div>
                  {/* <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </div> */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign Up
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    <Link to="/signin">Sign in</Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinNow;
