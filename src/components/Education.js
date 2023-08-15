import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AboutIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <AboutIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Bonuses</h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 text-justify">
          <Details
            type="We offer your first month for FREE!"
            time="Subscription-based"
            place="You only pay the initial fee for the project"
            info="This is a recurring payment, monthly or annualy + SAVE 20% if you subscribe a service now! (offer ends on 30/10/23)"
          />

          <Details
            type="FREE Audits"
            time="Cost-Free"
            place="Consulting assistance"
            info="We are available for 4hours/month for FREE consulting video-calls."
          />

          <Details
            type="FREE Workshop and setup"
            time="Cost-free"
            place="AI Practice x Service"
            info="We offer personalized Workshops for our clients based on their needs."
          />

          <Details
            type="Product VALUE"
            time="We value customers satisfaction"
            place="AI Services"
            info="You only pay after reviewing and only if you're satisfied with the final product"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
