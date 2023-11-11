import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

export default function FirstComponent() {
  const date = dayjs().format("MM/DD/YYYY");
  const [value, setValue] = useState(date);

  const handleValue = () => {
    setValue(date);
    console.log(value)
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateField
        label="Date"
        value={handleValue}
      />
    </LocalizationProvider>
  );
}
