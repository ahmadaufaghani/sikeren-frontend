import React, { useState } from "react";
import { Plus} from "@boxicons/react";
import { useOverlay } from "../context/OverlayContext";

const Ingredients: React.FC = () => {
    const [dialog, setDialog] = useState("");
    const [role, setRole] = useState<string>("");
    const [roleEdit, setRoleEdit] = useState<string>("admin");
    const overlay = useOverlay();

    return <>
    <div>
    </div>
        <div className={overlay.statusDialogForm && dialog === "tambah" ? `z-999 fixed left-[2%] right-[2%] md:left-[10%] md:right-[10%] top-[15%] lg:top-[15%] lg:left-[45%] lg:right-[45%] bg-white shadow-md lg:w-100 h-fit p-8 rounded-lg transition-all duration-500 lg:text-sm` : 'hidden'}>
            <div className="flex justify-between border-b pb-3 mb-4 border-[#CDCDCD]">
                <span className="font-bold text-lg">Tambah Pengguna</span>
            </div>
            <div className="mb-6">
                <label className="inline-block mb-2 font-semibold">Nama</label>
                <input type="text" className="border border-[#CDCDCD] rounded-md w-full h-8.5 inline-block px-4 py-5 font-medium" placeholder="Masukkan nama pengguna"/>
            </div>
            <div className="mb-6">
                <label className="inline-block mb-2 font-semibold">Username</label>
                <input type="text" className="border border-[#CDCDCD] rounded-md w-full h-8.5 inline-block px-4 py-5 font-medium" placeholder="Masukkan username pengguna"/>
            </div>
            <div className="mb-6">
                <label className="inline-block mb-2 w-full font-semibold">Role</label>
                <select className="border border-[#CDCDCD] rounded-md w-full px-4 py-2" name="kategori" value={role} onChange={(e)=>{setRole(e.target.value)}}>
                    <option value="">- Pilih Role -</option>
                    <option value="admin">admin</option>
                    <option value="owner">owner</option>
                    <option value="employee">employee</option>
                </select>
            </div>
            <div className="mb-6">
                <label className="inline-block mb-2 font-semibold">Kata Sandi</label>
                <input type="password" className="border border-[#CDCDCD] rounded-md w-full h-8.5 inline-block px-4 py-5 font-medium" placeholder="Masukkan kata sandi"/>
            </div>
            <div className="border-t border-[#CDCDCD] flex justify-end gap-3 text-sm pt-5" >
                <button onClick={() => {
                    overlay.changeStatusDialogForm(false);
                    setDialog("");
                }} className="inline-block bg-linear-to-b from-[white] to-[#F9F9F9] py-2 px-3 border border-[#CDCDCD] rounded-md cursor-pointer font-medium">Tutup</button>
                <button className="inline-block bg-linear-to-b from-[#4ACC93] to-[#38B57C] to-63% py-2 px-3 border border-[#009A66] rounded-md cursor-pointer font-medium text-white">Tambah</button>
            </div>
        </div>

        <div className={overlay.statusDialogForm && dialog === "edit" ?  `z-999 fixed left-[2%] right-[2%] md:left-[10%] md:right-[10%] top-[15%] lg:top-[15%] lg:left-[45%] lg:right-[45%] bg-white shadow-md lg:w-100 h-fit p-8 rounded-lg transition-all duration-500 lg:text-sm ` : 'hidden'}>
            <div className="flex justify-between border-b pb-3 mb-4 border-[#CDCDCD]">
                <span className="font-bold text-lg">Edit Pengguna</span>
            </div>
            <div className="mb-6">
                <label className="inline-block mb-2 font-semibold">Nama</label>
                <input type="text" className="border border-[#CDCDCD] rounded-md w-full h-8.5 inline-block px-4 py-5 font-medium" placeholder="Masukkan nama pengguna" value="admin" onChange={()=>{}}/>
            </div>
            <div className="mb-6">
                <label className="inline-block mb-2 font-semibold">Username</label>
                <input type="text" className="border border-[#CDCDCD] rounded-md w-full h-8.5 inline-block px-4 py-5 font-medium" placeholder="Masukkan username pengguna" value="admin" onChange={()=>{}}/>
            </div>
            <div className="mb-6">
                <label className="inline-block mb-2 w-full font-semibold">Role</label>
                <select className="border border-[#CDCDCD] rounded-md w-full px-4 py-2" name="kategori" value={roleEdit} onChange={(e)=>{setRoleEdit(e.target.value)}}>
                    <option value="">- Pilih Role -</option>
                    <option value="admin">admin</option>
                    <option value="owner">owner</option>
                    <option value="employee">employee</option>
                </select>
            </div>
            <div className="border-t border-[#CDCDCD] flex justify-end gap-3 text-sm pt-5" >
                <button onClick={() => {
                    overlay.changeStatusDialogForm(false);
                    setDialog("");
                }} className="inline-block bg-linear-to-b from-[white] to-[#F9F9F9] py-2 px-3 border border-[#CDCDCD] rounded-md cursor-pointer font-medium">Tutup</button>
                <button className="inline-block bg-linear-to-b from-[#4ACC93] to-[#38B57C] to-63% py-2 px-3 border border-[#009A66] rounded-md cursor-pointer font-medium text-white">Tambah</button>
            </div>
        </div>

        <div className={overlay.statusDialogForm && dialog === "kata_sandi" ? `z-999 fixed left-[2%] right-[2%] md:left-[10%] md:right-[10%] top-[15%] lg:top-[15%] lg:left-[45%] lg:right-[45%] bg-white shadow-md lg:w-100 h-fit p-8 rounded-lg transition-all duration-500 lg:text-sm` : 'hidden'}>
            <div className="flex justify-between border-b pb-3 mb-4 border-[#CDCDCD]">
                <span className="font-bold text-lg">Ubah Kata Sandi</span>
            </div>
            <div className="mb-6">
                <label className="inline-block mb-2 font-semibold">Kata Sandi Baru</label>
                <input type="password" className="border border-[#CDCDCD] rounded-md w-full h-8.5 inline-block px-4 py-5 font-medium" placeholder="Masukkan kata sandi"/>
            </div>
            <div className="mb-6">
                <label className="inline-block mb-2 font-semibold">Konfirmasi Kata Sandi Baru</label>
                <input type="password" className="border border-[#CDCDCD] rounded-md w-full h-8.5 inline-block px-4 py-5 font-medium" placeholder="Masukkan kata sandi"/>
            </div>
            <div className="border-t border-[#CDCDCD] flex justify-end gap-3 text-sm pt-5" >
                <button onClick={() => {
                    overlay.changeStatusDialogForm(false);
                    setDialog("");
                }} className="inline-block bg-linear-to-b from-[white] to-[#F9F9F9] py-2 px-3 border border-[#CDCDCD] rounded-md cursor-pointer font-medium">Tutup</button>
                <button className="inline-block bg-linear-to-b from-[#4ACC93] to-[#38B57C] to-63% py-2 px-3 border border-[#009A66] rounded-md cursor-pointer font-medium text-white">Tambah</button>
            </div>
        </div>

         <div className="px-6 mt-6 mb-8">
            <div className="bg-white rounded-lg p-8 shadow-md border-[1.5px] border-[#CDCDCD] w-full">
                <div className="md:flex md:items-center md:justify-between space-y-5 mb-5">
                    <h4 className="font-bold">Daftar Pengguna</h4>
                    <div className="flex justify-end items-center text-sm">
                        <input type="text" className="border border-[#CDCDCD] rounded-l-md w-full lg:w-87.5 h-8.5 inline-block px-4 font-medium" placeholder="Cari Pengguna" />
                        <button className="inline-block bg-linear-to-b from-[#4ACC93] to-[#38B57C] to-63% h-8.5 py-2 px-6 border border-[#009A66] rounded-r-md cursor-pointer font-medium text-white text-xs hover:to-[#5EDBA2] transition-all ease-in-out duration-500">Cari</button>
                    </div>
                </div>
                <div className="flex justify-end gap-3 text-xs mb-5">
                    <button onClick={() => {
                        setDialog("tambah");
                        overlay.changeStatusDialogForm(true);
                    }} className="flex gap-2 bg-linear-to-b from-[white] to-[#F9F9F9] py-2 px-2 md:py-2 md:px-3 border border-[#CDCDCD] rounded-md cursor-pointer font-medium hover:to-[#FFFFFF] transition-all ease-in-out duration-500">
                        <Plus size="xs"/>
                        <span>Tambah</span>
                    </button>
                </div>
                <div className="w-full overflow-scroll scrollbar-none">
                    <table className="table-auto divide-y w-full divide-gray-200 space-y-4 mb-10">
                        <thead className="text-[#757575] text-sm">
                            <tr>
                                <th className="py-4 px-2">ID Pengguna</th>
                                <th  className="py-4 px-2">Usename</th>
                                <th  className="py-4 px-2">Nama</th>
                                <th  className="py-4 px-2">Role</th>
                                <th  className="py-4 px-2">Tanggal dibuat</th>
                                <th  className="py-4 px-2">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-center text-sm">
                            <tr>
                                <td className="py-2">1</td>
                                <td className="py-2">admin</td>
                                <td className="py-2">Admin</td>
                                <td className="py-2">admin</td>
                                <td className="py-2 px-3 whitespace-pre ">01-11-2026</td>
                                <td className="py-2 px-3 whitespace-pre lg:px-0 flex justify-center gap-2"> 
                                    <button onClick={() => {
                                            overlay.changeStatusDialogForm(true);
                                            setDialog("kata_sandi");
                                        }
                                    } className="inline-block bg-linear-to-b from-[white] to-[#F9F9F9] py-2 px-2 border border-[#CDCDCD] rounded-md cursor-pointer font-medium text-xs hover:to-[#FFFFFF] transition-all ease-in-out duration-500">Kata Sandi</button>
                                    <button onClick={() => {
                                            overlay.changeStatusDialogForm(true);
                                            setDialog("edit");
                                        }
                                    } className="inline-block bg-linear-to-b from-[white] to-[#F9F9F9] py-2 px-2 border border-[#CDCDCD] rounded-md cursor-pointer font-medium text-xs hover:to-[#FFFFFF] transition-all ease-in-out duration-500">Edit</button>
                                    <button className="inline-block bg-linear-to-b from-[white] to-[#F9F9F9] py-2 px-2 border border-[#CDCDCD] rounded-md cursor-pointer font-medium text-xs hover:to-[#FFFFFF] transition-all ease-in-out duration-500">Hapus</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col gap-4 items-end md:flex-row md:items-center md:justify-between md:gap-0">
                    <span className="text-sm">Menampilkan 1 dari 2 Pengguna</span>
                    <div className="space-x-2 text-xs">
                        <button className="inline-block bg-linear-to-b from-[white] to-[#F9F9F9] py-2 px-2 md:py-2 md:px-3 border border-[#CDCDCD] rounded-md cursor-pointer font-medium hover:to-[#FFFFFF] transition-all ease-in-out duration-500">Sebelumnya</button>
                        <button className="inline-block bg-linear-to-b from-[#4ACC93] to-[#38B57C] to-63% py-2 px-3 border border-[#009A66] rounded-md cursor-pointer font-medium text-white hover:to-[#5EDBA2] transition-all ease-in-out duration-500">1</button>
                        <button className="inline-block bg-linear-to-b from-[white] to-[#F9F9F9] py-2 px-3 border border-[#CDCDCD] rounded-md cursor-pointer font-medium hover:to-[#FFFFFF] transition-all ease-in-out duration-500">2</button>
                        <button className="inline-block bg-linear-to-b from-[white] to-[#F9F9F9] py-2 px-2 md:py-2 md:px-3 border border-[#CDCDCD] rounded-md cursor-pointer font-medium hover:to-[#FFFFFF] transition-all ease-in-out duration-500">Berikutnya</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Ingredients;
