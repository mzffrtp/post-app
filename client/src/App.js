import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/Home";
import AuthPage from "./pages/Auth";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
