import { Card, CardActionArea } from '@mui/material';
import CardHead from './CardHead';
import CardBody from './CardBody';
import {useNavigate }from 'react-router-dom';
import CardActionBar from './CardActionBar';
import ROUTES from '../../../routes/routesModel';

const CardComponent = ({ card, onDeleteCard, onLike }) => {
    const navigate = useNavigate();
    return (
        <Card sx={{ minWidth: 280, maxWidth: 280 }}>
            <CardActionArea
                onClick={() => navigate(`${ROUTES.CARD_DETAILS}/${card._id}`)}
            >
                <CardHead image={card.image} />
                <CardBody card={card} />

            </CardActionArea>
            <CardActionBar {...{onDeleteCard, card, onLike}} />
        </Card>
    )
}

export default CardComponent