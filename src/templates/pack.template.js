import React from 'react'
import { Grid, Typography } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Footer } from '../components/Footer'

const PackTemplate = ({ pageContext }) => {
    const { pack } = pageContext
    const { type, title, image } = pack
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography>{title}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography>{type}</Typography>
            </Grid>
            <Grid>
                <GatsbyImage
                    image={getImage(image.childImageSharp.gatsbyImageData)}
                    alt={image.base}
                />
            </Grid>
            <Footer />
        </Grid>
    )
}


export default PackTemplate;