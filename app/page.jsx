import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";


const Home = () => {
  return (
    <section className="h-full">      
      <div className="container mx-auto h-full pr-5 pl-5">    
          <div className="flex flex-col xl:flex-row items-center justify-between
                          xl:pt-8 xl:pb-24 font-sans gap-4">
            <div className="text-center xl:text-left order-2 xl:order-none">
                <span className="text-xl">Aspiring Software Developer</span>
          
                <h1 className="h1 mb-6">
                  Hello, I am <br />
                <span className="text-accent">Majo De La Torre</span>
                </h1>

                <p className="max-w-[500px] mb-9">Passionate about building intuitive and functional web experiences while continuously learning modern technologies.</p>
                {/*btn and socials*/}

              <div className="flex flex-col xl:flex-row items-center gap-8">
                {/* <a 
                  href="/cv.pdf" 
                  download="Majo_De_La_Torre_CV.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 font-sans">
                  DOWNLOAD CV
                  <FiDownload className="text-xl" />
                </Button>
                </a> */}

                <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex
                justify-center items-center text-accent text-base hover:bg-accent
                hover:text-primary-foreground hover:transition-all duration-500" />  
              </div>
            </div>
            <div className="mt-10 order-1 xl:order-none">   
              <Photo />
            </div>
          </div>
          <div className="mt-10 xl:hidden"></div>
          <Stats />
      </div>
     
      
    </section>
  );
}

export default Home;