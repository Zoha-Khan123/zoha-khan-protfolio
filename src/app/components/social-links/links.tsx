import { Blue, Email, Github, Instagram, Linkedin, Twitter } from '../svgs';
import Link from 'next/link';

const SocialLinks = ({ direction = "column" }) => {
  const flexDirection = direction === "row" ? "flex-row" : "flex-col";

  return (
    <div>
      <ul className={`flex ${flexDirection} gap-5 text-[#b0b2c3] m-4`}>
        <li>
          <Link
            href="https://www.linkedin.com/in/zoha-khan-developer/"
            target="_blank"
          >
            <Linkedin className="w-8 hover:text-white" />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/dashboard" target="_blank">
            <Github className="w-8 hover:text-white" />
          </Link>
        </li>
        <li>
          <Link href="mailto:zohakhan11004@gmail.com" target="_blank">
            <Email className="w-8 hover:text-white" />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/" target="_blank">
            <Instagram className="w-8 hover:text-white" />
          </Link>
        </li>
        <li>
          <Link href="https://www.twitter.com/" target="_blank">
            <Twitter className="w-8 hover:text-white" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
