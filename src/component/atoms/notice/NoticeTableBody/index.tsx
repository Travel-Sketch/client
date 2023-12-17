import {NoticeTableBodyWrapper} from "./style";
import React from "react";
import NoticeTableItem from "../NoticeTableItem";

function NoticeTableBody() {
  return (
    <NoticeTableBodyWrapper>
      <NoticeTableItem />
      <NoticeTableItem />
      <NoticeTableItem />
    </NoticeTableBodyWrapper>
  )
}

export default NoticeTableBody;