import React from "react";
import {NoticeTableWrapper} from "./style";
import NoticeTableHead from "../NoticeTableHead";
import NoticeTableBody from "../NoticeTableBody";
import {INotice} from "../../../../types/notice";

interface NoticeTableProps {
  noticeList: INotice[];
}

function NoticeTable({noticeList}: NoticeTableProps) {
  return (
    <NoticeTableWrapper>
      <colgroup>
        <col style={{width: '10%'}}/>
        <col style={{width: '70%'}}/>
        <col style={{width: '20%'}}/>
      </colgroup>
      <NoticeTableHead/>
      <NoticeTableBody noticeList={noticeList}/>
    </NoticeTableWrapper>
  );
}

export default NoticeTable;