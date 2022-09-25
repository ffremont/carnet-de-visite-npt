import * as React from 'react'
import { styled } from '@mui/material/styles'
import QrIcon from '../../../assets/qr.svg';
import {
    AppBar,
    Box,
    Button,
    Fab,
    Hidden,
    IconButton,
    Toolbar,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import TocIcon from '@mui/icons-material/Toc'
import Groups2Icon from '@mui/icons-material/Groups2'
import FavoriteIcon from '@mui/icons-material/Favorite'
import * as styles from './Footer.module.css'
import { Container } from '@mui/system'
import { Link } from 'gatsby'

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
})

export const Footer = () => {
    return (
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
            <Container maxWidth="lg">
                <Toolbar className={styles.toolbar}>
                    <Hidden mdDown>
                        <Button
                            component={Link}
                            to="/"
                            color="secondary"
                            variant="contained"
                            startIcon={<HomeIcon />}
                        >
                            Accueil
                        </Button>
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton
                            component={Link}
                            to="/"
                            color="secondary"
                            aria-label="accueil"
                        >
                            <HomeIcon />
                        </IconButton>
                    </Hidden>

                    <Hidden mdDown>
                        <Button
                            component={Link}
                            to="/programmation"
                            color="secondary"
                            variant="contained"
                            startIcon={<TocIcon />}
                        >
                            Programme
                        </Button>
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton
                            component={Link}
                            to="/programmation"
                            color="secondary"
                            aria-label="animations"
                        >
                            <TocIcon />
                        </IconButton>
                    </Hidden>

                    <StyledFab color="secondary" aria-label="add">
                        <QrIcon />
                    </StyledFab>

                    <Box sx={{ flexGrow: 1 }} />
                    <Hidden mdDown>
                        <Button
                            component={Link}
                            to="/speakers"
                            color="secondary"
                            variant="contained"
                            startIcon={<Groups2Icon />}
                        >
                            Intervenant(e)s
                        </Button>
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton
                            component={Link}
                            to="/speakers"
                            color="secondary"
                            aria-label="speakers"
                        >
                            <Groups2Icon />
                        </IconButton>
                    </Hidden>
                    <Hidden mdDown>
                        <Button
                            component={Link}
                            to="/favorites"
                            color="secondary"
                            variant="contained"
                            startIcon={<FavoriteIcon />}
                        >
                            Favoris
                        </Button>
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton
                            component={Link}
                            to="/favorites"
                            color="secondary"
                            aria-label="favorites"
                        >
                            <FavoriteIcon />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
