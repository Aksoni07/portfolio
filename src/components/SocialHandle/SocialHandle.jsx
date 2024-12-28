import './SocialHandle.scss';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { SiCodeforces } from 'react-icons/si';
import { SiGeeksforgeeks} from 'react-icons/si';
import { SiCodechef} from 'react-icons/si';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialHandle = () => {
  return (
    <div className="socialhandle">
      <a href="https://github.com/Aksoni07" target="_blank">
        <FaGithub className="icon" />
      </a>
      <a href="https://leetcode.com/u/AshishSoni2027/" target="_blank">
        <SiLeetcode className="icon" />
      </a>
      <a href="https://codeforces.com/profile/ashishsoni7195" target="_blank">
        <SiCodeforces className="icon" />
      </a>
      <a href="https://www.codechef.com/users/imposter23" target="_blank">
        <SiCodechef className="icon" />
      </a>
      <a
        href="https://www.geeksforgeeks.org/user/ashishsoni07/"
        target="_blank"
      >
        <SiGeeksforgeeks className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/ashish-kumar-soni-187b73175/" target="_blank">
        <FaLinkedin className="icon" />
      </a>
      <a href="https://x.com/Ashishs76987291" target="_blank">
        <FaTwitter className="icon" />
      </a>
      <a href="https://www.instagram.com/ashiish.sonii/?igsh=ZTQwZWNxMjh3MGo2" target="_blank">
        <FaInstagram className="icon" />
      </a>
    </div>
  );
};

export default SocialHandle;
