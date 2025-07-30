"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

import { Select, SelectContent, SelectGroup, SelectLabel, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+593 999 222 528)"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mariajosedelatorre@outlook.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Quito, Ecuador"
  },
]

const Contact = () => {
  return (
    <div>
      <motion.section
        className="h-auto flex flex-col justify-center py-6 xl:px-0"
      >

        <div className="container mx-auto font-sans pr-5 pl-5">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:w-[50%] order-2 xl:order-none">
              <form className="flex flex-col gap-6 p-10 bg-black/5 rounded-xl">
                <h3 className="text-4xl text-accent">Let's work together</h3>
                <p className="text-black">
                  Looking for a motivated junior web developer? <br/> I’d love to hear from you.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input type="firstname" placeholder="Firstname" />
                    <Input type="lastname" placeholder="Lastname" />
                    <Input type="email" placeholder="Email address" />
                    <Input type="phone" placeholder="Phone" />
                  </div>
                  {/*select*/}
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue  placeholder="Select a service"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className="bg-white text-black">
                        <SelectLabel className="italic text-black/50">Select a service</SelectLabel>
                        <SelectItem value="est">Web Development</SelectItem>
                        <SelectItem value="cst">UI/UI Design</SelectItem>
                        <SelectItem value="mst">Logo Design</SelectItem>  
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Textarea 
                  className="h-[200px]"
                  placeholder="Type your message here bro"
                  />
                
                {/*Button*/}
              <Button
              size="md"
              className="max-w-40 pt-4 pb-4">
                Send message
              </Button>
              </form>
            </div>

          <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return <li
                  key={index}
                  className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-white text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-black/50">{item.title}</p>
                      <h3 className="text-xl ">{item.description}</h3>
                    </div>
                  </li>
              })}
            </ul>
          </div>

          </div>
          
        </div>

      </motion.section>
    </div>
  )
}

export default Contact