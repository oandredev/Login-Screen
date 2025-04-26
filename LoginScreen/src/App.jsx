import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from "./pages/login/login.jsx";

function App() {
  return (
    <Router>
      <Routes>
        { }
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        { }
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;