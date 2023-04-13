import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  Box,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Iconify from "../../../components/iconify";
import { useDispatch, useSelector } from "react-redux";
import { loginPost } from "../../../feactures/auth/auhtSlice";
import { setAuthData, setProfile } from "../../../feactures/auth/auhtSlice";
import { showToast } from "../../../feactures/notifications/toastSlice";

export default function LoginForm() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    navigate("/menu/app", { replace: true });
  };

  const handleLogin = async (values) => {
    const resLogin = await dispatch(loginPost(values));
    if (resLogin.payload.status === 400) {
      dispatch(
        showToast({ message: "Usuario o contraseña incorrecta", type: "error" })
      );
    } else {
      dispatch(setAuthData(resLogin.payload));
      const { token, ...profile } = resLogin.payload;
      dispatch(setProfile(profile.msg.split(" ")[1]));
      dispatch(showToast({ message: `Bienvenido ${profile.msg.split(" ")[1]}`, type: "success" }));
      handleClick();
    }
  };

  const formik = useFormik({
    initialValues: {
      usuario: "",
      password: "",
    },
    onsubmit: (values) => {
      handleLogin(values);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={3}>
          <TextField
            name="usuario"
            label="Usuario"
            onChange={formik.handleChange}
          />
          <TextField
            name="password"
            label="Password"
            onChange={formik.handleChange}
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    <Iconify
                      icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </form>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        <Checkbox name="remember" label="Remember me" />
        <Box>Recordar contraseña</Box>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        className="bg-slate-900"
        onClick={() => handleLogin(formik.values)}
      >
        INGRESAR
      </LoadingButton>
    </>
  );
}
