import {TextInputWrapper} from "./style";
import {TextField} from "@mui/material";
import {Dispatch, SetStateAction} from "react";

interface ITextInputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  label: string;
  placeholder: string;
  type: string;
}

function TextInput({value, setValue, label, placeholder, type}: ITextInputProps) {
  return (
    <TextInputWrapper>
      <TextField
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label={label}
        placeholder={placeholder}
        variant='outlined'
      />
    </TextInputWrapper>
  )
}

export default TextInput;