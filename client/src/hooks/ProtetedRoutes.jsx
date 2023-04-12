import {Navigate, Outlet} from 'react-router-dom'

export const ProtectedRoutes = ({isAllowed, children}) => {
    if (!isAllowed) {
    return <Navigate to="/login" />;
  }
    return <Outlet />;
}