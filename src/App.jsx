import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Footer from "./components/footer";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
