import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
// import { isAuthenticated } from '../utils/authentication'
import { excludeRoutesToAuth } from '../routes';

const GuestGuard = ({ children }: { children: ReactNode }) => {
  const { pathname } = window.location;

  if (
    // isAuthenticated() &&
    excludeRoutesToAuth.some((r) => pathname.startsWith(r))
  ) {
    return <Navigate to="/debt/dashboard" />;
  }

  return <>{children}</>;
};

export default GuestGuard;
