import React from "react";
import styles from "./PostModal.module.css";
import { addPostToStorage } from "../../../APIS/FireStoreApi";
import { addPost } from "../../../state/posts/postSlice";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { postValidationSchema } from "../../../schemas/postSchema";

const PostModal = ({ handleModal }) => {
  const user = useSelector((state) => state.user.user);
  const initialValues = {
    editorText: "",
    chosenImage: undefined,
  };
  const dispatch = useDispatch();

  const handleImageUpload = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      setFieldValue("chosenImage", URL.createObjectURL(file));
    }
  };

  const handlePost = async (values, { setSubmitting }) => {
    const post = {
      id: Math.random().toString(36),
      text: values.editorText,
      image: values.chosenImage,
      user: user,
      timePosted: new Date().toISOString(),
    };
    console.log(post);
    await addPostToStorage(post);
    dispatch(addPost(post));
    await handleModal();
    setSubmitting(false);
  };
  return (
    <div className={styles.PostModal}>
      <Formik
        initialValues={initialValues}
        validationSchema={postValidationSchema}
        onSubmit={handlePost}
      >
        {({ isSubmitting, values }) => (
          <Form className={styles.PostModalContent}>
            <header className={styles.PostModalHeader}>
              <span className="flex items-center gap-3 p-2 hover:bg-slate-200 cursor-pointer rounded-lg ">
                <img
                  src={user?.photoURL || "../../assets/images/user.svg"}
                  alt="userImage"
                  className={styles.userImg}
                />
                <span className="flex flex-col gap-0">
                  <p className="font-bold">{user?.displayName}</p>
                  <p>Post to all</p>
                </span>
              </span>
              <img
                src="../../assets/images/close.svg"
                alt="close"
                className="w-6 cursor-pointer hover:rounded-md  hover:bg-gray-200"
                onClick={handleModal}
              />
            </header>
            <div className="w-full p-2 flex flex-col gap-2 overflow-y-auto max-h-[500px]">
              <Field
                as="textarea"
                name="editorText"
                id="editorText"
                placeholder="What do you want to talk about?"
                className="w-full resize-none overflow-hidden"
                autoFocus={true}
                rows={1}
                style={{ minHeight: "40px", flexShrink: 0 }}
                onInput={(e) => {
                  e.target.style.height = "auto";
                  e.target.style.height = `${e.target.scrollHeight}px`;
                }}
              />
              <ErrorMessage
                name="editorText"
                component="div"
                className="bg-red-50 "
              />

              <Field name="chosenImage">
                {({ field }) =>
                  field.value ? (
                    <div className="block">
                      <img
                        src={field.value}
                        alt="chosenImage"
                        className="max-w-full h-auto object-contain"
                      />
                    </div>
                  ) : null
                }
              </Field>
            </div>

            <div className="flex items-center gap-4 pl-2">
              <div className="flex items-center gap-4 pl-2">
                <Field name="chosenImage">
                  {({ form }) => (
                    <input
                      type="file"
                      id="file"
                      name="file"
                      accept="image/png, image/jpeg, image/gif"
                      onChange={(e) => handleImageUpload(e, form.setFieldValue)}
                      className={styles.hiddenFileInput}
                    />
                  )}
                </Field>
                <label htmlFor="file" className="cursor-pointer">
                  <img
                    src="../../assets/images/picture.svg"
                    alt="photoAddIcon"
                    className="w-4"
                  />
                </label>
                <img
                  src="../../assets/images/video.svg"
                  alt="videoAddIcon"
                  className="w-6 cursor-pointer"
                />
                <img
                  src="../../assets/images/plus.svg"
                  alt="plusAddIcon"
                  className="w-4 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex justify-end border-t-2 pt-2">
              <button
                type="submit"
                className={`text-white font-bold border p-3 rounded-3xl ${
                  values.editorText ? "bg-blue-500" : "bg-gray-300"
                }`}
                disabled={isSubmitting || !values.editorText.trim()}
              >
                Post
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PostModal;
