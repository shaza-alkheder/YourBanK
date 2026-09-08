import { BiSolidHome } from "react-icons/bi";
import { MdWorkOutline, MdSecurity, MdOutlineInfo } from "react-icons/md";

export const menuItems = [
  {
    label: "Home",
    icon: <BiSolidHome />,
    sections: [
      {
        label: "Our Products",
        path: "/dashboard/our-products",
      },
      {
        label: "Our Features",
        path: "/dashboard/our-features",
      },
      {
        label: "FAQ",
        path: "/dashboard/faq",
      },
      {
        label: "Testimonials",
        path: "/dashboard/testimonials",
      },
    ],
  },

  {
    label: "About",
    icon: <MdOutlineInfo />,
    sections: [
      {
        label: "Mission & Vision",
        path: "/dashboard/mission-vision",
      },
      {
        label: "Press Releases",
        path: "/dashboard/press-releases",
      },
    ],
  },

  {
    label: "Careers",
    icon: <MdWorkOutline />,
    sections: [
      {
        label: "Our Values",
        path: "/dashboard/our-values",
      },
      {
        label: "Our Benefits",
        path: "/dashboard/benefits",
      },
      {
        label: "Job Openings",
        path: "/dashboard/job-openings",
      },
    ],
  },

  {
    label: "Security",
    icon: <MdSecurity />,
    sections: [
      {
        label: "How We Protect You",
        path: "/dashboard/protect",
      },
    ],
  },
];
