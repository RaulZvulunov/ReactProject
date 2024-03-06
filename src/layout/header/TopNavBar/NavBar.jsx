import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/material";
import SearchBar from "./right-navigation/SearchBar";
import LeftNavBar from "./left-navigation/LeftNavBar";
import RightNavBar from "./right-navigation/RightNavBar";
import MenuProvider from "./menu/MenuProvider";

export const NavBar = () => {
  return (
    <MenuProvider>
      <AppBar sx={{backgroundColor: '#2d2d2d'}} position="sticky">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <LeftNavBar />

          {/* only on sx screen, in the middle */}
          <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
            <SearchBar />
          </Box>

          <RightNavBar />
        </Toolbar>
      </AppBar>
    </MenuProvider>
  );
};

export default NavBar;
