import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useform";
import {
  checkingAuthentication,
  startGoogleSignIn,
} from "../../store/auth/thunks";
import Authlayout from "../layout/Authlayout";

const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "Email",
    password: "123456",
  });

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    dispatch(checkingAuthentication());
  };
  const onGoogleSignIn = () => {
    console.log("onGoogle");
    dispatch(startGoogleSignIn());
  };

  return (
    <Authlayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 1 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              onChange={onInputChange}
            />
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ mt: 2 }} sm={6}>
              <Button disabled={isAuthenticating} type="submit" fullWidth variant="contained">
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }} sm={6}>
              <Button disabled={isAuthenticating} onClick={onGoogleSignIn} fullWidth variant="contained">
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
            <Grid
              container
              direction={"row"}
              sx={{ mt: 2 }}
              justifyContent="end"
            >
              <Link component={RouterLink} to="/auth/register">
                Create an Account
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Authlayout>
  );
};

export default LoginPage;
