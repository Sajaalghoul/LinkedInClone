import * as Yup from "yup";

export const signInValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(6).required("Required"),
});
