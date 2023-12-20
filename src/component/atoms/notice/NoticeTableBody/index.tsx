import {NoticeTableBodyWrapper} from "./style";
import React from "react";
import NoticeTableItem from "../NoticeTableItem";
import {INotice} from "../../../../types/notice";

interface NoticeTableBodyProps {
  noticeList: INotice[];
}

function NoticeTableBody({noticeList}: NoticeTableBodyProps) {
  return (
    <NoticeTableBodyWrapper>
      {noticeList.map(notice => (
        <NoticeTableItem key={notice.noticeId} noticeId={notice.noticeId} title={notice.title} createdDate={notice.createdDate}/>
      ))}
    </NoticeTableBodyWrapper>
  );
}

export default NoticeTableBody;