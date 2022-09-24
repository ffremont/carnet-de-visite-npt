import { Card, CardHeader, CardMedia } from '@mui/material'
import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined'
import { Link } from 'gatsby'
import { useStore } from '../../core/store'

export const Pack = ({ pack }) => {
    const { identifier, type, slug, title, image } = pack

    const [favorites, setFavorites] = useStore('favorites', [])

    const changeFavorites = (identifier) => {
        if (!favorites.includes(identifier)) {
            setFavorites((oldVal) => [...oldVal, identifier])
        }
        else{
            setFavorites((oldVal) => oldVal.filter(el => el !== identifier))
        }
    }

    return (
        <Card>
            <CardHeader
                action={
                    <IconButton
                        onClick={() => changeFavorites(identifier)}
                        aria-label="favorite"
                    >
                        {favorites.includes(identifier) ? (
                            <FavoriteIcon />
                        ) : (
                            <FavoriteBorderOutlined />
                        )}
                    </IconButton>
                }
                title={title}
                subheader={type}
            />
            <Link to={`/packs/${slug}`}>
                <GatsbyImage
                    image={getImage(image.childImageSharp.gatsbyImageData)}
                    alt={image.base}
                />
            </Link>
        </Card>
    )
}