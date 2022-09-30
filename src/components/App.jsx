import { UserRoutes } from '../Routes';
import {useEffect} from "react";
import { Navbar } from '../modules/Navbar/Navbar';
import { useDispatch } from "react-redux";
import {current} from '../redux/auth/auth-operations'
export const App = () => {
   const dispatch = useDispatch();

  useEffect(() => {
     dispatch(current())
  } , [dispatch])
  
  return (
    <div>
      <Navbar/>
    <UserRoutes/>
    </div>
  );
};
