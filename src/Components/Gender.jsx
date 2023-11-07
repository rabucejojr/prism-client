import { useState } from "react";
import { MenuItem, Select } from "@mui/material";

function Gender() {
  const [gender, setGender] = useState("Male");

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <>
      {/* <InputLabel id="demo-simple-select-label">Gender</InputLabel> */}
      <Select
        style={{ width: 190 }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={gender}
        label="Gender"
        onChange={handleChange}
      >
        <MenuItem value={"Male"} selected>
          Male
        </MenuItem>
        <MenuItem value={"Female"}>Female</MenuItem>
      </Select>
    </>
  );
}

export default Gender;
