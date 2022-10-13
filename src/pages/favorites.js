
import { Container } from '@mui/material'
import * as React from 'react'
import { Footer } from '../components/Footer'
import { FavoriteList } from '../components/Favorite'
import { Header } from '../components/Header'
import { Helmet } from 'react-helmet'

const FavoritePage = () => {
    return (
        <Container maxWidth="md" sx={{ marginBottom: '80px', marginTop:'60px' }}>
            <Helmet title="Favoris | Carnet de visite Numérique pour toutes"/>
            <Header
                subTitle="Favoris"
                title="Mon carnet de visite"
            />
            <FavoriteList />
            <Footer />
        </Container>
    )
}

export default FavoritePage
