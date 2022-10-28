import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Speaker } from './index'

export const SpeakerList = () => {
    const { allSpeakerJson } = useStaticQuery(graphql`
        query AllSpeakers {
            allSpeakerJson {
                nodes {
                    address
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
        }
    `)
    allSpeakerJson.nodes.sort((a, b) => (a.identifier > b.identifier) ? 1 : -1);
    return allSpeakerJson.nodes.map((node) => (
        <Speaker key={node.id} speaker={node} />
    ))
}
