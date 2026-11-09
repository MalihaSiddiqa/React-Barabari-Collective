import {Link, useLocation} from "react-router-dom";
import {useAuth} from "../../Context/AuthContext";
import { Home, LayoutDashboard, LogOut, User,LogIn} from 'lucide-react';



export function Navbar(){
const auth=useAuth();
const location=useLocation();
const handleLogout=()=>{
    auth.logout();
}
    return(
        <div className="navbar">
<nav>
    <div className="nav-left">
        <Link to="/" className="nav-brand">Auth Demo
        <Home size={20}/>
        </Link>
        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
             Home
            </Link>
            {auth.user && (
            <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
              <LayoutDashboard size={18} /> Dashboard
            </Link>
          )}
        </div>
      </div>

      <div className="nav-right">
        {auth.user ? (
          <>
            <div className="user-badge">
              <User size={16} />
              <span>{auth.user}</span>
            </div>
            <button onClick={() => auth.logout()} className="logout-btn">
              <LogOut size={18} /> Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="logout-btn">
            <LogIn size={18} /> Login
          </Link>
        )}
      </div>

</nav>
        </div>
    )
}