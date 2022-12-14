const path = require('path')
const { kebabCase } = require('lodash')

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
    type PackJson implements Node {
      animations: [AnimationJson] @link(by: "identifier")
      image: File @link(by: "base")
    }
    type AnimationJson implements Node {
      speakers: [SpeakerJson] @link(by: "identifier")
      image: File @link(by: "relativePath")
      logo: File @link(by: "relativePath")
    }

    type SpeakerJson implements Node {
        thumbnail: File @link(by: "base")
    }
    `
    createTypes(typeDefs)
}

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const allContent = await fetchAnimationsRessources(graphql)
    if (allContent.errors) {
        reporter.panicOnBuild(
            `Error while running GraphQL query on json content.`
        )
        return
    }
    await generateAnimations(createPage, allContent.data.animations.edges)
    await generatePacks(createPage, allContent.data.packs.edges)
}

const fetchAnimationsRessources = async (graphql) =>
    await graphql(`
        {
            animations: allAnimationJson {
                edges {
                    node {
                        description
                        registrationUrl
                        floor
                        room
                        documents {
                            href
                            label
                        }
                        links {
                            href
                            label
                        }
                        identifier
                        image {
                            childImageSharp {
                                gatsbyImageData
                            }
                            base
                        }
                        logo {
                            childImageSharp {
                                gatsbyImageData
                            }
                            base
                        }
                        type
                        name
                        organization
                        slots
                        slug
                        speakers {
                            address
                            lastname
                            identifier
                            firstname
                            email
                            organisation
                            role
                            website
                            workPhone
                            thumbnail {
                                childImageSharp {
                                    gatsbyImageData(height: 194)
                                }
                              }
                        }                        
                    }
                }
            }
            packs: allPackJson {
                edges {
                    node {
                        id
                        identifier
                        type
                        title
                        slug
                        image {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                        animations {
                            name
                            organization
                            slots
                            slug
                            identifier
                            image {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

const generateAnimations = async (createPage, animations) => {
    const animationTemplate = path.resolve(
        `./src/templates/animation.template.js`
    )
    return Promise.all(
        animations.map((animation) => {
            createPage({
                path: `/animations/${kebabCase(animation.node.slug)}`,
                component: animationTemplate,
                context: {
                    animation: animation.node,
                },
            })
        })
    )
}

const generatePacks = async (createPage, packs) => {
    const packTemplate = path.resolve(`./src/templates/pack.template.js`)
    return Promise.all(
        packs.map((pack) => {
            createPage({
                path: `/packs/${kebabCase(pack.node.slug)}`,
                component: packTemplate,
                context: {
                    pack: pack.node,
                },
            })
        })
    )
}
