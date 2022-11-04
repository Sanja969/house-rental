import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
    {
        title: "Houses",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Reserve",
        path: "/reserve",
        icon: <FaIcons.FaCalendarCheck />,
        cName: "nav-text"
    },
    {
        title: "My Reservations",
        path: "/my-reservations",
        icon: <BsIcons.BsJournalCheck />,
        cName: "nav-text"
    },
    {
        title: "Add House",
        path: "/add-house",
        icon: <GiIcons.GiHouseKeys />,
        cName: "nav-text"
    },
    {
        title: "Delete House",
        path: "/delete-house",
        icon: <MdIcons.MdFreeCancellation />,
        cName: "nav-text"
    },
];