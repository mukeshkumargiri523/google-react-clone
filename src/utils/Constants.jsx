import { GoSearch } from "react-icons/go";
import { BsImage } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";
import { SlTag } from "react-icons/sl";
import { SlOptionsVertical } from "react-icons/sl";

export const menu = [
  { name: "All", icon: <GoSearch size={17} /> },
  { name: "Images", icon: <BsImage size={17} /> },
  { name: "News", icon: <BiNews size={17} /> },
  { name: "Videos", icon: <RiVideoLine size={17} /> },
  { name: "Shopping", icon: <SlTag size={17} /> },
  { name: "More", icon: <SlOptionsVertical size={17} /> },
];

export const quickLinks = [
  "About",
  "Advertising",
  "Business",
  "How Search works",
];
export const settingMenu = ["Privacy", "Terms", "Settings"];

export const pagination = [
  { page: 1, startIndex: 1 },
  { page: 2, startIndex: 11 },
  { page: 3, startIndex: 21 },
  { page: 4, startIndex: 31 },
  { page: 5, startIndex: 41 },
  { page: 6, startIndex: 51 },
  { page: 7, startIndex: 61 },
  { page: 8, startIndex: 71 },
  { page: 9, startIndex: 81 },
  { page: 10, startIndex: 91 },
];
