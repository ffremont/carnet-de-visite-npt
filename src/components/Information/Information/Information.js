import { Button, Card, Box, CardContent, Typography, Link } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import * as React from 'react'

export const Information = () => (
    <Card sx={{ marginBottom: '20px' }}>
        <CardContent>
            <Box sx={{marginBottom:'1rem'}}>
            <Typography variant="h5" component="div">
                Je suis en reconversion professionnelle
            </Typography>
            <Box sx={{ marginLeft: '2rem' }}>
                <Typography variant="body2">
                    <Link href="/programmation?pack=demandeur-emploi">
                        Je suis demandeur d’emploi
                    </Link>
                </Typography>
                <Typography variant="body2">
                    <Link href="/programmation?pack=salarie">
                        Je suis salarié
                    </Link>
                </Typography>
            </Box>
            </Box>

            <Typography variant="h5" component="div">
                <Link href="/programmation?pack=collegien-lyceen">
                    Je suis collégien ou lycéen
                </Link>
            </Typography>
        </CardContent>
    </Card>
)
