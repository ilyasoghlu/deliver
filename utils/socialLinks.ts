

import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { FaTwitter } from "react-icons/fa";
import {FaInstagram} from 'react-icons/fa'


type SocialLink =   {
        icon: IconType; 
        href: string;
        label: string;
    }


export const socialLinks: SocialLink[] = [
    {
        icon: FaFacebookF,
        href: "https://facebook.com/yourprofile",
        label: "F",
    },
    {
        icon: FaTwitter,
        href: "https://twitter.com/yourprofile",
        label: "T",
    },
    {
        icon: FaTelegramPlane,
        href: "https://telegram.com/yourprofile",
        label: "T",
    },
];