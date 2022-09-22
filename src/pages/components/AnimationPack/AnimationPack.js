import { Card, CardHeader, CardMedia } from '@mui/material'
import * as React from 'react'
import { IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

export const AnimationPack = ({ name, type, image, id }) => {
    return (
        <Card>
            <CardHeader
                action={
                    <IconButton aria-label="favorite">
                        <FavoriteIcon />
                    </IconButton>
                }
                title={name}
                subheader={type}
            />
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt={`image ${name}`}
            />
        </Card>
    )
}
