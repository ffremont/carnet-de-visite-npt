import React from "react";
import { Grid, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Footer } from "../components/Footer";

const AnimationTemplate = ({ pageContext }) => {
  const { animation } = pageContext;
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>{animation.name}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          <AccessTimeIcon /> {animation.slots}
        </Typography>
      </Grid>
      <Grid>
        <GatsbyImage
          image={getImage(animation.image.childImageSharp.gatsbyImageData)}
          alt={animation.image.base}
        />
      </Grid>
      <Footer />
    </Grid>
  );
};

export default AnimationTemplate;
