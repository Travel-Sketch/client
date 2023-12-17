import {FormControl, NativeSelect} from "@mui/material";
import React from "react";

const GugunSelectForm = () => {
  return (
    <div className={'w-64 ms-10'}>
      <FormControl fullWidth>
        <NativeSelect
          // defaultValue={2}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option>여행</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default GugunSelectForm;