import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Pack } from '../Pack'

export const PackList = () => {
    const { allPackJson } = useStaticQuery(graphql`
        query AllPackQueryLimit3 {
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
    return allPackJson.nodes.map((node) => <Pack key={node.id} pack={node} />)
}
