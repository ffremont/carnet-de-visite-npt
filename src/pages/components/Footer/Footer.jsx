import * as React from 'react'
import { styled } from '@mui/material/styles'
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
import AddIcon from '@mui/icons-material/Add'
import * as styles from './Footer.module.css'
import { Container } from '@mui/system'

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
                    <Hidden smDown>
                        {' '}
                        <Button
                            color="secondary"
                            variant="contained"
                            startIcon={<HomeIcon />}
                        >
                            Accueil
                        </Button>
                    </Hidden>
                    <Hidden smUp>
                        <IconButton aria-label="accueil">
                            <HomeIcon />
                        </IconButton>
                    </Hidden>

                    <Hidden smDown>
                        <Button
                            color="secondary"
                            variant="contained"
                            startIcon={<TocIcon />}
                        >
                            Programme
                        </Button>
                    </Hidden>
                    <Hidden smUp>
                        <IconButton aria-label="accueil">
                            <TocIcon />
                        </IconButton>
                    </Hidden>

                    <StyledFab color="secondary" aria-label="add">
                        <AddIcon />
                    </StyledFab>

                    <Box sx={{ flexGrow: 1 }} />
                    <Hidden smDown>
                        <Button
                            color="secondary"
                            variant="contained"
                            startIcon={<Groups2Icon />}
                        >
                            Intervenant(e)s
                        </Button>
                    </Hidden>
                    <Hidden smUp>
                        <IconButton aria-label="accueil">
                            <Groups2Icon />
                        </IconButton>
                    </Hidden>
                    <Hidden smDown>
                        <Button
                            color="secondary"
                            variant="contained"
                            startIcon={<FavoriteIcon />}
                        >
                            Favoris
                        </Button>
                    </Hidden>
                    <Hidden smUp>
                        <IconButton aria-label="accueil">
                            <FavoriteIcon />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
