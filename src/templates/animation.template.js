import React from 'react'
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Chip,
    Container,
    Fab,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Paper,
    Typography,
} from '@mui/material'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import * as styles from './animation.module.less'
import { TYPES } from '../components/AppConstants'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined'
import InsertLinkIcon from '@mui/icons-material/InsertLink'
import PersonIcon from '@mui/icons-material/Person'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import DescriptionIcon from '@mui/icons-material/Description'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Link } from 'gatsby'
import { useStore } from '../core/store'
import { Footer } from '../components/Footer'

const AnimationTemplate = ({ pageContext }) => {
    const { animation } = pageContext

    const [favorites, setFavorites] = useStore('favorites', [])

    const changeFavorites = (identifier) => {
        if (!favorites.includes(identifier)) {
            setFavorites((oldVal) => [...oldVal, identifier])
        } else {
            setFavorites((oldVal) => oldVal.filter((el) => el !== identifier))
        }
    }

    return (
        <Container disableGutters>
            <Fab
                component={Link}
                to="/"
                className={styles.back}
                size="medium"
                aria-label="retour"
            >
                <ArrowBackIosNewIcon />
            </Fab>

            <Fab
                onClick={() => changeFavorites(animation.identifier)}
                className={styles.favorite}
                size="medium"
                aria-label="favorite"
            >
                {favorites.includes(animation.identifier) ? (
                    <FavoriteIcon />
                ) : (
                    <FavoriteBorderOutlined />
                )}
            </Fab>
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
                <Box>
                    <Chip
                        size="small"
                        label={animation.slots}
                        variant="outlined"
                        color="primary"
                    />
                </Box>

                <Typography
                    sx={{ padding: '10px 5px' }}
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

                        {animation.speakers.length > 0 && (
                            <List
                                sx={{
                                    width: '100%',
                                    bgcolor: 'background.paper',
                                }}
                            >
                                {animation.speakers.map((speaker) => (
                                    <ListItem
                                        alignItems="flex-start"
                                        secondaryAction={
                                            <IconButton
                                                edge="end"
                                                aria-label="intervenantes"
                                            >
                                                <ArrowForwardIosIcon />
                                            </IconButton>
                                        }
                                    >
                                        <ListItemAvatar>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src="/static/images/avatar/1.jpg"
                                            />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={`${speaker.firstname} ${speaker.lastname}`}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{
                                                            display: 'inline',
                                                        }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        {speaker.organisation}
                                                    </Typography>
                                                    {speaker.role}
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        )}
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
