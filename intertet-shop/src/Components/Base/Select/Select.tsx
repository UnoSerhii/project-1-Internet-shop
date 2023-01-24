import { FC, useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, styled, Select as SelectMUI, SelectChangeEvent } from "@mui/material";

type Options = {
  value: string;
  id: number;
}

interface SelectProps {
  label: string;
  options: Array<Options>;
  id: number | string;
}

const CustomSelect = styled(SelectMUI)(({ theme }) => ({
  borderRadius: 0,
  ".MuiSelect-select": {
    padding: "13.5px 14px",
  },
  "& .MuiPaper-root": {
    borderRadius: 0,
  },
}));

const Select: FC<SelectProps> = ({ label, options, id }) => {
  const [isOpen, setOpen] = useState(false);
  const [value, setValue] = useState(options[0].value);

  const closeSelect = () => {
    setOpen(false);
  };

  const handleChange = ( event : SelectChangeEvent<any>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    document.addEventListener("scroll", closeSelect);
    return () => {
      document.removeEventListener("scroll", closeSelect);
    };
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel id={`${id}-lable`}>{label}</InputLabel>
      <CustomSelect
        labelId={`${id}-lable`}
        id={String(id)}
        onClick={() => setOpen(!isOpen)}
        open={isOpen}
        value={value}
        label={label}
        onChange={handleChange}
        MenuProps={{
          disableScrollLock: true,
        }}
      >
        {options.map(({ value, id }) => (
          <MenuItem key={id} value={value}>
            {value}
          </MenuItem>
        ))}
      </CustomSelect>
    </FormControl>
  );
};

export default Select;
