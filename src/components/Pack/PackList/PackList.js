import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Pack } from '../Pack/Pack'
import * as styles from './PackList.module.less'

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
    return allPackJson.nodes.map((node) => <Pack className={styles.pack}  key={node.id} pack={node} />)
}
