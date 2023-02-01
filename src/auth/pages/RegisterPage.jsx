import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Authlayout from "../layout/Authlayout";

const RegisterPage = () => {
  return (
    <Authlayout title='Register'>
    <form>
      <Grid container>
      <Grid item xs={12} sx={{ mb: 1 }}>
          <TextField
            label="Name"
            type="text"
            placeholder="Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 1 }}>
          <TextField
            label="Email"
            type="email"
            placeholder="Email@google.com"
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
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button fullWidth variant="contained">
              Register
            </Button>
          </Grid>
          <Grid
            container
            direction={"row"}
            sx={{ mt: 2 }}
            justifyContent="end"
          >
            <Link component={RouterLink} to="/auth/login">
              Have an Account Already?
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </form>
  </Authlayout>
);
};


export default RegisterPage