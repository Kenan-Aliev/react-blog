import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";
import SnackbarComponent from "../Snackbar/Snackbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [age, setAge] = useState("")
  const [password, setPassword] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [message, setMessage] = useState(false)

  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
  }

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8888/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        setMessage("Вы успешно вошли в Кенана")
        setEmail("");
        setPassword("");
        setLogin(res.data.user.login)
        setAge(res.data.user.age)
      })
      .catch((error) => {
        setMessage(error.response.data) 
      })
      .finally(() => {
        setSnackbarOpen(true)
      })
  };
  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <TextField
          sx={{ width: "75%", marginBottom: 1 }}
          label="email"
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        />
        <TextField
          sx={{ width: "75%", marginBottom: 1 }}
          label="password"
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
        />
        <Button
          sx={{ width: "75%", marginBottom: 1 }}
          variant="outlined"
          color="success"
          onClick={handleLogin}
          type="submit"
        >
          Зарегистрироваться
        </Button>
      </form>
      <div className="user-info">
        <p className="login-info">{login}</p>
        <p className="age-info">{age}</p>
      </div>
      <SnackbarComponent
        open={snackbarOpen}
        message={message}
        handleClose={handleSnackbarClose}
      />
    </>
  );
};

export default Login;