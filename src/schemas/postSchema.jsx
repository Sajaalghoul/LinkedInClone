import * as Yup from "yup";

export const postValidationSchema = Yup.object({
  editorText: Yup.string().required("Please write something before posting."),
  chosenImage: Yup.mixed().nullable(),
});
