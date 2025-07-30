"use client";

import { Description } from "@radix-ui/react-dialog";
import{ FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from "react-icons/fa";

const about = {
  title: "About me",
  description: "Lorem ipsum",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Majo"
    },
    {
      fieldName: "Phone",
      fieldValue: "+593 999 222 528"
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years"
    },
    {
      fieldName: "Skype",
      fieldValue: "Majo.01"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Ecuadorian"
    },
    {
      fieldName: "Email",
      fieldValue: "mariajosedelatorre@outlook.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish, French A1"
    },
  ]
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Lorem ipsum",
  items: [
      {company: "Tech Solutions Inc.",
       position: "Full Stack Developer",
       duration: "2022 - Present"
      },
      {company: "Web Design Studio",
       position: "Front-End Developer",
       duration: "Summer 2023"
      },
      {company: "E-commerce Start Up",
       position: "Freelance Web developer",
       duration: "2020 - 2021"
      },
      {company: "Tech Academy",
       position: "Teaching Assistance",
       duration: "2019 - 2020"
      },
      {company: "Thoughtworks International",
       position: "Junior developer",
       duration: "2019 - 2020"
      },
    ]
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Lorem ipsum",
  items: [
      {institute: "Meta",
       degree: "Programming with JavaScript",
       duration: "2025",
       description: "I gained a solid foundation in JavaScript, learning how to work with variables, data types, functions, objects, and arrays. I explored DOM manipulation to create interactive web experiences and practiced modern JavaScript techniques. Additionally, I learned the basics of code testing by writing unit tests using Jest."
      },
      {institute: "Meta",
       degree: "Introduction to Front-End Development",
       duration: "2025",
       description: "I learned the fundamentals of front-end development, including HTML, CSS, and JavaScript. I gained practical experience in building responsive web pages and creating interactive user interfaces. The course also covered best practices for web accessibility and performance optimization."
      },
      {institute: "Google Career Certificates",
       degree: "Data Analytics with R",
       duration: "2024",
       description: "I learned the fundamentals of R programming, working in RStudio with key packages like Tidyverse to clean, organize, analyze, and visualize data. I explored data frames, created visualizations, and documented analyses using R Markdown, gaining practical skills for data analysis workflows."
      }, 
      {institute: "Free Code Camp",
       degree: "Introduction to Data Structures and Algorithms",
       duration: "2024",
       description: "I learned the basics of data structures and algorithms, including arrays, linked lists, stacks, queues, trees, and sorting algorithms. I practiced implementing these concepts in JavaScript and gained a solid understanding of how to analyze algorithm efficiency."
      }, 
    ]
};

const skills = {
    icon: "/assets/resume/skills.svg",
    title: "My Skills",
    description: "Here are the technologies I use:",
    items: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3 /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Figma", icon: <FaFigma /> },
      { name: "NodeJS", icon: <FaNodeJs /> },
    ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (

    <motion.div
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.2, ease: "easeIn"},
      }}
    >

    <div className="font-sans container mx-auto font-sans pr-5 pl-5">
        <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
        >
        
        <TabsList className={"flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"}>
          <TabsTrigger value="experience" className="text-left w-full">Experience</TabsTrigger>
          <TabsTrigger value="education" className="text-left w-full">Education</TabsTrigger>
          <TabsTrigger value="skills" className="text-left w-full">Skills</TabsTrigger>
          <TabsTrigger value="about" className="text-left w-full">About me</TabsTrigger>
        </TabsList>

        {/* Contenido dinámico */}
        <div className="min-h-[70vh] w-full">
          <TabsContent value="experience" className="w-full">
            <h3 className="text-4xl font-bold">{experience.title}</h3>
            <p className="text-lg mx-auto xl:mx-0 pb-10">{experience.description}</p>
            
            <ScrollArea className="h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {experience.items.map((item, index) => {
                  return <li
                      key={index}
                      className="bg-[#232329]/5 h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items lg:items-start gap-1"
                  >
                    <span className="text-accent">{item.duration}</span>
                    <h3 className="text-xl min-h-[60px] text-center lg:text-left">{item.position}</h3>
                    <div className="flex items-center gap-3">
                    
                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                    <p className="text-black/50">{item.company}</p>
                    </div>
                  </li>
                })}
              </ul>
            </ScrollArea>

          </TabsContent>

          <TabsContent value="education" className="w-full">            
            <h3 className="text-4xl font-bold">{education.title}</h3>
            <p className="text-lg mx-auto xl:mx-0 pb-10">{education.description}</p>

            <ScrollArea className="h-[600px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {education.items.map((item, index) => {
                  return <li
                      key={index}
                      className="bg-[#232329]/5 h-[450px] py-6 px-10 rounded-xl flex flex-col justify-center items lg:items-start gap-1"
                  >
                    <span className="text-accent">{item.duration}</span>
                    <h3 className="text-xl min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                    
                    <div className="flex items-center gap-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                    <p className="text-black/50">{item.institute}</p>
                    </div>

                    <div className="flex items-center gap-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                    <p className="text-black text-sm">{item.description}</p>
                    </div>
                  </li>
                })}
              </ul>
            </ScrollArea>

          </TabsContent>

          <TabsContent value="skills" className="w-full">
            <h3 className="text-4xl font-bold">{skills.title}</h3>
            <p className="text-lg mx-auto xl:mx-0 pb-10">{skills.description}</p>

              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
                  {skills.items.map((skill, index) => {
                    return <li
                        key={index}>{skill.index}
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329]/5 rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>

                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                    </li>
                  })}
                </ul>

          </TabsContent>

          <TabsContent value="about" className="w-full">
            <h3 className="text-4xl font-bold">{about.title}</h3>
            <p className="text-lg mx-auto xl:mx-0 pb-10">{about.description}</p>
            
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
              {about.info.map((item, index) => {
                return <li
                    key={index}
                    className="flex items-center justify-center xl:justify-start gap-4 hover:text-accent transition-all duration-300"
                >
                  <span className="text-black/50 text-0.5xl font-sans">{item.fieldName}</span>
                  <span className="text-xl lg:text-left font-sans">{item.fieldValue}</span>
                </li>
              })}
            </ul>
            
          </TabsContent>

        </div>
      </Tabs>
    </div>
    </motion.div>
);
};

export default Resume