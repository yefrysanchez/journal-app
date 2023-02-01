import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import ImageGallery from "../components/ImageGallery";

const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems={"center"}
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          Febrary 1 2023
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Enter Title"
          label="Title"
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What Happened Today?"
          label="What Happened Today?"
          minRows={5}
          sx={{ border: "none", mb: 1 }}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};

export default NoteView;
