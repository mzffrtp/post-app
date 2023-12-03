import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import HomePage from "./pages/Home";
import AuthPage from "./pages/Auth";
import { ToastContainer } from "react-toastify";
import useToken from "./hooks/useToken";


function App() {
  const [token] = useToken();
  console.log("token--->", token);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!token.token ? <Link to={"/"} /> : <HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
