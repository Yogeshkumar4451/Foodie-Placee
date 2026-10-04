import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-orange-50 py-10 sm:py-16">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <h1 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            For Any Enquiry Or Issue
          </h1>

          <p className="text-base text-gray-600 sm:text-lg">
            Contact Us By Filling Our Form
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl bg-white p-6 shadow-md sm:rounded-3xl sm:p-8 lg:p-10"
        >
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Name
            </label>

            <input
              type="text"
              required
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              className="h-12 w-full rounded-xl border border-gray-300 px-4 text-sm text-gray-700 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 w-full rounded-xl border border-gray-300 px-4 text-sm text-gray-700 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Message
            </label>

            <textarea
              required
              value={message}
              placeholder="Write your message here..."
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[130px] w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200 sm:min-h-[150px]"
            />
          </div>

          <button
            type="submit"
            className="h-12 w-full cursor-pointer rounded-xl bg-orange-500 font-semibold text-white shadow-sm transition hover:bg-orange-600 active:scale-95"
          >
            Send Message
          </button>

          {submitted && (
            <div className="rounded-xl bg-green-50 px-4 py-3 text-center text-sm font-semibold text-green-600">
              ✅ Your message has been submitted successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
