import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CreateNft from "./pages/CreateNft";
import { Home } from "./pages/Home";
import Profile from "./pages/Profile";

const App = () => {
    return (
        <div className="min-h-screen flex flex-row bg-slate-500 justify-center">
            <div className="w-20 flex justify-center">
                <div className="sm:flex">
                    <Sidebar />
                </div>
            </div>
            <div className="flex-1 max-sm:w-full max-w-7xl mx-auto">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/create-nft" element={<CreateNft />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
