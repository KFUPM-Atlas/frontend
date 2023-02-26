import { IconType } from "react-icons";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";

export interface LinkItemProps {
  name: string;
  icon: IconType;
}
export const linkItems: Array<LinkItemProps> = [
  { name: "Overview", icon: FiHome },
  { name: "Events", icon: FiTrendingUp },
  { name: "Requests", icon: FiCompass },
  { name: "Club Profile", icon: FiStar },
];
