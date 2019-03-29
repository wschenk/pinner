import React, {Fragment} from 'react';

import { Box, Button, Text } from "grommet";

import {sidebarClicked} from './../mutators';

export const SidebarButton = ({ label, ...rest }) => (
  <Button plain {...rest}>
    {({ hover }) => (
      <Box
        fill
        background={hover ? "accent-1" : undefined}
        pad={{ horizontal: "large", vertical: "medium" }}
      >
        <Text size="large">{label}</Text>
      </Box>
    )}
  </Button>
);

const Sidebar = ({setActive}) => (
  <Fragment>
    {["Dashboard", "Devices", "Settings"].map(label => (
      <SidebarButton
        key={label}
        label={label}
        // active={label === active}
        onClick={() => sidebarClicked(label)}
      />
    ))}
  </Fragment>
);


export default Sidebar;
