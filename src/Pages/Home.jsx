import { Calendar, Gender } from "../Components";
import { Grid, TextField, Button, Container, Box } from "@mui/material";
import "../assets/styles.css";
function Home() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "65vh",
        }}
      >
        <Container maxWidth="xs">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField variant="outlined" label="Complete Name" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField variant="outlined" label="Age" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <Gender />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" label="Classification" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" label="Address" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField variant="outlined" label="Contact Number" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Calendar />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Save
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Home;
