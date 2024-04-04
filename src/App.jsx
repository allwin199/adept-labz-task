import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Footer from "./components/footer";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Profilelayout from "./pages/profile/profileLayout";
import MyOrders from "./pages/profile/myorders";

import "./App.css";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/profile" element={<Profilelayout />}>
                    <Route index element={<Profile />} />
                    <Route exact path="myorders" element={<MyOrders />} />
                </Route>
            </Routes>
            <Footer />
        </>
    );
};

export default App;
