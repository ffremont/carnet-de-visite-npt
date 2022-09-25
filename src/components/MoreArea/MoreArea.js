import * as React from 'react'
import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material'
import PolicyIcon from '@mui/icons-material/Policy';

export const MoreArea = ({ className }) => {
    return (
        <>
            <Card className={className}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Plus d'information
                    </Typography>
                </CardContent>
                <CardContent>
                    <Box textAlign={'center'}>
                        <ButtonGroup
                            fullWidth
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

            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <PolicyIcon />
                        </ListItemIcon>
                        <ListItemText primary="Mentions légales" />
                    </ListItemButton>
                </ListItem>
            </List>
        </>
    )
}
