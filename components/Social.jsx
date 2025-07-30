import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaXTwitter } from "react-icons/fa6";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/majo-delatorre" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/mariajose-delatorre/" },
    { icon: <FaYoutube />, path: "/" },
    { icon: <FaXTwitter />, path: "https://x.com/majo__delatorre" },
    ]

const Social = ({containerStyles, iconStyles}) => {
  return (
  <div className={containerStyles}>
    {socials.map((item, index) => {
        
        return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        );
        })}
    </div>
  ) 
}

export default Social;