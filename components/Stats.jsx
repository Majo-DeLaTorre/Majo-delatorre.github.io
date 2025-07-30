"use client";

import CountUp from "react-countup";

const stats = [
    {
        num:1,
        text: "Year of experience",
    },
    {
        num:5,
        text: "Projects completed",
    },
    {
        num:6,
        text: "Technologies mastered",
    },
    {
        num:4,
        text: "Code commits",
    },
];

const Stats = () => {
  return (
  <section className="container mx-auto font-sans pl-6 pr-6
                    font-sans">
    <div className="container mx-auto">
        <div className="flex flex-wrap gap-12 max-w-[80vw] mx-auto xl:max-w-none">
            {stats.map((item, index)=>{
                return (
                    <div className="flex-1 flex gap-4 items-center justify-center
                    xl:justify-start"
                    key={index}>
                        <CountUp
                            end={item.num}
                            duration={4}
                            delay={1}
                            className="text-4xl xl:text-6xl font-extrabold text-accent"
                        />

                       <p
                        className={`${
                            item.text.length < 15 ? "max-w-[100px}" : "max-w-[150px]"}
                            leading-snug`}>
                                {item.text}
                            </p>
                    </div>
                );
            })}
        </div>
    </div>
  </section>
)}

export default Stats