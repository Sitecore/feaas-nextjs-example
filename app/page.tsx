import * as FEAAS from "@sitecore-feaas/clientside/react";
import style from "./page.module.css";

export default async function ExternalComponents() {
  return (
    <div className={style.page}>
      {/*
        Important to include this on the page (preferrably in layout) so
        clientside bundle is properly prepared by Next.
      */}
      <h1>Rendering BYOC components</h1>
      <p>External components can be rendered directly in react tree</p>
      <section>
        <FEAAS.ExternalComponent
          componentName="clientside-only"
          firstName="John"
          lastName="Doe"
          telephone={5551234}
        />
        <FEAAS.ExternalComponent
          componentName="hybrid"
          firstName="John"
          lastName="Doe"
          telephone={5551234}
        />
        <FEAAS.ExternalComponent
          componentName="swapped"
          firstName="John"
          lastName="Doe"
          telephone={5551234}
        />
        <FEAAS.ExternalComponent
          componentName="augmented"
          firstName="John"
          lastName="Doe"
          telephone={5551234}
        />
        <FEAAS.ExternalComponent
          className={style.appRouter}
          componentName="serverside-only"
          firstName="John"
          lastName="Doe"
          telephone={5551234}
        />
        <FEAAS.ExternalComponent
          className={style.appRouter}
          componentName="wrapper"
          firstName="John"
          lastName="Doe"
          telephone={5551234}
        />
      </section>

      <h1>In FEAAS component</h1>
      <p>
        External components can be also rendered as a part of FEAAS component or
      </p>
      {/* @ts-ignore */}
      <FEAAS.ServerComponent
        template={`<section>
        <feaas-external first-name="John" last-name="Doe" telephone="5551234" data-external-id="clientside-only"></feaas-external>
        <feaas-external first-name="John" last-name="Doe" telephone="5551234" data-external-id="hybrid"></feaas-external>
        <feaas-external first-name="John" last-name="Doe" telephone="5551234" data-external-id="swapped"></feaas-external>
        <feaas-external first-name="John" last-name="Doe" telephone="5551234" data-external-id="augmented"></feaas-external>
        <feaas-external class="${style.appRouter}" first-name="John" last-name="Doe" telephone="5551234" data-external-id="serverside-only"></feaas-external>
        <feaas-external class="${style.appRouter}" first-name="John" last-name="Doe" telephone="5551234" data-external-id="wrapper"></feaas-external>
        </section>`}
      />
    </div>
  );
}
