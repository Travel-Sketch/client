import React, {Dispatch, SetStateAction} from "react";
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {GenderRadioInputWrapper} from "./style";

interface IGenderRadioInputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

function GenderRadioInput({value, setValue}: IGenderRadioInputProps) {
  return (
    <GenderRadioInputWrapper>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <FormControlLabel value="male" control={<Radio/>} label="남성"/>
          <FormControlLabel value="female" control={<Radio/>} label="여성"/>
        </RadioGroup>
      </FormControl>
    </GenderRadioInputWrapper>
  );
}

export default GenderRadioInput;