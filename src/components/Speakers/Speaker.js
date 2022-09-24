import * as React from 'react'
import { Box, Typography } from '@mui/material'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const Speaker = ({ speaker }) => {
    const {
        address,
        firstname,
        organisation,
        lastname,
        role,
        workPhone,
        thumbnail,
    } = speaker

    return (
        <Box>
            <Typography>{`${firstname} ${lastname}`}</Typography>
            <Typography>{`${organisation}`}</Typography>
            <Typography>{`${role}`}</Typography>
            <Typography>{`${workPhone}`}</Typography>
            <Typography>{`${address}`}</Typography>
            <GatsbyImage
                image={getImage(thumbnail.childImageSharp.gatsbyImageData)}
                alt={thumbnail.base}
            />
        </Box>
    )
}
