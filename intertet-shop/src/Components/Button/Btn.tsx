import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Btn = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" color="success" size="large">
        Contained
      </Button>
    </Stack>
  );
};

export default Btn;
