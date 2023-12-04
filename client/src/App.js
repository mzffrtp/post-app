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
  console.log("auth-->", token);
  const { modal } = useSelector(state => state.modal)
  console.log("modal-->", modal);

  return (
    <div>
      <BrowserRouter>
        {token?.token && <Navbar />}
        {modal && <PostCreatModal />}
        <Routes>
          <Route path="/" element={
            // !token?.token ? <Link to={"/auth"} /> : 
            <HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
