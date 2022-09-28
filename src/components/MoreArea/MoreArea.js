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
import PolicyIcon from '@mui/icons-material/Policy'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { TYPES } from '../AppConstants'

export const MoreArea = ({ className }) => {
    const { allTypes } = useStaticQuery(graphql`
        query allTypes {
            allTypes: allAnimationJson {
                distinct(field: type)
            }
        }
    `)

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
                            {allTypes.distinct.map((type) => (
                                <Button component={Link} to={`/programmation?type=${type}`} key={type}>{TYPES[type]}</Button>
                            ))}
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
