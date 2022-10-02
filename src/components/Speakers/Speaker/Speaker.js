import * as React from 'react'
import { Box, Chip, IconButton, Paper, Typography, useMediaQuery } from '@mui/material'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined'
import * as styles from './Speaker.module.less'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import { useStore } from '../../../core/store'

export const Speaker = ({ speaker }) => {
    const {
        address,
        identifier,
        firstname,
        organisation,
        lastname,
        role,
        workPhone,
        website,
        email,
        thumbnail,
    } = speaker

    const [favorites, setFavorites] = useStore('favorites', [])
    const matches = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const changeFavorites = (identifier) => {
        if (!favorites.includes(identifier)) {
            setFavorites((oldVal) => [...oldVal, identifier])
        } else {
            setFavorites((oldVal) => oldVal.filter((el) => el !== identifier))
        }
    }

    return (
        <Paper className={styles.paper}>
            <Box sx={{ display: 'flex', flexDirection: matches ? 'column': 'row' }}>
                <Box
                    sx={{
                        width: matches ? '100%': '30%',
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
                        width: matches ? '100%': '50px',
                        display: 'flex',
                        flexDirection: matches ? 'row': 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <IconButton
                        onClick={() => changeFavorites(identifier)}
                        sx={{ flex: 1 }}
                        aria-label="favorite"
                        size="large"
                    >
                        {favorites.includes(identifier) ? (
                            <FavoriteIcon />
                        ) : (
                            <FavoriteBorderOutlined />
                        )}
                    </IconButton>
                    <IconButton
                        sx={{ flex: 1 }}
                        aria-label="download vCard"
                        size="large"
                    >
                        <FileDownloadIcon />
                    </IconButton>
                </Box>
            </Box>
        </Paper>
    )
}