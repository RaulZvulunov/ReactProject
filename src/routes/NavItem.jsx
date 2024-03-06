import NavBarLink from "./NavBarLink";
import {Button, Typography} from '@mui/material';
import { string } from 'prop-types';

const NavItem = ({label, to, color}) => {
    return ( 
        <NavBarLink to={to} color={color} >
            <Button color="inherit">
                <Typography>
                    {label}
                </Typography>
            </Button>
        </NavBarLink>
     );
}

NavItem.propTypes = {
    to: string.isRequired,
    label: string.isRequired,
    color: string
}
 
export default NavItem;