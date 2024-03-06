import { useCallback, useEffect } from "react";
import useCards from "../hooks/useCards";
import CardsFeedback from '../components/CardsFeedback'
import PageHeader from '../../components/PageHeader'
import Container from '@mui/material/Container'

const FavCardsPage = () => {
    const {value, ...rest} = useCards();
    const {cards, isPending, error} = value;
    const {handleDeleteCard, handleGetFavCards} = rest;

    useEffect(() => {
        handleGetFavCards();
    }, []);

    const onDeleteCard = useCallback( async (cardId) => {
        await handleDeleteCard(cardId);
        await handleGetFavCards();
    }, []);

    const changeLikeStatus = useCallback( async () => {
        await handleGetFavCards();
    })


    return (
        <Container >
            <PageHeader title='Favorite Cards Page' subtitle='Here you can find all your favorite cards' />
            <CardsFeedback
                isPending={isPending}
                error={error}
                cards={cards}
                onDeleteCard={onDeleteCard}
                onLike={changeLikeStatus}
            />
        </Container>
    )
}

export default FavCardsPage;