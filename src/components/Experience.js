import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Save 10% - 50% on costs in 5 steps
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 text-justify">
            <Details
              position="Time efficiency"
              company="customer service"
              address="No.1"
              work="Our AI service can be used to automate customer service tasks such as answering FAQs, resolving issues, and providing support. This can free up human customer service representatives to focus on more complex tasks."
            />

            <Details
              position="ROI +++"
              company="Marketing"
              address="No.2"
              work="You can use AI to automate marketing tasks such as lead generation, email marketing, and social media marketing. This can help your business reach more customers and improve your ROI."
            />

            <Details
              position="Revenue +++"
              company="Sales"
              address="No.3"
              work="Automate sales tasks such as lead qualification, scheduling appointments, and closing deals. Using our AI-Sales Solution can help your business close more deals and increase your sales revenue."
            />

            <Details
              position="Money savings"
              company="Operations"
              address="No.4"
              work="Our personalized AI-Powered services can be used to automate operations tasks such as scheduling, inventory management, and procurement. This can help your business improve efficiency overall and save money."
            />

            <Details
              position="Better decisions"
              company="Finance"
              address="No.5"
              work="The Social Squad AI-Solutions can be used to automate finance tasks such as budgeting, forecasting, and risk management. This can help your business make better financial decisions and improve bottom line."
            />
          </ul>
        </div>
        </div>
    );
};

export default Experience;
