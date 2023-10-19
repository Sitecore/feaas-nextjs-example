import * as FEAAS from "@sitecore-feaas/clientside/react";
import ExampleClientsideComponent from "./ExampleClientsideComponent";

export default function ExampleSwappedComponent(props: {
  firstName: string;
  lastName: string;
  telephone: string;
}) {
  return (
    <>
      <h2>Swapped (Server)</h2>
      <dl>
        <dt>Description</dt>
        <dd>SEO-friendly content augmented with interactions</dd>
        <>
          <dt>Rendered on</dt>
          <dd>{typeof window != "undefined" ? "Clientside" : "Server"}</dd>
          <dt>Data</dt>
          <dd>
            {props.firstName} {props.lastName} / {props.telephone}
          </dd>
        </>
      </dl>
    </>
  );
}

FEAAS.registerComponent(ExampleSwappedComponent, {
  name: "swapped",
  title: "Swapped component",
  description: "SEO-friendly content augmented with interactions",
  thumbnail:
    "https://feaasstatic.blob.core.windows.net/assets/thumbnails/byoc.svg",
  group: "Examples",
  required: ["firstName"],
  properties: {
    firstName: {
      type: "string",
      title: "First name",
    },
    lastName: {
      type: "string",
      title: "Last name",
    },
    telephone: {
      type: "number",
      title: "Telephone",
      minLength: 10,
    },
    bold: {
      type: "boolean",
      title: "Show text in bold weight",
    },
  },
  ui: {
    firstName: {
      "ui:autofocus": true,
      "ui:emptyValue": "",
      "ui:placeholder": "Write your first name",
    },
    bold: {
      "ui:widget": "radio",
    },
  },
});
