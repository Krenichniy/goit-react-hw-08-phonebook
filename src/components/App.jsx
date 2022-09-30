import { UserRoutes } from '../Routes';
import { Navbar } from '../modules/Navbar/Navbar';
export const App = () => {
  return (
    <div>
      <Navbar/>
    <UserRoutes/>
    </div>
  );
};
