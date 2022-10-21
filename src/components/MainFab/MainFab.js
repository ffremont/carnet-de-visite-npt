import * as React from 'react'
import { Fab } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import * as styles from './MainFab.module.less'
import CampaignIcon from '@mui/icons-material/Campaign';
import { isBrowser } from '../AppConstants'

export const MainFab = () => {
    const visible = isBrowser() && !!window.navigator.share;

    const handleShare = () => {
        if (!isBrowser()) return
        window.navigator.share({
            title: 'Carnet de visite',
            text: '👩‍💻 Numérique pour toutes - Consultez et construisez votre carnet de visite personnalisé.',
            url: window.location.href,
        })
    }

    return (
        <div className={styles.mainFab}>
            {visible && (
                <Fab onClick={handleShare} size="medium" aria-label="partager">
                    <ShareIcon />
                </Fab>
            )}
            
        </div>
    )
}
