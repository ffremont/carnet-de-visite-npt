const path = require("path");
const { kebabCase } = require("lodash");
const fetchEventsRessources = async (graphql) => {
  const result = await graphql(`
    {
      events: allEventsJson {
        edges {
          node {
            id
            slug
            type
            title
            horaires
            image
            content
            fields {
              gatsbyImage {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);

  return result;
};

exports.onCreateNode = async ({ node, getNodesByType, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `EventsJson`) {
    const images = getNodesByType(`File`);
    const imageNode = images.find(({ base }) => base === node.image);

    createNodeField({
      node,
      name: `gatsbyImage`,
      value: imageNode?.id,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type EventsJsonFields {
        gatsbyImage: File @link
    }
    `;
  createTypes(typeDefs);
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const allContent = await fetchEventsRessources(graphql);
  if (allContent.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query on json content.`);
    return;
  }
  await generateEvents(createPage, allContent.data.events.edges);
};

const generateEvents = async (createPage, events) => {
  const eventTemplate = path.resolve(`./src/templates/event.template.js`);
  return Promise.all(
    events.map((event) => {
      createPage({
        path: `/events/${kebabCase(event.node.slug)}`,
        component: eventTemplate,
        context: {
          event: event.node,
        },
      });
    })
  );
};
