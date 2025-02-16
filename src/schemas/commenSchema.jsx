import * as Yup from "yup";

export const commentValidationSchema = Yup.object({
  comment: Yup.string().required("Please write something before adding Post."),
});
