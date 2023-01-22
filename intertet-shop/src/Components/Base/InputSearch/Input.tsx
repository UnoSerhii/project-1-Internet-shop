import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FC } from "react";

interface InputProps {
  width: number,
}

const Input: FC<InputProps> = ({width}) => {
  return (
    <Box
      sx={{
        width,
        maxWidth: "100%",
      }}
    >
      <TextField fullWidth label="Please take email" id="fullWidth" />
    </Box>
  );
};

export default Input;
