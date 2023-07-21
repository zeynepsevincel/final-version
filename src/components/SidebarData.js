import React from "react";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Rooms",
    path: "#",

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Deluxe Room",
        path: "/rooms/deluxe",
      },
      {
        title: "Family Suite",
        path: "/rooms/family",
      },
      {
        title: "Ocean View",
        path: "/rooms/ocean",
      },
      {
        title: "Executive Suite",
        path: "/rooms/executive",
      },
    ],
  },
  {
    title: "Reviews",
    path: "/review",
  },

  {
    title: "Restaurant",
    path: "/resto",
  },
  {
    title: "Book Now",
    path: "/booking",
  },
];
