import styles from './NavBar.module.css';
import {useNavigate} from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');

  const clickSearchAttractions = () => {
    navigate('/attractions')
  }

  const clickSearchPosts = () => {
    navigate('/posts')
  }

  const clickSearchHotPlaces = () => {
    navigate('/hot-places')
  }

  const clickTripPlans = () => {
    navigate('/plans')
  }

  const clickNotice = () => {
    navigate('/notices')
  }

  const clickMyPage = () => {
    navigate('/mypage')
  };

  const clickLogin = () => {
    navigate('/login')
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.leftContainer}>
        <div className={styles.logo}>
          <img className={styles.logoImg} src={'http://placehold.it/200x40'} alt={'logo'}/>
        </div>
        <div className={styles.menu}>
          <div onClick={clickSearchAttractions}>관광지 검색</div>
          <div onClick={clickSearchPosts}>자유게시판</div>
          <div onClick={clickSearchHotPlaces}>핫플레이스</div>
          <div onClick={clickTripPlans}>여행계획</div>
          <div onClick={clickNotice}>공지사항</div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        {token ? (
          <div className={styles.menu}>
            <div>blank</div>
            <div onClick={clickMyPage}>마이페이지</div>
          </div>
        ) : (
          <div className={styles.menu}>
            <div>blank</div>
            <div onClick={clickLogin}>로그인</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;