import React from 'react';

function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen max-sm:p-2 overflow-x-hidden pt-20 flex-col space-y-7 w-full">

      <div className="flex flex-col pb-5 text-center text-white space-y-5">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <div className="-mt-3 border-fuchsia-500 w-14 mx-auto border"></div>
        <p className="lg:text-lg items-center md:w-[40rem]">If you have any questions, inquiries, or collaboration opportunities, please don’t hesitate to reach out by completing the form below or contact me through my email at: <a className="underline" href="mailto:long.tran832@gmail.com">Long.tran832@gmail.com</a></p>
      </div>
      <div className="flex p-7 bg-slate-900 rounded-xl border-1 border-fuchsia-500 shadow-lg ">
        <div className="text-white max-w-md space-y-5">
          <form
            action="https://formspree.io/f/moveyrve" 
            method="POST"
            className="space-y-4"
          >
            <label htmlFor="name" className="font-semibold text-lg ">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-stone-600 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            />
            <label htmlFor="email" className="font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-stone-600 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            />
            <label htmlFor="message" className="font-semibold text-lg">Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-stone-600 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 bg-fuchsia-500 hover:bg-fuchsia-900 cursor-pointer transition rounded text-white font-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;