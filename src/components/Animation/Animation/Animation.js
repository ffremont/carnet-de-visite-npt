import {
    Avatar,
    Box,
    Chip,
    IconButton,
    Paper,
    Typography,
    useMediaQuery,
} from '@mui/material'
import { Link } from 'gatsby'
import * as React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import * as styles from './Animation.module.less'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { TYPES } from '../../../components/AppConstants'
import { useStore } from '../../../core/store'
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined'

export const Animation = ({ animation }) => {
    const { description, slug, name, type, logo, slots } = animation
    const [favorites, setFavorites] = useStore('favorites', [])
    const matches = useMediaQuery((theme) => theme.breakpoints.down('sm'))

    const changeFavorites = (identifier) => {
        if (!favorites.includes(identifier)) {
            setFavorites((oldVal) => [...oldVal, identifier])
        } else {
            setFavorites((oldVal) => oldVal.filter((el) => el !== identifier))
        }
    }

    return (
        <Paper className={styles.paper}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: matches ? 'column' : 'row',
                }}
            >
                <Box
                    sx={{
                        width: matches ? '100%' : '30%',
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
                    {/*<Link to={`/animations/${slug}`}>
                        Lire tout{' '}
                        <span className={styles.readArrow}>
                            <ArrowForwardIosIcon />
                        </span>
                        </Link>*/}
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
                <Box
                    sx={{
                        display: 'flex',
                        alignContent: 'center',
                        justifyContent: 'center',
                        flexDirection: matches ? 'row' : 'colum',
                    }}
                >
                    <IconButton
                        sx={{ flex: 1 }}
                        className={styles.iconButtonMobile}
                        onClick={() => changeFavorites(animation.identifier)}
                        aria-label="mettre en favori"
                    >
                        {favorites.includes(animation.identifier) ? (
                            <FavoriteIcon />
                        ) : (
                            <FavoriteBorderOutlined />
                        )}
                    </IconButton>

                    <IconButton
                        sx={{ flex: 1 }}
                        className={styles.iconButtonMobile}
                        component={Link}
                        to={`/animations/${slug}`}
                        onClick={() => changeFavorites(animation.identifier)}
                        aria-label="voir"
                    >
                        <SearchIcon />
                    </IconButton>
                </Box>
            </Box>
        </Paper>
    )
}
