import React from 'react'
import {
    Box,
    Card,
    CardContent,
    Chip,
    Container,
    Fab,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import LockIcon from '@mui/icons-material/Lock';
import ShareIcon from '@mui/icons-material/Share'
import * as styles from './animation.module.less'
import { isBrowser, TYPES } from '../components/AppConstants'
import FactCheckIcon from '@mui/icons-material/FactCheck'
import FavoriteIcon from '@mui/icons-material/Favorite'
import InsertLinkIcon from '@mui/icons-material/InsertLink'
import PersonIcon from '@mui/icons-material/Person'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import DescriptionIcon from '@mui/icons-material/Description'
import { navigate } from 'gatsby'
import { Speaker } from '../components/Speakers'
import { useStore } from '../core/store'
import { FavoriteBorderOutlined } from '@mui/icons-material'
import { Footer } from '../components/Footer'
import { Helmet } from 'react-helmet';

const AnimationTemplate = ({ pageContext }) => {
    const { animation } = pageContext

    const [favorites, setFavorites] = useStore('favorites', [])

    const visibleShareBtn = isBrowser() && !!window.navigator.share;

    const handleShare = () => {
        if(!isBrowser()) return;
        window.navigator.share({
            title: 'Carnet de visite',
            text: '👩‍💻 Numérique pour toutes - Consultez et construisez votre carnet de visite personnalisé.',
            url: window.location.href
        })
    }
    const changeFavorites = (identifier) => {
        if (!favorites.includes(identifier)) {
            setFavorites((oldVal) => [...oldVal, identifier])
        } else {
            setFavorites((oldVal) => oldVal.filter((el) => el !== identifier))
        }
    }

    return (
        <Container disableGutters>
            <Helmet title="Fiche Animation | Carnet de visite Numérique pour toutes"/>
            <Fab
                onClick={() => navigate(-1)}
                className={styles.back}
                size="medium"
                aria-label="retour"
            >
                <ArrowBackIosNewIcon />
            </Fab>

            <div className={styles.fabMenu}>
                <Fab
                    onClick={() => changeFavorites(animation.identifier)}
                    className={styles.favorite}
                    size="medium"
                    aria-label="favorite"
                    variant="extended"
                    
                >
                    {favorites.includes(animation.identifier) ? (
                        <><FavoriteIcon sx={{ mr: 1 }}/> Retirer</>
                    ) : (
                        <><FavoriteBorderOutlined sx={{ mr: 1 }}/> Ajouter</>
                    )}
                </Fab>
                {visibleShareBtn && <Fab
                    onClick={handleShare}
                    variant="extended"
                    className={styles.shareFab}
                    size="medium"
                    aria-label="retour"
                >
                    <ShareIcon sx={{ mr: 1 }} />
                    Partager
                </Fab>}

                {!!animation.registrationUrl && <Fab
                    variant="extended"
                    className={styles.registrationFab}
                    size="medium"
                    aria-label="add"
                    component="a"
                    href={animation.registrationUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <LockOpenIcon sx={{ mr: 1 }} />
                    Je m'inscris
                </Fab>}
            </div>

            <GatsbyImage
                className={styles.image}
                image={getImage(
                    animation.image.childImageSharp.gatsbyImageData
                )}
                alt={animation.image.base}
            />
            <Box sx={{ padding: '10px 10px 60px 10px' }}>
                <Typography
                    sx={{ margin: 0 }}
                    variant="overline"
                    display="block"
                    gutterBottom
                >
                    {TYPES[animation.type]}
                </Typography>
                <Typography
                    sx={{
                        fontFamily: `'Fredoka One',"Roboto","Helvetica","Arial",sans-serif`,
                    }}
                    variant="h5"
                    gutterBottom
                    component="div"
                >
                    {animation.name}
                </Typography>
                <Box className={styles.chips}>
                    {!!animation.registrationUrl && (
                        <Chip
                            size="small"
                            icon={<LockIcon />}
                            label="Inscription nécessaire"
                            className="registrationChip"
                        />
                    )}
                    <Chip
                        size="small"
                        label={animation.slots}
                        variant="outlined"
                        color="primary"
                    />
                </Box>

                <Typography
                    sx={{ padding: '10px 5px', whiteSpace: 'break-spaces' }}
                    variant="body1"
                    gutterBottom
                >
                    {animation.description}
                </Typography>

                <Card
                    sx={{
                        borderLeft: '2px solid #251e5b',
                    }}
                >
                    <CardContent>
                        <Typography
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                            gutterBottom
                            variant="h6"
                            disableGutters
                            component="div"
                        >
                            <PersonIcon /> Intervenant(e)s
                        </Typography>

                        {animation.speakers.length > 0 &&
                            animation.speakers.map((speaker) => (
                                <Speaker key={speaker.id} speaker={speaker} />
                            ))}
                    </CardContent>
                </Card>

                <Card
                    sx={{
                        borderLeft: '2px solid #251e5b',
                        marginTop: '20px',
                    }}
                >
                    <CardContent>
                        <Typography
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                            gutterBottom
                            variant="h6"
                            disableGutters
                            component="div"
                        >
                            <DescriptionIcon /> Documents
                        </Typography>

                        <List component="div" disablePadding>
                            {animation.documents.map((doc) => (
                                <ListItemButton
                                    disablePadding
                                    sx={{ pl: 4 }}
                                    component="a"
                                    href={`/${animation.slug}/${doc.href}`}
                                    target="_blank"
                                    noopener
                                    noreferrer
                                >
                                    <ListItemIcon>
                                        <NavigateNextIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={doc.label} />
                                </ListItemButton>
                            ))}
                        </List>
                    </CardContent>
                </Card>

                <Card
                    sx={{
                        borderLeft: '2px solid #251e5b',
                        marginTop: '20px',
                    }}
                >
                    <CardContent>
                        <Typography
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                            gutterBottom
                            variant="h6"
                            disableGutters
                            component="div"
                        >
                            <InsertLinkIcon /> Liens
                        </Typography>

                        <List component="div" disablePadding>
                            {animation.links.map((doc) => (
                                <ListItemButton
                                    disablePadding
                                    sx={{ pl: 4 }}
                                    component="a"
                                    href={doc.href}
                                    target="_blank"
                                    noopener
                                    noreferrer
                                >
                                    <ListItemIcon>
                                        <NavigateNextIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={doc.label} />
                                </ListItemButton>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </Box>
            <Footer />
        </Container>
    )
}

export default AnimationTemplate
