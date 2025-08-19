import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    const form = e.target;
    const data = new FormData(form);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });
    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };
  return (
    <section id="contact" className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-3 sm:px-6 py-8 sm:py-12 font-body">
      <h2 className="text-2xl sm:text-3xl font-bold text-red-500 mb-6 sm:mb-8 font-futuristic">Contact</h2>
      <p className="text-sm sm:text-lg flex items-center gap-2 font-body"><FiMail /> jacobrajeev2004@gmail.com</p>
      <p className="text-sm sm:text-lg mt-1 sm:mt-2 flex items-center gap-2 font-body"><FiPhone /> 8921967113</p>
      <div className="mt-4 sm:mt-6 flex gap-4 sm:gap-6 font-body">
        <a href="https://github.com/rubxn69" target="_blank" className="text-2xl sm:text-3xl hover:text-red-500"><FaGithub /></a>
        <a href="https://linkedin.com/in/jacob-rajeev" target="_blank" className="text-2xl sm:text-3xl hover:text-red-500"><FaLinkedin /></a>
      </div>

      {/* Send Me a Message Section */}
      <div className="mt-8 sm:mt-12 w-full max-w-xs sm:max-w-lg bg-zinc-900/80 border-2 border-red-600 rounded-xl p-4 sm:p-8 shadow-lg font-body">
        <h3 className="text-lg sm:text-2xl font-futuristic text-red-400 mb-4 sm:mb-6 text-center">Send Me a Message</h3>
        <form className="flex flex-col gap-3 sm:gap-5 font-body" onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="3e11176e-02c9-4138-b2e4-ce741f3d564b" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="bg-black/70 border border-red-600 rounded-md px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base text-white font-body focus:outline-none focus:border-red-400 transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-black/70 border border-red-600 rounded-md px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base text-white font-body focus:outline-none focus:border-red-400 transition"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="bg-black/70 border border-red-600 rounded-md px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base text-white font-body focus:outline-none focus:border-red-400 transition resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-red-600 text-lg font-futuristic rounded-md shadow-[0_0_20px_rgba(239,68,68,0.6)] hover:bg-black hover:text-red-400 hover:border-red-600 border-2 border-red-400 transition duration-300"
          >
            Send Message
          </button>
          {status === "success" && (
            <p className="text-green-400 text-center mt-2 font-body">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center mt-2 font-body">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
