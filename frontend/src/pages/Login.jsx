import { useState } from "react";

import LoginForm from "../components/LoginForm";
import apiEndpoint from "../service";
import Toast from "../utils/toast";

const Login = () => {
  const [loading, setLoading] = useState(false);
  
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);


    try {
      const res = await apiEndpoint.Auth.login(input);
      console.log(res)
      window.localStorage.setItem("authToken", res);
      window.location.replace("/");
    } catch (error) {
      Toast.error(error.detail);
      console.error("Login error:", error);
    }
    setLoading(false);
  };

  return (
    <LoginForm
      input={input}
      setInput={setInput}
      loading={loading}
     
      onSubmit={login}
    />
  );
};

export default Login;
