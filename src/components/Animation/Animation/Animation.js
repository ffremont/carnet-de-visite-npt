import { Avatar, Box, Chip, IconButton, Paper, Typography } from '@mui/material'
import { Link } from 'gatsby'
import * as React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import * as styles from './Animation.module.less'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { TYPES } from '../../../components/AppConstants'

export const Animation = ({ animation }) => {
    const { description, slug, name, type, logo, slots } = animation

    return (
        <Paper className={styles.paper}>
            <Avatar className={styles.favorite} aria-label="favorite">
                <FavoriteIcon />
            </Avatar>
            <Box sx={{display:'flex'}}>
                <Box
                    sx={{
                        width: '30%',
                        maxWidth: '400px',
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
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '3px',
                        }}
                    >
                        <Chip
                            size="small"
                            label={TYPES[type]}
                            color="secondary"
                        />
                        <Chip
                            size="small"
                            label={slots}
                            variant="outlined"
                            color="primary"
                        />
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}
