import React from "react";
import {Link, useLocation} from "react-router-dom";
import sirekanLogo from "../assets/sirekan.png";
import { Dashboard, ForkKnife, Receipt, Group, FoodMenu, ArrowOutLeftCircleHalf } from '@boxicons/react';
import { useOverlay } from "../context/OverlayContext";

const Sidebar: React.FC = () => {

    const overlay = useOverlay();
    const location = useLocation();

    const listMenus = [
        {
            title: "Dashboard",
            path: "/",
            icon: Dashboard
        },
        {
            title: "Transaksi",
            path: "/transaksi",
            icon: Receipt
        },
        {
            title: "Menu",
            path: "/menu",
            icon: ForkKnife
        },
        {
            title: "Bahan Baku",
            path: "/bahanbaku",
            icon: FoodMenu
        },
        {
            title: "Pengguna",
            path: "/pengguna",
            icon: Group
        }
    ]

    return (<>
        <div className={`${overlay.status ? "left-0" : "-left-100"} w-64 lg:block fixed lg:left-0 top-0 z-999 h-screen bg-white pt-4 drop-shadow-md transition-all duration-500`}>
            <div className="flex mb-5 pl-3 pr-2">
                <div className="mr-3">
                    <img src={sirekanLogo} className="w-12.5 rounded-md"/>
                </div>
                <div>
                    <span className="font-bold">SiKeRen</span>
                    <br />
                    <span className="text-[12px] text-[#757575] font-semibold">Sistem Informasi Kedai Rekan</span>
                </div>
            </div>
            <ul>
                {listMenus.map((val, index) => {
                    return <li key={index} className={location.pathname === val.path ? `bg-[#D9F9E9]`:""}>
                        <Link className="flex gap-5 items-center text-[14px] p-3 md:py-4 md:px-6 font-medium" to={val.path}>
                            <span className={`inline-block bg-linear-to-b from-white ${location.pathname === val.path ? "to-[#CCEDE2]" : "to-[#E2E2E2]"} border-[1.5px] border-[#CDCDCD] drop-shadow-sm p-2 rounded-lg`}>
                                <val.icon width={18} height={18} className={location.pathname === val.path ? "text-[#009A66]": "text-[#757575]"}/>
                            </span>
                            <span className={`${location.pathname !== val.path ? "text-[#757575]" : ""}`}>
                                {val.title}
                            </span>
                        </Link>
                    </li>
                })}
            </ul>
           <div className="absolute bottom-0 left-0 pl-3 p-4 w-full">
                <button onClick={() => navigation.navigate("/login")} className="w-full flex items-center justify-between px-4 py-2 text-[14px] font-medium border-[1.5px] border-[#CDCDCD] rounded-lg cursor-pointer">
                    <span>Keluar</span>
                    <span className="inline-block border-[1.5px] border-[#CDCDCD] bg-linear-to-b from-white to-[#E2E2E2] rounded-3xl p-2">
                        <ArrowOutLeftCircleHalf width={20} height={20} color="#757575" />
                    </span>
                </button>
           </div>
        </div>
    </>)
}

export default Sidebar;