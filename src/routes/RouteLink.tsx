import {Route, Routes} from "react-router-dom";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import AttractionPage from "../pages/attraction/AttractionPage";

const RouteLink = () => {
  return (
    <>
      <Routes>
        <Route Component={PublicRouter}>
          <Route path='/login' element={null} />
          <Route path='/signup' element={null} />
          <Route path='/attractions' element={<AttractionPage />} />
        </Route>
        <Route Component={PrivateRouter}>
          <Route path='/posts' element={null} />
          <Route path='/hot-places' element={null} />
          <Route path='/plans' element={null} />
        </Route>
      </Routes>
    </>
  );
}

export default RouteLink;