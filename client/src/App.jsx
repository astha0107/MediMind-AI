import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import SymptomChecker from "./pages/SymptomChecker";
import ResultPage from "./pages/ResultPage";
import Chatbot from "./pages/Chatbot";
import MedicineSearch from "./pages/MedicineSearch";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/symptoms" element={<SymptomChecker />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/chat" element={<Chatbot />} />
        <Route path="/medicine" element={<MedicineSearch />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;