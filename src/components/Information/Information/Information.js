import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import * as React from 'react'

export const Information = () => (
    <Card sx={{ marginBottom: '20px' }}>
        <CardContent>
            
            

            <Typography variant="h5" component="div">
                Numérique pour toutes, c’est quoi ?
            </Typography>

            <Typography variant="body2">
                <ArrowForwardIosIcon sx={{ fontSize: '0.7rem' }} />
                C’est informer sur les métiers du numérique
                <br />
                <ArrowForwardIosIcon sx={{ fontSize: '0.7rem' }} />
                C’est découvrir les formations existantes sur le territoire
                <br />
                <ArrowForwardIosIcon sx={{ fontSize: '0.7rem' }} />
                C’est encourager l’entreprenariat grâce à des stands, des
                ateliers et une conférence
                <br />
                <ArrowForwardIosIcon sx={{ fontSize: '0.7rem' }} />
                C’est accompagner les femmes dans leur démarche de reconversion
                <br />
                <ArrowForwardIosIcon sx={{ fontSize: '0.7rem' }} />
                C’est un événement gratuit pour favoriser l’accès à toutes et
                tous
                <br />
            </Typography>
            <Typography variant="h6" component="div" sx={{ marginTop: '10px' }}>
                A qui il se destine ?
            </Typography>
            <Typography variant="body2">
                A toutes personnes en reconversion professionnelle en quête
                d’informations Ouvert à tous publics : demandeurs-euses
                d’emploi, salarié-e-s, étudiant.e.s…
            </Typography>

            <Typography variant="h6" component="div" sx={{ marginTop: '10px' }}>
                Où se déroulera Numérique pour toutes?
            </Typography>
            <Typography variant="body2">
                A Niort TECH / 12-14 Avenue Bujault à NIORT, <br/>
                Centre de
                l'écosystème numérique sur Niort et espace de coworking de
                start-up dans le digital
            </Typography>
        </CardContent>
    </Card>
)
