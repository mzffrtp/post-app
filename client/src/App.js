import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/Home";
import AuthPage from "./pages/Auth";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
