import React from "react";
import sirekanLogo from "../assets/sirekan.png";


const Login: React.FC = () => {

    return <>
        <div className="flex justify-center items-center w-full h-screen">
            <div className="bg-white w-fit p-8 shadow-md rounded-lg border border-[#CDCDCD]">
                <div>
                    <div className="flex flex-col gap-4 items-center mb-5 pl-3 pr-2">
                        <img src={sirekanLogo} className="w-16.25 rounded-md"/>
                        <div className="text-center">
                            <span className="font-bold">SiKeRen</span>
                            <br />
                            <span className="text-[12px] text-[#757575] font-semibold">Sistem Informasi Kedai Rekan</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-6 text-sm">
                        <label className="inline-block mb-2 font-semibold">Username</label>
                        <input type="text" className="border border-[#CDCDCD] rounded-md w-full h-8.5 inline-block px-4 py-4 font-medium" placeholder="Masukkan username pengguna"/>
                    </div>
                    <div className="mb-6 text-sm">
                        <label className="inline-block mb-2 font-semibold">Kata Sandi</label>
                        <input type="password" className="border border-[#CDCDCD] rounded-md w-full h-8.5 inline-block px-4 py-4 font-medium" placeholder="Masukkan kata sandi"/>
                    </div>
                </div>
                <button onClick={() => navigation.navigate("/")} className="inline-block bg-linear-to-b from-[#4ACC93] to-[#38B57C] to-63% py-2 px-3 border border-[#009A66] rounded-md cursor-pointer font-bold text-white text-[14px] w-full hover:to-[#5EDBA2] transition-all ease-in-out duration-500">Login</button>
            </div>
        </div>
    </>
}

export default Login;
