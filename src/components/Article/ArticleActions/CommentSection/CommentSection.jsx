import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addCommentToStorage } from "../../../../APIS/FireStoreAPI";
import { addComment } from "../../../../state/comments/commentSlice";
import { commentValidationSchema } from "../../../../schemas/commenSchema";

const CommentSection = ({ postId, toggleCommentSection }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const initialValues = {
    comment: "",
  };
  const handleComment = async (values, { setSubmitting }) => {
    const comment = {
      id: Math.random().toString(36),
      text: values.comment,
      user: user,
      postId: postId,
      timePosted: new Date().toISOString(),
    };
    console.log(comment);
    await addCommentToStorage(comment);
    dispatch(addComment(comment));
    toggleCommentSection();
    setSubmitting(false);
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={commentValidationSchema}
        onSubmit={handleComment}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <div className="w-full p-2 flex flex-col gap-2 overflow-y-auto max-h-[500px]">
              <Field
                as="textarea"
                name="comment"
                id="comment"
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
                name="comment"
                component="div"
                className="bg-red-50 "
              />
            </div>
            <div className="flex justify-end border-t-2 pt-2">
              <button
                type="submit"
                className={`text-white font-bold border p-3 rounded-3xl ${
                  values.comment ? "bg-blue-500" : "bg-gray-300"
                }`}
                disabled={isSubmitting || !values.comment.trim()}
              >
                Add Comment
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CommentSection;
