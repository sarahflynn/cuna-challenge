import { AppBar, Toolbar } from '@material-ui/core';
import logo from '../../assets/img/logo/cuna-mutual-logo-white.png';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <a href='/'><img src={logo} alt='CUNA Mutual logo' /></a>
      </Toolbar>
    </AppBar>
  );
}

export default Header;