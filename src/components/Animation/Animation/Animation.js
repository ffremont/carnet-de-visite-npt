import {
    Avatar,
    Box,
    Button,
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
import LockIcon from '@mui/icons-material/Lock'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { TYPES } from '../../../components/AppConstants'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import { useStore } from '../../../core/store'
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined'

export const Animation = ({ animation }) => {
    const {
        description,
        organization,
        slug,
        name,
        type,
        logo,
        slots,
        registrationUrl,
        floor,
        room,
    } = animation

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
                className={!!registrationUrl ? styles.registrationBox : ''}
                sx={{
                    display: 'flex',
                    flexDirection: matches ? 'column' : 'row',
                }}
            >
                <Box
                    sx={{
                        width: matches ? '100%' : '30%',
                        padding: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div>
                        <GatsbyImage
                            className={styles.image}
                            image={getImage(
                                logo.childImageSharp.gatsbyImageData
                            )}
                            alt={logo.base}
                        />
                    </div>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flex:1,
                        flexDirection: 'column',
                        padding: '10px 20px',
                        justifyContent: 'center',
                    }}
                >
                   {/* <Typography variant="h6" gutterBottom>
                        {!!floor && (
                            <span className={styles.etageChip}>
                                {floor}
                                {floor > 1 ? 'ème' : 'er'}
                                {!!room ? `, salle ${room}` : ' étage'}
                            </span>
                        )}
                        {floor === 0 && (
                            <span className={styles.etageChip}>RDC</span>
                        )}
                        {name} {organization ? ` (${organization})` : ''}
                        </Typography>*/} 
                        <Typography variant="h5" gutterBottom>
                        {name}
                    </Typography>   
                    <Typography variant="body1" className="en-savoir-plus" gutterBottom>
                       <Link to={`/animations/${slug}`}>En savoir plus</Link>
                        </Typography>
                    {/*<Typography variant="body1" gutterBottom>
                        {description.length > 60
                            ? description.substr(0, 60) + '...'
                            : description}
                        </Typography>*/}
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
                            flexWrap: 'wrap',
                        }}
                    >
                        {!!registrationUrl && (
                            <Chip
                                size="small"
                                icon={<LockIcon />}
                                label="Inscription"
                                className="registrationChip"
                            />
                        )}
                        {/*<Chip
                            size="small"
                            label={TYPES[type]}
                            color="secondary"
                        />*/}

                        {/*<Chip
                            size="small"
                            label={slots}
                            variant="outlined"
                            color="primary"
                        />*/}
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
                  {/*  <IconButton
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
                    */} 

                    {!!registrationUrl && (
                        <IconButton
                            sx={{ flex: 1 }}
                            rel="noopener noreferrer"
                            className={styles.iconButtonMobile}
                            component={Link}
                            to={registrationUrl}
                            aria-label="inscription"
                        >
                            <LockOpenIcon />
                        </IconButton>
                    )}

                    {/* <IconButton
                        sx={{ flex: 1 }}
                        className={styles.iconButtonMobile}
                        component={Link}
                        to={`/animations/${slug}`}
                        aria-label="voir"
                    >
                        <SearchIcon />
                    </IconButton>*/}
                </Box>
            </Box>
        </Paper>
    )
}
