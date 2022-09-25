import { Box, Chip, Paper, Typography } from '@mui/material'
import { Link } from 'gatsby'
import * as React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import * as styles from './Animation.module.less'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { TYPES } from '../../../components/AppConstants'

export const Animation = ({ animation }) => {
    const { image, description, slug, name, logo } = animation
    console.log(animation)

    return (
        <Paper className={styles.paper}>
            <Box
                sx={{
                    width: '25%',
                    maxWidth: '300px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <GatsbyImage
                    className={styles.image}
                    image={getImage(logo.childImageSharp.gatsbyImageData)}
                    alt={logo.base}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px 20px',
                }}
            >
                <Typography variant="h6" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {description.length > 60
                        ? description.substr(0, 60) + '...'
                        : description}
                </Typography>
                <Link to={`/animations/${slug}`}>
                    Lire tout{' '}
                    <span className={styles.readArrow}>
                        <ArrowForwardIosIcon />
                    </span>
                </Link>
                <Box>
                    <Chip label={TYPES[animation.type]} color="secondary" />
                </Box>
            </Box>
        </Paper>
    )
}
