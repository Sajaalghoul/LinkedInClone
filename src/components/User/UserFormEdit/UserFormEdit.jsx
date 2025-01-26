import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { userValidationSchema } from "../../../schemas/userProfileSchema";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentUser } from "../../../APIS/FireStoreApi";
import { useNavigate } from "react-router-dom";

const UserFormEdit = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const user = useSelector((state) => state.user.user);
  const initialValues = {
    displayName: user?.displayName || "",
    headline: user?.headline || "",
    country: user?.country || "",
    city: user?.city || "",
    // company: user?.company || "",
    // industry: user?.industr || "",
    college: user?.college || "",
    // website: user?.website || "",
    // about: user?.about || "",
  };

  const onSubmit = async (values) => {
    console.log("hye",values);
    try {
      console.log("submitted");
      await updateCurrentUser(values,dispatch); // Ensure this function works as expected
      navigate("/user");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md my-20">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Edit Profile
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={userValidationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label className="block text-gray-700" htmlFor="name">
                Name
              </label>
              <Field
                type="text"
                id="displayName"
                name="displayName"
                className="w-full p-2 border rounded"
                placeholder="enetr your name"
              />
              <ErrorMessage
                name="displayName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700" htmlFor="headline">
                Headline
              </label>
              <Field
                type="text"
                id="headline"
                name="headline"
                className="w-full p-2 border rounded"
                placeholder="enetr your headline"
              />
              <ErrorMessage
                name="headline"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700" htmlFor="country">
                  Country
                </label>
                <Field
                  type="text"
                  id="country"
                  name="country"
                  className="w-full p-2 border rounded"
                  placeholder="enetr your country"
                />
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-700" htmlFor="city">
                  City
                </label>
                <Field
                  type="text"
                  id="city"
                  name="city"
                  className="w-full p-2 border rounded"
                  placeholder="enetr your city"
                />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>
            {/* 
            <div>
              <label className="block text-gray-700" htmlFor="company">
                Company
              </label>
              <Field
                type="text"
                id="company"
                name="company"
                className="w-full p-2 border rounded"
                placeholder="enetr your company"
              />
              <ErrorMessage
                name="company"
                component="div"
                className="text-red-500 text-sm"
              />
            </div> */}
            {/* 
            <div>
              <label className="block text-gray-700" htmlFor="industry">
                Industry
              </label>
              <Field
                type="text"
                id="industry"
                name="industry"
                className="w-full p-2 border rounded"
                placeholder="enetr your industry"
              />
              <ErrorMessage
                name="industry"
                component="div"
                className="text-red-500 text-sm"
              />
            </div> */}

            <div>
              <label className="block text-gray-700" htmlFor="college">
                College
              </label>
              <Field
                type="text"
                id="college"
                name="college"
                className="w-full p-2 border rounded"
                placeholder="enetr your college"
              />
              <ErrorMessage
                name="college"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            {/* 
            <div>
              <label className="block text-gray-700" htmlFor="website">
                Website
              </label>
              <Field
                type="text"
                id="website"
                name="website"
                className="w-full p-2 border rounded"
                placeholder="enetr your website"
              />
              <ErrorMessage
                name="website"
                component="div"
                className="text-red-500 text-sm"
              />
            </div> */}

            {/* <div>
              <label className="block text-gray-700" htmlFor="about">
                About
              </label>
              <Field
                as="textarea"
                id="about"
                name="about"
                className="w-full p-2 border rounded"
                placeholder="enetr your about"
              />
              <ErrorMessage
                name="about"
                component="div"
                className="text-red-500 text-sm"
              />
            </div> */}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer "
            >
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserFormEdit;
