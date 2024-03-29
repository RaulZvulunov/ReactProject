import Typography from '@mui/material/Typography'
import NavBarLink from '../../../../routes/NavBarLink';
import ROUTES from '../../../../routes/routesModel';

const Logo = () => {
    return (
        <NavBarLink to={ROUTES.CARDS}>
            <Typography
                variant="h4"
                sx={{
                    display: { xs: "none", md: "inline-flex" },
                    marginRight: 2,
                    fontFamily: "fantasy",
                    color: 'orange',
                }}>
                MVC
            </Typography>
        </NavBarLink>
    )
}
export default Logo;