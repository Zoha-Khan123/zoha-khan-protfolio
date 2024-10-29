import Image from "next/image";
import SocialLinks from "../components/social-links/links";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center mt-16">
      <div> 
        <h1>Zoha Khan @ 2024</h1>
      </div>
      <div className="py-2">
        <Image src="/blue-logo.png" width={50} height={50} alt="logo" />
      </div>
        <SocialLinks direction="row" />
     
    </footer>
  );
};

export default Footer;