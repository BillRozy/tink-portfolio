import { Stack } from 'react-bootstrap';
import CustomNavLink from './utility/NavLink';
const SideBar = () => {
  return (
    <Stack>
      <CustomNavLink to="/accounts">Счета</CustomNavLink>
      <CustomNavLink to="/dashboard">Единый вид</CustomNavLink>
      <CustomNavLink to="/favorites">Избранное</CustomNavLink>
      {/* <Nav.Link eventKey="disabled" disabled>
        Единый вид
      </Nav.Link> */}
    </Stack>
  );
};
export default SideBar;
