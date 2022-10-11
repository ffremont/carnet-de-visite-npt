import * as React from 'react'
import { styled } from '@mui/material/styles'
import QrIcon from '../../../assets/qr.svg'
import {
    AppBar,
    Box,
    Button,
    Fab,
    Toolbar,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import TocIcon from '@mui/icons-material/Toc'
import Groups2Icon from '@mui/icons-material/Groups2'
import FavoriteIcon from '@mui/icons-material/Favorite'
import * as styles from './Footer.module.less'
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
            <Container sx={{padding:0}} maxWidth="lg">
                <Toolbar className={styles.toolbar}>
                    <Button
                        variant="text"
                        className={styles.button}
                        component={Link}
                        to="/"
                        color="secondary"
                        startIcon={<HomeIcon />}
                    >
                        Accueil
                    </Button>

                    <Button
                        component={Link}
                        to="/programmation"
                        color="secondary"
                        variant="text"
                        className={styles.button}
                        startIcon={<TocIcon />}
                    >
                        Programme
                    </Button>

                    <StyledFab component={Link} to="scan" color="secondary" aria-label="add">
                        <QrIcon />
                    </StyledFab>

                    <Box sx={{ flexGrow: 1 }} />
                   
                        <Button
                            component={Link}
                            to="/speakers"
                            color="secondary"
                            variant="text"
                            className={styles.button}
                            startIcon={<Groups2Icon />}
                        >
                            Intervenant(e)s
                        </Button>
                    
                        <Button
                            component={Link}
                            to="/favorites"
                            color="secondary"
                            variant="text"
                            className={styles.button}
                            startIcon={<FavoriteIcon />}
                        >
                            Favoris
                        </Button>
                   
                </Toolbar>
            </Container>
        </AppBar>
    )
}
