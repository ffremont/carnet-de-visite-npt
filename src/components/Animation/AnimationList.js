import * as React from 'react'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'
import { Animation } from './Animation/Animation'
import { Typography } from '@mui/material'
import FactCheckIcon from '@mui/icons-material/FactCheck';
import { filterHeadProps } from '../../../.cache/head/utils';

export const AnimationList = () => {
    const search = new URLSearchParams(useLocation().search)

    const { allAnimationJson, allPackJson } = useStaticQuery(graphql`
        query AllAnimationJson {
            allPackJson {
              nodes {
                id
                animations {
                  identifier
                }
                identifier
                type
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
                    floor
                    room
                    registrationUrl
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
    const currentPack = search.get('pack') ? allPackJson.nodes.find(pack => pack && (pack.identifier === search.get('pack'))) : null

    const animations = allAnimationJson.nodes.filter(animation => {
      if(currentPack){
        return currentPack.animations.filter(a => !!a).some(a => a.identifier === animation.identifier)
      }else{
        return true;
      }
    });

    return <>
      {animations.map((animation) => (
        <Animation key={animation.id} animation={animation} />))}
        {(animations.length === 0) && <Typography sx={{textAlign:'center'}} variant="h5" gutterBottom>
        Aucune donnée
      </Typography>}
      

    </>
    
}
