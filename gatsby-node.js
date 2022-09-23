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
      image: File @link(by: "base")
      logo: File @link(by: "base")
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
}

const fetchAnimationsRessources = async (graphql) =>
    await graphql(`
        {
            animations: allAnimationJson {
                edges {
                    node {
                        description
                        documents {
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
                        name
                        organization
                        slots
                        slug
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
