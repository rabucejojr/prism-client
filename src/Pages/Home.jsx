import { Calendar, Gender, Table } from "../Components";
import {
  Grid,
  TextField,
  Button,
  Container,
  Box,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import "../assets/styles.css";
import { useState } from "react";
function Home() {
  const [values,setValues] =useState({
  name:"",
  age:"",
  gender:"Male",
  classification:"",
  address:"",
  number:"",
  });
  function handleChange(e) {
    setValues({
        ...values,
        [e.target.name]: e.target.value,
    });
}

  return (
    <>
      <div id="left">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "65vh",
          }}
        >
          <FormControl>
            <Container maxWidth="xs">
              <Grid container spacing={2}>
                {/* Name */}
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    label="Complete Name"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                {/* Age */}
                <Grid item xs={6}>
                  <TextField variant="outlined" label="Age" 
                  id="age"
                  name="age"
                  value={values.age}
                  onChange={handleChange}
                  fullWidth />
                </Grid>
                {/* Gender */}
                <Grid item xs={6}>
                  {/* <Gender /> */}
                  <Select
                    style={{ width: 190 }}
                    id="gender"
                    value={values.gender}
                    label="Gender"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                  </Select>
                </Grid>
                {/* Classification */}
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    label="Classification"
                    id="classification"
                    name="classification"
                    value={values.classification}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                {/* Address */}
                <Grid item xs={12}>
                  <TextField variant="outlined" label="Address" 
                  id="address"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  fullWidth />
                </Grid>
                {/* Contact Number */}
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    label="Contact Number"
                    id="number"
                    name="number"
                    value={values.number}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                {/* Date Picker / Calendar */}
                <Grid item xs={6}>
                  <Grid container>
                    <Calendar />
                  </Grid>
                </Grid>
                {/* Save Button */}
                <Grid item xs={12}>
                  <Button variant="contained" fullWidth>
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </FormControl>
        </Box>
      </div>
      <div id="right">
        <Table />
      </div>
    </>
  );
}

export default Home;
