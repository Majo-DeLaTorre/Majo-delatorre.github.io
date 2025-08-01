"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "Lorem Ipsum",
    stack: [{name: "Html5"}, {name: "Css3"}, {name: "Javascript"}],
    image: "/ProfileTransparent.png",
    live: "#",
    github: "#",
  },
  {
    num: "02",
    category: "datavisualization",
    title: "project 2",
    description: "Lorem Ipsum",
    stack: [{name: "Next.js"}, {name: "Tailwind.css"}, {name: "Javascript"}],
    image: "/ProfileTransparent.png",
    live: "#",
    github: "#",
  },
  {
    num: "03",
    category: "dataanalysis",
    title: "project 3",
    description: "Lorem Ipsum",
    stack: [{name: "Python"}, {name: "Tableau"}],
    image: "/ProfileTransparent.png",
    live: "#",
    github: "#",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setProject(projects[currentIndex]);

  }
  
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1,
                transition: {delay: 0.2, duration: 0.2, ease: "easeIn"},
                }}
      className="h-auto flex flex-col justify-center py-12 xl:px-0"
      >
      <div className="container mx-auto pr-4 pl-4">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
            <div className="text-8xl leading-none font-extrabold text-outline">
              {project.num}
            </div>
            <h2 className="text-[42px] font-bold leading-none group-hover:text-accent transition all duration-500 capitalize">{project.category}
            </h2>
            <p className="text-black/60">{project.description}</p>
            <ul className="flex gap-4">
              {project.stack.map((item, index) => {
                return (
                <li
                key={index}
                className="text-xl text-accent">
                {item.name}
                {index !== project.stack.length - 1 && ","}
                </li>
                );
              })}
            </ul>
            </div>

            <div className="border-b border-black/20 pb-4"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-black text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/5 flex justify-center items-center group">
                        <BsGithub className="text-black text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true} 
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-white/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt={project.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/*Slider Buttons*/}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[clacl(50%*22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                              btnStyles="bg-accent text-white hover:bg-accent-hover text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default Work