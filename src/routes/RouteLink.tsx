import {Route, Routes} from "react-router-dom";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import AttractionPage from "../pages/attraction/AttractionPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import NoticePage from "../pages/notice/NoticePage";
import NoticeDetailPage from "../pages/notice/NoticeDetailPage";

const RouteLink = () => {
  return (
    <>
      <Routes>
        <Route Component={PublicRouter}>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<RegisterPage/>}/>
          <Route path='/attractions' element={<AttractionPage/>}/>
        </Route>
        {/*<Route Component={PrivateRouter}>*/}
        <Route path='/posts' element={null}/>
        <Route path='/hot-places' element={null}/>
        <Route path='/plans' element={null}/>
        <Route path='/notices' element={<NoticePage/>}/>
        <Route path='/notices/:noticeId' element={<NoticeDetailPage/>}/>
        {/*</Route>*/}
      </Routes>
    </>
  );
}

export default RouteLink;