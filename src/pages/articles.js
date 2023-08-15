import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import blog1 from "../../public/images/articles/pagination component in reactjs.jpg";
import blog2 from "../../public/images/articles/create loading screen in react js.jpg";
import blog3 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import blog4 from "../../public/images/articles/smooth scrolling in reactjs.png";
import blog5 from "../../public/images/articles/create modal component in react using react portals.png";
import blog6 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import blog7 from "../../public/images/articles/What is Redux with easy explanation.png";
import blog8 from "../../public/images/articles/What is higher order component in React.jpg";

import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl 
    dark:bg-dark dark:border-light">
      <div
        className="absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-dark 
        -z-10  "
      />
      <Link
        href={link}
        target={"_blank"}
        className="inline-block rounded-lg overflow-hidden w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="100vw"
          priority
        />
      </Link>

      <Link href={link} target={"_blank"}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm  mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

export default function Articles() {
  return (
    <>
      <Head>
        <title>tSQ - AI Powered Solutions | Articles Page</title>
        <meta name="description" content="Browse through CodeBucks's collection of software engineering articles and 
        tutorials on Next.js, React.js, web development, and more. 
        Gain valuable insights and stay up-to-date with SEO tips for building a developer portfolio." />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Meet our social SQUAD!"
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16 text-justify">
            <FeaturedArticle
              img={blog1}
              title="our commitment to diversity and equity"
              time="Give us a Feedback"
              summary="We believe that a diverse and equitable team is a stronger team, and we're committed to creating a workplace where everyone feels welcome, valued, and respected.

              Our team is made up of people from all walks of life, with different backgrounds, experiences, and perspectives. We believe that this diversity is our strength, and it allows us to provide our clients with the best possible service.
              
              We're also committed to creating an equitable workplace, where everyone has the same opportunities to succeed."
              link="https://gx36lbjvf8m.typeform.com/to/ZnEuYphZ"
            />

            <FeaturedArticle
              img={blog2}
              title="Join our Instagram!"
              time="Let's grow our Community together!"
              summary="Join our socials and be part of our growing learning path.
              We're always creating new content and resources to help our clients learn and grow, and we'd love for you to be a part of it."
              link="https://www.instagram.com/the_social.squad/"
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">
            The SQUAD
          </h2>

          <ul className="flex flex-col items-center relative">
            <Article
              title="Catalina (Italy)"
              img={blog3}
              date="CEO, Developer, QA, Software Architect"
              link=""
            />
            <Article
              title="Mark (Netherlands)"
              img={blog4}
              date="Software Engineer, Legal Assistant"
              link=""
            />
            <Article
              title="Antonio (Argentina)"
              img={blog5}
              date="Developer, Data Analyst"
              link=""
            />
            <Article
              title="Davu (South Africa)"
              img={blog6}
              date="Developer, Marketing Manager"
              link=""
            />
            <Article
              title="Kabir (India)"
              img={blog7}
              date="Business Analyst, Developer"
              link=""
            />
            <Article
              title="Lucas (Netherlands)"
              date="Developer, QA"
              img={blog8}
              link=""
            />
          </ul>
        </Layout>
      </main>
    </>
  );
}
