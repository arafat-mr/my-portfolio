import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
       import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("Failed to send message, try again.");
        }
      );
  };


  return (
    <div id="contact" className="max-w-8/12 relative z-10 mx-auto flex justify-center items-center py-4 px-4 mt-5 ">
      <div className="rounded-xl p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">
        <div className="bg-gradient-to-br from-white via-gray-100 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl p-6 sm:p-8 w-full ">
          <h2 className="text-2xl font-bold text-center mb-5 text-gray-900 dark:text-white">
            Contact Me
          </h2>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-3 ">
            {/* Name + Email row */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="flex-1 p-3 rounded-lg border border-indigo-300 bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="flex-1 p-3 rounded-lg border border-indigo-300 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg border border-indigo-300 bg-gradient-to-r from-green-50 via-green-100 to-green-50 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 "
            ></textarea>

            {/* Submit */}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold py-2 rounded-lg transition-all shadow-lg shadow-indigo-500/50 hover:shadow-indigo-700/70 "
            >
              Send Message
            </button>

            {status && (
              <p className="text-center mt-2 text-green-600 dark:text-green-400">
                {status}
              </p>
            )}
          </form>

          {/* Phone & WhatsApp */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 text-center">
            <a
              href="tel:+971544448236"
              className="flex items-center gap-2 bg-indigo-500 dark:bg-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-colors text-white font-medium border border-indigo-400 shadow-md shadow-indigo-400/60"
            >
              <FaPhone /> Reach me at +971544448236
            </a>
            <a
              href="https://wa.me/+971544448236"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 dark:bg-green-700 px-4 py-2 rounded-lg hover:bg-green-600 dark:hover:bg-green-600 transition-colors text-white font-medium border border-green-400 shadow-md shadow-green-400/60"
            >
              <FaWhatsapp /> Message me on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
