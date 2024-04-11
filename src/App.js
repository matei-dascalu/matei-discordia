import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import MainApp from "./pages/mainapp/Mainapp";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/mainapp" element={<MainApp />} />
        </Routes>
    );
}

export default App;
