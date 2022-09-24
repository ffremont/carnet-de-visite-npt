
import { Container } from '@mui/material'
import * as React from 'react'
import { Footer } from '../components/Footer'
import { FavoriteList } from '../components/Favorite'

const FavoritePage = () => {
    return (
        <Container maxWidth="sm" sx={{ marginBottom: '80px' }}>
            <FavoriteList />
            <Footer />
        </Container>
    )
}

export default FavoritePage
