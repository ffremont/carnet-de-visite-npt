import { Card, CardHeader, CardMedia } from '@mui/material'
import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

export const Pack = ({ pack }) => {
    const { type, title, image } = pack
    return (
        <Card>
            <CardHeader
                action={
                    <IconButton aria-label="favorite">
                        <FavoriteIcon />
                    </IconButton>
                }
                title={title}
                subheader={type}
            />
            <GatsbyImage
                image={getImage(
                    image.childImageSharp.gatsbyImageData
                )}
                alt={image.base}
            />
        </Card>
    )
}
