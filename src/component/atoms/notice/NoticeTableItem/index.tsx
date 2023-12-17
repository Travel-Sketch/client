import {NoticeTableItemWrapper} from "./style";

function NoticeTableItem() {
  return (
    <NoticeTableItemWrapper>
      <td>1</td>
      <td className='title'>공지사항 제목입니다.</td>
      <td>2023.12.17</td>
    </NoticeTableItemWrapper>
  )
}

export default NoticeTableItem;