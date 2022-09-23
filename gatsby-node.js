const path = require("path");
const { kebabCase } = require("lodash");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type PackJson implements Node {
      animations: [AnimationJson] @link(by: "identifier")
      image: File @link(by: "base")
      logo: File @link(by: "base")
    }
    type AnimationJson implements Node {
      speakers: [SpeakerJson] @link(by: "identifier")
      image: File @link(by: "base")
    }
    `;
  createTypes(typeDefs);
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // const allContent = await fetchEventsRessources(graphql);
  // if (allContent.errors) {
  //   reporter.panicOnBuild(`Error while running GraphQL query on json content.`);
  //   return;
  // }
  // await generateEvents(createPage, allContent.data.events.edges);
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
