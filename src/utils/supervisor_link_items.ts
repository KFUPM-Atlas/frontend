import {LinkItemProps} from "./link_items";
import {FiMail, FiUsers, FiHome} from "react-icons/fi";

export const supervisorLinkItems: Array<LinkItemProps> = [
    { name: "الطلبات", icon: FiMail, link: "/supervisor/requests"},
    { name: "الأندية", icon: FiUsers, link: "/supervisor/clubs" },
    { name: "صفحة القسم", icon: FiHome, link: "/supervisor/dept" },
];