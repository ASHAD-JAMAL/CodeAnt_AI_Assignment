import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashBoardLayout from "./components/DashBoardLayout";
import Dashboard from "./pages/Dashboard";
import AIReview from "./components/AIReview";
import CloudSecurity from "./components/CloudSecurity";
import HowToUse from "./components/HowToUse";
import Settings from "./components/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashBoardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="code-review" element={<AIReview />} />
          <Route path="cloud-security" element={<CloudSecurity />} />
          <Route path="how-to-use" element={<HowToUse />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
