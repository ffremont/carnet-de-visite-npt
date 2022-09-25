import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Animation } from './Animation/Animation'

export const AnimationList = () => {
    const { allAnimationJson } = useStaticQuery(graphql`
    query AllAnimationJson {
        allAnimationJson {
          nodes {
            identifier
            name
            organization
            slots
            slug
            type
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
    return allAnimationJson.nodes.map((animation) => (
      <Animation key={animation.id} animation={animation} />
    ))
}
