import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useOverlay } from '../context/OverlayContext';

const Layout: React.FC = () => {
    const overlay = useOverlay();
    return (<div>
        <div className="flex">
            <div onClick={() => overlay.changeStatus(false)} className={`${overlay.status || overlay.statusDialogForm ? 'bg-black/50 z-999 fixed h-full w-full' : 'hidden'} transition-all transition-discrete ease-in-out duration-500`}></div>
            <Sidebar/>
            <div className="w-full lg:ml-64">
                <Header/>
                <Outlet/>
            </div>
        </div>
    </div>)
}

export default Layout;