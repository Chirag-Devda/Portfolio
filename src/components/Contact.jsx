import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// template_lz6rl7o
// service_ctr2pdf
// BiLHENfK7tXvprPG3

const Contact = () => {
  const formRef = useRef();
  const [form, setform] = useState({ name: "", email: "", message: "" });
  const [loading, setloading] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.placeholder);
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    // template_lz6rl7o
    // service_ctr2pdf
    // BiLHENfK7tXvprPG3
    emailjs
      .send(
        "service_ctr2pdf",
        "template_lz6rl7o",
        {
          from_name: form.name,
          to_name: "Chirag Devda",
          from_email: form.email,
          to_email: "chiragdevda814@gmail.com",
          message: form.message,
        },
        "BiLHENfK7tXvprPG3",
      )
      .then(
        () => {
          setloading(false);
          alert("Thank you. I will get back to you as soon as possible");
          setform({ name: "", email: "", message: "" });
        },
        (error) => {
          setloading(false);

          console.log(error);

          alert("Something went wrong");
        },
      );
  };

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] rounded-2xl bg-black-100 p-8"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="name" className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Name</span>
            <input
              type="text"
              value={form.name}
              name="name"
              onChange={handleChange}
              placeholder="what's your name"
              className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
            />
          </label>
          <label htmlFor="name" className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Email</span>
            <input
              type="email"
              value={form.email}
              name="email"
              onChange={handleChange}
              placeholder="what's your email"
              className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
            />
          </label>
          <label htmlFor="name" className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Message</span>
            <textarea
              rows="7"
              value={form.message}
              name="message"
              onChange={handleChange}
              placeholder="what do want to say"
              className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
            />
          </label>
          <button
            type="submit"
            className="w-fit rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
