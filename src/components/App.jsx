import { Menu } from "modules/Menu/Menu";
import { UserRoutes } from '../Routes';
import { Navbar } from '../modules/Navbar/Navbar';
export const App = () => {
  return (
    <div>
      {/* <Menu /> */}
      <Navbar/>
    <UserRoutes/>
    </div>
  );
};
