import * as React from 'react'
import { Box, Fab } from '@mui/material'
import CampaignIcon from '@mui/icons-material/Campaign'
import { URL_AFTERWORK } from '../../AppConstants'

export const Pratique = () => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            marginBottom: '20px',
        }}
    >
        <div className="info-pratique">
            22/11/2022 | NIORT TECH
            <br />
            JOURNÉE DE 10H À 17H30 | GRATUIT
            <br />
            AFTERWORK À PARTIR DE 19H &amp; GRATUIT SUR INSCRIPTION
        </div>
        <Box sx={{textAlign:'center'}}>
            <Fab
                variant="extended"
                size="medium"
                aria-label="add"
                component="a"
                href={URL_AFTERWORK}
                rel="noopener noreferrer"
                target="_blank"
                color="primary"
            >
                <CampaignIcon sx={{ mr: 1 }} />
                S'inscrire à l'AfterWork
            </Fab>
        </Box>
    </Box>
)
