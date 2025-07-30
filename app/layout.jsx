import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
});

export const metadata = {
title: "Majo De La Torre - Web Developer Portfolio",
description:"Portfolio of Majo De La Torre, aspiring web developer passionate about building modern, functional, and engaging web applications.",
keywords: "Majo De La Torre, web developer, front-end, portfolio, HTML, CSS, JavaScript, React",
author: "Majo De La Torre",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className={`${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
        
      </body>
    </html>
  );
}
