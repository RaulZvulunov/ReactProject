import { Box, Button } from '@mui/material';
import NavItem from '../../../../routes/NavItem';
import ROUTES from '../../../../routes/routesModel';

const NotLogged = () => {
    return (
        <Box>
            <NavItem label="Sign Up" color='white' to={ROUTES.SIGNUP} />
            <NavItem label="Log In" color='white' to={ROUTES.LOGIN} />
        </Box>
    )
}

export default NotLogged;