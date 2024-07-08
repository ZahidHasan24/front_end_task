import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import apiEndpoint from "../../service";
import LoginForm from "../LoginForm";


const Auth = ({ modalOpen, setModalOpen }) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const login = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      setErrorMsg("");

      try {
        const res = await apiEndpoint.Auth.login(input);
        window.localStorage.setItem("authToken", res);
        setModalOpen(false);
      } catch (error) {
        setErrorMsg("Error: incorrect credentials");
        console.error("Login error:", error);
      }
      setLoading(false);
    },
    [input, setModalOpen]
  );

  useEffect(() => {
    if (modalOpen) {
      const authToken = window.localStorage.getItem("authToken");
      if (authToken) {
        setInput({ username: authToken, password: "" });
      }
    }
  }, [modalOpen]);

  return (
    <LoginForm
      input={input}
      setInput={setInput}
      loading={loading}
      errorMsg={errorMsg}
      onSubmit={login}
    />
  );
};

Auth.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
};

export default Auth;
