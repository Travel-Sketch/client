import {Navigate, Outlet} from "react-router-dom";

const PublicRouter = () => {
  const token = sessionStorage.getItem('token');

  return (
    token ? <Navigate to={'/'}/> : <Outlet/>
  );
};


export default PublicRouter;