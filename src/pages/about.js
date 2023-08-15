import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";


function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <title>tSQ - AI Powered Solutions | About Page</title>
        <meta name="description" content="Learn more about CodeBucks, a Next.js developer with a passion for 
        creating innovative solutions. Discover tips for building a developer portfolio and insights on 
        full-stack development, front-end development, and back-end development." />
      </Head>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-14">
          <AnimatedText
            text="Passion Behind Success!"
            className="mb-12 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                What we do
              </h2>
              <p className="font-medium text-justify">
                In a world where digital world and AI are constantly evolving, it is more important than ever to partner with an agency that is innovative and forward-thinking. That&apos;s why we&apos;re here. <br />
                <br />
                <strong>The Social Squad</strong> is a team of experts who are passionate about helping businesses grow. We use cutting-edge technology and data-driven insights to create personalized AI automation services that resonate with your business goals and your target audience. <br /> 
                We work with <strong> E-commerce, Logistics and supply chain, Financial services, Real Estate, Travel agencies and Marketing businesses</strong>.
              </p> <br />
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Our Process
              </h2>
              <p className="font-medium text-justify">
             <strong>1. DISCOVERY</strong>
            <br />  Do you have a project in mind? Are you not sure where to start? Want to discuss your project goals? <br /> Schedule a free 15-min video call. We&apos;ll understand your needs, brainstorm ideas, set a timeline, and discuss pricing. Get a detailed proposal after the call.
              </p> <br />
              <p className="font-medium text-justify">
              <strong>2. ANALYSIS and PRODUCT DESIGN</strong> <br /> 
              We start by understanding your business needs through a workshop. We&apos;ll uncover the areas where automation can provide the most value. Then, we&apos;ll design workflows and processes that will automate your most important tasks.
              </p> <br />
              <p>
              <strong>3. AI-SOLUTION DEVELOPMENT</strong> <br />
                Once we have all the information we need, we&apos;ll develop a solution for you at lightning speed. You can track our progress in our project management system.
              </p> <br />
              <p>
              <strong>4. SUPPORT and MAINTENANCE</strong> <br />
                After we complete the development, we can continue to work with you as your long-term partner. We&apos;ll help you iterate on your product, provide technical support, and reliably scale your product for the future. We&apos;re committed to helping you achieve your business goals and we&apos;re here for the long haul.
              </p>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            ">
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={profile}
                alt="#"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={5} />++
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  AI personalized services
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={100} />%
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Efficiency
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={100} />%
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Accelerate scalling
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
