import React from "react";
import {NoticeTableWrapper} from "./style";
import NoticeTableHead from "../NoticeTableHead";
import NoticeTableBody from "../NoticeTableBody";

function NoticeTable() {
  return (
    <NoticeTableWrapper>
      <colgroup>
        <col style={{width: '10%'}} />
        <col style={{width: '70%'}} />
        <col style={{width: '20%'}} />
      </colgroup>
      <NoticeTableHead/>
      <NoticeTableBody/>
    </NoticeTableWrapper>
  )
}

export default NoticeTable;