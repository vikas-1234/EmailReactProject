import { useState } from "react";
import toast from "react-hot-toast";
import { sendEmail } from "../services/email.services";
function EmailSender() {
  const [emailData, setEmailData] = useState({
    to: "",
    subject: "",
    message: "",
  });

  async function handleFieldChange(event, name) {
    setEmailData({ ...emailData,[name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if(emailData.to=='' || emailData.subject=='' || emailData.message==''){
      alert('Please fill all the fields');
      toast.error("Invalid Fields!!");
      return;
    }

    // send email using an API for that we are using AXIOS Library to fetch the data  and display it.

    try {
      await sendEmail(emailData);
      toast.success("Email Data has been sent successfully");
      toast.success("Send Another One Data");
      console.log(emailData);
    } catch (error) {
      toast.error("Email not send!!!");
      console.log(emailData);
    }




    
    console.log(emailData);
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="email_card md:w-1/3 w-full -mt-10 mx-4 md:mx-0  bg-white p-4 border rounded-lg shadow">
        <h1 className="text-gray-900 text-3xl">Email Sender</h1>
        <p className="text-gray-700">
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
              class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            <textarea
              id="message"
              value={emailData.message}
              onChange={(event) => handleFieldChange(event, "message")}
              rows="8"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>

          <div className="button_container mt-4 flex justify-center gap-2">
            <button  type="submit"className="hover:bg-blue-900 text-white bg-blue-700 px-3 py-2 rounded">
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