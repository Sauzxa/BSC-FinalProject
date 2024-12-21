// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Admins",
  },

];

// Analytics Cards Data
export const cardsData = [
  {
    title: "بيت الشباب يسر",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 4px #e0c6f5",
    },
    barValue: 70,
    value: "10000DA/jr",
    png: UilUsdSquare,

    img:[
      {
        img1 : "https://cdn-img.readytotrip.com/t/1024x768/content/61/fa/61fa43a8475a99b8cd0a10523dcc5107236aef3d.JPEG",
        img2 : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbs8VT0YkZnt2gTsuT-NHzBpN3SLkPF7A-zA&s",
        img3 : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSB3y3cymWsstvI60aZi80r_MpQ-RK01b3IGar6sZsIfHzJ5_MDsJ7PJbDvp-8FwCL-0&usqp=CAU",
      },
    ],
    Status:'Closed',
  },
  {
    title: "بيت الشباب يسر",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 4px #FDC0C7",
    },
    barValue: 80,
    value: "10000DA/jr",
    png: UilMoneyWithdrawal,
   
    img:[
      {
        img1 : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWVzK1SNij-HH_C9bVBbwZN-EeGBlz_cSyThHHoUz9c4lD0yUpFZdnIVhvmFmw-rYLJc&usqp=CAU",
        img2 : "https://www.sumushotels.com/content/imgsxml/galerias/panel_galeria/1/fm3a7983407.jpg",
        img3 : "https://cdn-img.readytotrip.com/t/1024x768/content/61/fa/61fa43a8475a99b8cd0a10523dcc5107236aef3d.JPEG",
      },
    ],
    Status:'Open',
  },
  {
    title: "بيت الشباب يسر",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 4px #F9D59B",
    },
    barValue: 60,
    value: "10000DA/jr",
    png: UilClipboardAlt,
    img:[
      {
        img1 : "https://cf.bstatic.com/xdata/images/hotel/max1024x768/513919964.jpg?k=eca0f959fb7b7fb04020e35e6cc5337f6f1027add3fb9289ba0b1f37d01253b4&o=&hp=1",
        img2 : "https://cf.bstatic.com/xdata/images/hotel/max1024x768/465814215.jpg?k=c535dc43fc4571368d4cd06a22826baa1c973e817ae9b765cd5cb8b6e45b9bb2&o=&hp=1",
        img3 : "https://cf.bstatic.com/xdata/images/hotel/max1024x768/513919941.jpg?k=53fddcf08d84f1d5cd4d7b5978b435ca2d36db50d4f869f40db96163bd04c592&o=&hp=1",
      },
    ],
    Status:'Open',
  },
  {
    title: "بيت الشباب يسر",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 4px #F9D59B",
    },
    barValue: 100,
    value: "10000DA/jr",
    png: UilClipboardAlt,
    img:[
      {
        img1 : "https://cdn-img.readytotrip.com/t/1024x768/content/61/fa/61fa43a8475a99b8cd0a10523dcc5107236aef3d.JPEG",
        img2 : "https://cdn-img.readytotrip.com/t/1024x768/content/61/fa/61fa43a8475a99b8cd0a10523dcc5107236aef3d.JPEG",
        img3 : "https://cdn-img.readytotrip.com/t/1024x768/content/61/fa/61fa43a8475a99b8cd0a10523dcc5107236aef3d.JPEG",
      },
   
    ],
    Status:'Open',
  },
 
]


// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Ahmed Hocine",
    noti: "Excellente nuit passée dans l'auberge Yassar ",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "yasser mansor",
    noti: "Excellente nuit passée dans l'auberge baitchabab",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Nacer hassina",
    noti: "Très bonne réception et bien organisée",
    time: "2 hours ago",
  },
];
