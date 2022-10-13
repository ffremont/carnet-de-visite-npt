import * as React from 'react'
import { AppBar, Box, Fab, Hidden, Toolbar, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import * as styles from './MainFab.module.less'
import { isBrowser } from '../AppConstants'

export const MainFab = () => {
    const visible = isBrowser() && !!window.navigator.share;

    const handleShare = () => {
        if(!isBrowser()) return;
        window.navigator.share({
            title: 'Carnet de visite',
            text: '👩‍💻 Numérique pour toutes - Consultez et construisez votre carnet de visite personnalisé.',
            url: window.location.href
        })
    }

    return (
        <>
            {visible && <Fab
                onClick={handleShare}
                className={styles.fabPrimary}
                size="medium"
                aria-label="partager"
            >
                <ShareIcon />
            </Fab>}
        </>
    )
}
