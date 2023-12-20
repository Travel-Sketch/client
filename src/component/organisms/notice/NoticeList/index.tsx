import {NoticeListWrapper} from "./style";
import React, {useEffect, useState} from "react";
import NoticeTable from "../../../atoms/notice/NoticeTable";
import TextInput from "../../../atoms/notice/TextInput";
import {Pagination} from "@mui/material";
import {INotice} from "../../../../types/notice";

function NoticeList() {
  const [query, setQuery] = useState('');
  const [noticeList, setNoticeList] = useState<INotice[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const dummy = [
    {
      noticeId: 1,
      title: '1번 공지사항 제목입니다.',
      createdDate: [2023, 12, 18],
    },
    {
      noticeId: 2,
      title: '2번 공지사항 제목입니다.',
      createdDate: [2023, 12, 17],
    },
    {
      noticeId: 3,
      title: '3번 공지사항 제목입니다.',
      createdDate: [2023, 12, 16],
    }
  ]

  useEffect(() => {
    setNoticeList(dummy);
  }, [])

  return (
    <NoticeListWrapper>
      <div className='main-title'>공지사항</div>
      <div className='search-form'>
        <TextInput value={query} setValue={setQuery} label='검색 조건' placeholder='' type='text'/>
      </div>
      <NoticeTable noticeList={noticeList}/>
      <div className='page-info'>
        <Pagination count={30}/>
      </div>
    </NoticeListWrapper>
  )
}

export default NoticeList;