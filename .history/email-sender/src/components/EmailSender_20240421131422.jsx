import { useState } from "react";
import { useRef } from "react";
import toast from "react-hot-toast";
import { sendEmail } from "../services/email.services";
import { Editor } from '@tinymce/tinymce-react';
function EmailSender() {
  const [emailData, setEmailData] = useState({
    to: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  // code for rich test editor
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };




  async function handleFieldChange(event, name) {
    setEmailData({ ...emailData, [name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (
      emailData.to === "" ||
      emailData.subject === "" ||
      emailData.message === ""
    ) {
      alert("Please fill all the fields");
      toast.error("Invalid Fields!!");
      return;
    }

    try {
      setSending(true);
      await sendEmail(emailData);
      toast.success("Email Data has been sent successfully");
      toast.success("Send Another One Data");
      setEmailData({
        to: "",
        subject: "",
        message: "",
      });
      console.log(emailData);
    } catch (error) {
      toast.error("Email not send!!!");
      console.log(emailData);
    } finally {
      setSending(false);
    }

    console.log(emailData);
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="email_card md:w-1/3 w-full -mt-10 mx-4 md:mx-0 dark:bg-gray-700 dark:text-white dark:border-none  bg-white p-4 border rounded-lg shadow">
        <h1 className="text-gray-900  dark:text-gray-200    text-3xl">Email Sender</h1>
        <p className="text-gray-700 dark:text-gray-300">
          {" "}
          Send email to your favourite person with your oun app{" "}
        </p>

        <form action="" onSubmit={handleSubmit}>
          {/* To Section */}

          <div className="input_field mt-4">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              To :
            </label>
            <input
              type="text"
              value={emailData.to}
              onChange={(event) => handleFieldChange(event, "to")}
              placeholder="Enter here"
              id="large-input"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>
          {/* To Subject */}

          <div className="input_field mt-4">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Subject:
            </label>
            <input
              type="text"
              value={emailData.subject}
              onChange={(event) => handleFieldChange(event, "subject")}
              placeholder="Enter here"
              id="large-input"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>

          {/* Message Section */}

          <div className="form_field mt-4">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            {/* <textarea
              id="message"
              value={emailData.message}
              onChange={(event) => handleFieldChange(event, "message")}
              rows="8"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea> */}


<Editor
 onEditorChange={event => {
// console.log(event);
// console.log(editorRef.current.getContent());
setEmailData({...emailData, message: editorRef.current.getContent()});

 }}
 apiKey="vnejfoat54i9npzibxegh1cy7qlic8mptxbiz5ycht80753t" onInit={(_evt, editor) => editorRef.current = editor}
initialValue="<p>This is the initial content of the editor.</p>"
init={{
  plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
  toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
  tinycomments_mode: 'embedded',
  tinycomments_author: 'Author name',
  mergetags_list: [
    { value: 'First.Name', title: 'First Name' },
    { value: 'Email', title: 'Email' },
  ],
  ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
}}

/>


         </div>

          {/* Loader Section */}
          {sending && (
            <div className="loader flex-col gap-2 items-center justify-center flex mt-4">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
              <h1>Sending an Email......</h1>
            </div>
          )}

          <div className="button_container mt-4 flex justify-center gap-2">
            <button
            disabled={sending}
              type="submit"
              className="hover:bg-blue-900 text-white bg-blue-700 px-3 py-2 rounded"
            >
              Send Mail!
            </button>
            <button className="hover:bg-red-900 text-white bg-red-700 px-3 py-2 rounded">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmailSender;