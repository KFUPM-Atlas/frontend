import { IconType } from "react-icons";
import { FiCompass, FiHome, FiStar, FiTrendingUp } from "react-icons/fi";

export interface LinkItemProps {
  name: string;
  icon: IconType;
  link?: string;
  isOn?: boolean;
}
export const linkItems: Array<LinkItemProps> = [
  { name: "Overview", icon: FiHome, link: "/club/overview" },
  { name: "Events", icon: FiTrendingUp, link: "/club/events" },
  { name: "Requests", icon: FiCompass, link: "/club/requests" },
  { name: "Club Profile", icon: FiStar, link: "/club/profile" },
];
