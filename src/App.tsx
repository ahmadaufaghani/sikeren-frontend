import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import Menu from "./pages/Menu";
import Ingredient from "./pages/Ingredient";
import User from "./pages/User";
import Login from "./pages/Login";

import { OverlayProvider } from "./context/OverlayContext";

function App() {
  return (
    <OverlayProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path="transaksi" element={<Transaction/>}/>
              <Route path="menu" element={<Menu/>}/>
              <Route path="bahanbaku" element={<Ingredient/>}/>
              <Route path="pengguna" element={<User/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </OverlayProvider>
  )
}

export default App
