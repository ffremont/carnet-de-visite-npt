import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Pack } from '../Pack'
import { useStore } from '../../core/store'
import { Animation } from '../Animation'

export const FavoriteList = () => {
    const [favorites] = useStore('favorites', [])

    const { allPackJson, allAnimationJson } = useStaticQuery(graphql`
        query AllPackQuery {
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

    const favoriteList = [...allPackJson.nodes, ...allAnimationJson.nodes]
    const userFavorites = favoriteList.filter((pack) =>
        favorites.includes(pack.identifier)
    )

    return userFavorites.map((favorite) => {
        if (favorite.internal.type === 'PackJson') {
            return <Pack key={favorite.id} pack={favorite} />
        } else if (favorite.internal.type === 'AnimationJson') {
            return <Animation key={favorite.id} animation={favorite} />
        }
        return
    })
}
