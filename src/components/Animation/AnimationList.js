import * as React from 'react'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'
import { Animation } from './Animation/Animation'
import { Box, Typography } from '@mui/material'
import FactCheckIcon from '@mui/icons-material/FactCheck'
import { filterHeadProps } from '../../../.cache/head/utils'

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
                            gatsbyImageData(height: 194)
                        }
                    }
                    id
                }
            }
        }
    `)
    const currentPack = search.get('pack')
        ? allPackJson.nodes.find(
              (pack) => pack && pack.identifier === search.get('pack')
          )
        : null
    const type = search.get('type')

    const animations = allAnimationJson.nodes
        .filter((animation) => {
            if (currentPack) {
                return currentPack.animations
                    .filter((a) => !!a)
                    .some((a) => a.identifier === animation.identifier)
            } else {
                return true
            }
        })
        .filter((animation) => {
            if (type) {
                return animation.type === type
            } else {
                return true
            }
        })

    const sortBy = function (arr, propertyName, sortDirection) {
        var sortArguments = arguments
        arr.sort(function (objA, objB) {
            var result = 0
            for (
                var argIndex = 0;
                argIndex < sortArguments.length && result === 0;
                argIndex += 2
            ) {
                var propertyName = sortArguments[argIndex]
                result =
                    objA[propertyName] < objB[propertyName]
                        ? -1
                        : objA[propertyName] > objB[propertyName]
                        ? 1
                        : 0

                //Reverse if sort order is false (DESC)
                result *= !sortArguments[argIndex + 1] ? 1 : -1
            }
            return result
        })
    }
    sortBy(animations, 'floor', false, 'slots', false)
    return (
        <Box sx={{ gap: '5px', display: 'flex', flexDirection: 'column' }}>
            {animations.map((animation) => (
                <Animation key={animation.id} animation={animation} />
            ))}
            {animations.length === 0 && (
                <Typography
                    sx={{ textAlign: 'center' }}
                    variant="h5"
                    gutterBottom
                >
                    Aucune donnée
                </Typography>
            )}
        </Box>
    )
}
