import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";
import Home from "./components/pages/Home";
import NavBar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Message from "./components/layout/Message";

import Container from"./components/layout/Container"

import { UserProvider } from "./context/UserContext";


function App() {
  return (
    <Router>
      <UserProvider>
      <NavBar/>
      <Message/>
      <Container>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </Container>
      <Footer/> 
      </UserProvider>
    </Router>
  );
}

export default App;
