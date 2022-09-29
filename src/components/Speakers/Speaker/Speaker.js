import * as React from 'react'
import { Box, Chip, IconButton, Paper, Typography } from '@mui/material'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import FavoriteIcon from '@mui/icons-material/Favorite'
import * as styles from './Speaker.module.less'
import FileDownloadIcon from '@mui/icons-material/FileDownload'

export const Speaker = ({ speaker }) => {
    const {
        address,
        firstname,
        organisation,
        lastname,
        role,
        workPhone,
        website,
        email,
        thumbnail,
    } = speaker
    return (
        <Paper className={styles.paper}>
            <Box sx={{ display: 'flex' }}>
                <Box
                    sx={{
                        width: '30%',
                        maxWidth: '400px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                   
                    <GatsbyImage
                        className={styles.image}
                        image={getImage(
                            thumbnail.childImageSharp.gatsbyImageData
                        )}
                        alt={'vignette speaker'}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '10px 20px',
                        flex: 1,
                    }}
                >
                    <Typography variant="h6">
                        {firstname} {lastname}
                        
                    </Typography>

                    <address>
                        {[
                            !!email && <a href={`mailto:${email}`}>{email}</a>,
                            !!workPhone && (
                                <a href={`tel:${workPhone}`}>{workPhone}</a>
                            ),
                            !!website && <a href={website}>{website}</a>,
                            !!address && address,
                        ]
                            .filter((a) => !!a)
                            .map((a) => (
                                <>
                                    {a}
                                    <br />
                                </>
                            ))}
                    </address>

                    <Box
                        sx={{
                            display: 'flex',
                            gap: '3px',
                        }}
                    >
                        <Chip size="small" label={role} color="secondary" />
                        {!!organisation && (
                            <Chip
                                size="small"
                                label={organisation}
                                variant="outlined"
                                color="primary"
                            />
                        )}
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '50px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                     <IconButton sx={{flex:1}} aria-label="favorite" size="large">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton sx={{flex:1}} aria-label="download vCard" size="large">
                        <FileDownloadIcon />
                    </IconButton>

                   
                </Box>
            </Box>
        </Paper>
    )
}
