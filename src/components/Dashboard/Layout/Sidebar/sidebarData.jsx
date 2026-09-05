import { BiSolidHome } from "react-icons/bi";
import {
  
  MdWorkOutline,
  MdSecurity,
  MdOutlineInfo,
} from "react-icons/md";

export const menuItems = [
 
  {
    label: "Home",
    icon: <BiSolidHome />
,
    sections: [
      "Our Products",
      "Our Features",
      "FAQ",
      "Testimonials",
     
    ],
  },
  {
    label: "About",
    icon: <MdOutlineInfo />,
    sections: [
      "Mission & Vision",
      "Press Releases",
    
    ],
  },
  {
    label: "Careers",
    icon: <MdWorkOutline />,
    sections: [
      "Our Values",
      "Our Benefits",
      "Job Openings",
    ],
  },
  {
    label: "Security",
    icon: <MdSecurity />,
    sections: [
      "How We Protect You",
    ],
  },
];

