import AdminAssets from "@admin/AdminAssets"
import AdminCerts from "@admin/AdminCerts"
import AdminExp from "@admin/AdminExp"
import Reviews from "@admin/Reviews"
import AdminProjects from "@admin/AdminProjects"

import { FaFolderOpen } from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";
import { PiCertificateLight } from "react-icons/pi";
import { MdReviews } from "react-icons/md";
import { SiFiles } from "react-icons/si";


export const TABS = [
  {
    id: 1,
    name: "projects",
    icon: FaFolderOpen,
  },
  {
    id: 2,
    name: "experience",
    icon: FiBriefcase,
  },
  {
    id: 3,
    name: "certifications",
    icon: PiCertificateLight,
  },
  {
    id: 4,
    name: "reviews",
    icon: MdReviews,
  },
  {
    id: 5,
    name: "assets",
    icon: SiFiles,
  },
];


export const tabComponents = {
  projects: AdminProjects,
  experience: AdminExp,
  certifications: AdminCerts,
  reviews: Reviews,
  assets: AdminAssets
}