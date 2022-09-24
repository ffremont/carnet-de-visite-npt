import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Speaker } from './Speaker'

export const SpeakerList = () => {
    const { allSpeakerJson } = useStaticQuery(graphql`
        query AllSpeakers {
            allSpeakerJson {
                nodes {
                    address
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
        }
    `)
    return allSpeakerJson.nodes.map((node) => (
        <Speaker key={node.id} speaker={node} />
    ))
}