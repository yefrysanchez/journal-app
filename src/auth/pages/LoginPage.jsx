import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Authlayout from "../layout/Authlayout";

const LoginPage = () => {
  return (
    <Authlayout title='Login'>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 1 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
            />
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ mt: 2 }} sm={6}>
              <Button fullWidth variant="contained">
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }} sm={6}>
              <Button fullWidth variant="contained">
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
