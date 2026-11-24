import React, { useState } from "react";
import { CaretUp, TrendingUp, TrendingDown, Plus} from "@boxicons/react";
import { useOverlay } from "../context/OverlayContext";

const Ingredients: React.FC = () => {
    const [dialog, setDialog] = useState("");
    const [unit, setUnit] = useState<string>("");
    const [unitEdit, setUnitEdit] = useState<string>("gram");
    const overlay = useOverlay();

    return <>
    <div>
    </div>
        <div className={overlay.statusDialogForm && dialog === "tambah" ? `z-999 fixed left-[2%] right-[2%] md:left-[10%] md:right-[10%] top-[15%] lg:top-[15%] lg:left-[45%] lg:right-[45%] bg-white shadow-md lg:w-100 h-fit p-8 rounded-lg transition-all duration-500 lg:text-sm` : 'hidden'}>
            <div className="flex justify-between border-b pb-3 mb-4 border-[#CDCDCD]">
                <span className="font-bold text-lg">Tambah Bahan Baku</span>
            </div>
            <div className="mb-6">
                <label className="inline-block mb-2 font-semibold">Nama Bahan Baku</label>
                <input type="text" className="border border-[#CDCDCD] rounded-md w-full h-8.5 inline-block px-4 py-5 font-medium" placeholder="Masukkan nama bahan baku"/>
            </div>
            <div className="mb-6">
                <label className="inline-block mb-2 font-semibold">Stok Awal</label>
                <input type="number" className="border border-[#CDCDCD] rounded-md w-full h-8.5 inline-block px-4 py-5 font-medium" placeholder="Masukkan harga menu"/>
            </div>
            <div className="mb-6">
                <label className="inline-block mb-2 w-full font-semibold">Satuan</label>
                <select className="border border-[#CDCDCD] rounded-md w-full px-4 py-2" name="kategori" value={unit} onChange={(e)=>{setUnit(e.target.value)}}>
                    <option value="">- Pilih Satuan -</option>
                    <option value="kilogram">kilogram</option>
                    <option value="gram">gram</option>
                    <option value="butir">butir</option>
                    <option value="buah">buah</option>
                    <option value="siung">siung</option>
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
         <div className={overlay.statusDialogForm && dialog === "edit" ?  `z-999 fixed left-[2%] right-[2%] md:left-[10%] md:right-[10%] top-[15%] lg:top-[15%] lg:left-[45%] lg:right-[45%] bg-white shadow-md lg:w-100 h-fit p-8 rounded-lg transition-all duration-500 lg:text-sm ` : 'hidden'}>
            <div className="flex justify-between border-b pb-3 mb-4 border-[#CDCDCD]">
                <span className="font-bold text-lg">Edit Bahan Baku</span>
            </div>
             <div className="mb-6">
                <label className="inline-block mb-2 font-semibold">Nama Bahan Baku</label>
                <input type="text" className="border border-[#CDCDCD] rounded-md w-full h-8.5 inline-block px-4 py-5 font-medium" placeholder="Masukkan nama bahan baku" value="Nasih Putih" onChange={()=>{}}/>
            </div>
            <div className="mb-6">
                <label className="inline-block mb-2 font-semibold">Stok Awal</label>
                <input type="number" className="border border-[#CDCDCD] rounded-md w-full h-8.5 inline-block px-4 py-5 font-medium" placeholder="Masukkan harga menu" value="10000" onChange={()=>{}}/>
            </div>
            <div className="mb-6">
                <label className="inline-block mb-2 w-full font-semibold">Satuan</label>
                <select className="border border-[#CDCDCD] rounded-md w-full px-4 py-2" name="kategori" value={unitEdit} onChange={(e)=>{setUnitEdit(e.target.value)}}>
                    <option value="">- Pilih Satuan -</option>
                    <option value="kilogram">kilogram</option>
                    <option value="gram">gram</option>
                    <option value="butir">butir</option>
                    <option value="buah">buah</option>
                    <option value="siung">siung</option>
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
        <div className="grid lg:grid-cols-3 gap-6 p-6">
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md border-[1.5px] border-[#CDCDCD]">
                <div className="flex items-center gap-2">
                    <h4 className="font-semibold mb-4 text-3xl">10</h4>
                    <span>
                      <CaretUp/>
                    </span>
                </div>
                <h4 className="font-bold mb-4 text-lg">Total Bahan Baku</h4>
            </div>
            <div className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-md border-[1.5px] border-[#CDCDCD]">
                <div className="flex gap-2">
                    <h4 className="font-semibold mb-4 text-xl">Nasi Putih</h4>
                    <span>
                      <TrendingUp/>
                    </span>
                </div>
                <h4 className="font-bold mb-4 text-lg">Bahan Baku Terbanyak</h4>
            </div>
            <div className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-md border-[1.5px] border-[#CDCDCD]">
                <div className="flex gap-2">
                    <h4 className="font-semibold mb-4 text-xl">Bawang Merah</h4>
                    <span>
                      <TrendingDown/>
                    </span>
                </div>
                <h4 className="font-bold mb-4 text-lg">Bahan Baku Tersedikit</h4>
            </div>
        </div>
         <div className="px-6 mb-8">
            <div className="bg-white rounded-lg p-8 shadow-md border-[1.5px] border-[#CDCDCD] w-full">
                <div className="md:flex md:items-center md:justify-between space-y-5 mb-5">
                    <h4 className="font-bold">Daftar Bahan Baku</h4>
                    <div className="flex justify-end items-center text-sm">
                        <input type="text" className="border border-[#CDCDCD] rounded-l-md w-full lg:w-87.5 h-8.5 inline-block px-4 font-medium" placeholder="Cari Nama Bahan Baku" />
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
                                <th className="py-4 px-2">ID Bahan Baku</th>
                                <th  className="py-4 px-2">Nama</th>
                                <th  className="py-4 px-2">Stok Awal</th>
                                <th  className="py-4 px-2">Stok Saat Ini</th>
                                <th  className="py-4 px-2">Satuan</th>
                                <th  className="py-4 px-2">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-center text-sm">
                            <tr>
                                <td className="py-2">1</td>
                                <td className="py-2">Nasi Putih</td>
                                <td className="py-2">10.000</td>
                                <td className="py-2">8.975</td>
                                <td className="py-2">gram</td>
                                <td className="py-2 px-3 lg:px-0 flex justify-center gap-2"> 
                                    <button onClick={() => {
                                            overlay.changeStatusDialogForm(true);
                                            setDialog("edit");
                                        }
                                    } className="inline-block bg-linear-to-b from-[white] to-[#F9F9F9] py-2 px-4 border border-[#CDCDCD] rounded-md cursor-pointer font-medium text-xs hover:to-[#FFFFFF] transition-all ease-in-out duration-500">Edit</button>
                                    <button className="inline-block bg-linear-to-b from-[white] to-[#F9F9F9] py-2 px-4 border border-[#CDCDCD] rounded-md cursor-pointer font-medium text-xs hover:to-[#FFFFFF] transition-all ease-in-out duration-500">Hapus</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col gap-4 items-end md:flex-row md:items-center md:justify-between md:gap-0">
                    <span className="text-sm">Menampilkan 1 dari 2 Bahan Baku</span>
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
