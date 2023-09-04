import Radio from "@mui/material/Radio";
import MuiRadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioGroup({ options }) {
  return (
    <FormControl>
      <MuiRadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {options.map((option) => (
          <FormControlLabel
            sx={{ textTransform: "capitalize" }}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
}
