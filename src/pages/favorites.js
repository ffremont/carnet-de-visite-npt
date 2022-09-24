
import { Container } from '@mui/material'
import * as React from 'react'
import { FavoriteList } from '../components/Favorite'

const FavoritePage = () => {
    return (
        <Container maxWidth="sm" sx={{ marginBottom: '80px' }}>
            <FavoriteList />
        </Container>
    )
}

export default FavoritePage
