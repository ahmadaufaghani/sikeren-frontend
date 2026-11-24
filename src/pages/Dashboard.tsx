import React, {useState} from "react";
import Chart from "react-apexcharts";
import { useOverlay } from "../context/OverlayContext";

const Home: React.FC = () => {

    const overlay = useOverlay();

    const [period, setPeriod] = useState("harian"); 

    const topMenus = [
        "Nasi Goreng",
        "Mi Goreng",
        "Es Teh"
    ]
    const harian = [
        '09.00',
        '10.00',
        '11.00',
        '12.00',
        '13.00',
        '14.00',
        '15.00',
        '16.00',
        '17.00',
        '18.00',
        '19.00',
        '20.00',
    ]

    const mingguan = [
        'Senin',
        'Selasa',
        'Rabu',
        'Kamis',
        'Jumat',
        'Sabtu',
        'Minggu',
    ]

    const bulanan = [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
    ]

    const harianData = [
        30, 40, 45, 50, 49, 60, 30, 20, 10, 11, 8, 7
    ]

    const mingguanData = [
        30, 40, 45, 50, 49, 60, 30
    ]

    const bulananData = [
        30, 40, 45, 50, 49, 60, 30, 20, 10, 11, 8, 7, 20, 40, 22, 32, 21, 25, 26,35, 32, 24, 43, 24, 26, 21, 45, 32, 33, 43
    ]

    const unpopularMenus = [
        "Kwetiau Kuah",
        "Jeruk Hangat",
        "Nasi Goreng Mawut"
    ]

    const highestSellingTime = {
        time: "19.30",
        totalSelling : 40
    }

    const options = {
        colors: ["#009A66"],
        chart: {
        fontFamily: "Plus Jakarta Sans, sans-serif",
        dropShadow: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
        },
        tooltip: {
        enabled: true,
        x: {
            show: false,
        },
        },
        fill: {
        type: "gradient",
        gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            gradientToColors: ["#009A66"]
        },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 2,
        },
        grid: {
            show: true,
            strokeDashArray: 4,
            padding: {
                left: 2,
                right: 2,
                top: 0,
        },
        },
        xaxis: {
            categories: [
            ...( period === "harian" ? harian : (period === "mingguan") ? mingguan : bulanan) 
            ],
            labels: {
                show: true,
            },
            axisBorder: {
                show: true,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: true,
        },
    };
    
    const series = [{
        name: 'Penjualan',
        data: [...( period === "harian" ? harianData : (period === "mingguan") ? mingguanData : bulananData ) ]
    }];

    return <>
    <div>
        <div className={!overlay.statusDialogForm ? 'hidden' : `z-999 fixed left-[2%] right-[2%] md:left-[10%] md:right-[10%] top-[15%] lg:top-[15%] lg:left-[35%] lg:right-[35%] bg-white shadow-md lg:w-125 h-fit p-10 rounded-lg transition-all duration-500`}>
            <div className="flex justify-between border-b pb-5 mb-4 border-[#CDCDCD] text-sm">
                <span className="font-bold">Nasi Goreng - Bahan Baku</span>
                <span className="font-bold">Senin - 15 porsi</span>
            </div>
            <div className="h-75 overflow-scroll scrollbar-none mb-5">
                <ul className="text-sm space-y-3">
                    <li className="flex justify-between">
                        <span className="font-medium">Nasi Putih</span>
                        <span>7500g</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="font-medium">Minyak Goreng</span>
                        <span>675 ml</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="font-medium">Telur</span>
                        <span>30 butir</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="font-medium">Bawang Merah</span>
                        <span>60 siung</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="font-medium">Bawang Putih</span>
                        <span>45 siung</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="font-medium">Cabai Merah</span>
                        <span>45 buah</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="font-medium">Terasi</span>
                        <span>90 g</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="font-medium">Kecap Manis</span>
                        <span>675 ml</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="font-medium">Kecap Asin</span>
                        <span>225 ml</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="font-medium">Garam</span>
                        <span>90 g</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="font-medium">Kaldu Bubuk</span>
                        <span>75 g</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="font-medium">Merica</span>
                        <span>15 g</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="font-medium">Ayam</span>
                        <span>600 g</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="font-medium">Timun</span>
                        <span>4 buah</span>
                    </li>
                </ul>
            </div>
            <div className="border-t border-[#CDCDCD] flex justify-end gap-3 text-sm pt-5" >
                <button onClick={() => overlay.changeStatusDialogForm(false)} className="inline-block bg-linear-to-b from-[white] to-[#F9F9F9] py-1 px-3 border border-[#CDCDCD] rounded-md cursor-pointer font-medium hover:to-[#FFFFFF] transition-all ease-in-out duration-500">Tutup</button>
                <button className="inline-block bg-linear-to-b from-[#4ACC93] to-[#38B57C] to-63% py-2 px-3 border border-[#009A66] rounded-md cursor-pointer font-medium text-white hover:to-[#5EDBA2] transition-all ease-in-out duration-500">Selanjutnya</button>
            </div>
        </div>
    </div>
        <div className="grid lg:grid-cols-3 gap-6 p-6">
            <div className="bg-white p-8 rounded-lg shadow-md border-[1.5px] border-[#CDCDCD]">
                <h4 className="font-bold mb-4">Menu Terlaris</h4>
                <ul className="space-y-4 text-sm">
                    {topMenus.map((val,index) => {
                        return <li className="space-x-3" key={index}>
                            <span className="inline-block bg-[#D9F9E9] py-1 px-3 rounded-3xl">
                                {index+1}
                            </span>
                            <span>
                                {val}
                            </span>
                        </li>
                    })}
                </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-[1.5px] border-[#CDCDCD]">
                <h4 className="font-bold mb-4">Menu Kurang Diminati</h4>
                <ul className="space-y-4 text-sm">
                    {unpopularMenus.map((val,index) => {
                        return <li className="space-x-3" key={index}>
                            <span className="inline-block bg-[#D9F9E9] py-1 px-3 rounded-3xl">
                                {index+1}
                            </span>
                            <span>
                                {val}
                            </span>
                        </li>
                    })}
                </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-[1.5px] border-[#CDCDCD]">
                <h4 className="font-bold mb-8">Waktu Penjualan Tertinggi</h4>
                <h1 className="text-6xl mb-5 text-center text-[#757575]">{highestSellingTime.time}</h1>
                <p className="text-center text-sm">*Hari ini penjualan sebanyak {highestSellingTime.totalSelling} transaksi</p>
            </div>
        </div>
        <div className="px-6 mb-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-[1.5px] border-[#CDCDCD]">
                <div className="md:flex md:justify-between">
                    <h4 className="font-bold mb-8">Tren Penjualan</h4>
                    <div className="flex gap-4 justify-center items-center bg-[#f6f6f6] h-fit rounded-lg text-xs w-fit">
                        <span onClick={() => setPeriod("harian")} className={`${period === "harian" ? "py-2 rounded-lg shadow-md bg-white border-[1.5px] border-[#CDCDCD]" : "text-[#757575]"}  px-3 md:px-6 font-medium cursor-pointer`}>Harian</span>
                        <span onClick={() => {
                        setPeriod("mingguan");
                        }} className={`${period === "mingguan" ? "py-2 rounded-lg shadow-md bg-white border-[1.5px] border-[#CDCDCD]" : "text-[#757575]"}  px-3 md:px-6 font-medium cursor-pointer`}>Mingguan</span>
                        <span onClick={() => setPeriod("bulanan")} className={`${period === "bulanan" ? "py-2 rounded-lg shadow-md bg-white border-[1.5px] border-[#CDCDCD]" : "text-[#757575]"}  px-3 md:px-6 font-medium cursor-pointer`}>Bulanan</span>
                    </div>
                </div>
               <Chart 
                    options={options} 
                    series={series} 
                    type="area"
                    width="98%" 
                    height="350" 
                />
            </div>
        </div>
         <div className="px-6 mb-8">
            <div className="bg-white rounded-lg p-8 shadow-md border-[1.5px] border-[#CDCDCD] w-full">
                <div className="md:flex md:items-center md:justify-between space-y-5 mb-8">
                    <h4 className="font-bold">Rekomendasi Penjualan dan Stok Bahan Baku</h4>
                    <div className="flex justify-end items-center gap-4 text-sm">
                        <span className="font-medium text-[#757575]">Terakhir diprediksi pada tanggal 10-11-2026</span>
                        <button className="inline-block bg-linear-to-b from-[#4ACC93] to-[#38B57C] to-63% py-2 px-3 border border-[#009A66] rounded-md cursor-pointer font-medium text-white text-xs hover:to-[#5EDBA2] transition-all ease-in-out duration-500">Prediksi</button>
                    </div>
                </div>
                <div className="w-full overflow-scroll scrollbar-none">
                    <table className="table-auto divide-y w-full divide-gray-200 space-y-4 mb-10">
                        <thead className="text-[#757575] text-sm">
                            <tr>
                                <th className="py-4 px-2">Menu</th>
                                <th  className="py-4 px-2">Senin</th>
                                <th  className="py-4 px-2">Selasa</th>
                                <th  className="py-4 px-2">Rabu</th>
                                <th  className="py-4 px-2">Kamis</th>
                                <th  className="py-4 px-2">Jumat</th>
                                <th  className="py-4 px-2">Sabtu</th>
                                <th  className="py-4 px-2">Minggu</th>
                                <th  className="py-4 px-2">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-center text-sm">
                            <tr>
                                <td className="py-2">Nasi Goreng</td>
                                <td className="py-2">15</td>
                                <td className="py-2">20</td>
                                <td className="py-2">15</td>
                                <td className="py-2">12</td>
                                <td className="py-2">18</td>
                                <td className="py-2">21</td>
                                <td className="py-2">32</td>
                                <td className="py-2">
                                    <button onClick={() => overlay.changeStatusDialogForm(true)} className="inline-block bg-linear-to-b from-[white] to-[#F9F9F9] py-2 px-4 border border-[#CDCDCD] rounded-md cursor-pointer font-medium text-xs hover:to-[#FFFFFF] transition-all ease-in-out duration-500">Detail</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col gap-4 items-end md:flex-row md:items-center md:justify-between md:gap-0">
                    <span className="text-sm">Menampilkan 1 dari 2 Prediksi</span>
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

export default Home;
