
function EmailSender() {
  return (
    /* The code `<div>EmailSender</div>` is creating a JSX element in React. It is rendering a `<div>`
    element with the text content "EmailSender" inside it. This JSX element will be displayed as a
    div with the text "EmailSender" when the `EmailSender` component is rendered. */
    // <div>EmailSender</div>
    <div className="w-full min-h-screen flex justify-center items-center">



<div className="email_card w-1/3 p-4 border rounded shadow">
<h1 className="text-gray-900 text-3xl">Email Sender</h1>
<p className="text-gray-700"> Send email to your favourite person with your oun app  </p>

<form action="">

<div className="input_field">
<label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">To whom you want send email</label>
<input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />

</div>


</form>









    </div>
    </div>

  )
}

export default EmailSender;