"use client";
/**
 * Required boilerplate for BYOC clientside bundle.
 *
 * DO NOT REMOVE
 */
import * as FEAAS from "@sitecore-feaas/clientside/react";
export default (props: any) => {
  debugger;
  return FEAAS.ExternalComponent(props);
};

/**
 * Add imports to BYOC components that you would like to be rendered on server below.
 * Clientside components are used for user interactivity.
 */

// Clientside-only component
import "./ExampleClientsideComponent";

// Component that can be rendered both on client and server
import "./ExampleHybridComponent";

// Component that has separate implementation for clientside
import "./ExampleSwappedComponent.client";

// Serverside component that contains another clientside component
import "./ExampleAugmentedComponent";
