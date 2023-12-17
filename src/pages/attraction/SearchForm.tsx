import React from "react";
import {Input} from "@mui/material";

const SearchForm = () => {
  return (
    <div className={'w-64 ms-10'}>
      <Input fullWidth placeholder="상세 검색" />
    </div>
  );
}

export default SearchForm;