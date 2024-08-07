import { useSelector } from 'react-redux';
import Logo from './shared/Logo'
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { currentUser } = useSelector((state) => state.user);
  return <div className='flex items-center bg-slate-200 p-2 md:p-3' >
    <Logo />
    <div className=''>
      {currentUser ? <Link className='font-semibold' to={'/logout'}>Logout</Link> : <Link to={'/sign-in'} className='font-semibold'>Login</Link>}


    </div>
  </div>
}

export default NavBar
