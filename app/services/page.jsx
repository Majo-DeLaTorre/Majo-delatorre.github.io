"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Lorem Ipsum",
    href: "/"
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Lorem Ipsum",
    href: "/"
  },
  {
    num: "03",
    title: "Logo Design",
    description: "Lorem Ipsum",
    href: "/"
  },
  {
    num: "04",
    title: "Web Development",
    description: "Lorem Ipsum",
    href: "/"
  },

  ];


  const Services = () => {
  return (
     <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto font-sans pr-5 pl-5">
        
          {services.map((service,index) => (
                  <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="mb-8 gap-[60px]"
                  >  
                    
                      {/* top */}
                      <div className="group flex justify-between items-center mb-2">
                        <div className=" text-6xl font-extrabold text-outline">
                          {service.num}
                        </div>
                        
                        <Link href={service.href} className="w-[50px] h-[50px] rounded-full bg-black group-hover:bg-accent
                                                            transition-all duration-350 flex justify-center items-center
                                                            hover:-rotate-45 hover:bg-accent">
                          <BsArrowDownRight className="text-white text-3xl hover:text-white" />
                        </Link>

                      </div> 
                                          

                      {/* heading */}
                      <h2 className="text-[42px] group-hover:text-accent transition-all duration-500">{service.title}</h2>

                      {/* description */}
                      <p>{service.description}</p>

                      {/* border */}
                      <div className="border-b border-black/20 w-full"></div>
                  </motion.div>
          ))}
        </div>
     </section>
    );
  };
 
export default Services;