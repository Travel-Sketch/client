import {NoticeTableItemWrapper} from "./style";
import {INotice} from "../../../../types/notice";


function NoticeTableItem({noticeId, title, createdDate}: INotice) {
  const clickItem = (noticeId: number) => {
    console.log(noticeId);
  };

  const handleItemClick = () => {
    clickItem(noticeId);
  }
  return (
    <NoticeTableItemWrapper onClick={handleItemClick}>
      <td>{noticeId}</td>
      <td className='title'>{title}</td>
      <td>{createdDate}</td>
    </NoticeTableItemWrapper>
  );
}

export default NoticeTableItem;