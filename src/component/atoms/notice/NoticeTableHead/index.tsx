import {NoticeTableHeadWrapper} from "./style";
import React from "react";

function NoticeTableHead() {
  return (
    <NoticeTableHeadWrapper>
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>등록일</th>
      </tr>
    </NoticeTableHeadWrapper>
  )
}

export default NoticeTableHead;