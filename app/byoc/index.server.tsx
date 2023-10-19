/**
 * Add imports to BYOC components that you would like to be rendered on server side.
 * Rendering on the server will improve SEO-friendliness of the page and improve initial user experience.
 */

// Same component rendered both on server and client side
import "./ExampleHybridComponent";

// Component that has separate implementation for clientside
import "./ExampleSwappedComponent.server";

// SEO-friendly content augmented with interactive component
import "./ExampleAugmentedComponent";

// # App router-specific:

// Async server component
import "./ExampleServersideComponent";

// Server with Client inside
import "./ExampleWrapperComponent";
