import { Button } from '@mui/material'
import { Container } from '@mui/material'
import * as React from 'react'
import { useStore } from '../core/store'

const FavoritePage = () => {
    const [favorites, setFavorites] = useStore('favorites', [])

    const changeFavorites = () => {
        setFavorites(oldVal => [...oldVal, "truc"])
    }
    return (
        <Container maxWidth="sm" sx={{ marginBottom: '80px' }}>
            <Button onClick={changeFavorites}>changer</Button>
            {favorites}
        </Container>
    )
}

export default FavoritePage
