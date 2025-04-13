import React from "react";
import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";

type Option = {
  label: string;
  value: string | number;
};

interface DropdownSelectProps {
  value: string | number;
  onChange: (event: SelectChangeEvent) => void;
  placeholder?: string;
  options: Option[];
  minWidth?: number;
  size?: "small" | "medium";
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  value,
  onChange,
  placeholder = "Select",
  options,
  minWidth = 90,
  size = "small",
}) => {
  return (
    <FormControl sx={{ minWidth:100 }} size={size}>
      <Select
        value={value}
        onChange={onChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        sx={{ backgroundColor: "white" }}
      >
        <MenuItem value="">
          <em>{placeholder}</em>
        </MenuItem>
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownSelect;
