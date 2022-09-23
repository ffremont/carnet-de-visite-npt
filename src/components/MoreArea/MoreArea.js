import * as React from 'react'
import { Box, Button, ButtonGroup, Card, CardContent, Typography } from '@mui/material'

export const MoreArea = ({className}) => {
    return (
        <Card className={className}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Plus d'information
                </Typography>
            </CardContent>
            <CardContent>
                <Box textAlign={'center'}>
                    <ButtonGroup
                        orientation="vertical"
                        aria-label="vertical contained button group"
                        variant="outlined"
                    >
                        <Button key="conf">Conférences</Button>
                        <Button key="metier">Ateliers Métier</Button>
                        <Button key="pratique">Ateliers Pratique</Button>
                    </ButtonGroup>
                </Box>
            </CardContent>
        </Card>
    )
}
