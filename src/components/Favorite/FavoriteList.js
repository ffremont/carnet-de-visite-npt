import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Pack } from '../Pack'
import { useStore } from '../../core/store'
import { Animation } from '../Animation'
import { Speaker } from '../Speakers'
import { Box, Typography } from '@mui/material'

export const FavoriteList = () => {
    const [favorites] = useStore('favorites', [])

    const { allPackJson, allAnimationJson, allSpeakerJson } =
        useStaticQuery(graphql`
            query AllPackQuery {
                allSpeakerJson {
                    nodes {
                        address
                        internal {
                            type
                        }
                        identifier
                        firstname
                        email
                        organisation
                        lastname
                        role
                        website
                        workPhone
                        thumbnail {
                            childImageSharp {
                                gatsbyImageData(height: 194)
                            }
                        }
                        id
                    }
                }

                allPackJson {
                    nodes {
                        id
                        identifier
                        type
                        internal {
                            type
                        }
                        slug
                        title
                        image {
                            childImageSharp {
                                gatsbyImageData(height: 194)
                            }
                        }
                    }
                }

                allAnimationJson {
                    nodes {
                        identifier
                        name
                        organization
                        registrationUrl
                        floor
                        room
                        slots
                        slug
                        type
                        internal {
                            type
                        }
                        speakers {
                            email
                            firstname
                            lastname
                            organisation
                            role
                            address
                            thumbnail {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                        description
                        logo {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                        links {
                            href
                            label
                        }
                        image {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                        id
                    }
                }
            }
        `)

    const favoriteList = [
        ...allPackJson.nodes,
        ...allSpeakerJson.nodes,
        ...allAnimationJson.nodes,
    ]
    const userFavorites = favoriteList.filter((pack) =>
        favorites.includes(pack.identifier)
    )

    console.log(userFavorites)
    return (
        <Box sx={{
            display:'flex',
            gap: '10px',
            flexDirection: 'column',
            margin: '20px 0'
        }}>
            {userFavorites.length === 0 &&<Typography variant="h4" sx={{textAlign:'center', opacity: 0.5}}>😥 aucun favori</Typography>}
            {userFavorites.map((favorite) => {
                if (favorite.internal.type === 'PackJson') {
                    return <Pack key={favorite.id} pack={favorite} />
                } else if (favorite.internal.type === 'AnimationJson') {
                    return <Animation key={favorite.id} animation={favorite} />
                } else if (favorite.internal.type === 'SpeakerJson') {
                    return <Speaker key={favorite.id} speaker={favorite} />
                }
                return
            })}
        </Box>
    )
}
