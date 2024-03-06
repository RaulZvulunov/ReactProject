import {Menu, MenuItem, Box, Button, Typography} from "@mui/material/";
import NavBarLink from "../../../../routes/NavBarLink";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";
import  useUsers  from "../../../../users/hooks/useUsers.js";
import { useTheme } from "../../../../providers/ThemeProvider.jsx";

const MenuBar = ({ isMenuOpen, anchorEl, onCloseMenu }) => {
  const { user } = useUser();
  const { handleLogout } = useUsers();

  const { isDark } = useTheme();

  const onLogout = () => {
    handleLogout();
    onCloseMenu();
  };

  return (
    <Menu
      open={isMenuOpen}
      onClose={onCloseMenu}
      anchorEl={anchorEl}
      anchorOrigin={{
      vertical: "top",
      horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {user && (
        <Box>
          <NavBarLink to={ROUTES.USER_PROFILE}>
            <MenuItem onClick={onCloseMenu} sx={{color: isDark ? "white" : "black"}} >Profile</MenuItem>
          </NavBarLink>
          <NavBarLink to={ROUTES.EDIT_USER}>
            <MenuItem onClick={onCloseMenu} sx={{color: isDark ? "white" : "black"}} >Edit account</MenuItem>
          </NavBarLink>
          <NavBarLink to={ROUTES.LOGIN}>
            <MenuItem onClick={onLogout} sx={{color: isDark ? "white" : "black"}} >Logout</MenuItem>
          </NavBarLink>
        </Box>
      )}
      
      {!user && (
        <Box>
          <NavBarLink to={ROUTES.LOGIN}>
            <MenuItem
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={onCloseMenu}
            >
              Login
            </MenuItem>
          </NavBarLink>

          <NavBarLink to={ROUTES.SIGNUP}>
            <MenuItem
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={onCloseMenu}
            >
              SignUp
            </MenuItem>
          </NavBarLink>
        </Box>
      )}
    </Menu>
  );
};

export default MenuBar;
