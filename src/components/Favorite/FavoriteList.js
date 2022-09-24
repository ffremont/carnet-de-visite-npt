import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Pack } from '../Pack'
import { useStore } from '../../core/store'

export const FavoriteList = () => {
    const [favorites] = useStore('favorites', [])

    const { allPackJson } = useStaticQuery(graphql`
        query AllPackQuery {
            allPackJson {
                nodes {
                    id
                    identifier
                    type
                    slug
                    title
                    image {
                        childImageSharp {
                            gatsbyImageData(height: 194)
                        }
                    }
                }
            }
        }
    `)
    const userFavorites = allPackJson.nodes.filter(
        (pack) => favorites.includes(pack.identifier)
    )

    return userFavorites.map((favorite) => (
        <Pack key={favorite.id} pack={favorite} />
    ))
}
