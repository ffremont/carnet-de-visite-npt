import * as React from 'react'
import { AppBar, Box, Fab, Hidden, Toolbar, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import * as styles from './MainFab.module.less'

export const MainFab = () => {
    const visible = !!window.navigator.share;

    const handleShare = () => {
        window.navigator.share({
            title: 'Numérique pour toutes',
            text: 'Consultez et construisez votre carnet de visite personnalisé.',
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
