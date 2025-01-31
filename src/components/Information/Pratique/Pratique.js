import * as React from 'react'
import { Box, Typography } from '@mui/material'
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
        {/*<div className="info-pratique">
            25/01/2024 | NIORT TECH
            <br />
            JOURNÉE DE 10H À 17H30 | GRATUIT
    </div>*/}
        <Box sx={{display:'flex', justifyContent:'center', textAlign:'center'}}>
        <Typography sx={{width:'30rem', fontSize:'1.3rem'}} variant="body1" gutterBottom>
        Vous pouvez sélectionner votre statut ci-dessous
pour trouver les contacts des organismes qui
peuvent vous accompagner dans vos recherches.
      </Typography>
        </Box>
    </Box>
)
