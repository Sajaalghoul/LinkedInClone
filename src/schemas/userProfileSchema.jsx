import * as Yup from "yup";

export const userValidationSchema = Yup.object({
  displayName: Yup.string().required("Name is required"),
  headline: Yup.string().required("Headline is required"),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  // company: Yup.string().required("Company is required"),
  // industry: Yup.string().required("Industry is required"),
  college: Yup.string().required("College is required"),
  // website: Yup.string().url("Invalid URL format"),
  about: Yup.string().required("About is required"),
});
