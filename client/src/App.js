import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import HomePage from "./pages/Home";
import AuthPage from "./pages/Auth";
import { ToastContainer } from "react-toastify";
import useToken from "./hooks/useToken";
import Navbar from "./components";
import PostCreatModal from "./components/postCreatModal/index"
import { useSelector } from "react-redux";


function App() {
  const [token] = useToken();
  const { modal } = useSelector(state => state.modal)

  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        {token?.token && <Navbar />}
        {modal && <PostCreatModal />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
