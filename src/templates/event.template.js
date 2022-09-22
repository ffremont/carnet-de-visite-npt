import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const EventTemplate = ({ pageContext }) => {
  const { event } = pageContext;
  const { gatsbyImage } = event.fields;
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>aa {event.title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          <AccessTimeIcon /> {event.horaires}
        </Typography>
      </Grid>
      <Grid>
        <GatsbyImage
          image={getImage(gatsbyImage.childImageSharp.gatsbyImageData)}
          alt={gatsbyImage.base}
        />
      </Grid>
    </Grid>
  );
};

export default EventTemplate;
