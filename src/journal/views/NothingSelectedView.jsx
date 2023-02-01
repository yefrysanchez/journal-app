import { StarOutline, StartOutlined } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ minHeight: "calc(100vh - 110px)", backgroundColor: "primary.main" }}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: "white" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color='white' variant="h5">Select an entry</Typography>
      </Grid>
    </Grid>
  );
};

export default NothingSelectedView;
