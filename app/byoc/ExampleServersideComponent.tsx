import * as FEAAS from "@sitecore-feaas/clientside/react";

export default async function ExampleServersideComponent(props: {
  firstName: string;
  lastName: string;
  telephone: string;
}) {
  const response = await fetch("http://google.com");
  const text = await response.text();
  return (
    <>
      <h2>Serverside</h2>
      <dl>
        <dt>Description</dt>
        <dd>Static SEO-friendly content</dd>
        <dt>Rendered on</dt>
        <dd>{typeof window != "undefined" ? "Clientside" : "Server"}</dd>
        <dt>Data</dt>
        <dd>
          {props.firstName} {props.lastName} / {props.telephone}
        </dd>
        <dt>Async data</dt>
        <dd>{text.length}bytes</dd>
      </dl>
    </>
  );
}

FEAAS.registerComponent(ExampleServersideComponent, {
  name: "serverside-only",
  title: "Serverside-only",
  description: "Description of my example component",
  thumbnail:
    "https://feaasstatic.blob.core.windows.net/assets/thumbnails/byoc.svg",
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
