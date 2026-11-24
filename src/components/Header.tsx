import { MenuLeft } from "@boxicons/react";
import React from "react";
import { useOverlay } from "../context/OverlayContext";
import { useLocation } from "react-router-dom";
import userProfile from "../assets/user_profile.png";

const Header: React.FC = () => {
    const overlay = useOverlay();
    const location = useLocation();

    return (<div className="p-4.5 md:p-6.5 bg-white shadow-md flex items-center justify-between">
        <div className="flex gap-4">
            <button onClick={() => overlay.changeStatus(true)} className="cursor-pointer lg:hidden">
                <MenuLeft/>
            </button>
            <h1 className="font-bold text-xl">
                {location.pathname === "/" && "Dashboard"}
                {location.pathname === "/transaksi" && "Transaksi"}
                {location.pathname === "/menu" && "Menu"}
                {location.pathname === "/bahanbaku" && "Bahan Baku"}
                {location.pathname === "/pengguna" && "Pengguna"}
            </h1>
        </div>
        <div className="flex items-center gap-3">
            <img src={userProfile} className="w-8" />
            <div>
                <span className="block text-sm font-bold">Admin</span>
                <span className="block text-xs text-[#757575]">admin</span>
            </div>
        </div>
    </div>)
}

export default Header;