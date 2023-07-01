/* --------------------------------- Router --------------------------------- */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* ---------------------------------- Pages --------------------------------- */
import { Home } from "pages/Home/Home";
import { Login } from "pages/Auth/Login";
import { Register } from "pages/Auth/Register";

/* ------------------------------- Components ------------------------------- */
import { Navbar } from "components/Navbar";
import { Footer } from "components/Footer";

/* ---------------------------------- Style --------------------------------- */
import "App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
