import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { selectUser } from "./features/userSlice";
import Home from "./pages/Home";
import Information from "./pages/Information";
import Login from "./pages/Login";

function App() {
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/information" element={<Information />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
