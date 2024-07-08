import { ChatContextProvider } from "./context/chatContext";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chat from "./pages/Chat";

const App = () => {
  const authToken = window.localStorage.getItem("authToken");

  return (
    <ChatContextProvider>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={authToken ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/:id"
            element={authToken ? <Chat /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={authToken ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </ChatContextProvider>
  );
};

export default App;
