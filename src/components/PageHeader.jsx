import {string} from 'prop-types';
import {Box, Divider, Typography} from '@mui/material';

const PageHeader = ({title, subtitle}) => {
    return (
        <Box pt={4}>
            <Typography variant='h2' component="h1">{title}</Typography>
            <Typography  variant='h5' component="h2">{subtitle}</Typography>
            <Divider sx={{marginTop: 2, marginBottom: 5}}></Divider>
        </Box>
    );
}

PageHeader.propTypes = {
    title: string.isRequired,
    subtitle: string.isRequired,
}
export default PageHeader;