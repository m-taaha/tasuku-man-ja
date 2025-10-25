import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "sonner";

function App() {
  return (
    <Router>
<Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Toaster richColors position="top-right" />
    </Router>
  );
}

export default App;
