import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";
import * as CgIcons from "react-icons/cg";


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
        title: "My Reservation",
        path: "/my-reservation",
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
    {
        title: "Sign In",
        path: "/auth",
        icon: <IoIcons.IoIosLogIn />,
        cName: "nav-text"
    },
    {
        title: "Sign Out",
        path: "/auth/logout",
        icon: <CgIcons.CgLogOut />,
        cName: "nav-text"
    }
];