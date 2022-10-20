import * as React from 'react';
import RootLayout from "./src/components/RootLayout";
import "@fontsource/spinnaker";

export const wrapRootElement = ({ element }) => <RootLayout>{element}</RootLayout>;