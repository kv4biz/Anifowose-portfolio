import { IconType } from "react-icons";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export interface SocialLink {
  name: string;
  icon: IconType;
  url: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: "https://facebook.com",
  },
  {
    name: "Linkedin",
    icon: FaLinkedinIn,
    url: "https://linkedin.com",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "https://twitter.com",
  },
  {
    name: "Youtube",
    icon: FaYoutube,
    url: "https://youtube.com",
  },
];
