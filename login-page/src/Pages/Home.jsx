import { Navigate, useLocation } from 'react-router-dom';

export function Home() {
  const location=useLocation();
  console.log("Current location: ",location)
  console.log(location);
  return <Navigate to="/login" />;
}
