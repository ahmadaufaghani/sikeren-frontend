import React, { useState } from "react";
import { CaretUp, TrendingUp, TrendingDown, Plus} from "@boxicons/react";
import { useOverlay } from "../context/OverlayContext";

const Menu: React.FC = () => {
    const overlay = useOverlay();
    type Ingredient = {
        menu: string,
        name: string,
        stock: number,
        unit: string
    }

    const [dialog, setDialog] = useState("");
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [category, setCategory] = useState<string>("");
    const [categoryEdit, setCategoryEdit] = useState<string>("makanan_utama");

    const addIngredient = (namaMenu: string) => {
        setIngredients((prev) => [...prev, {menu: namaMenu, name: "", stock: 0, unit: ""} as Ingredient]);
    }

    const editIngredient = (index: number, attr: string, value:any) => {
        setIngredients(ingredients.map((val, i) => i === index ? {...val, [attr]:value} : val))
    }

    return <>
    <div>
        </div>
         <div className={overlay.statusDialogForm && dialog === "tambah" ? `z-999 fixed left-[2%] right-[2%] md:left-[10%] md:right-[10%] top-[15%] lg:top-[15%] lg:left-[45%] lg:right-[45%] bg-white shadow-md lg:w-100 h-fit p-8 rounded-lg transition-all duration-500 lg:text-sm` : 'hidden'}>
            <div className="flex justify-between border-b pb-3 mb-4 border-[#CDCDCD]">
                <span className="font-bold text-lg">Tambah Menu</span>
            </div>
            <div className="mb-6">
                <label className="inline-block mb-2 font-semibold">Nama Menu</label>
                <input type="text" className="border border-[#CDCDCD] rounded-md w-full h-8.5 inline-block px-4 py-5 font-medium" placeholder="Masukkan nama menu" name="menu" />
            </div>
            <div className="mb-6">
                <label className="inline-block mb-2 w-full font-semibold">Kategori</label>
                <select className="border border-[#CDCDCD] rounded-md w-full px-4 py-2" name="kategori" value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                    <option value="">- Pilih Kategori -</option>
                    <option value="makanan_utama">Makanan Utama</option>
                    <option value="cemilan">Cemilan</option>
                    <option value="makanan_penutup">Makanan Penutup</option>
                </select>
            </div>
            <div className="mb-6">
                <label className="inline-block mb-2 font-semibold">Harga</label>
                <input type="number" className="border border-[#CDCDCD] rounded-md w-full h-8.5 inline-block px-4 py-5 font-medium" placeholder="Masukkan harga menu" />
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
                <span className="font-bold text-lg">Edit Menu</span>
            </div>
            <div className="mb-6">
                <label className="inline-block mb-2 font-semibold">Nama Menu</label>
                <input type="text" className="border border-[#CDCDCD] rounded-md w-full h-8.5 inline-block px-4 py-5 font-medium" placeholder="Masukkan nama menu" name="menu" value="Nasi Goreng" onChange={()=>{}} />
            </div>
            <div className="mb-6">
                <label className="inline-block mb-2 w-full font-semibold">Kategori</label>
                <select className="border border-[#CDCDCD] rounded-md w-full px-4 py-2" name="kategori" value={categoryEdit} onChange={(e)=>{setCategoryEdit(e.target.value)}}>
                    <option value="">- Pilih Kategori -</option>
                    <option value="makanan_utama">Makanan Utama</option>
                    <option value="cemilan">Cemilan</option>
                    <option value="makanan_penutup">Makanan Penutup</option>
                </select>
            </div>
            <div className="mb-6">
                <label className="inline-block mb-2 font-semibold">Harga</label>
                <input type="number" className="border border-[#CDCDCD] rounded-md w-full h-8.5 inline-block px-4 py-5 font-medium" placeholder="Masukkan harga menu" value={15000} onChange={()=>{}} />
            </div>
            <div className="border-t border-[#CDCDCD] flex justify-end gap-3 text-sm pt-5" >
                <button onClick={() => {
                    overlay.changeStatusDialogForm(false);
                    setDialog("");
                }} className="inline-block bg-linear-to-b from-[white] to-[#F9F9F9] py-2 px-3 border border-[#CDCDCD] rounded-md cursor-pointer font-medium">Tutup</button>
                <button className="inline-block bg-linear-to-b from-[#4ACC93] to-[#38B57C] to-63% py-2 px-3 border border-[#009A66] rounded-md cursor-pointer font-medium text-white">Tambah</button>
            </div>
        </div>
         <div className={overlay.statusDialogForm && dialog === "resep" ? `z-999 fixed w-[90%] left-[5%] right-[5%] md:w-100 md:left-[25%] md:right-[25%] top-[20%] lg:top-[15%] lg:left-[45%] lg:right-[45%] bg-white shadow-md p-8 rounded-lg transition-all duration-500 lg:text-sm` : 'hidden'}>
            <div className="flex justify-between border-b pb-3 mb-4 border-[#CDCDCD]">
                <span className="font-bold text-lg">Resep</span>
                <div onClick={() => addIngredient("Nasi Goreng")} className="flex items-center gap-2 cursor-pointer">
                    <Plus size="xs"/>
                    <span className="font-semibold text-sm">Tambah</span>
                </div>
            </div> 
            <div className="h-56 overflow-scroll scrollbar-none">
                {ingredients.filter(val => val.menu === "Nasi Goreng").length === 0 ? 
                    (<div className="h-full w-full flex items-center justify-center whitespace-nowrap">
                        <span>Tidak Ada Bahan ditemukan.</span>
                    </div>)
                : 
                ingredients.filter(val => val.menu === "Nasi Goreng").map((val, index) => {
                    return <div className="mb-2" key={index}>
                        <h4 className="mb-3 font-semibold text-sm">Bahan Baku {index + 1} </h4>
                        <div className="flex gap-2 w-full overflow-hidden">
                            <input type="text" className="border border-[#CDCDCD] flex-1 min-w-0 md:max-w-40 rounded-md h-8.5 inline-block px-4 font-medium text-sm" placeholder="Bahan Baku" value={val.name} onChange={(e) => editIngredient(index, "name", e.target.value)}/>
                            <input type="number" className="border border-[#CDCDCD] flex-1 min-w-0 md:max-w-25 basis-0.5 rounded-md text-sm  px-4 h-8.5 inline-block font-medium" placeholder="Stok" value={val.stock} onChange={(e) => editIngredient(index, "stock", e.target.value)}/>
                            <select className="border border-[#CDCDCD] rounded-md flex-1 min-w-0 md:max-w-30 px-4 py-2 text-sm" name="kategori" onChange={(e) => editIngredient(index, "unit", e.target.value)} value={val.unit}>
                                <option value=""> Satuan</option>
                                <option value="kg" >kilogram</option>
                                <option value="g">gram</option>
                                <option value="butir">butir</option>
                                <option value="siung">siung</option>
                                <option value="buah">buah</option>
                            </select>
                        </div>
                    </div>
                })}
            </div> 
            <div className="border-t border-[#CDCDCD] flex justify-end gap-3 text-sm pt-5 mt-5" >
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
                <h4 className="font-bold mb-4 text-lg">Total Menu</h4>
            </div>
            <div className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-md border-[1.5px] border-[#CDCDCD]">
                <div className="flex gap-2">
                    <h4 className="font-semibold mb-4 text-2xl">30</h4>
                    <span>
                      <TrendingUp/>
                    </span>
                </div>
                <h4 className="font-bold mb-4 text-lg">Stok Tertinggi</h4>
            </div>
            <div className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-md border-[1.5px] border-[#CDCDCD]">
                <div className="flex gap-2">
                    <h4 className="font-semibold mb-4 text-2xl">12</h4>
                    <span>
                      <TrendingDown/>
                    </span>
                </div>
                <h4 className="font-bold mb-4 text-lg">Stok Terendah</h4>
            </div>
        </div>
         <div className="px-6 mb-8">
            <div className="bg-white rounded-lg p-8 shadow-md border-[1.5px] border-[#CDCDCD] w-full">
                <div className="md:flex md:items-center md:justify-between space-y-5 mb-5">
                    <h4 className="font-bold">Daftar Menu</h4>
                    <div className="flex justify-end items-center text-sm">
                        <input type="text" className="border border-[#CDCDCD] rounded-l-md w-full lg:w-87.5 h-8.5 inline-block px-4 font-medium" placeholder="Cari Nama Menu" />
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
                                <th className="py-4 px-2">ID Menu</th>
                                <th  className="py-4 px-2">Nama</th>
                                <th  className="py-4 px-2">Kategori</th>
                                <th  className="py-4 px-2">Stok</th>
                                <th  className="py-4 px-2">Harga</th>
                                <th  className="py-4 px-2">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-center text-sm">
                            <tr>
                                <td className="py-2">1</td>
                                <td className="py-2">Nasi Goreng</td>
                                <td className="py-2">Makanan Utama</td>
                                <td className="py-2">0</td>
                                <td className="py-2">Rp. 15.000</td>
                                <td className="py-2 px-3 lg:px-0 flex justify-center gap-2"> 
                                    <button onClick={() => {
                                            overlay.changeStatusDialogForm(true);
                                            setDialog("resep");
                                        }
                                    } className="inline-block bg-linear-to-b from-[white] to-[#F9F9F9] py-1 px-4 border border-[#CDCDCD] rounded-md cursor-pointer font-medium text-xs hover:to-[#FFFFFF] transition-all ease-in-out duration-500">Resep</button>
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
                    <span className="text-sm">Menampilkan 1 dari 2 Menu</span>
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

export default Menu;
