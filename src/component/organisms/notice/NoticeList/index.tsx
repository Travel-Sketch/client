import {NoticeListWrapper} from "./style";
import React, {useState} from "react";
import NoticeTable from "../../../atoms/notice/NoticeTable";
import TextInput from "../../../atoms/notice/TextInput";
import {Pagination} from "@mui/material";

function NoticeList() {
  const [query, setQuery] = useState('');

  return (
    <NoticeListWrapper>
      <div className='main-title'>공지사항</div>
      <div className='search-form'>
        <TextInput value={query} setValue={setQuery} label='검색 조건' placeholder='' type='text'/>
      </div>
      <NoticeTable/>
      <div className='page-info'>
        <Pagination count={30} />
      </div>
    </NoticeListWrapper>
  )
}

export default NoticeList;