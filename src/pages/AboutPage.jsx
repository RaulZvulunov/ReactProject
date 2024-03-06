import PageHeader from "../components/PageHeader";
import {Container, Typography} from '@mui/material'
import Grid from '@mui/material/Grid'

const AboutPage = () => {
    return (
        <Container>
            <PageHeader 
            title="About Page" 
            subtitle="On this page you can find explanations about the application"
            />

            <Grid container spacing={2}>
                <Grid item md={8} xs={12} alignSelf="center">
                    <Typography sx={{fontSize: {xs: 16, md: 18, lg: 20}}}>
                    Our website serves as a convenient platform where users can access and manage digital business cards in one place. Business users can create their own business cards and add cards of other businesses to their favorites, while regular users can view business cards and add them to favorites. Our interface centralizes digital business cards with comprehensive business details, providing easy access for users to discover and connect with businesses.
                    </Typography>
                </Grid>
                <Grid item md={4} xs={12} alignSelf="center" sx={{display: {md: 'flex', xs:"none"}, justifyContent: "center"}}>
                    <img src="/assets/images/card.jpg" alt="card" width="100%" />
                </Grid>
            </Grid>
        </Container>
    );
}

export default AboutPage;