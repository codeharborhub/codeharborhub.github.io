
import React from "react";
import OriginalComponentTypes from "@theme-original/NavbarItem/ComponentTypes";
import AuthNavbarItem from "@site/src/components/AuthNavbarItem";

const ComponentTypes = {
  ...OriginalComponentTypes,

  // Custom CodeHarborHub authentication navbar item
  "custom-authButton": AuthNavbarItem,
};

export default ComponentTypes;
