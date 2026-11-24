import React from "react";
import { CaretUp, TrendingUp, TrendingDown, FilePlus, FileDetail} from "@boxicons/react";

const Transaction: React.FC = () => {
    return <>
    <div>
    </div>
        <div className="grid lg:grid-cols-3 gap-6 p-6">
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md border-[1.5px] border-[#CDCDCD]">
                <div className="flex items-center gap-2">
                    <h4 className="font-semibold mb-4 text-3xl">10</h4>
                    <span>
                      <CaretUp/>
                    </span>
                </div>
                <h4 className="font-bold mb-4 text-lg">Total Transaksi</h4>
            </div>
            <div className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-md border-[1.5px] border-[#CDCDCD]">
                <div className="flex gap-2">
                    <h4 className="font-semibold mb-4 text-2xl">Rp. 150.000</h4>
                    <span>
                      <TrendingUp/>
                    </span>
                </div>
                <h4 className="font-bold mb-4 text-lg">Total Pembelian Tertinggi</h4>
            </div>
            <div className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-md border-[1.5px] border-[#CDCDCD]">
                <div className="flex gap-2">
                    <h4 className="font-semibold mb-4 text-2xl">Rp. 15.000</h4>
                    <span>
                      <TrendingDown/>
                    </span>
                </div>
                <h4 className="font-bold mb-4 text-lg">Total Pembelian Terendah</h4>
            </div>
        </div>
         <div className="px-6 mb-8">
            <div className="bg-white rounded-lg p-8 shadow-md border-[1.5px] border-[#CDCDCD] w-full">
                <div className="md:flex md:items-center md:justify-between space-y-5 mb-5">
                    <h4 className="font-bold">Daftar Transaksi</h4>
                    <div className="flex justify-end items-center text-sm">
                        <input type="text" className="border border-[#CDCDCD] rounded-l-md w-full lg:w-87.5 h-8.5 inline-block px-4 font-medium" placeholder="Cari ID Transaksi" />
                        <button className="inline-block bg-linear-to-b from-[#4ACC93] to-[#38B57C] to-63% h-8.5 py-2 px-6 border border-[#009A66] rounded-r-md cursor-pointer font-medium text-white text-xs hover:to-[#5EDBA2] transition-all ease-in-out duration-500">Cari</button>
                    </div>
                </div>
                <div className="flex justify-end gap-3 text-xs mb-5">
                    <button className="flex gap-2 bg-linear-to-b from-[white] to-[#F9F9F9] py-2 px-2 md:py-2 md:px-3 border border-[#CDCDCD] rounded-md cursor-pointer font-medium hover:to-[#FFFFFF] transition-all ease-in-out duration-500">
                        <FilePlus size="xs"/>
                        <span>Impor</span>
                    </button>
                    <button className="flex gap-2 bg-linear-to-b from-[white] to-[#F9F9F9] py-2 px-2 md:py-2 md:px-3 border border-[#CDCDCD] rounded-md cursor-pointer font-medium hover:to-[#FFFFFF] transition-all ease-in-out duration-500">
                        <FileDetail size="xs"/>
                        <span>Ekspor</span>
                    </button>
                </div>
                <div className="w-full overflow-scroll scrollbar-none">
                    <table className="table-auto divide-y w-full divide-gray-200 space-y-4 mb-10">
                        <thead className="text-[#757575] text-sm">
                            <tr>
                                <th className="py-4 px-2">ID Transaksi</th>
                                <th  className="py-4 px-2">Tanggal/Waktu</th>
                                <th  className="py-4 px-2">Menu</th>
                                <th  className="py-4 px-2">Jumlah</th>
                                <th  className="py-4 px-2">Total</th>
                                <th  className="py-4 px-2">Promo</th>
                                <th  className="py-4 px-2">Metode Pembayaran</th>
                                <th  className="py-4 px-2">Tipe Order</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-center text-sm">
                            <tr>
                                <td className="py-2">TRX202601010459</td>
                                <td className="py-2">01-01-2026</td>
                                <td className="py-2">Nasi Goreng</td>
                                <td className="py-2">1</td>
                                <td className="py-2">Rp. 15.000</td>
                                <td className="py-2">Tanpa Promo</td>
                                <td className="py-2">Tunai</td>
                                <td className="py-2">Dine-in</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col gap-4 items-end md:flex-row md:items-center md:justify-between md:gap-0">
                    <span className="text-sm">Menampilkan 1 dari 2 Transaksi</span>
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

export default Transaction;
